import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : OVERDOSE AWARENESS DAY, Wednesday, August 20th, 2025'
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
                    <h3 className="py-3"><strong>2nd ANNUAL OVERDOSE <span className="text-nowrap">AWARENESS DAY</span></strong></h3>
                    <p>Wednesday, August 20th, 2025
                    <br/>5000 THIRD ST & QUESADA, SAN FRACISCO, CA
                    <br/>10:00am to 3:00pm</p>
                  </div>

                  <p className="fs-4">
                    Join BADD and Black/African American Community Stakeholders Group 
                    for the 2nd annual Overdose Awareness Day in San Francisco.
                    Enjoy CALIVE DJ, FOOD, WELLNESS, RESOURCES, and COMMUNITY SPEAKERS
                  </p>
                  <p className="fs-4">
                    The BAACSG includes SF organizations & residents who are committed to ending the overdose crisis in the Black/African American community, 
                    including:
                  </p>
                  <ul className="fs-4">
                    <li>Brothers Against Drug Deaths</li>
                    <li>Code Tenderloin</li>
                    <li>Glide Foundation</li>
                    <li>Harm Reduction Therapy Center</li>
                    <li>RAMS</li>
                    <li>SF AIDS Foundation</li>
                    <li>SFDPH</li>
                    <li>Tenderloin Housing Clinic</li>
                  </ul>
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-6">
                  <p style={{ position: 'relative' }}>

                    <Image
                      src="/badd-assets/events/Overdose-Awareness-Day-8-20-2025.png"
                      layout="responsive"
                      width={744} // Original image width
                      height={557} // Original image height
                      alt="Photo of BADD booth at the BAACSG overdose awareness day in San Francisco"
                      className="photo-perspective"
                    />
                    <Image
                      src="/badd-assets/events/2025-BAACSG-ODA-Day-Flyer.png"
                      layout="responsive"
                      width={610} // Original image width
                      height={790} // Original image height
                      alt=""
                      aria-hidden="true"
                      className="photo-perspective my-3"
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
