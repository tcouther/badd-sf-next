import styles from "../page.module.css";

import Link from "next/link";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

//Globals
import GLOBALS from "../globals.json";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give'
};

export default function Connect() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="contact-us bg-body">

          <div className="section-content">
            <div className="row">
              <div className="general-content col-md-7">

                  <div className="headline-content">
                    <h2 className="fs-1">
                      Give<br/>
                      <span className="fs-3">Support the Fight Against Drug Deaths</span>
                    </h2>
                  </div>



                  <div className="p-3 p-md-4 border rounded-3">
                  
                  {GLOBALS.GLOBAL_FEDEIN !== "" ? 
                    (<>

                      <h3>Make a Difference Today</h3>

                      <p className="lead mb-0">
                        <strong className="fs-4">No gift is too small. With your help, we can save lives, support families, and transform our communities for the better.</strong><br/>
                        <a href={GLOBALS.GLOBAL_FUNDME} className="btn btn-warning btn-lg my-2 mx-2" target="_blank" aria-label="donate to BADD with Go fund me">GoFundMe</a>
                        <a href={GLOBALS.GLOBAL_PAYPAL} className="btn btn-warning btn-lg my-2 mx-2" target="_blank" aria-label="donate to BADD with Pay Pal">PayPal</a>
                      </p>

                      <p>BADD is a 501(c)(3) nonprofit organization</p>
                      <p><small>BADD’s Federal Tax ID #{GLOBALS.GLOBAL_FEDEIN}</small></p>
                      </>
                    ) : 
                    (<div>
                      <p className="fs-4">
                      Notice:
                      </p>
                      <p>
                      501(c)(3) status pending.
                      </p>
                      <p>
                      BADD is a newly established non-profit 
                      organization registered with the State of 
                      California. <span className="text-nowrap">#{GLOBALS.GLOBAL_CALEIN}</span>
                      </p>
                      <p> 
                      For transparency and compliance with regulations, 
                      giving will be available here, 
                      once Federal identification is finalized.
                      </p>
                      <p>
                      <Link href="/connect" aria-label="connect with BADD">Contact our team</Link> to learn more,
                      <br/>
                      Thank you for your patience.
                      </p>
                    </div>)
                  }
                  </div>

                  <div className="col-md-1 py-4"></div>


              </div>
              <div className="form-content col-md-1">

              </div>
              <div className="form-content col-md-4">
                
              </div>
            </div>
          </div>
        </section>


      </main>
      <BaddFooter />
    </div>
  );
}
