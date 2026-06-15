import { cache } from "react";
import { Metadata } from "next";

import styles from "../../page.module.css";

// Navbar
import BaddNavbar from "../../../components/BaddNavbar";

// Footer
import BaddFooter from "../../../components/BaddFooter";

// Fetcher
import fetchGraphQL from "../../../utils/fetchGraphQL";

export const dynamicParams = false;

export const getPost = cache(async (slug: string) => {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        databaseId
        title
        content
        excerpt
        uri
      }
    }
  `;

  const json = await fetchGraphQL(query, { slug });

  return json.data?.post ?? null;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  const description =
    post?.excerpt
      ?.replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160) ||
    "Read the latest article from Brothers Against Drug Deaths.";

  return {
    title: post?.title ?? "Post Not Found",
    description,
  };
}

export async function generateStaticParams() {
  const query = `
    query GetPosts {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const json = await fetchGraphQL(query);

  return (
    json.data?.posts?.nodes?.map((post: { slug: string }) => ({
      slug: post.slug,
    })) ?? []
  );
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className={styles.page}>
        <BaddNavbar />
        <main className={styles.main}>
          <h1>Post Not Found</h1>
          <p>The requested article could not be found.</p>
        </main>
        <BaddFooter />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <BaddNavbar />

      <main className={styles.main}>
        <section className="section-resources bg-body">
          <div className="section-content pb-0 mb-0">
            <div className="row">
              <div className="col-md-12 general-content">
                <article>
                  <div className="headline-content">
                    <h1 className="fs-1">{post.title}</h1>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BaddFooter />
    </div>
  );
}