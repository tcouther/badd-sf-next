import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events: Both Sides of the Conversation Hidden Gems Podcast, Tuesday, September 23, 2025'
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

              <div className="event-listing">

                <div className="row">
                  <div className="general-content col-md-4">

                    <div id="event-recovery-first-signing-5-23-2025" className="general-content col-md-9">
                      <h3 className="py-3"><strong>Both Sides of the Conversation Hidden Gems Podcast</strong></h3>
                      <p>Tuesday, September 23, 2025
                      <br/>7:30pm PDT</p>
                    </div>

                    <p className="fs-4">
                      BADD, Brothers Against Drug Deaths, 
                      is inviting everyone to join us for the 
                      upcoming Both Sides of the Conversation Hidden Gems Podcast! 🎙️
                    </p>

                    <p className="fs-4">
                    <Link href="https://www.youtube.com/watch?v=_DteYPFlZD8" target="_blank" className="btn btn-primary btn-lg">Watch Live</Link>
                    </p>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="general-content col-md-12">
                        <div className="row">
                          <div className="general-content col-md-12">
                            <p>
                              <Link href="https://www.youtube.com/watch?v=_DteYPFlZD8" target="_blank">
                              <Image
                                src="/badd-assets/events/both-sides-conversation-podcast-9-23-2025.jpeg"
                                layout="responsive"
                                width={2560} // Original image width
                                height={1920} // Original image height
                                alt=""
                                aria-hidden="true"
                              />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div className="general-content col-md-12 fs-4 py-3">
                        <p>
                          Hidden Gems is a powerful platform dedicated to educating, uplifting, 
                          and empowering our communities. We’ll come together for meaningful conversations that truly make an impact.
                        </p>
                        <p>
                          Please subscribe to the <Link href="https://www.youtube.com/c/BothSidesoftheConversation" target="_blank">YouTube channel</Link> and follow Both Sides of the Conversation on all social media so you don’t miss a moment.
                        </p>
                        <p>
                          We’d love for you to tune in, show your support, and be part of this movement!
                        </p>
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
