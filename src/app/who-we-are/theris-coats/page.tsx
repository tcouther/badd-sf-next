import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";

//Navbar
import BaddNavbar from "../../../components/BaddNavbar";

//Footer
import BaddFooter from "../../../components/BaddFooter";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are : Theris Coats'
};

export default function Events() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="section-about bg-light">
          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">Theris L. Coats, Sr.</h2>
            </div>

            <div className="row">
              <div className="col-md-8 general-content fs-4">
                <p>
                  <strong>Serving as CEO of BADD</strong>
                </p>
                <p>
                  Born in San Francisco as the 11th of 17 children 
                  in a tight-knit family rooted in Hallsville, Texas. His parents, Curtis and 
                  Gradie Coats, raised their children in the fear and admonition of the 
                  Lord—instilling deep faith, strong values, and a love for music. 
                  That love became his life’s passion, leading him to sing from an early age 
                  and dream of becoming an opera performer.
                </p>
                <p>
                  He spent decades singing Gospel music with the Coats Singers, performing across 
                  the world—including appearances with Shirley Caesar and in Michael Jackson’s “Cry” video. 
                  After retiring as a Research Analyst II from the California Department of Health Services, 
                  Theris returned to school, earned a degree in Business Administration, and finally saw a 
                  lifelong dream fulfilled when he performed the lead role of Sarastro in Mozart’s The Magic Flute.
                </p>
                <p>
                  In 2016, he co-founded STLR Entertainment, managing artists and producing concerts. 
                  But in 2025, his life took a devastating turn when his son, Theris II—who struggled with addiction 
                  and mental illness—died in jail while awaiting treatment. After years of trying to get his son help, 
                  Theris responded with action: he founded <Link href="http://www.badd-sf.org/">BADD – Brothers Against Drug Deaths</Link>, an advocacy group committed to fighting for better treatment 
                  access and support for Black men and families affected by addiction and mental health challenges.
                </p>
                <p>
                  Through music, ministry, and now advocacy, Theris continues to turn pain into purpose—helping others live 
                  with dignity, hope, and healing.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 general-content">
                <Image
                  src="/badd-assets/photos/bio-theris.jpg"
                  layout="responsive"
                  width={2314}
                  height={2604}
                  alt="BADD CEO Theris L. Coats Sr."
                  aria-hidden="false"
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
