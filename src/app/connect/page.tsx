import styles from "../page.module.css";

//Navbar
import BaddNavbar from "../../components/BaddNavbar";

//Footer
import BaddFooter from "../../components/BaddFooter";

//Contact
import NewsletterForm from '../../components/NewsletterForm';

//Globals
import GLOBALS from "../globals.json";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect'
};

export default function Connect() {
  return (
    <div className={styles.page}>
      <BaddNavbar />
      <main className={styles.main}>

        <section className="contact-us bg-body">

          <div className="section-content">
            <div className="row">
              <div className="general-content col-md-4">

                  <div className="headline-content">
                    <h2 className="fs-1">
                      <a id="section-contact">Connect with Us</a>
                    </h2>
                  </div>

                  <p className="fs-4">
                    Would you like to start a conversation with 
                    Brothers Against Drug Deaths? 
                  </p>

                  <p className="fs-4">
                    Email our team at <nobr><a href="mailto:contact@badd-sf.org">contact@badd-sf.org</a></nobr> with any questions or concerns.
                  </p>

                  <p className="fs-4">  
                    Reach us by phone: <br/>
                    <a href={`tel:${GLOBALS.GLOBAL_PHON1B}`}>{GLOBALS.GLOBAL_PHON1B}</a><br/>
                    <a href={`tel:${GLOBALS.GLOBAL_PHON1A}`}>{GLOBALS.GLOBAL_PHON1A}</a><br/>
                    <br/>
                  </p>

                  <p className="fs-4">
                    <a href="https://www.facebook.com/people/BADD-Brothers-Against-Drug-Deaths/61575812852358/" className="btn btn-primary social-button" target="_blank">
                      <span>Follow us on facebook</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg>
                    </a>
                  </p>

              </div>
              <div className="form-content col-md-1">

              </div>
              <div className="form-content col-md-7">
                <div className="contact-form p-3 p-md-4 border rounded-3">
                  <NewsletterForm region="na2" portalId="242644240" formId="095dd0cf-d901-4366-987b-22307965e1c3" />
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
