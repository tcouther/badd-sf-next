import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theris’ Law'
};

export default function TherisLawPage() {

  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light theris-law-bg-image">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Theris’ Law</h2>
            </div>

            <div className="letter-to-you">
              <div className="row fs-4">

                <div className="col-md-6 general-content">
                  <div className="row">
                    <div className="col-sm-12 col-md-11 general-content">
                      <p className="">
                        Hi, my name is Theris&nbsp;Coats,&nbsp;Sr.
                      </p>
                      <p>
                        I lost my son, Theris Lee Coats II, in San Francisco County Jail — not because we didn’t see the signs, 
                        but because I was legally blocked from helping him get the care he needed.
                      </p>

                    </div>
                    <div className="col-sm-10 col-md-7 general-content">

                      <Image
                      src="/badd-assets/articles/article-3-22-2025-theris-coats-991x854.jpeg"
                      layout="responsive"
                      width={991}
                      height={854}
                      alt="Theris Lee Coats II and Theris Coats, Sr."
                      className="photo-perspective mb-4 mt-4"
                      />
                    </div>
                  </div>
                  
                </div>




                <div className="col-md-6 general-content">
                  <p>
                    He struggled with mental illness and addiction.
                    We saw the danger. We pleaded for support.
                  </p>
                  <p className="mx-4">
                    But the law told us:
                    <br/>❌ You’re not allowed in.
                    <br/>❌ You’re not authorized to help.
                  </p>
                  <p>
                    By the time the system responded, it was already too late.
                  </p>
                  <p>
                    That’s why we’re fighting for something 
                    called <span className="fw-bold link">Theris’ Law</span>.
                  </p>

                  
                </div>

              </div>
            </div>

          </div>
        </section>


        <section className="section-about bg-body">
          <div className="section-content">

            <div className="row">

              <div className="col-md-8 general-content">
                <h3 className="fs-2">So, What is Theris’ Law?</h3>
                <p className="fs-4 highlight">
                  Theris’ Law is a local policy that would allow families to act before a crisis turns deadly, by doing three things:
                </p>
              </div>

              <div className="col-md-7 general-content">
                <ol className="ol fs-4">
                  <li>
                    A licensed doctor or mental health professional confirms the person is too impaired to make safe decisions.
                    <br/><br/>
                  </li>
                  <li>
                    A close family member is temporarily allowed limited access to information—just enough to help.
                    <br/><br/>
                  </li>
                  <li>
                    The family can request short-term conservatorship, with a court’s approval, to get their loved one into treatment.
                    <br/><br/>
                  </li>
                </ol>
              </div>
              <div className="col-md-10 general-content">
                <p className="fs-4">
                  This is not about taking away rights—it’s about creating a path for compassionate intervention when a life is at risk.
                  It’s about giving families a chance to act before the jail cell, before the overdose, before the obituary.
                  We’re calling on San Francisco’s leaders to support this policy—and we’re asking our community to stand with us.
                </p>
                <p>
                  <Link href="/theris-law/print" className="btn btn-secondary btn-lg" target="_blank" aria-label="Print Theris’ Law">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"></path>
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"></path>
                    </svg> &nbsp; <span>Print Theris’ Law</span>
                  </Link>
                </p>
                <br/>
              </div>

            </div>
          </div>
        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
