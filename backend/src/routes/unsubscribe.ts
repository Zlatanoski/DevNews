import { eq } from "drizzle-orm"
import { Hono } from "hono"
import { z } from "zod"

import { db } from "../db"
import { subscribers } from "../db/schema"
import { fireZapier, respond } from "./utils"

export const unsubscribeRoute = new Hono()

unsubscribeRoute.post("/", async (c) => {
  const schema = z.object({ email: z.string().email() })

  const parsed = schema.safeParse(await c.req.json())
  if (!parsed.success) {
    return respond(undefined, "invalid_input", 400)
  }

  await db
    .update(subscribers)
    .set({ status: "unsubscribed", unsubscribedAt: new Date() })
    .where(eq(subscribers.email, parsed.data.email))

  await fireZapier({ event: "unsubscribed", email: parsed.data.email })
  return respond({ status: "unsubscribed" })
})
