import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Pamela Brown, M.A.'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Pamela Brown, M.A.<br/>
                <strong className="fs-4">ICF Certified Coach</strong>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  Pamela Brown discovered her passion for service early in life while helping care foster children in her family’s home. 
                  This foundation led her to earn a Master’s in Pastoral Counseling and a Bachelor’s in Psychology with a focus on Substance Use.
                </p>
                <p>
                  With years of experience in the nonprofit sector, Pamela has worked closely with individuals impacted by 
                  homelessness, mental health challenges, HIV, and the justice system. 
                  As an ICF Certfied Healing Coach, she is dedicated to guiding others through trauma recovery and personal transformation.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-pamela-brown.jpeg"
                  layout="responsive"
                  width={637}
                  height={988}
                  alt="BADD Board Member Pamela Brown"
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
