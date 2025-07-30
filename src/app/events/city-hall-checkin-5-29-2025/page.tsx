import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : CITY HALL CHECK-IN, Thursday, May 29th, 2025'
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

                  <div id="event-checkin-5-29-2025" className="general-content col-md-9">
                    <h3 className="py-3"><strong>CITY HALL <span className="text-nowrap">CHECK-IN</span></strong></h3>
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

            </div>
          </div>

        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
