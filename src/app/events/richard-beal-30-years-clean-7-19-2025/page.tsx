import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: RICHARD BEAL 30 YEARS CLEAN, Saturday, July 19, 2025'
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
                      src="/badd-assets/events/richard-beal-30-years.jpeg"
                      layout="responsive"
                      width={1170} // Original image width
                      height={765} // Original image height
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
