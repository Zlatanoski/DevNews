import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable("subscribers", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  plan: text("plan").notNull().default("free"),
  status: text("status").notNull().default("active"),
  source: text("source"),
  subscribedAt: integer("subscribed_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  unsubscribedAt: integer("unsubscribed_at", { mode: "timestamp" }),
  zapierNotified: integer("zapier_notified", { mode: "boolean" }).default(
    false,
  ),
});
