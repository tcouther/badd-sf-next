import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";
import YouTubeThumbnail from "../../components/YouTubeThumbnail";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: "Meet the leadership, advisors, and community advocates behind Brothers Against Drug Deaths and learn about our mission to transform pain into purpose."
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>


        <section className="section-about bg-black fs-5">
          <div className="section-content col-lg-10 m-auto">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5 general-content p-4 text-white text-center text-lg-start">
              <h2 className="fs-1">Who We Are</h2>
              <p className="fs-4 p-2 ps-0 pb-0 mb-0">
                Inspired by the life and struggle of Theris Lee “TC” Coats II, we are Brothers Against Drug Deaths, committed to breaking 
                the cycle of drug-related deaths by expanding access to treatment, support, and policy reform 
                that prioritizes recovery over incarceration.
              </p>
              <div className="py-2"></div>
            </div>
            <div className="col-sm-11 col-md-10 col-lg-7 general-content p-lg-4 p-sm-0 m-auto">
              <div className="embed-responsive embed-responsive-16by9 border border-secondary border-3">
                <YouTubeThumbnail
                  videoId="np2cUrsq8dQ"
                  title="BADD-SF Our Story"
                  thumbnailSrc="/badd-assets/graphics/og-image.png"
                  buttonPositionBottom={true}
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="section-about bg-body fs-5">
          <div className="section-content col-lg-10 m-auto">
          <div className="row">
            <div className="col-md-11 general-content">
              <h3>Our Mission</h3>
              <p>
                Brothers Against Drug Deaths (BADD) is a grassroots nonprofit dedicated 
                to preventing overdose deaths, reducing stigma around addiction and mental illness, 
                and empowering Black men and other underserved individuals to access recovery resources. 
                We also utilize the performing arts as a therapeutic and educational tool, 
                helping people affected by mental health and substance use disorders find hope, 
                connection, and healing.
              </p>
            </div>
          </div>

          <div className="py-3"></div>

          <div className="row">

            <div className="col-sm-12 col-md-5 col-lg-3 general-content">
              <center>
              <Image
                src="/badd-assets/graphics/breaking-the-cycle-message.jpeg"
                width={712}
                height={1074}
                alt="Breaking the cycle graphic"
                aria-hidden="false"
                className="img-full-width"
              />
              </center>
              <div className="py-3"></div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-8 general-content">
              <p>
                We believe in dignity, healing, and second chances, and we work to:
              </p>
              <ul className="fs-6">
                <li className="pb-3">Provide education, resources, and advocacy to prevent drug-related deaths</li>
                <li className="pb-3">Promote mental health awareness and access to culturally competent care</li>
                <li className="pb-3">Support families navigating the complexities of addiction and mental illness</li>
                <li className="pb-3">Challenge systemic failures that deny people the help they need</li>
                <li className="pb-3">Bridge the gap between incarceration and recovery by connecting individuals reentering society with critical reentry services—including housing, employment, addiction treatment, and mental health care</li>
                <li className="pb-3">Partner with community organizations and justice system stakeholders to create pathways of support and opportunity for returning citizens</li>
              </ul>
            </div>

            <div className="col-lg-12 general-content">
              <div className="bible-verse bg-light">
                <blockquote cite="#">
                  <p>
                    “Commit to the Lord whatever you do, and He will establish your plans.” 
                  </p>
                </blockquote>
                <p>—<cite>Proverbs 16: 3</cite></p>
              </div>
            </div>

          </div>

          </div>
        </section>


        <section className="section-about bg-light fs-5">
          <div className="section-content col-lg-10 m-auto">

          <div className="row">

            <div className="col-md-12 col-lg-12 general-content">

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

            </div>
          </div>
          </div>
        </section>

        <section className="section-about bg-body fs-5">
          <div className="section-content col-lg-10 m-auto">
          <div className="row">
            <div className="col-md-8 general-content">
              <div className="board-of-directors">
                <h3>Board of Directors</h3>
                <p>
                  Our Board of Directors, advocating for those 
                  battling addiction and mental illness.
                </p><br/>
                <div className="bod">
                  <ul className="row list-unstyled" role="list">
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/theris-coats/">Theris L. Coats, Sr.</Link>
                      </p>
                      <p className="bod-title">CEO &amp; <span className="text-nowrap">Co-founder</span></p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/richard-beal/">Richard Beal</Link>
                      </p>
                      <p className="bod-title">Secretary &amp; <span className="text-nowrap">Co-founder</span></p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/chris-st-james/">Chris St James</Link>
                      </p>
                      <p className="bod-title">Treasurer</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/mosi-williams/">Mosi Williams, Psy.D.</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/pamela-brown/">Pamela Brown, M.A.</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/john-jeffrey/">John Jeffrey</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">Stanley Winters Jr.</p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/tara-kugler/">Tara Kugler</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/bruce-beland/">Bruce J. Beland</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                    <li className="col-sm-6 col-md-6 col-lg-6 py-3" role="listitem">
                      <p className="bod-name">
                        <Link href="/who-we-are/michael-pasley/">Dr. Michael Pasley</Link>
                      </p>
                      <p className="bod-title">Board Member</p>
                    </li>
                  </ul>
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
