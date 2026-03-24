import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Bruce J. Beland'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Bruce J. Beland</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  For the past 32 years, I have had extensive experience addressing legal issues facing
                  Californians with special needs. Most of these have involved the administration of public social
                  services – most recently the California Department of Developmental Services. I also have
                  worked on numerous cases and issues involving the administration of the Medi-Cal program,
                  which is recognized by courts (and critics) as one of the most complex, arcane, and difficult
                  areas of legal practice. In my capacity as a staff attorney to the Medi-Cal program, I provided
                  sound legal advice to the Department’s executive staff and managers, including the
                  development of strategies to obtain the approval of California’s control agencies, and the
                  approval of the federal agencies that oversee the Medicaid program. In my 12 years at the legal
                  office at the Department of Developmental Services, I applied my skills towards the effective
                  administration of the Lanterman Act, a program that often intersects various other State and
                  federal programs for persons with developmental disabilities, including the Medicaid and
                  Medicare programs.
                </p>
                <p>
                  I have personally served as an advocate for the State in many court proceedings, and in
                  various administrative matters before various administrative bodies, including the Office of
                  Administrative Hearings and the State Personnel Board. I have personally handled many family
                  law and guardianship cases in California Superior Courts statewide, I have also successfully
                  appealed a superior court order to the 5 th District Court of Appeal, which resulted in a published
                  opinion that is extremely favorable to the State’s recovery program for the costs of institutional
                  care for persons with developmental disabilities.
                </p>
                <p>
                  I have always strived to maintain a good relationship with the various other attorneys I
                  have worked with, and perhaps most importantly, I believe that I have maintained a good
                  personal relationship with all my clients, which has helped me to better advocate their interests.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-bruce-beland.jpeg"
                  width={833}
                  height={1260}
                  alt="BADD Board Member Bruce J. Beland"
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
