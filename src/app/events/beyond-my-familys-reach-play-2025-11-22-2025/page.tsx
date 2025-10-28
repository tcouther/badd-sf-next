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

       

        <section className="section-connect bg-black">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 general-content text-white fs-4">
                <p>Brother’s Against Drug Deaths Presents...</p>
                <h2 className="fs-1">Beyond My Family’s Reach</h2>

                <p className="pt-4">
                  Join BADD for the theatrical world premier of 
                  this emotionally charged play. <strong className="highlight text-nowrap">Get Free Tickets Now!</strong>
                </p>
                <p className="pt-3">
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach" className="btn btn-warning btn-md me-2 mb-1">2:00pm Show</Link>
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach7" className="btn btn-warning btn-md mb-1">7:00pm Show</Link>
                </p>


                <div className="py-4 d-block d-lg-none">
                  <Image
                  src="/badd-assets/events/2025-play-beyond-my-familys-reach-wide.jpeg"
                  layout="responsive"
                  width={1024} // Original image width
                  height={1536} // Original image height
                  alt="Promotional Photo Beyond My Family’s Reach Play"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                />
                </div>

                <p className="pt-4">
                  This emotionally charged play shines a spotlight on the impact of systemic barriers like HIPAA laws, the silence surrounding mental health in Black communities, and the heartbreak of watching someone slip through your fingers.
                </p>
                <p>
                  Through raw dialogue, soul-stirring scenes, and a compassionate lens, 
                  Beyond My Family’s Reach calls us to witness the strength it takes to heal-and the power of family, 
                  love, and community to try.
                </p>

                <p className="pt-4">Saturday, November 22, 2025
                    <br/><Link href="https://rwoh.org/upcoming-events/" target="_blank">Ruth Williams Bayview Opera House</Link>
                    <br/>4705 3rd Street
                    <br/>San Francisco, CA 94124
                    <br/>2:00pm and 7:00pm
                </p>

                




                <div className="col-12">
                  <div className="row">
                    <div className="col-md-12 p-3">
                      <small>Made possible by...</small>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center">

                    <div className="col-4 col-sm-4 col-md-3 px-4 py-2">
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

                    <div className="col-4 col-sm-4 col-md-3 px-2 py-2 brightness-3">
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
                    
                    <div className="col-4 col-sm-4 col-md-3 px-4 py-2">
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


                    <div className="col-7 col-sm-7 col-md-5 col-lg-5 px-2 py-2">
                      <Link href="https://www.oldskoolcafe.org/" target="_blank">
                      <Image
                        src="/badd-assets/logos/old-skool-cafe-logo.jpg"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="Old Skool Cafe, youth run supper club"
                      />
                      </Link>
                    </div>


                  </div>
                  <div className="py-2">
                    <Link href="/badd-assets/events/2025-play-beyond-my-familys-reach.jpeg">Click here to download a flyer.</Link>
                  </div>
                </div>




              </div>
              <div className="col-lg-5 col-sm-9">
                <Image
                  src="/badd-assets/events/2025-play-beyond-my-familys-reach-pic.jpeg"
                  layout="responsive"
                  width={1024} // Original image width
                  height={1536} // Original image height
                  alt="Promotional Photo Beyond My Family’s Reach Play"
                  aria-hidden="true"
                  className="rounded-3 img-full-width d-none d-lg-block"
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
