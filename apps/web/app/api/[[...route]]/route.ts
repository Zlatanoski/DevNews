import { db } from "@/db";
import { subscribers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

const respond = (data?: unknown, error?: string, status = 200) =>
  new Response(JSON.stringify({ data, error }), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const fireZapier = async (payload: object) => {
  const url = process.env.ZAPIER_WEBHOOK_URL;
  if (!url) return;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

app.post("/subscribe", async (c) => {
  const schema = z.object({
    email: z.string().email(),
    firstName: z.string().optional(),
    plan: z.enum(["free", "pro", "team"]).default("free"),
    source: z.string().optional(),
  });

  const parsed = schema.safeParse(await c.req.json());
  if (!parsed.success) {
    return respond(undefined, "invalid_input", 400);
  }

  const rows = await db
    .insert(subscribers)
    .values(parsed.data)
    .onConflictDoNothing()
    .returning();

  if (!rows.length) {
    return respond(undefined, "already_subscribed", 409);
  }

  await fireZapier({ event: "new_subscriber", ...rows[0] });
  return respond({ status: "subscribed" });
});

app.post("/unsubscribe", async (c) => {
  const schema = z.object({ email: z.string().email() });

  const parsed = schema.safeParse(await c.req.json());
  if (!parsed.success) {
    return respond(undefined, "invalid_input", 400);
  }

  await db
    .update(subscribers)
    .set({ status: "unsubscribed", unsubscribedAt: new Date() })
    .where(eq(subscribers.email, parsed.data.email));

  await fireZapier({ event: "unsubscribed", email: parsed.data.email });
  return respond({ status: "unsubscribed" });
});

app.get("/subscribers", async (c) => {
  const auth = c.req.header("Authorization");
  if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return respond(undefined, "unauthorized", 401);
  }

  const rows = await db
    .select()
    .from(subscribers)
    .where(eq(subscribers.status, "active"));

  return respond({ subscribers: rows });
});

export const GET = handle(app);
export const POST = handle(app);
