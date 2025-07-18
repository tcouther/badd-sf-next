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
              <div className="general-content col-md-5">

                  <div className="headline-content">
                    <h2 className="fs-1">
                      <a id="section-contact">Connect with Us</a>
                    </h2>
                  </div>

                  <p className="fs-4">
                    {GLOBALS.ADDRESS.NAME}<br/>
                    {GLOBALS.ADDRESS.LINE1}<br/>
                    {GLOBALS.ADDRESS.LINE2}
                  </p>

                  <hr className="my-5" />

                  <h3>
                    Follow us on Social Media
                  </h3>
                  <p>
                    <a aria-label="BADD on facebook" href={GLOBALS.SOCIAL_MEDIA.FACEBOOK} className="btn btn-primary social-button my-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg> <span aria-hidden="true">Facebook</span>
                    </a>
                    {' '}
                    <a aria-label="BADD on youtube" href={GLOBALS.SOCIAL_MEDIA.YOUTUBE} className="btn btn-danger social-button my-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                      </svg> <span aria-hidden="true">Youtube</span>
                    </a>
                    {' '}
                    <a aria-label="BADD on X" href={GLOBALS.SOCIAL_MEDIA.TWITTER} className="btn btn-secondary social-button my-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>
                    </a>
                  </p>

                  <hr className="my-5" />

                  <h3>
                    Start a Conversation
                  </h3>

                  <p className="fs-4">
                    Email our team at <a href="mailto:contact@badd-sf.org" className="text-nowrap">contact@badd-sf.org</a> with any questions or concerns.
                  </p>

                  <p className="fs-4">  
                    Reach us by phone: <br/>
                    <a href={`tel:${GLOBALS.GLOBAL_PHON1B}`}>{GLOBALS.GLOBAL_PHON1B}</a><br/>
                    <a href={`tel:${GLOBALS.GLOBAL_PHON1A}`}>{GLOBALS.GLOBAL_PHON1A}</a><br/>
                    <br/>
                  </p>



              </div>
              <div className="form-content col-md-1">
                <div className="py-3"></div>
              </div>
              <div className="form-content col-md-6">
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
