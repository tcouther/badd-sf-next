import Link from "next/link";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: Kimberly Eichelle’s Talented Thursdays, January 15, 2026'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="ourwork bg-body">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">BADD Events</h2>
            </div>

            <div className="event-listing">

              <div className="event-listing">

                <div className="row">
                  <div className="general-content col-md-4">
                    <div id="event-recovery-first-signing-5-23-2025" className="general-content col-md-9">
                      <h3 className="py-3"><strong>Kimberly Eichelle’s Talented Thursdays</strong></h3>
                      <p>Thursday, January 15, 2026
                      <br/>7:00pm EST</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="general-content col-md-12">
                        <div className="row">
                          <div className="general-content col-md-12">
                            <div className="video-container">
                              <iframe src="https://www.youtube.com/embed/tIm1MXPKl3k?si=gtQp-5_JZICrDoZR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                    </div>
                  </div>
                </div>



                <div className="row my-5">
                  <div className="general-content col-md-11">
                    <p className="fs-4">
                      Join us for a powerful Talented Thursday featuring Theris Coats, Sr. and Richard Beal — cofounders of BADD | Brothers Against Drug Deaths. This conversation centers on truth, loss, recovery, advocacy, and the urgent work needed to save lives impacted by addiction, mental illness, and incarceration.
                    </p>
                    <p className="fs-4">
                      <Link href="https://www.youtube.com/live/tIm1MXPKl3k?si=khxE2eITCBls7Tvp" target="_blank" className="btn btn-danger btn-lg">Watch Now on Youtube</Link>
                    </p>
                  </div>                    
                </div>

              </div>
            </div>
          </div>

        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
