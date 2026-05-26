import { wpGraphQL } from '../../../lib/wp';

import styles from "../page.module.css";

import Link from "next/link";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

type PostsData = {
  posts: {
    nodes: {
      id: string
      title: string
      slug: string
      excerpt: string
      date: string
    }[]
  }
};

const GET_POSTS = `
  query GetPosts {
    posts(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        date
      }
    }
  }
`;

export default async function NewsPage() {
  const data = await wpGraphQL<PostsData>(GET_POSTS)

  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>
        <section className="section-news bg-body">
          <div className="section-content pb-0 mb-0">
            <div className="headline-content">
              <h2 className="fs-1">News</h2>
            </div>
            <div className="row">
              <div className="col-md-8 general-content">
                {data.posts.nodes.map((post) => (
                  <article key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <BaddFooter />
    </div>
  )
}