import styles from "../../page.module.css";
import Link from "next/link";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: Voices Unmuted Support Group',
  description: "Voices Unmuted is a virtual support group built specifically for young men between the ages of 18 to 36 dealing with mental health and substance abuse. We meet on the first and third Saturdays of each month."
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
                  <div id="event-recovery-day-2025-clean-9-12-2025" className="general-content">
                    <h3 className="py-3"><strong>Voices Unmuted<br/>Support Group</strong></h3>
                  </div>
                  <div className="general-content fs-4">
                    
                    <p>
                      <Link href="/badd-assets/events/voices-unmuted-flyer.jpeg">Download the flyer.</Link>
                    </p>

                    <p>
                      <strong>Starting September 19th, We meet on the first and third Saturdays of each month, 
                      in San Francisco and Sacramento  at 11:00am P.S.T.</strong>
                    </p>
                    

                    <div className="row fs-5">
                      <div className="general-content col-md-6">
                      <p>
                        <strong>San Francisco</strong>: 
                        <br/>233 Eddy St., San Francisco, CA 94102
                      </p>
                      </div>
                      <div className="general-content col-md-6">
                      <p>
                        <strong>Sacramento</strong>: 
                        <br/>5511 Tangerine Ave., Sacramento, CA 95823
                      </p>
                      </div>
                    </div>



                    <p>
                        Register for our next session. <br/>
                        <a href="tel:1-833-292-2233" className="text-nowrap">1-833-292-2233</a>
                    </p>


                    <p>
                      Join us in person if you can, or online by <Link href="https://us06web.zoom.us/j/83366212009?pwd=GrWqdRBuU6wvlumRmRvCEAwIVIdNbM.1&jst=5" target="_blank">Zoom/video</Link>.
                    </p>


                    <p>Voices Unmuted is a virtual support group built specifically for young men 
                  between the ages of 18 to 36 dealing with mental health and substance abuse. </p>


                    <p> 
                      If you need a judgment-free space to heal with brothers who actually get it, this is your circle.
                    </p>
                  </div>
                </div>

                <div className="general-content col-md-7">
                  <div className="portrait-video rounded overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/3ZspetFEtg8"
                      title="Voices Unmuted"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
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
