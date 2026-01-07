import Image from "next/image";
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

                    <p className="fs-4">
                      <Link href="https://www.youtube.com/@talentedtelevisionwithkimberly" target="_blank" className="btn btn-primary btn-lg">Watch Live</Link>
                    </p>
                    <div id="event-recovery-first-signing-5-23-2025" className="general-content col-md-9">
                      <h3 className="py-3"><strong>Kimberly Eichelle’s Talented Thursdays</strong></h3>
                      <p>Thursday, January 15, 2026
                      <br/>7:00pm EST</p>
                    </div>

                    <p className="fs-4">
                      Join us for a powerful Talented Thursday featuring Theris Coats, Sr. and Richard Beal — cofounders of BADD | Brothers Against Drug Deaths. 
                    </p>
                    <p className="fs-4">
                      This conversation centers on truth, loss, recovery, advocacy, and the urgent work needed to save lives impacted by addiction, mental illness, 
                      and incarceration. 🎙️
                    </p>

                    
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="general-content col-md-12">
                        <div className="row">
                          <div className="general-content col-md-12">
                            <p>
                              <Link href="https://www.youtube.com/@talentedtelevisionwithkimberly" target="_blank">
                              <Image
                                src="/badd-assets/events/talented-thursday-tall-1-15-2026.jpeg"
                                layout="responsive"
                                width={1170} // Original image width
                                height={1931} // Original image height
                                alt=""
                                aria-hidden="true"
                              />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <br/>

                    </div>
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
