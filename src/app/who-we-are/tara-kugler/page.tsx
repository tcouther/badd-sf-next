import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Tara Kugler'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Tara Kugler</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  For the past 22 years, Tara Kugler, worked as an attorney for the Sacramento County Department of Child Support Services. Recently retired, her last six years was in the role of Principal Attorney, where she was the first woman and person of color to hold this title.
                </p>
                <p>
                  During her public service with Sacramento County, at the office and various outreach events, Tara has had the opportunity to work with individuals and families of diverse ethnicities, socioeconomic, and educational backgrounds. Her engagement also included individuals with substance use and incarceration histories.
                </p>
                <p>
                  Having an adult son battling the dual diagnosis of mental illness and substance use, for over a decade, while raising her grandchildren, Tara has seen and experienced the challenges of navigating the legal and medical system.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-tara-kugler.jpeg"
                  layout="responsive"
                  width={672}
                  height={912}
                  alt="BADD Board Member Romona Burton"
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
