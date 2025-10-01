import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : Beyond My Family’s Reach, Theatrical debut, Saturday, November 22, 2025'
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
                <div className="general-content col-md-6">

                  <div id="event-checkin-5-29-2025" className="general-content col-md-9">
                    <h3 className="py-3">
                      BADD Presents...<br/>
                      <strong>Beyond My Family’s Reach</strong>
                    </h3>
                    <p>Saturday, November 22, 2025
                    <br/><Link href="https://rwoh.org/upcoming-events/" target="_blank">Ruth Williams Bayview Opera House</Link>
                    <br/>4705 3rd Street
                    <br/>San Francisco, CA 94124
                    <br/>2:00pm and 7:00pm</p>
                  </div>

                  <p className="fs-4">
                    <strong>
                    Join BADD for the theatrical world premier of 
                    this emotionally charged play. 
                    </strong>
                  </p>

                  <p className="fs-4 me-3">
                    <strong className="highlight">Get Free Tickets Now!</strong><br/>
                    <Link href="https://tinyurl.com/BeyondMyFamilysReach" target="_blank" className="btn btn-warning btn-md">2:00pm Show</Link>
                    <Link href="https://tinyurl.com/BeyondMyFamilysReach7" target="_blank" className="btn btn-warning btn-md mx-2">7:00pm Show</Link>
                  </p>

                  <br/>

                  <p className="fs-5">
                  This emotionally charged play shines a spotlight on the impact of systemic barriers 
                  like HIPAA laws, the silence surrounding mental health in Black communities, 
                  and the heartbreak of watching someone slip through your fingers. 
                  </p>
                  <p className="fs-5">
                    Through raw dialogue, soul-stirring scenes, and a compassionate lens, 
                  Beyond My Family’s Reach calls us to witness the strength it takes to heal-and the power of family, 
                  love, and community to try.
                  </p>

                  <p>
                    <Link href="/badd-assets/events/2025-play-beyond-my-familys-reach.jpeg">Click here to download a flyer.</Link>
                  </p>
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-5">
                  <p style={{ position: 'relative' }}>
                    <Image
                      src="/badd-assets/events/2025-play-beyond-my-familys-reach-wide.jpeg"
                      layout="responsive"
                      width={1170} // Original image width
                      height={1455} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>

                  <div className="col-lg-10 col-md-8 col-sm-6">
                  <div className="row">
                    <div className="col-md-12 p-3">
                      Made possible by...
                    </div>
                  </div>
                  <div className="row d-flex align-items-center">

                    <div className="col-4 px-3">
                      <Link href="https://www.neighborsbettersf.com/" target="_blank">
                      <Image
                        src="/badd-assets/logos/neighbors-logo.svg"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="Neighbors for a Better San Francisco is an organization of dedicated San Franciscans committed to public safety, serious solutions to homelessness"
                      />
                      </Link>
                    </div>
                    
                    <div className="col-4 px-4">
                      <Link href="https://www.stlrentertainment.com/" target="_blank">
                      <Image
                        src="/badd-assets/logos/stlr-logo-brand-vert-web.png"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="STLR Entertainment, We Book Premier Talent"
                      />
                      </Link>
                    </div>
                    
                    <div className="col-4 px-4">
                      <Link href="https://www.avenuegreenlightsf.org/" target="_blank">
                      <Image
                        src="/badd-assets/logos/logo-aveenue-greenlight.png"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="Avenue Greenlight, provides funding through grants to merchant organizations and other community groups"
                      />
                      </Link>
                    </div>
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
