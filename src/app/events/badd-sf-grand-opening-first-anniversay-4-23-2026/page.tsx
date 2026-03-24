import Image from "next/image";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : Celebrate BADD’s 1st Anniversary and Grand Opening, Thursday, April 23rd, 2026'
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
                      <strong>Celebrate BADD’s 1st Anniversary <span className="text-nowrap">And Grand Opening</span></strong>
                    </h3>
                    <p>Thursday, April 23rd, 2026
                    <br/>233 Eddy Street, San Francisco
                    <br/>12:00pm to 3:00pm</p>
                  </div>

                  <p className="fs-4">
                    BADD — Brothers Against Drug Deaths — is proud to celebrate our 1st Anniversary and Official Grand Opening on April 23, 2026, at our new home in the Tenderloin — 233 Eddy Street, San Francisco. This event marks more than a milestone; it represents the power of community, healing, and purpose in the face of loss.
                  </p>
                  <br/>

                  
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-6">
                  <p style={{ position: 'relative' }}>
                    <Image
                      src="/badd-assets/events/first-anniversary-office-grand-opening.jpeg"
                      layout="responsive"
                      width={1116} // Original image width
                      height={970} // Original image height
                      alt=""
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <br/><br/>
                </div>
              </div>

              <div className="row">
                <div className="general-content col-md-5">
                  <p className="fs-4">              
                    Over the past year, BADD has grown from a vision rooted in grief and determination into a community-driven movement dedicated to saving lives and uplifting those most affected by substance use, mental health challenges, and systemic barriers to care. Our theme, “From Pain to Purpose,” reflects the journey of families, survivors, advocates, and community leaders who have turned personal tragedy into collective action.
                  </p>
                  <p className="fs-4">
                    The anniversary celebration and grand opening will bring together community members, service providers, public health advocates, and local leaders to honor the progress made and to strengthen the partnerships that make this work possible. Attendees will have an opportunity to tour our new space, learn about our programs, and connect with resources that support harm reduction, recovery, mental wellness, and community empowerment.
                  </p>
                  <p className="fs-4">
                    Located in the heart of the Tenderloin — a neighborhood deeply impacted by the overdose crisis but also rich in resilience and community leadership — our new home will serve as a safe, welcoming hub for education, outreach, advocacy, and healing. From peer support and community engagement to overdose prevention and resource navigation, BADD is committed to meeting people where they are and helping them access the care and dignity they deserve.
                  </p>
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-6">
                  <p className="fs-4">
                    This celebration is also a moment to honor the lives lost to drug overdoses, acknowledge the families and communities who continue to grieve, and reaffirm our shared commitment to preventing further loss. Through compassion, advocacy, and culturally responsive support, BADD continues working to ensure that those most affected — particularly Black, Brown, and underserved communities — are seen, heard, and supported.
                  </p>
                  <p className="fs-4">
                    Join us as we commemorate our first year of impact, celebrate the opening of our new home, and look ahead to a future where every life is valued and every community has access to the support it needs to thrive.
                  </p>
                  <p className="fs-4">
                    <strong>
                    Together, we transform pain into purpose — and purpose into action.
                    </strong>
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
