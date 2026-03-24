import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Dr. Michael Pasley'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Dr. Michael Pasley</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  I am writing to formally introduce myself and share my background as it relates to my ongoing commitment to community service and advocacy. 
                  Originally from New York, I served three years in the United States military. 
                  My personal journey includes overcoming a history of addiction and street life; 
                  I am proud to share that have been clean for 34 years and have never been incarcerated.
                </p>
                <p>
                  For the past 24 years, I have served as a pastor in Oakland, California. 
                  Professionally, I have dedicated 20 years to social work and case management within drug rehabilitation settings. 
                  Currently, I serve as the Director of the Senior Embracing Opportunity program, 
                  where I continue to be a staunch advocate for abstinence-based recovery.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-dr-michael-pasley.jpeg"
                  width={833}
                  height={1260}
                  alt="BADD Board Member Dr. Michael Pasley"
                  aria-hidden="false"
                  className="photo-perspective img-full-width"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
