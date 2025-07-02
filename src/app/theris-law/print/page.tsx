import Link from "next/link";
import Image from "next/image";

//Globals
import GLOBALS from "../../../app/globals.json";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theris’ Law : Print'
};

export default function PrintTherisLaw() {

  return (
    <div id="theris-law-page" className="theris-law theris-law-background">
        <header className="theris-law-content row align-items-center">

          <div className="col-md-12 text-center">

            <h1 className="fs-1" aria-label="Theris’ Law">THERIS’ LAW</h1>

            <hr className="mt-2 mb-3 theris-law-hightlight" aria-hidden="true"/>

            <p className="fw-bold">Because Families Deserve a Way In</p>

          </div>

        </header>

        <main className="theris-law-content row align-items-center">

          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-lg-10 text-center">
            <ol className="theris-law-bullets row mt-4 mb-4" aria-label="The Three Steps of Theris’ Law">
              <li className="col-sm-12 col-md-4">
                <div className="mt-4 mb-5 mx-2">
                  <span className="big-disc">1</span>
                  <Image
                  src="/badd-assets/graphics/theris-law-graphic-steps-1.png"
                  layout="responsive"
                  width={260}
                  height={205}
                  alt=""
                  aria-hidden="true"
                  />
                  <p>
                  A licensed clinician confirms the person is too impaired to make safe-decisions
                  </p>
                </div>
              </li>
              <li className="col-sm-12 col-md-4">
                <div className="mt-4 mb-5 mx-2">
                  <span className="big-disc">2</span>
                  <Image
                  src="/badd-assets/graphics/theris-law-graphic-steps-2.png"
                  layout="responsive"
                  width={260}
                  height={205}
                  alt=""
                  aria-hidden="true"
                  />
                  <p>
                  Limited information access is granted to a close family member
                  </p>
                </div>
              </li>
              <li className="col-sm-12 col-md-4">
                <div className="mt-4 mb-5 mx-2">
                  <span className="big-disc">3</span>
                  <Image
                  src="/badd-assets/graphics/theris-law-graphic-steps-3.png"
                  layout="responsive"
                  width={260}
                  height={205}
                  alt=""
                  aria-hidden="true"
                  />
                  <p>
                  The family can request short-term conservatorship
                  </p>
                </div>
              </li>
            </ol>

            <p>
              No. He’s someone’s child. She’s a human being. 
              <br/>They are us.
            </p>

          </div>
          <div className="col-lg-1"></div>

        </main>

        <footer className="theris-law-content row align-items-center">

          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-lg-10 text-center fs-3">
            <p className="mb-5">
              <Link href="/connect" className="fw-bold theris-law-hightlight">badd-sf.org</Link>
              <br/>Call {GLOBALS.GLOBAL_PHON1B}
            </p>
          </div>
          <div className="col-lg-1"></div>

        </footer>
    </div>
  );
}
