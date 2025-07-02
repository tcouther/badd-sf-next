import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Who We Are : Richard Beal'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">
                Richard Beal<br/>
                <strong className="fs-4">M-RAS, CSC, FAC, CCDS, CADCII, ACRPS</strong>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6 general-content fs-4">
                <p>
                  <strong>Serving as Secretary of BADD</strong>
                </p>
                <p>
                  Richard Beal is author of <i>“Recovering From the Game”</i> and BADD Co-Founder. 
                  Richard Beal has over 25 years of experience working with the justice involved 
                  population. 
                </p>
                <p>
                  He is currently the Director of Recovery Services for Tenderloin 
                  Housing Clinic. He has managed several residential programs in the 
                  San Francisco Bay Area including Western Addition Recovery House, 
                  (San Francisco, Ca.) Center for Recovery (San Francisco, Ca.) 
                  and in-custody program Roads to Recovery in San Francisco County Jail. 
                </p>
                <p>
                  Richard Beal has the unique blend of working with diverse populations, 
                  clinical knowledge, living experience, and comprehensive understanding 
                  of the complex dynamics underlying addiction, reentry, mental illness and recovery. 
                </p>
                <p>
                  He is widely known in the recovery community as “The Ambassador for Recovery”.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 general-content">
                <Image
                  src="/badd-assets/photos/bio-richard.jpg"
                  layout="responsive"
                  width={3024}
                  height={4032}
                  alt="BADD Secretary Richard Beal"
                  aria-hidden="false"
                  className="photo-perspective"
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
