export const respond = (data?: unknown, error?: string, status = 200) =>
  new Response(JSON.stringify({ data, error }), {
    status,
    headers: { "Content-Type": "application/json" },
  })

export const fireZapier = async (payload: object) => {
  const url = process.env.ZAPIER_WEBHOOK_URL
  if (!url) return

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}
