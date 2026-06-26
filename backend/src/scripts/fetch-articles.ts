import "../db/env";
import { db } from "../db";
import { articles } from "../db/schema";

// ── Dev.to ────────────────────────────────────────────────────────────────────

const DEVTO_TAGS = ["ai", "machinelearning", "webdev", "devops", "cloud"];
const DEVTO_PER_TAG = 5;

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  published_at: string;
}

async function fetchDevTo(): Promise<{ id: string; title: string; description: string | null; url: string; source: string; tags: string | null; publishedAt: Date }[]> {
  const seen = new Set<number>();
  const results = [];

  for (const tag of DEVTO_TAGS) {
    const res = await fetch(
      `https://dev.to/api/articles?tag=${tag}&per_page=${DEVTO_PER_TAG}&top=1`,
    );
    if (!res.ok) {
      console.warn(`Dev.to API error for tag "${tag}": ${res.status}`);
      continue;
    }
    const items = (await res.json()) as DevToArticle[];
    for (const item of items) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        results.push({
          id: `devto-${item.id}`,
          title: item.title,
          description: item.description ?? null,
          url: item.url,
          source: "Dev.to",
          tags: JSON.stringify(item.tag_list),
          publishedAt: new Date(item.published_at),
        });
      }
    }
  }

  return results;
}

// ── Hacker News (Algolia) ─────────────────────────────────────────────────────

interface HNHit {
  objectID: string;
  title: string;
  url: string;
  points: number;
  created_at: string;
}

async function fetchHackerNews(): Promise<{ id: string; title: string; description: string | null; url: string; source: string; tags: string | null; publishedAt: Date }[]> {
  const queries = ["AI developer tools", "software engineering", "cloud infrastructure"];
  const seen = new Set<string>();
  const results = [];

  for (const query of queries) {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=5&numericFilters=created_at_i>${Math.floor(Date.now() / 1000) - 86400}`,
    );
    if (!res.ok) {
      console.warn(`HN API error for "${query}": ${res.status}`);
      continue;
    }
    const data = (await res.json()) as { hits: HNHit[] };
    for (const hit of data.hits) {
      if (!hit.url || seen.has(hit.objectID)) continue;
      seen.add(hit.objectID);
      results.push({
        id: `hn-${hit.objectID}`,
        title: hit.title,
        description: null,
        url: hit.url,
        source: "Hacker News",
        tags: null,
        publishedAt: new Date(hit.created_at),
      });
    }
  }

  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Fetching articles from Dev.to and Hacker News...");

  const [devtoArticles, hnArticles] = await Promise.all([
    fetchDevTo(),
    fetchHackerNews(),
  ]);

  const all = [...devtoArticles, ...hnArticles];
  console.log(`Fetched ${all.length} unique articles. Upserting...`);

  let inserted = 0;
  for (const item of all) {
    const result = await db
      .insert(articles)
      .values(item)
      .onConflictDoNothing();

    if (result.rowsAffected > 0) inserted++;
  }

  console.log(
    `Done. ${inserted} new articles inserted, ${all.length - inserted} already existed.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
