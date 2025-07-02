import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : John Jeffrey'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">John Jeffrey</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Board Member</strong>
                </p>
                <p>
                  A servant of God and student of His word. 
                </p>
                <p>
                  In his secular occupation, he was vice president of an advertising company in San
                  Francisco, California until retirement in 1997. 
                </p>
                <p>
                  With the support of his wife, he served as youth director/youth minister at the Uptown Church
                  of Christ for twenty years. In 1988, under the oversight of Brother James M. Butler, Sr., 
                  he was installed as an elder; he served the Uptown Church of Christ in that capacity for twenty-five years, 
                  until his wife’s health failed and required his full time care.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-john-jeffrey.jpg"
                  layout="responsive"
                  width={833}
                  height={1260}
                  alt="BADD Board Member John Jeffrey"
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
