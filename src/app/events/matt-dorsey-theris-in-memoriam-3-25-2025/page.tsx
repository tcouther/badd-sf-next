import Link from "next/link";
import styles from "../../page.module.css";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events : San Francisco Supervisor Matt Dorsey memorial to Theris Lee “TC” Coats II, Tuesday, March 25th, 2025'
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
                  <div className="general-content col-md-12">

                    <h3 className="py-3">
                      <strong>SF Board of <span className="text-nowrap">Supervisors Meeting</span></strong>
                      <p className="py-2 fs-5">Supervisor Matt Dorsey’s memorial tribute to <span className="text-nowrap">Theris Lee “TC” Coats II</span></p>
                    </h3>
                    <p>Tuesday, March 25th, 2025
                    <br/>CITY HALL, SAN FRACISCO, CA
                    <br/>2:00pm to 5:31pm</p>

                    <p>
                      <Link href="https://archive.org/details/SFGTV_20250325_210000_Board_of_Supervisors/start/6900/end/6960" target="_blank">Full-length video recording</Link>
                    </p>

                    <p>
                      <Link href="https://sfbos.org/sites/default/files/bag032525_minutes.pdf" target="_blank">Meeting minutes</Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="general-content col-md-6">
                  <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/MZXXiV8WLds?si=LNHOcgRQl0WGibgd" title="YouTube video player" frameBorder="6" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="py-5"><hr/></div>
              </div>

              <div className="row">
                
                <div className="general-content col-md-5 py-2 fs-5">
                  <p>
                    <strong>On March 25, 2025, Supervisor Matt Dorsey of the San Francisco Board of Supervisors gave an in memoriam tribute to Theris Lee “TC” Coats II, </strong>
                    requesting that the meeting adjourn in his memory. TC, who passed away at the age of 33 while in county jail, was remembered as a deeply loved son, father, brother, friend, and artist.
                  </p>
                  <p>
                    Though his life was marked by struggles with addiction, mental illness, and periods of homelessness, he was never alone — his family fought tirelessly to support him. TC’s parents, Theris Sr. and Andrea Coats, were praised for their unwavering dedication, advocacy, and faith, standing by him even through his darkest times. His father continues to honor TC by working to release his nearly completed gospel rap album under the artist name Trilogy, The Minister.
                  </p>
                  <p>
                    Dorsey reflected on TC’s early promise: baptized at age 12, he earned a scholarship to college, and he became a talented gospel rapper who left behind a body of music. Despite his struggles, his enduring love for his daughter and wider family shone through.
                  </p>
                </div>

                <div className="col-md-1"></div>

                <div className="general-content col-md-6 py-2 fs-5">
                  <p>
                    The tribute also highlighted broader systemic issues, noting how TC’s story underscores the urgent need for more effective interventions for addiction and mental health crises in San Francisco and other cities. His uncle, Richard Beal, director of recovery services at the Tenderloin Housing Clinic, shared that TC’s life and death are inspiring the creation of Brothers Against Drug Deaths — a new advocacy group supporting Black men in recovery.
                  </p>
                  <p>
                    Supervisor Dorsey closed by extending condolences to TC’s family — his parents, siblings, daughter, and community — affirming that while his life was cut short, his memory will live on as both a blessing and an inspiration to strengthen support for those battling addiction and mental illness.
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
