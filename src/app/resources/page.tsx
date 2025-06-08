import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Resources</h2>
            </div>

            <div className="row">

              <div className="col-md-6 general-content">
                
                <p className="fs-4">
                  BADD is a community resource.
                  Don&apos;t hesitate to <Link href="/connect" aria-label="connect with BADD">connect with us</Link>, 
                  to start a conversation.
                </p>

                <div className="py-2"></div>

                <p className="fs-4">
                  <strong>For immediate help, understanding these numbers can save lives and ensure timely assistance.</strong>
                </p>

                <div className="py-2"></div>

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


      </main>
      <BaddFooter />
    </div>
  );
}
