import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

//Navbar
import ReadMore from "../../components/ReadMore";

//Globals
import GLOBALS from "../globals.json";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources'
};

export default function Events() {

  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-resources bg-body">
          <div className="section-content pb-0 mb-0">
            <div className="headline-content">
              <h2 className="fs-1">Resources</h2>
            </div>

            <div className="row">

              <div className="col-md-8 general-content">
                
                <p className="fs-4">
                  BADD is a community resource in the San Francisco Bay Area.
                  <br/>
                  Don’t hesitate 
                  to <Link href="/connect" aria-label="connect with BADD">connect with us</Link> and 
                  start a conversation. <br/>
                  You can reach us by phone at <a href={`tel:${GLOBALS.GLOBAL_PHON1B}`}>{GLOBALS.GLOBAL_PHON1B}</a>.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="section-resources-emergency bg-light">
          <div className="section-content pb-0 mb-0">
            <div className="headline-content">
              <h3 className="fs-1 highlight">Emergency Resources</h3>
            </div>

            <div className="row">

              <div className="col-md-8 general-content">
                
                <p className="fs-4">
                  <strong>For immediate help, understanding these numbers can save lives and ensure timely assistance.</strong>
                </p>

              </div>
            </div>

            <div className="py-3"></div>

            <div className="row">

              <div className="col-md-6 general-content">

                <h3 className="fs-2">Emergency</h3>
                <p className="fs-4">
                  <b className="fs-3 highlight">Call: 9-1-1</b><br/>
                  For emergencies requiring <strong>police</strong>, <strong>fire</strong>, or <strong>medical</strong> responses.
                  The universal emergency number in the United States and Canada.
                </p>

                <div className="py-4"></div>

                <h3 className="fs-2">Mental Health Emergency</h3>
                <p className="fs-4">
                  <b className="fs-3 highlight">Call: 9-8-8</b><br/>
                  For <strong>mental health crisis</strong>, <strong>substance use</strong>, or <strong>emotional distress</strong>.
                  A 24 hour hotline providing free and confidential support for people in distress.
                </p>

                <div className="py-4"></div>

                <h3 className="fs-2">Non-Emergency</h3>
                <p className="fs-4">
                  <b className="fs-3 highlight">Call: 3-1-1</b><br/>
                  For <strong>non-emergency</strong> municipal services.
                  In San Francisco, 311 serves as the primary point of contact for non-emergency city services.
                  Outside of San Francisco, call 415.701.2311. 
                </p>
                <br/>



              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 general-content">
                <Image
                  src="/badd-assets/graphics/numbers.png"
                  layout="responsive"
                  width={1024}
                  height={1536}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              
              
            </div>
          </div>
        </section>


        <section className="section-resources-partners bg-body">
          <div className="section-content">
            <div className="headline-content">
              <h3 className="fs-1 highlight">Partner Referral Resources</h3>
            </div>

            <div className="row">

              <div className="col-md-5 general-content">
                

                <div className="row align-items-center">
                  <div className="col-sm-3 col-md-3 py-2">
                    <Image
                      src="/badd-assets/logos/partner-fresh-start-logo.png"
                      layout="responsive"
                      width={2448}
                      height={2248}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                  <div className="col-sm-6 col-md-8 py-2">
                    <h4>Metropolitan Fresh Start House</h4>
                  </div>
                </div>

                <div className="py-3"></div>

                <p className="fs-5">
                  <Link href="https://metropolitanfreshstart.org/" target="_blank">Visit Fresh Start online</Link> 
                  <br/> or call 415-242-2412 for more information.
                </p>

                <ReadMore 
                  className="fs-5"
                  maxLength={400}
                  lineLength={100}
                  copy={[`The mission of the Metropolitan Fresh Start House is to retore dignity, 
                    purpose and responsibility to men who have loss hope. Homelessness among Veterans 
                    is not just a personal tragedy, it reveals larger systemic challenges, 
                    from mental health and housing shortages to barriers in civilian reintegration. 
                    These challenges place pressure on public resources and demand unified, 
                    strategic action.`, `The Fresh Start provides up to 16 beds daily, offering not just shelter,
                    but comprehensive care to Veterans in the city & county of San Francisco. 
                    Our Therapeutic Community delivers emergency housing, 24/7 support, 
                    and personalized case management, ensuring every Veteran has a safe foundation 
                    and a path toward restored health and permanent housing.`]}
                />
              </div>

              <div className="col-md-1 py-5"></div>

              <div className="col-md-5 general-content">

                <div className="row align-items-center">
                  <div className="col-sm-3 col-md-3 py-1">
                    <Image
                      src="/badd-assets/logos/partner-pathway-humanity-logo.png"
                      layout="responsive"
                      width={1024}
                      height={1024}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                  <div className="col-sm-6 col-md-8 py-1">
                    <h4>Pathway Humanity</h4>
                  </div>
                </div>

                <div className="py-3"></div>

                <p className="fs-5">
                  <Link href="https://pathwayhumanity.com/" target="_blank">Visit Pathway Humanity online</Link>
                </p>
                <ReadMore 
                  className="fs-5"
                  maxLength={350}
                  lineLength={100}
                  copy={[`Pathway Humanity stands as a beacon of hope, passionately dedicated to transforming lives and guiding individuals from the depths of despair to empowered self-sufficiency. We are committed to dismantling the barriers that prevent vulnerable populations from thriving by offering comprehensive, tailored support as a truly holistic "one-stop shop." Our services extend to a wide spectrum of underserved individuals, including those battling addiction, navigating the challenges of homelessness, released from incarceration and striving to escape the grip of poverty. Furthermore, we are steadfast in our commitment to underrepresented groups, disabled veterans, and civilians who have faced systemic disadvantages.`,
                    `Our mission is deeply rooted in the unwavering belief that every individual inherently deserves a brighter future filled with possibility and dignity. We provide continuous, unwavering support throughout the entire rehabilitation and empowerment process, ensuring that each client experiences a safe, nurturing, and stable environment conducive to profound personal growth and lasting transformation. From the very first moment of connection, clients embark on a carefully curated journey designed to address the multifaceted root causes of their challenges. This journey encompasses the development of essential life skills, fostering newfound confidence, and ultimately facilitating successful and sustainable reintegration into society. Our integrated approach ensures that every aspect of an individual's well-being—physical, mental, emotional, and social—is addressed, paving the way for a truly holistic and enduring transformation.`]
                  }
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
