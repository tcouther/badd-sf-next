import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Romona Burton'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Romona Burton</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  With over three decades of experience, Romona Burton humbly dedicates herself to empowering people of all ages. Her enthusiasm for coaching and development is reflected in her thoughtful initiatives, which are designed to help individuals turn challenges into opportunities. While recognized for her expertise in organizational strategy and fundraising, Romona focuses on promoting growth and resilience through service and support.
                </p>
                <p>
                  As a devoted mother and grandmother, Romona remains committed to her family and community, always prioritizing their needs. Her work echoes her heartfelt mission to transform pain into purpose, creating lasting, positive change in people’s lives. Through gentle mentoring and guidance, Romona strives to inspire others to reach their fullest potential, nurturing a brighter future for everyone.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-romona-burton.png"
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
