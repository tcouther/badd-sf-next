import styles from "../page.module.css";

import Link from "next/link";

import Image from "next/image";

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
              <div className="general-content col-md-12">

                  <div className="headline-content">
                    <h2 className="fs-1">
                      Give<br/>
                      <span className="fs-3">Support the Fight Against Drug Deaths</span>
                    </h2>
                    <p className="lead fs-4">
                        <Link href={GLOBALS.GLOBAL_PAYPAL} className="btn btn-warning btn-lg my-2" target="_blank" aria-label="support BADD with Pay Pal"><Image
                          src="/badd-assets/logos/pp-button-logo.svg"
                          width={20}
                          height={20}
                          alt=""
                          aria-hidden="true"
                          className="me-2"
                        />Support BADD with PayPal</Link>
                    </p>
                    <div className="py-3"/>
                  </div>


                  <div className="row">
                    <div className="col-12">

                      <h3>Fundraising Campaigns</h3>
                      <div className="general-content d-flex flex-column flex-md-row">
                      

                        

                        <div className="card card-slim me-2 mb-2 sm-w-100 w-40">
                          <div>

                            <Image
                                src="/badd-assets/logos/gofundme-logo.svg"
                                width={220}
                                height={60}
                                alt=""
                                aria-hidden="true"
                                className="my-4"
                              />

                            <p className="lead">
                              <Link href={GLOBALS.GLOBAL_FUNDME} className="btn btn-success btn-lg my-2" target="_blank" aria-label="support BADD with Go Fund Me">Support BADD with GoFundMe</Link>
                            </p>

                            <p className="fs-4">Our very first fundraiser. With your help, we can reach our goal, save lives, support families, and transform our communities for the better.</p>

                          </div>
                        </div>

                        <div className="card card-slim me-2 mb-2 sm-w-100 w-40 sees-bg">
                          <div>

                              <Image
                                src="/badd-assets/logos/sees-logo.png"
                                width={180}
                                height={100}
                                alt=""
                                aria-hidden="true"
                                className="mb-2"
                              />


                            <p className="lead">
                              <Link href={GLOBALS.GLOBAL_SEESCANDIES} className="btn btn-brown btn-lg my-2" target="_blank" aria-label="See’s Candies Fundraiser">See’s Candies Fundraiser</Link>
                            </p>

                            
                            <p className="fs-4">Purchase your favorite See’s Candies while helping BADD reach it’s goal and contributing to the cause. Now isn’t that sweet!</p>

                            
                          </div>
                        </div>
                      </div>




                      <p className="py-5">
                        BADD is a 501(c)(3) nonprofit organization
                        <br/>
                        <small>BADD’s Federal Tax ID #{GLOBALS.GLOBAL_FEDEIN}</small>
                      </p>
                    </div>

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
