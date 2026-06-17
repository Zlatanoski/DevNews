import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"

import { subscribersRoute } from "./routes/subscribers"
import { subscribeRoute } from "./routes/subscribe"
import { unsubscribeRoute } from "./routes/unsubscribe"

const app = new Hono()

app.use("/*", cors({ origin: "http://localhost:3000" }))

app.route("/subscribe", subscribeRoute)
app.route("/unsubscribe", unsubscribeRoute)
app.route("/subscribers", subscribersRoute)

serve({ fetch: app.fetch, port: 4000 }, () => {
  console.log("Backend running on http://localhost:4000")
})
