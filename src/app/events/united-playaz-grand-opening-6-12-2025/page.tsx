import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: UNITED PLAYAZ’s GRAND OPENING CEREMONY, Saturday, June 12, 2025'
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
                  <div id="event-united-playaz-grand-opening-6-12-2025" className="general-content">
                    <h3 className="py-3"><strong>UNITED PLAYAZ’s<br/>GRAND OPENING CEREMONY</strong></h3>
                    <p>
                      Saturday, June 12, 2025
                      <br/>1044 Howard Street, 
                      <br/>San Francisco, CA
                    </p>
                  </div>
                  <div className="general-content fs-4">
                    <p>
                      BADD was in attendance as Mayor Daniel Lurie celebrated the grand opening of a new community resource center 
                      in San Francisco’s South of Market Neighborhood (SoMa). 
                    </p>
                    <p>
                      Owned and operated by United Playaz, a San Francisco-based 
                      violence prevention and youth development organization, the new facility at 1044 Howard expands United Playaz’s wide 
                      range of services to prepare vulnerable youth for higher education, employment, and healthy living with a safe, nurturing, 
                      and collaborative environment.
                    </p>
                    <p>
                      <a href="https://www.sf.gov/news-mayor-lurie-celebrates-opening-of-new-community-resources-center-in-soma" className="btn btn-secondary btn-md my-2" target="_blank">Read More</a>
                    </p>
                  </div>
                </div>

                <div className="general-content col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <Image
                            src="/badd-assets/events/united-playaz-003.jpeg"
                            layout="responsive"
                            width={1170} // Original image width
                            height={730} // Original image height
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <Image
                            src="/badd-assets/events/united-playaz-001.jpeg"
                            layout="responsive"
                            width={1802} // Original image width
                            height={1346} // Original image height
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <Image
                            src="/badd-assets/events/united-playaz-004.jpeg"
                            layout="responsive"
                            width={1170} // Original image width
                            height={673} // Original image height
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Image
                        src="/badd-assets/events/united-playaz-002.jpeg"
                        layout="responsive"
                        width={1022} // Original image width
                        height={1366} // Original image height
                        alt=""
                        aria-hidden="true"
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
