import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: 6TH ANNUAL RECOVERY DAY, Friday, September 4, 2025',
  description: "Celebrate recovery, resilience, and community at the 6th Annual Recovery Day event featuring speakers, resources, and support services."
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
                <div className="general-content col-md-5">
                  <div id="event-recovery-day-2025-clean-9-12-2025" className="general-content">
                    <h3 className="py-3"><strong>6TH ANNUAL<br/>RECOVERY DAY</strong></h3>
                    <p>Friday, September 4, 2026
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
                      BADD is proud to be a contributing partner of the 6th Annual Recovery Day 
                      at Boeddeker Park founded and coordinated by our Co Founder Richard Beal 
                      “The Ambassador for Recovery“!
                    </p>
                    <p>
                      <a href="http://cub.dpx.mybluehost.me/wp-content/uploads/2026/07/annual-recovery-day-2026.jpeg" className="btn btn-secondary btn-md my-2" target="_blank">Download Flyer</a>
                    </p>
                  </div>
                </div>

                <div className="general-content col-md-7">
                  <p>
                    <img
                      width="100%"
                      src="http://cub.dpx.mybluehost.me/wp-content/uploads/2026/07/annual-recovery-day-2026.jpeg"
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
