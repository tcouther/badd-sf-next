import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

//Navbar
import ReadMore from "../../components/ReadMore";

//Findhelp Search
import FindHelpSearch from '../../components/FindHelpSearch';

//Globals
import GLOBALS from "../globals.json";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: "Explore recovery resources, harm reduction information, family support services, treatment options, and community programs recommended by Brothers Against Drug Deaths."
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

              <div className="col-9 col-md-8 col-lg-10 general-content">
                <p className="fs-4">
                  BADD is a community resource in the San Francisco Bay Area.
                </p>
                <p className="fs-4">
                  Don’t hesitate 
                  to <Link href="/connect" aria-label="connect with BADD">connect with us</Link> and 
                  start a conversation. <br/>
                  You can reach us by phone at <a href={`tel:${GLOBALS.GLOBAL_PHON1B}`} className="text-nowrap">{GLOBALS.GLOBAL_PHON1B}</a>.
                </p>
              </div>
            </div>


            <div className="py-5"><hr/></div>

            <div className="row">

              <div className="col-11 col-md-5 col-md-4 general-content">
                <h3 className="fs-3 mb-2">
                  <span className="highlight">Find Help in Your Community</span>
                </h3><div className="py-1"></div>
                <p className="fs-4 mb-4">
                  BADD is on findhelp.
                  Search mental health, recovery, housing, food, healthcare, employment, and other support resources near you.
                </p>
                <p className="findhelp-search-notice">
                    Search results are provided by <Link href="https://www.findhelp.org/" target="_blank">findhelp.org</Link> and open in a new browser tab.
                    For emergencies, call 911. For crisis support, call or text 988.
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-md-6 col-md-6 general-content">
                <div className="card card-slim mb-4 card-fit">
                  <div className="pb-2 w-25">
                    <Image
                      src="/badd-assets/logos/findhelp-logo.png"
                      width={300}
                      height={90}
                      alt=""
                      aria-hidden="true"
                      className="img-full-width resource-logo"
                    />
                  </div>
                  <FindHelpSearch width="600" />
                  
                </div>
              </div>
            </div>

          </div>



        </section>


        <section className="section-resources-emergency bg-light">
          <div className="section-content pb-0 mb-0">

            <div className="headline-content">
              <h3 className="fs-1 highlight">Essential Support Lines & Community Resources</h3>
            </div>

            <div className="row">

              <div className="col-md-11 general-content">
                
                <p className="fs-4">
                  If you or a loved one are facing a crisis, navigating recovery, or just trying to keep your head above water,
                  these four numbers connect you to the right help right away.
                  These services are free to call. Crisis support lines are confidential and available 24/7.
                </p>

              </div>
            </div>

            <div className="py-3">
              <br />
            </div>

            <div className="row">

              <div className="col-md-6 general-content">

                <div className="mb-5">
                  <h4 className="fs-2 mb-4 p-4 bg-danger text-white">Emergency & Crisis Support</h4>

                  <br />

                  <div className="mb-4">
                    <h5 className="fs-3 mb-2">
                      <span className="highlight fw-bold">Call or Text 988</span> <br/>Suicide & Crisis Lifeline
                    </h5>
                    <p className="fs-5 mb-0">
                      <strong>When to use:</strong> If you are experiencing a mental health crisis, overwhelming stress,
                      thoughts of suicide, or a substance use emergency. You will be connected to a trained counselor
                      who can support you through the moment.
                    </p>
                  </div>

                  <div>
                    <h5 className="fs-3 mb-2">
                      <span className="highlight fw-bold">Call 911</span> <br/>Immediate Medical or Safety Emergencies
                    </h5>
                    <p className="fs-5 mb-0">
                      <strong>When to use:</strong> For life-threatening situations, medical emergencies like an overdose,
                      or immediate safety threats.
                    </p>
                  </div>
                </div>

                <br/><br/>

                <div className="mb-4">
                  <h4 className="fs-2 mb-4 p-4 bg-warning">Daily Living & Community Support</h4>

                  <br />


                  <div className="mb-4">
                    <h5 className="fs-3 mb-2">
                      <span className="highlight fw-bold">Call or Text 211</span> <br/>Essential Human Services
                    </h5>
                    <p className="fs-5">
                      <strong>When to use:</strong> For finding the local resources you need to stay stable. 211 connects
                      you to housing assistance, emergency shelters, food banks, utility bill support, health clinics,
                      and local recovery groups.
                    </p>
                    <p className="fs-5 mb-0">
                      <strong>Why we list it:</strong> True recovery requires a stable foundation. 211 helps relieve
                      everyday stressors, like food or housing insecurity, that can trigger a crisis.
                    </p>
                  </div>

                  <div>
                    <h5 className="fs-3 mb-2">
                      <span className="highlight fw-bold">Call 311</span> <br/>Local City & Municipal Services
                    </h5>
                    <p className="fs-5 mb-0">
                      <strong>When to use:</strong> To report local, non-emergency neighborhood issues like street light
                      outages, missed trash pickups, graffiti, or potholes.
                    </p>
                  </div>

                  <br/>
                  <br/>
                  <br/>
                </div>

              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 general-content">
                <Image
                  src="/badd-assets/graphics/numbers2026.jpeg"
                  width={1024}
                  height={1536}
                  alt=""
                  aria-hidden="true"
                  className="img-full-width"
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
                      width={2448}
                      height={2248}
                      alt=""
                      aria-hidden="true"
                      className="img-full-width resource-logo"
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
                      width={1024}
                      height={1024}
                      alt=""
                      aria-hidden="true"
                      className="img-full-width resource-logo"
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
