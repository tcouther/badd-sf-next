import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: 5TH ANNUAL RECOVERY DAY, Friday, September 12, 2025'
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

              <div className="row">
                <div className="general-content col-md-6">
                  <div id="event-recovery-day-2025-clean-9-12-2025" className="general-content">
                    <h3 className="py-3"><strong>5TH ANNUAL<br/>RECOVERY DAY</strong></h3>
                    <p>Friday, September 12, 2025
                    <br/>246 Eddy St., 
                    <br/>San Francisco, CA  94102
                    <br/>12:00pm to 3:00pm</p>
                  </div>
                  <div className="general-content fs-4">
                    <p>
                      At Father Alfred E. Boeddeker Park.<br/>
                      Speakers, Food, Resources, Live Entertainment!
                    </p>
                    <p>
                      Over 400 participants received food, 
                      150 recovery books were given out, 
                      cases of narcan and fentanyl test strips were distributed, 
                      information on reentry, treatment, 
                      and other recovery resources from over 20 organizations! 
                      Recovery Day was fire🔥!
                    </p>
                    <ul>
                      <li>Honorable Mayor Daniel Lurie</li>
                      <li>News anchorman, Frank Summerville</li>
                      <li>Supervisor, Matt Dorsey</li>
                      <li>Director of Department Public Health, Daniel Tsai</li>
                      <li>Danny Glover - actor extraordinaire.</li>
                    </ul>
                    <p>
                      <a href="/badd-assets/events/recovery-day-2025.jpg" className="btn btn-secondary btn-md my-2" target="_blank">Download Flyer</a>
                    </p>
                  </div>



                  <div className="row">
                    <div className="general-content col-md-4">
                      <Image
                          src="/badd-assets/events/recovery-day-2025-pics-03.jpeg"
                          layout="responsive"
                          width={1408} // Original image width
                          height={1056} // Original image height
                          alt=""
                          aria-hidden="true"
                      />
                    </div>
                    <div className="general-content col-md-4">
                      <Image
                          src="/badd-assets/events/recovery-day-2025-pics-04.jpeg"
                          layout="responsive"
                          width={1408} // Original image width
                          height={1056} // Original image height
                          alt=""
                          aria-hidden="true"
                      />
                    </div>
                    <div className="general-content col-md-4">
                      <Image
                          src="/badd-assets/events/recovery-day-2025-pics-05.jpeg"
                          layout="responsive"
                          width={1408} // Original image width
                          height={1056} // Original image height
                          alt=""
                          aria-hidden="true"
                      />
                    </div>
                  </div>

                  

                </div>

                <div className="general-content col-md-6">
                  <p>
                    <Image
                      src="/badd-assets/events/recovery-day-2025-pics-01.jpeg"
                      layout="responsive"
                      width={1408} // Original image width
                      height={1056} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>
                  <p>
                    <Image
                      src="/badd-assets/events/recovery-day-2025-pics-02.jpeg"
                      layout="responsive"
                      width={1408} // Original image width
                      height={1056} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>
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
