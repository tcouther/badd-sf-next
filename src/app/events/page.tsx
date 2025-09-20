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
            


            <div className="row">
              <div className="general-content col-lg-7 col-md-8 col-sm-10 fs-4">
                <div className="headline-content">
                  <h2 className="fs-1">BADD Events</h2>
                </div>
                <p>
                  Join us for our next BADD event, showing up goes a long way toward supporting our community.
                </p>
                <div className="py-3"></div>
              </div>
            </div>

            <div className="py-5">
              <hr/>
            </div>


            <div className="card-deck events-deck">



              <div className="card">
                  <Image
                      src="/badd-assets/events/recovery-day-2025-pics-01.jpeg"
                      width={1408} // Original image width
                      height={1056} // Original image height
                      alt=""
                      aria-hidden="true"
                      className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/recovery-day-9-12-2025" aria-label=""><strong>5TH ANNUAL RECOVERY DAY</strong></Link> 
                    </h5>
                    <p className="card-text">Join us at Father Alfred E. Boeddeker Park. <br/>Speakers, Food, Resources, Live Entertainment!</p>
                    <Link href="/events/recovery-day-9-12-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">September 12th 2025</small>
                  </div>
              </div>

              <div className="card">
                  <Image
                      src="/badd-assets/events/2025-international-overdose-awareness-day-photo-2.jpeg"
                      width={3015} // Original image width
                      height={2212} // Original image height
                      alt="Photo of BADD CEO and Co-Founder Theris L. Coats Sr. and Mayor Daniel Lurie together at San Francisco City Hall for international overdose awareness day"
                      aria-hidden="true"
                      className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/international-overdose-awareness-day-8-31-2025" aria-label="">
                        <strong>International Overdose <span className="text-nowrap">Awareness Day:</span> 1000 Lights for 1000 Lives</strong>
                      </Link>
                    </h5>
                    <p className="card-text">
                      Brothers Against Drug Deaths (BADD) was honored to stand alongside Mothers Against Drug Addiction & Deaths (MADAAD) at a powerful rally in San Francisco. 
                    </p>
                    <Link href="/events/international-overdose-awareness-day-8-31-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">August 31, 2025</small>
                  </div>
              </div>


              <div className="card">
                  <Image
                      src="/badd-assets/events/Overdose-Awareness-Day-8-20-2025.jpeg"
                      width={744} // Original image width
                      height={557} // Original image height
                      alt=""
                      aria-hidden="true"
                      className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/overdose-awareness-day-8-20-2025" aria-label=""><strong>OVERDOSE AWARENESS DAY</strong></Link> 
                    </h5>
                    <p className="card-text">
                      Join us for the 2nd annual Overdose Awareness Day at RAFIKI UMOJA HAP QUESADA in San Francisco.
                      Enjoy CALIVE DJ, FOOD, WELLNESS, RESOURCES, and COMMUNITY SPEAKERS
                    </p>
                    <Link href="/events/overdose-awareness-day-8-20-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">August 20th, 2025</small>
                  </div>
              </div>


              <div className="card">
                  <Image
                      src="/badd-assets/events/richard-beal-30-years-group-photo.jpeg"
                      width={1080} // Original image width
                      height={804} // Original image height
                      alt=""
                      aria-hidden="true"
                      className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/richard-beal-30-years-clean-7-19-2025" aria-label=""><strong>RICHARD BEAL 30 YEARS CLEAN</strong></Link> 
                    </h5>
                    <p className="card-text">Come celebrate Richard B.’s 30 years of clean time with us - mark your calendars and save the date for a special event in person!</p>
                    <Link href="/events/richard-beal-30-years-clean-7-19-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">July 19th 2025</small>
                  </div>
              </div>

              <div className="card">
                  <Image
                    src="/badd-assets/events/united-playaz-001.jpeg"
                    width={1802} // Original image width
                    height={1346} // Original image height
                    alt=""
                    aria-hidden="true"
                    className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/united-playaz-grand-opening-6-12-2025" aria-label=""><strong>UNITED PLAYAZ’s GRAND OPENING CEREMONY</strong></Link> 
                    </h5>
                    <p className="card-text">BADD was in attendance as Mayor Daniel Lurie celebrated the grand opening of a new community resource center in San Francisco’s South of Market Neighborhood (SoMa).</p>
                    <Link href="/events/united-playaz-grand-opening-6-12-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">June 12th 2025</small>
                  </div>
              </div>

              <div className="card">
                  <Image
                      src="/badd-assets/events/sf-city-hall-check-in-may29.jpeg"
                      width={1170} // Original image width
                      height={1455} // Original image height
                      alt=""
                      aria-hidden="true"
                      className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/city-hall-checkin-5-29-2025" aria-label=""><strong>CITY HALL <span className="text-nowrap">CHECK-IN</span></strong></Link> 
                    </h5>
                    <p className="card-text">Join BADD and the San Francisco Chamber of Commerce 5/29/2025 for a FREE event to connect with District 6 Supervisor Matt Dorsey.</p>
                    <Link href="/events/city-hall-checkin-5-29-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">May 29th 2025</small>
                  </div>
              </div>

              

              <div className="card">
                  <Image
                    src="/badd-assets/events/ordinance-group.jpeg"
                    width={2560} // Original image width
                    height={1920} // Original image height
                    alt=""
                    aria-hidden="true"
                    className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/recovery-first-signing-5-23-2025" aria-label=""><strong>RECOVERY FIRST ORDINANCE SIGNING CEREMONY</strong></Link> 
                    </h5>
                    <p className="card-text">BADD (Brothers Against Drug Deaths), Matt Dorsey, Mayor Lurie, and friends celebrate the formal signing of the “Recovery First” Ordinance!</p>
                    <Link href="/events/recovery-first-signing-5-23-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">May 23rd 2025</small>
                  </div>
              </div>

              <div className="card">
                  <Image
                        src="/badd-assets/events/recovery-rally-brooke-jenkins-richard-beale.jpeg"
                        width={1022} // Original image width
                        height={798} // Original image height
                        alt="Rally For Recovery, BADD's Richard Beale, District Attorney Brooke Jenkins"
                    className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/rally-for-recovery-5-5-2025" aria-label=""><strong>RALLY FOR RECOVERY</strong></Link> 
                    </h5>
                    <p className="card-text">
                      Thank You from the Founders of BADD – Brothers Against Drug Deaths
                    </p>
                    <Link href="/events/rally-for-recovery-5-5-2025" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">May 5th 2025</small>
                  </div>
              </div>

              <div className="card">
                  <Image
                    src="/badd-assets/events/matt-dorsey-theris-in-memoriam.jpeg"
                    width={1000} // Original image width
                    height={800} // Original image height
                    alt=""
                    aria-hidden="true"
                    className="card-img-top img-full-width"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href="/events/matt-dorsey-theris-in-memoriam-3-25-2025/" aria-label=""><strong>SF BOARD OF SUPERVISORS MEMORIAL TO Theris Lee “TC” Coats II</strong></Link> 
                    </h5>
                    <p className="card-text">San Francisco Supervisor Matt Dorsey’s memorial for Theris Lee “TC” Coats II at Board of Supervisors Meeting in SF City Hall</p>
                    <Link href="/events/matt-dorsey-theris-in-memoriam-3-25-2025/" aria-label="" className="btn btn-secondary btn-sm">Read and Learn More</Link> 
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">March 25th 2025</small>
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
