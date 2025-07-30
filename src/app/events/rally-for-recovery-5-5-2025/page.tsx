import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: RALLY FOR RECOVERY, Monday, May 5th, 2025'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="ourwork bg-body">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">BADD Events</h2>
            </div>

            <div className="event-listing">

              <div className="row">

                <div id="event-rallyforrecovery-5-5-2025" className="general-content col-md-12">
                  <h3 className="py-3"><strong>RALLY FOR RECOVERY</strong></h3>
                  <p>Monday, May 5th, 2025<br/>City Hall, San Francisco, CA</p>
                </div>

                <div className="general-content col-md-5 fs-4">
                  
                  <p>
                    Thank You from the Founders of BADD – Brothers Against Drug Deaths
                  </p>

                  <p>
                    On behalf of the entire BADD team, we extend our deepest gratitude to Supervisor 
                    Matt Dorsey, Assemblymember Matt Haney, Mayor Daniel Lurie, District Attorney Brooke Jenkins, 
                    and all the leaders and advocates who gave voice and vision to recovery at Monday’s Rally for Recovery at San Francisco City Hall.
                  </p>

                  <p>
                    <Image
                        src="/badd-assets/events/recovery-rally-brooke-jenkins-richard-beale.png"
                        layout="responsive"
                        width={1022} // Original image width
                        height={798} // Original image height
                        alt="Rally For Recovery, BADD's Richard Beale, District Attorney Brooke Jenkins"
                    />
                  </p>

                </div>

                <div className="col-md-1"></div>

                <div className="general-content col-md-6 fs-4">

                  <p>
                  We are proud to stand with you in support of the Recovery First initiative and <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB255" target="_blank">Assembly Bill 255</a>—both 
                  of which mark vital steps toward making treatment, dignity, and drug-free recovery housing a reality for more of our brothers and sisters in need.
                  </p>

                  <p>
                    <Image
                        src="/badd-assets/events/rally-for-recovery-matt-dorsey-steve-adami.png"
                        layout="responsive"
                        width={1826} // Original image width
                        height={1150} // Original image height
                        alt="Rally For Recovery, Supervisor Matt Dorsey, Salvation Army's Steve Adami"
                    />
                  </p>

                  <p>
                  This moment affirms our shared commitment: that recovery is possible, justice is necessary, and every life is worth saving. Thank you for leading with compassion, urgency, and courage.
                  </p>

                  <p>
                  With respect and solidarity,<br/>
                  The Founders of BADD (Brothers Against Drug Deaths)
                  </p>

                </div>
              </div>
            </div>
          </div>

        </section>

      </main>
      <BaddFooter />
    </div>
  );
}
