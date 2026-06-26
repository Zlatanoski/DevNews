import "../db/env";
import { db } from "../db";
import { articles } from "../db/schema";

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;
if (!FIRECRAWL_API_KEY) throw new Error("FIRECRAWL_API_KEY is not set");

const QUERIES = [
  "AI developer news today",
  "new programming tools and frameworks 2026",
  "cloud infrastructure DevOps news this week",
  "machine learning engineering updates today",
  "software engineering industry news today",
];

interface FirecrawlResult {
  url: string;
  title: string;
  description: string;
}

async function searchFirecrawl(query: string): Promise<FirecrawlResult[]> {
  const res = await fetch("https://api.firecrawl.dev/v1/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${FIRECRAWL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, limit: 5 }),
  });

  if (!res.ok) throw new Error(`Firecrawl error for "${query}": ${res.status}`);
  const data = (await res.json()) as { success: boolean; data: FirecrawlResult[] };
  return data.data ?? [];
}

function slugId(url: string): string {
  // stable ID from URL so reruns are idempotent
  return Buffer.from(url).toString("base64").slice(0, 32);
}

function inferSource(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host.split(".")[0].charAt(0).toUpperCase() + host.split(".")[0].slice(1);
  } catch {
    return "Web";
  }
}

async function main() {
  console.log("Searching for articles via Firecrawl...");

  const seen = new Set<string>();
  const fetched: FirecrawlResult[] = [];

  for (const query of QUERIES) {
    const results = await searchFirecrawl(query);
    for (const item of results) {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        fetched.push(item);
      }
    }
    // small delay to be kind to the API
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log(`Found ${fetched.length} unique articles. Upserting...`);

  let inserted = 0;
  for (const item of fetched) {
    const result = await db
      .insert(articles)
      .values({
        id: slugId(item.url),
        title: item.title,
        description: item.description ?? null,
        url: item.url,
        source: inferSource(item.url),
        tags: null,
        publishedAt: new Date(),
      })
      .onConflictDoNothing();

    if (result.rowsAffected > 0) inserted++;
  }

  console.log(
    `Done. ${inserted} new articles inserted, ${fetched.length - inserted} already existed.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
