import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: RECOVERY FIRST ORDINANCE SIGNING CEREMONY, Friday, May 23, 2025'
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
                      <h3 className="py-3"><strong>RECOVERY FIRST ORDINANCE SIGNING CEREMONY</strong></h3>
                      <p>Friday, May 23, 2025
                      <br/>Harbor Light Center, 
                      <br/>1275 Harrison Street, 
                      <br/>San Francisco, CA
                      <br/>10:30am</p>
                    </div>

                    <p className="fs-4">
                      BADD (Brothers Against Drug Deaths), Matt Dorsey, Mayor Lurie, 
                      and friends celebrate the formal signing of  
                      the “Recovery First” Ordinance!
                    </p>

                    <p className="fs-4">
                      Mayor Daniel Lurie signed new “Recovery First” legislation, another step in his administration’s work to support San Franciscans in recovery and tackle the city’s behavioral health and homelessness crisis. 
                    </p>

                    <p className="fs-4">
                      Sponsored by District 6 Supervisor Matt Dorsey, the legislation enshrines long-term remission through recovery as San Francisco’s primary substance use disorder policy goal.
                    </p>

                    <p className="fs-4">
                    <Link href="https://www.sf.gov/news-mayor-lurie-signs-supervisor-dorsey-recovery-first-legislation-building-on-work-to-tackle-behavioral-health-and-homelessness-crisis" target="_blank">Read the article at SF.gov</Link>
                    </p>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="general-content col-md-12 py-3">

                        <div className="video-container">
                          <iframe src="https://www.youtube.com/embed/nKxLLLJG7vo?si=xfzRdZq_ekJJQ-fQ" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                        </div>

                      </div>

                      <div className="general-content col-md-12">
                        <div className="row">
                          <div className="general-content col-md-12">
                            <p>
                              <Image
                                src="/badd-assets/events/ordinance-group.JPEG"
                                layout="responsive"
                                width={2560} // Original image width
                                height={1920} // Original image height
                                alt=""
                                aria-hidden="true"
                              />
                            </p>
                          </div>
                          <div className="general-content col-md-6">
                            <p>
                              <Image
                                src="/badd-assets/events/ordinance-richard-beal-supervisor-matt-dorsey.jpeg"
                                layout="responsive"
                                width={1170} // Original image width
                                height={1556} // Original image height
                                alt=""
                                aria-hidden="true"
                              />
                            </p>
                          </div>
                          <div className="general-content col-md-6">
                            <p>
                              <Image
                                src="/badd-assets/events/ordinance-richard-beal-sf-mayor.jpeg"
                                layout="responsive"
                                width={1170} // Original image width
                                height={1545} // Original image height
                                alt=""
                                aria-hidden="true"
                              />
                            </p>
                          </div>
                        </div>

                      </div>


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
