import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

          <section className="section-about bg-light">

          <div className="section-content">
          <div className="headline-content">
            <h2 className="fs-1">Who We Are</h2>
          </div>


          

          <div className="row">

            <div className="col-md-6 general-content">
              <h3>Mission</h3>

              <p>
                At BADD (Brothers Against Drug Deaths), our mission is to advocate for those 
                battling addiction and mental illness, particularly within Black and underserved communities. 
                Inspired by the life and struggle of Theris Lee “TC” Coats II, we are committed to breaking 
                the cycle of drug-related deaths by expanding access to treatment, support, and policy reform 
                that prioritizes recovery over incarceration.
              </p>

              <p>
              We believe in dignity, healing, and second chances, and we work to:
              </p>
              <ul>
                <li>Provide education, resources, and advocacy to prevent drug-related deaths</li>
                <li>Promote mental health awareness and access to culturally competent care</li>
                <li>Support families navigating the complexities of addiction and mental illness</li>
                <li>Challenge systemic failures that deny people the help they need</li>
                <li>Bridge the gap between incarceration and recovery by connecting individuals reentering society with critical reentry services—including housing, employment, addiction treatment, and mental health care</li>
                <li>Partner with community organizations and justice system stakeholders to create pathways of support and opportunity for returning citizens</li>
              </ul>

              <div className="bible-verse bg-light">
                <blockquote cite="#">
                  <p>
                    “Commit to the Lord whatever you do, and He will establish your plans.” 
                  </p>
                </blockquote>
                <p>—<cite>Proverbs 16: 3</cite></p>
              </div>

            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5 general-content">
              <div className="board-of-directors">
                <h3>Board of Directors</h3>
                <p>
                  Our Board of Directors, advocating for those 
                  battling addiction and mental illness.
                </p><br/>
                <div className="bod container">
                  <div className="row">
                    <div className="col">
                      <p className="bod-name">
                        <Link href="/who-we-are/theris-coats/">Theris L. Coats, Sr.</Link>
                      </p>
                      <p className="bod-title">CEO</p>
                    </div>
                    <div className="col">
                      <p className="bod-name">
                        <Link href="/who-we-are/richard-beal/">Richard Beal</Link>
                      </p>
                      <p className="bod-title">Secretary</p>
                    </div>
                    <div className="w-100 p-1"></div>
                    <div className="col">
                      <p className="bod-name">Chris St. James</p>
                      <p className="bod-title">Treasurer</p>
                    </div>
                    <div className="col">
                      <p className="bod-name">Mosi Williams, Psy.D.</p>
                      <p className="bod-title">Board Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>


        <section className="section-about bg-body">
          <div className="section-content">
          <div className="row">
            <div className="col-md-7 general-content">
              <h3>Vision</h3>
              <p>
                At BADD (Brothers Against Drug Deaths), we envision a future where no life is lost 
                to addiction and untreated mental illness. We strive for a world where Black men and 
                other underserved individuals battling substance use and mental health challenges 
                receive the care, support, and dignity they deserve—without stigma, criminalization, or neglect.
              </p>
              
              <p>
                Our long-term goal is to transform the way society responds to addiction and mental illness by:
              </p>
              <ul>
                <li>Eliminating barriers to treatment and recovery services for Black men and other vulnerable communities</li>
                <li>Ending the cycle of incarceration for those struggling with substance use and mental illness by advocating for policies that prioritize rehabilitation over punishment</li>
                <li>Creating a nationwide network of peer support, education, and advocacy programs to empower families and communities to fight against drug-related deaths</li>
                <li>Shifting public perception from judgment to compassion—recognizing addiction and mental illness as health issues, not moral failures</li>
                <li>Ensuring no one has to suffer or fight alone by providing accessible resources, mentorship, and direct support to those in crisis</li>
                <li>Through bold advocacy, community engagement, and systemic reform, BADD will be a beacon of hope, saving lives, strengthening families, and transforming communities—one brother at a time</li>
                <li>Creating robust reentry support systems that welcome returning citizens with resources, dignity, and real opportunities for healing and rebuilding</li>
                <li>Fostering collaboration between community programs, justice systems, and health services to ensure reentry is not a revolving door but a new beginning</li>
              </ul>

            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <center>
              <Image
                src="/graphics/breaking-the-cycle-message.png"
                layout="responsive"
                width={712}
                height={1074}
                alt="Breaking the cycle graphic"
                aria-hidden="false"
              />
              </center>
            </div>

          </div>
          </div>
        </section>


      </main>
      <BaddFooter />
    </div>
  );
}
