import { desc } from "drizzle-orm";
import { Hono } from "hono";

import { db } from "../db";
import { articles } from "../db/schema";
import { respond } from "./utils";

export const articlesRoute = new Hono();

articlesRoute.get("/", async () => {
  const rows = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.publishedAt))
    .limit(20);

  return respond({ articles: rows });
});
