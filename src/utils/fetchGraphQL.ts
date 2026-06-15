export default async function fetchGraphQL(query: string, variables = {}) {
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing WORDPRESS_GRAPHQL_ENDPOINT in .env.local");
  }

  /*
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60,
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${text.slice(0, 300)}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      `GraphQL did not return JSON. Check WORDPRESS_GRAPHQL_ENDPOINT. Received: ${text.slice(
        0,
        300
      )}`
    );
  }
  */

  return "<div>Feature coming soon</div>";
}
