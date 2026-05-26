// lib/wp.ts
const WP_GRAPHQL_URL = process.env.WP_GRAPHQL_URL!

export async function wpGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 }, // refresh every 5 min
  })

  const json = await res.json()

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }

  return json.data
}
