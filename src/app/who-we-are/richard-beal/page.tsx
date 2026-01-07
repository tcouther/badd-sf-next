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
                  <strong><span className="text-nowrap">Co-founder</span> &amp; Secretary of BADD</strong>
                </p>
                <p>
                  Richard Beal, is a Master – Registered Addiction Specialist, Certified Supervisor Credential, Certified Co-Occurring Disorder Specialist, Forensic Addiction Counselor, 
                  California Alcohol and Drug Counselor II, Advanced Certified Relapse Prevention Specialist and Author of “Recovering From the GAME”. 
                  He is a seasoned and compassionate leader with 30 years of experience working with reentry, recovery, and homeless populations. 
                </p>
                <p>
                  He currently serves as the Director of Recovery Services for Tenderloin Housing Clinic in San Francisco, Ca. 
                  He is co-founder of BADD-Brothers Against Drug Deaths. He is a transformational leader, advocate, and living testimony who "crosses all bridges"—from streets to systems, 
                  from suffering to solutions, from addiction to advocacy. 
                </p>
                <p>
                  Richard Beal represents a unique and unwavering commitment to connecting recovery communities with public institutions, 
                  bringing together the unheard voices of the unhoused, justice-involved, and addicted with the halls of policy, healthcare, and housing. 
                </p>
                <p>
                  As the Ambassador for Recovery, he is a bridge-builder who walks with those still struggling while engaging those in power to create change. 
                  His journey—marked by lived experience, clinical insight, and unwavering compassion—embodies what it means to recover loudly so others don’t die silently.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 general-content">
                <Image
                  src="/badd-assets/photos/bio-richard.jpeg"
                  width={3024}
                  height={4032}
                  alt="BADD Secretary Richard Beal"
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
