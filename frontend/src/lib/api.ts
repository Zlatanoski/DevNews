const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export const api = {
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
