import { wpGraphQL } from '../../../../lib/wp';

import styles from "../../page.module.css";

import Link from "next/link";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

// Try this test slug ... http://localhost:3000/news/hello-world/
type SlugsData = {
  posts: {
    nodes: {
      slug: string
    }[]
  }
};

type PostData = {
  post: {
    title: string
    content: string
    date: string
  }
};

const GET_POST_SLUGS = `
  query GetPostSlugs {
    posts(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

const GET_POST = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
    }
  }
`;

export async function generateStaticParams() {
  const data = await wpGraphQL<SlugsData>(GET_POST_SLUGS)

  return data.posts.nodes.map((post) => ({
    slug: post.slug,
  }))
}



export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await wpGraphQL<PostData>(GET_POST, { slug })

  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>
        <section className="section-news bg-body">
          <div className="section-content pb-0 mb-0">
            <div className="headline-content">
              <h2 className="fs-1">{data.post.title}</h2>
            </div>
            <div className="row">
              <div className="col-md-12 general-content">
                <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <BaddFooter />
    </div>
  )
}
