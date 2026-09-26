import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : International Overdose Awareness Day, Sunday, August 31, 2025',
  description: "Participate in International Overdose Awareness Day with BADD to remember loved ones, reduce stigma, and support overdose prevention efforts."
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
                <div className="general-content col-md-5">

                  <div id="event-checkin-5-29-2025" className="general-content col-md-9">
                    <h3 className="py-3">
                      <strong>
                        International Overdose <span className="text-nowrap">Awareness Day:</span> 1000 Lights for 1000 Lives
                      </strong> 
                    </h3>
                    <p>Sunday, August 31, 2025
                    <br/>San Francisco City Hall
                    <br/>1 Carlton B Goodlett Place, 94102
                    <br/>6:00pm</p>
                  </div>

                  <div className="fs-4">
                    <p>
                      Brothers Against Drug Deaths (BADD) was honored to stand alongside Mothers Against Drug Addiction & Deaths (MADAAD) at a powerful rally in San Francisco. 
                      Together, we remembered 1,000 precious lives lost to overdoses—each one a soul, a story, and a family forever changed. 💔 my son, Theris Lee Coats, II was remembered and honored by Supervisor Matt Dorsey.
                    </p>
                    <p>
                      As we gathered, we were reminded of the words of Psalm 34:18:
                      “The Lord is close to the brokenhearted and saves those who are crushed in spirit.”
                    </p>
                    <p>
                      We felt that closeness tonight as community, faith, and compassion came together to say: these lives mattered. 
                      We will continue to raise our voices, fight for change, and offer hope for healing. 🌹
                    </p>
                    <p>
                      #BADD #MADAAD #OverdoseAwareness #SanFrancisco #NeverForgotten #FaithInAction #Psalm3418 #EndOverdose #HopeAndHealing
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>


                <div className="general-content col-md-6">
                  <div className="row">
                    
                    <div className="col-md-12 py-3">
                      <Image
                      src="/badd-assets/events/2025-international-overdose-awareness-day-photo-3.jpeg"
                      layout="responsive"
                      width={3024} // Original image width
                      height={4032} // Original image height
                      alt="Photo of BADD CEO and Co-Founder Theris L. Coats Sr. and Mayor Daniel Lurie together at San Francisco City Hall for international overdose awareness day"
                      aria-hidden="true"
                      className="photo-perspective"
                      />
                    </div>

                    <div className="col-md-12">
                      <Image
                        src="/badd-assets/events/2025-international-overdose-awareness-day-photo-1.jpeg"
                        layout="responsive"
                        width={1934} // Original image width
                        height={1086} // Original image height
                        alt="Photo of 1000 Lights for 1000 Lives on steps of San Francisco City Hall at international overdose awareness day"
                        className="photo-perspective"
                      />
                    </div>
                  </div>
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
