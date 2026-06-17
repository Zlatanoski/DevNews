import { eq } from "drizzle-orm"
import { Hono } from "hono"

import { db } from "../db"
import { subscribers } from "../db/schema"
import { respond } from "./utils"

export const subscribersRoute = new Hono()

subscribersRoute.get("/", async (c) => {
  const auth = c.req.header("Authorization")
  if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return respond(undefined, "unauthorized", 401)
  }

  const rows = await db
    .select()
    .from(subscribers)
    .where(eq(subscribers.status, "active"))

  return respond({ subscribers: rows })
})
