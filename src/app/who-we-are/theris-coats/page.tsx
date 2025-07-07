import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Theris Coats'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Theris L. Coats, Sr.</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Serving as CEO of BADD</strong>
                </p>
                <p>
                  Theris L. Coats, Sr., born in San Francisco, is a lifelong music professional, public servant, and passionate advocate for mental health and recovery support. Raised in a large, musically gifted family, he began singing gospel music as a child and went on to perform for nearly five decades with the Coats Singers, sharing stages with renowned artists and appearing in Michael Jackson’s Cry video.
                </p>
                <p>
                  Theris spent over 20 years working for the State of California, where he rose through the ranks and retired as a Research Analyst II in the Department of Health Services. Later in life, he returned to school and earned an Associate of Science degree in Business Administration, further strengthening his skills in management, leadership, and community development.
                </p>
                <p>
                  For nearly 30 years, he has managed and worked alongside musicians—many of whom battled addiction or mental illness, and some of whom passed away as a result. These lived experiences, along with the tragic loss of his son, Theris Lee “TC” Coats II, who died in custody on March 20, 2025, after struggling with both mental illness and addiction, have driven his life’s purpose.
                </p>
                <p>
                  He is the co-founder of <Link href="http://www.badd-sf.org/">BADD – Brothers Against Drug Deaths</Link>, a nonprofit committed to breaking the cycle of drug-related deaths through education, family support, treatment access, and legislative change. His central advocacy effort is <Link href="/theris-law">Theris’ Law</Link>—a proposed policy that would give families legal pathways to intervene on behalf of loved ones incapacitated by addiction and mental illness.
                </p>
                <p>
                  Theris also founded <Link href="http://www.stlrentertainment.com/">STLR Entertainment</Link>, a Bay Area company that promotes artists, produces live shows, and champions cultural expression rooted in healing and purpose. His work continues to blend creativity, compassion, and policy to build a future where recovery, dignity, and second chances are possible for all.
                </p>
                <p>
                  A devoted man of faith, Theris has long served in his local church community, both in music ministry and spiritual leadership. He is a firm believer in God’s providence and stands on the promise found in Romans 8:28 — that “all things work together for good to those who love God, to those who are the called according to His purpose.” This unwavering faith is the foundation of his life, service, and advocacy.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-theris.jpg"
                  layout="responsive"
                  width={1170}
                  height={1900}
                  alt="BADD CEO Theris L. Coats Sr."
                  aria-hidden="false"
                  className="photo-perspective"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
