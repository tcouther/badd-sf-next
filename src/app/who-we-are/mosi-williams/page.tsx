import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Mosi Williams, Psy.D.'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Mosi Williams, Psy.D.</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  Mosi Williams was born and raised in Oakland, California.  
                  He has volunteered throughout the Bay Area over the past 30 years, 
                  serving at the Metropolitan Fresh Start House, Santa Rita Jail, 
                  and the Conscious Voices African American Well Being Center.   
                </p>
                <p>
                  Mosi currently works as a social worker in San Francisco and 
                  is also on the Board of Directors for the Hemophilia Council of California.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-mosi-williams.png"
                  layout="responsive"
                  width={1168}
                  height={1116}
                  alt="BADD Board Member Mosi Williams, Psy.D."
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
