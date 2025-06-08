import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events'
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

            <div className="general-content col-md-7 fs-4">
              Join us for our next BADD event, showing up goes a long way toward supporting our community.
            </div>

            <div className="row">




              <div className="py-5">
                <hr/>
              </div>

              <div className="row">
                <div className="general-content col-md-6">
                  <div id="event-richard-30-years-clean-7-19-2025" className="general-content">
                    <h3 className="py-3"><strong>RICHARD BEAL<br/>30 YEARS CLEAN</strong></h3>
                    <p>Saturday, July 19, 2025
                    <br/>1675 Post St., 
                    <br/>San Francisco, CA  94115
                    <br/>3:00pm to 6:00pm</p>
                  </div>
                  <div className="general-content fs-4">
                    <p>
                      You&apos;re invited! <br/>
                      Come celebrate Richard B.&apos;s 30 years of clean time with us - 
                      mark your calendars and save the date for a special event in person!
                    </p>
                    <p>
                      <a href="https://tinyurl.com/Ambassador4Recovery" className="btn btn-warning btn-md my-2" target="_blank">RSVP to attend</a>
                    </p>
                  </div>
                </div>

                <div className="general-content col-md-6">
                  <p>
                    <Image
                      src="/badd-assets/events/Richard-Beal-30-years.jpeg"
                      layout="responsive"
                      width={1170} // Original image width
                      height={765} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>

             


              <div className="py-5">
                <hr/>
              </div>

              <div className="row">
                <div className="general-content col-md-5">

                  <div id="event-checkin-5-29-2025" className="general-content col-md-9">
                    <h3 className="py-3"><strong>CITY HALL <nobr>CHECK-IN</nobr></strong></h3>
                    <p>Thursday, May 29th, 2025
                    <br/>Yes SF HQ - 220 Montgomery Street
                    <br/>9:00am to 10:00am</p>
                  </div>

                  <p className="fs-4">
                    Join BADD and the San Francisco Chamber of Commerce 5/29/2025 for a FREE event to connect with 
                    District 6 Supervisor Matt Dorsey. 
                  </p>
                  <p className="fs-4">
                    Supervisor Dorsey 
                    will share legislative updates and priorities for the 
                    remainder of 2025.
                  </p>
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-6">
                  <p style={{ position: 'relative' }}>
                    <Image
                      src="/badd-assets/events/sf-city-hall-check-in-may29.jpeg"
                      layout="responsive"
                      width={1170} // Original image width
                      height={1455} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
              



              <div className="py-5">
                <hr/>
              </div>

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








              <div className="py-5">
                <hr/>
              </div>

              <div id="event-rallyforrecovery-5-5-2025" className="general-content col-md-12">
                <h3 className="py-3"><strong>RALLY FOR RECOVERY</strong></h3>
                <p>Monday, May 5th, 2025<br/>City Hall, San Francisco, CA</p>
              </div>

              <div className="general-content col-md-5 fs-4">
                
                <p>
                  Thank You from the Founders of BADD – Brothers Against Drug Deaths
                </p>

                <p>
                  On behalf of the entire BADD team, we extend our deepest gratitude to Supervisor 
                  Matt Dorsey, Assemblymember Matt Haney, Mayor Daniel Lurie, District Attorney Brooke Jenkins, 
                  and all the leaders and advocates who gave voice and vision to recovery at Monday’s Rally for Recovery at San Francisco City Hall.
                </p>

                <p>
                  <Image
                      src="/badd-assets/events/recovery-rally-brooke-jenkins-richard-beale.png"
                      layout="responsive"
                      width={1022} // Original image width
                      height={798} // Original image height
                      alt="Rally For Recovery, BADD's Richard Beale, District Attorney Brooke Jenkins"
                  />
                </p>

              </div>

              <div className="col-md-1"></div>

              <div className="general-content col-md-6 fs-4">

                <p>
                We are proud to stand with you in support of the Recovery First initiative and <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB255" target="_blank">Assembly Bill 255</a>—both 
                of which mark vital steps toward making treatment, dignity, and drug-free recovery housing a reality for more of our brothers and sisters in need.
                </p>

                <p>
                  <Image
                      src="/badd-assets/events/rally-for-recovery-matt-dorsey-steve-adami.png"
                      layout="responsive"
                      width={1826} // Original image width
                      height={1150} // Original image height
                      alt="Rally For Recovery, Supervisor Matt Dorsey, Salvation Army's Steve Adami"
                  />
                </p>

                <p>
                This moment affirms our shared commitment: that recovery is possible, justice is necessary, and every life is worth saving. Thank you for leading with compassion, urgency, and courage.
                </p>

                <p>
                With respect and solidarity,<br/>
                The Founders of BADD (Brothers Against Drug Deaths)
                </p>

              </div>
            </div>
          </div>

        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
