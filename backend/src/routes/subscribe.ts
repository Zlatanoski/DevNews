import { Hono } from "hono"
import { z } from "zod"

import { db } from "../db"
import { subscribers } from "../db/schema"
import { fireZapier, respond } from "./utils"

export const subscribeRoute = new Hono()

subscribeRoute.post("/", async (c) => {
  const schema = z.object({
    email: z.string().email(),
    firstName: z.string().optional(),
    plan: z.enum(["free", "pro", "team"]).default("free"),
    source: z.string().optional(),
  })

  const parsed = schema.safeParse(await c.req.json())
  if (!parsed.success) {
    return respond(undefined, "invalid_input", 400)
  }

  const rows = await db
    .insert(subscribers)
    .values(parsed.data)
    .onConflictDoNothing()
    .returning()

  if (!rows.length) {
    return respond(undefined, "already_subscribed", 409)
  }

  await fireZapier({ event: "new_subscriber", ...rows[0] })
  return respond({ status: "subscribed" })
})
