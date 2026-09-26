import styles from "../../page.module.css";
import Link from "next/link";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect : Newsletter Sign Up Confirmed',
  description: "Thank you for subscribing to the BADD newsletter. Stay informed about events, advocacy efforts, recovery resources, and community updates."
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Newsletter Sign Up Confirmed</h2>
            </div>

            <div className="row">
              <div className="col-md-6 fs-4 general-content">
                <p>
                  <b>You are now signed up for the official 
                  Brothers Against Drug Deaths Newsletter.</b> 
                </p>
                <p>
                  Expect the latest in BADD’s news and information
                  sent to your email inbox.
                </p>
                <p>Thank you.</p>
                <p className="py-4">
                  To continue browsing, <Link href="/">click here</Link>.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
              </div>
            </div>
          </div>
        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
