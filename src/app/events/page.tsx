import styles from "../page.module.css";

//Events
import EventData from "../../components/Events";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description: "Stay informed about upcoming BADD events, community gatherings, recovery celebrations, educational programs, and advocacy initiatives throughout the San Francisco Bay Area."
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="ourwork bg-body">

          <div className="section-content">
            
            <div className="row">
              <div className="general-content col-lg-7 col-md-8 col-sm-10 fs-4">
                <div className="headline-content">
                  <h2 className="fs-1">BADD Events</h2>
                </div>
                <p>
                  Join us for our next BADD event. Showing up goes a long way toward supporting our community.
                </p>
                <div className="py-1"></div>
              </div>
            </div>

            <div className="py-4">
              <hr/>
            </div>

            <div><EventData /></div>

          </div>

        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
