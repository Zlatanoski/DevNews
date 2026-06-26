const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export interface Article {
  id: string
  title: string
  description: string | null
  url: string
  source: string
  tags: string | null
  publishedAt: number | null
  fetchedAt: number | null
}

export const api = {
  articles: (): Promise<{ data: { articles: Article[] } }> =>
    fetch(`${BASE_URL}/articles`, { cache: "no-store" }).then((r) => r.json()),

  subscribe: (data: {
    email: string
    firstName?: string
    plan?: string
    source?: string
  }) =>
    fetch(`${BASE_URL}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.json()),

  unsubscribe: (email: string) =>
    fetch(`${BASE_URL}/unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).then((response) => response.json()),
}
