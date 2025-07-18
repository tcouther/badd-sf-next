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

          <section className="section-about bg-light fs-5">

          <div className="section-content">
          <div className="headline-content">
            <h2 className="fs-1">Who We Are</h2>
          </div>




          <div className="row">

            <div className="col-md-6 general-content">

              <h3>Our Mission</h3>

              <p>
                At BADD (Brothers Against Drug Deaths), our mission is to advocate for those 
                battling addiction and mental illness, particularly within Black and underserved communities. 
              </p>
              <br/>

              <div className="row">
                <div className="col-md-5">
                  <center>
                  <Image
                    src="/badd-assets/graphics/breaking-the-cycle-message.png"
                    layout="responsive"
                    width={712}
                    height={1074}
                    alt="Breaking the cycle graphic"
                    aria-hidden="false"
                  />
                  </center>
                  <br/>
                </div>
                <div className="col-md-7">
                  <p>
                    Inspired by the life and struggle of Theris Lee “TC” Coats II, we are committed to breaking 
                    the cycle of drug-related deaths by expanding access to treatment, support, and policy reform 
                    that prioritizes recovery over incarceration.
                  </p>
                </div>
              </div>
              <br/>


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

              <h3>Our Vision</h3>
              <p>
                A society where no one dies waiting for help, 
                and every person battling addiction or mental illness 
                is treated with dignity, compassion, and access to 
                culturally competent care. We recognize the critical 
                balance between respecting an individual’s privacy under 
                HIPAA and ensuring that loved ones and caregivers have 
                the information they need to act swiftly in times of crisis, 
                so that timely, life-saving interventions are never delayed 
                by unnecessary barriers.
              </p>
              
              <br/>

              <div className="board-of-directors">
                <h3>Board of Directors</h3>
                <p>
                  Our Board of Directors, advocating for those 
                  battling addiction and mental illness.
                </p><br/>
                <div className="bod">
                  <div className="row">
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/theris-coats/">Theris L. Coats, Sr.</Link>
                      </p>
                      <p className="bod-title">CEO</p>
                    </div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/richard-beal/">Richard Beal</Link>
                      </p>
                      <p className="bod-title">Secretary</p>
                    </div>
                    <div className="w-100 p-1"></div>
                    <div className="col py-3">
                      <p className="bod-name">Chris St James</p>
                      <p className="bod-title">Treasurer</p>
                    </div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/mosi-williams/">Mosi Williams, Psy.D.</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </div>
                    <div className="w-100 p-1"></div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/pamela-brown/">Pamela Brown, M.A.</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/john-jeffrey/">John Jeffrey</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </div>
                    <div className="w-100 p-1"></div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/romona-burton/">Romona Burton</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </div>
                    <div className="col py-3">
                      <p className="bod-name">Stanley Winters Jr.</p>
                      <p className="bod-title">Board Member</p>
                    </div>
                    <div className="w-100 p-1"></div>
                    <div className="col py-3">
                      <p className="bod-name">
                        <Link href="/who-we-are/tara-kugler/">Tara Kugler</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
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
