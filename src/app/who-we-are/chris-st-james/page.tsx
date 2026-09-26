import styles from "../../page.module.css";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Chris St James',
  description: "Learn about Chris St. James and his contributions to advocacy, recovery support, and community engagement through BADD."
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Chris St James</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Treasurer</strong>
                </p>
                <p>
                  Principal for Knight &amp; Day Group, LLC, 
                  a municipal advisory firm with offices in San Francisco, 
                  Houston, Chicago, Dallas and Alabama.
                </p>
                <p>
                  As an MSRB licensed professional advisor and former licensed municipal
                  underwriter with more than 30 years of experience, he works with and
                  advises municipal issuers such as special districts, cities, 
                  counties and states to issue and manage municipal debt. 
                </p>
                <p>
                  Chris’s work spans a wide range of public financing structures, 
                  including direct bank placements, competitive and negotiated bond sales, 
                  refundings, and capital planning initiatives. 
                </p>
                <p>
                  Recognized for his ability to bridge financial strategy with policy goals—helping issuers achieve lower borrowing costs, 
                  maintain credit quality, and align long-term infrastructure investments with community priorities. 
                  Chris’s approach emphasizes clarity, transparency, and value for taxpayers while fostering strong partnerships among lenders, underwriters, and public agencies.
                </p>
                <p>
                  He has served as a treasurer for
                  his local church congregation for
                  a number of years.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-chris-st-james.jpeg"
                  width={833}
                  height={1260}
                  alt="BADD Treasurer and Board Member Chris St James"
                  aria-hidden="false"
                  className="photo-perspective img-full-width"
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
