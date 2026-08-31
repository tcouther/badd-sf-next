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
            <div className="row justify-content-center">

              <div className="col-lg-12 general-content text-white fs-4">
                <p>Brother’s Against Drug Deaths Presents...</p>
                <h2 className="fs-1">Beyond My Family’s Reach</h2>

                <p className="pt-4">
                  The Play Was A Tremendous Success! 
                  Saturday, November 22, 2025, at 
                  the <span className="text-nowrap">Ruth Williams Bayview Opera House</span> with a sold out premier.
                </p>
                <br/>

              </div>

              <div className="col-lg-6 general-content text-white fs-4">

                <div className="row">
                <div className="col-md-8 col-lg-8">
                  <Image
                    src="/badd-assets/events/beyond-play-photo.jpeg"
                    layout="responsive"
                    width={1116} // Original image width
                    height={970} // Original image height
                    alt="Event Photo Beyond My Family’s Reach Play"
                    aria-hidden="true"
                    className="rounded-3 img-full-width"
                  />
                </div>
                </div>

                <p className="pt-4">
                  The stage play “Beyond My Family’s Reach” was a tremendous success, 
                  with both performances selling out and being enthusiastically received by the community. 
                  This powerful production, presented by BADD (Brothers Against Drug Deaths), 
                  brought audiences together to confront the realities of addiction, 
                  mental illness, and the impact these challenges have on families.​  
                </p>
              </div>
              <div className="col-lg-6 general-content text-white fs-4">
                <p>
                  BADD extends heartfelt gratitude to the talented writers, directors, cast members, 
                  and the many dedicated volunteers whose hard work ensured that every aspect of the show 
                  ran smoothly. Special thanks go to Avenue Greenlight, Neighbors for a Better 
                  San Francisco, and STLR Entertainment for their generous financial support, 
                  which helped make this premiere possible.​
                </p>
                <p className="pt-4">
                  The organization also wishes to recognize the many behind-the-scenes contributors 
                  whose efforts often go unseen but are essential to the success of productions like this. 
                  Cofounders Richard Beal and Theris Coats, along with Chris St. James, 
                  played key roles in guiding this project and advancing BADD’s mission to honor 
                  lives lost to drug-related deaths and support healthier, safer communities.
                </p>
              </div>

              <div className="col-12 col-md-8 col-lg-8 px-2 py-2">
                <div className="row">
                  <div className="col-md-12 p-3 text-white">
                    <small>Made possible by...</small>
                  </div>
                </div>
                <div className="row d-flex align-items-center">

                  <div className="col-3 col-sm-4 col-md-3 px-4 py-2">
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

                  <div className="col-3 col-sm-4 col-md-3 px-2 py-2 brightness-3">
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
                  
                  <div className="col-3 col-sm-4 col-md-3 px-4 py-2">
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

                  <div className="col-3 col-sm-7 col-md-3 col-lg-3 px-2 py-2">
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
              </div>

            </div>
          </div>
        </section>



      </main>
      <BaddFooter />
    </div>
  );
}
