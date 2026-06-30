import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

//Globals
import GLOBALS from "./globals.json";

//Nav
import BaddNavbar from "../components/BaddNavbar";

//Footer
import BaddFooter from "../components/BaddFooter";

//Articles
import Articles from '../components/Articles';

//Modal
import BaddModal from '../components/BaddModal';

//Newsletter
import NewsletterForm from '../components/NewsletterForm';


export default function Home() {

  return (
    <div className={styles.page}>

      <BaddNavbar />
      <main className={styles.main}>
        

        <section className="jumbotron jumbotron-home p-3 p-md-5 bg-body">
          <div className="section-content">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5">
                <a className="logo-frame" href="#" target="_blank">
                  <Image
                    src="/badd-assets/logos/brothers-against-drug-deaths-logo-web.png"
                    width={1000}
                    height={1300}
                    alt="BADD Brother Against Drug Deaths Logo"
                    unoptimized={true}
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="p-2">
                  <h1 className="display-4 font-italic logo-color-text" style={{display: 'none'}}>Brothers Against Drug Deaths</h1>
                  
                  <p className="lead my-4 font-weight-bold fs-3">
                    <b>
                      Recovery advocacy, mental health support, and justice for people battling addiction and mental illness,
                      with support for families of addicts and underserved communities searching for drug use help, recovery resources,
                      and a path toward healing.
                    </b>
                  </p>

                  <hr/>

                  <p className="lead my-4 fs-5">
                    <Link href="/theris-law" className="btn btn-primary btn-lg">
                      &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
                      </svg>
                      <span>&nbsp;&nbsp; About Theris’ Law &nbsp;</span>
                      &nbsp;
                    </Link>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-give bg-body">
          <div className="section-content">

            <div className="row justify-content-center col-12 col-md-10 col-lg-9 m-auto">
              <div className="col-md-12 text-start">
                
                <span className="text-primary fw-bold text-uppercase">
                  Voices Unmuted
                </span>
                <h2 className="display-5 fw-bold mb-4"> Support Group</h2> 

              </div>
            </div>

            <div className="row justify-content-center col-12 col-md-10 col-lg-9 m-auto">
              <div className="col-md-6 text-start">
                <p className="fs-4"> 
                  On July 20th, BADD is launching Voices Unmuted. 
                  A new virtual support group built specifically for young men 
                  between the ages of 18 to 36 dealing with mental health and substance abuse. 
                </p>
                <div className="card card-slim mb-4 mt-4 sm-w-100 w-40 fs-4">
                    Register Today <strong>
                      <a href="tel:1-833-292-2233" className="text-nowrap">1-833-292-2233</a>
                    </strong>
                </div>
                <p className="fs-4"> 
                  If you’re dealing with mental health struggles or substance use, or you just 
                  need a judgment-free space to heal with brothers who actually get it, this is your circle. 
                </p>
                <br/><br/>
              </div> 
              <div className="col-md-6"> 
                <div className="portrait-video rounded overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/ZLejsh_vRFk"
                    title="Voices Unmuted"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div> 
              </div>
            </div>
          </div>
        </section>




        <section className="section-hr bg-body">
          <div className="section-content">
            <hr className="m-auto"/>
          </div>
        </section>


        <section className="section-give bg-body">
          <div className="section-content">
            <h2 className="fs-1">
               Support BADD Fundraisers
            </h2>
            <p className="fs-4 sm-w-100 w-75 m-auto my-4">
              With your help, we can save lives, support families, and transform our communities for the better.
            </p>
            <div className="row justify-content-center my-3">
              <div className="col-9 col-md-3 col-lg-2 text-center">
                <Link href={GLOBALS.GLOBAL_FUNDME} 
                  className="btn btn-outline-success btn-lg my-2 w-100" 
                  target="_blank" 
                  aria-label="support BADD with out official Go Fund Me campaign"
                >Gofundme</Link>
              </div>
              <div className="col-9 col-md-3 col-lg-2 text-center">
                <Link href={GLOBALS.GLOBAL_PAYPAL} 
                  className="btn btn-lg btn-outline-primary btn my-2 w-100" 
                  target="_blank" 
                  aria-label="support BADD with Pay Pal"><Image
                  src="/badd-assets/logos/pp-button-logo.svg"
                  width={17}
                  height={17}
                  alt=""
                  aria-hidden="true"
                  className="me-2"
                  unoptimized={true}
                />PayPal</Link>
              </div>
              <div className="col-9 col-md-5 col-lg-4 text-center">
                <Link href={GLOBALS.GLOBAL_SEESCANDIES} 
                  className="btn btn-outline-danger brown btn-lg  my-2 w-100" 
                  target="_blank" 
                  aria-label="See’s Candies Fundraiser"
                >See’s Candies Fundraiser</Link>
              </div>
            </div>

            {GLOBALS.GLOBAL_FEDEIN !== "" ? 
              (<>
                <p>
                  <small>BADD’s Federal Tax ID #{GLOBALS.GLOBAL_FEDEIN}</small>
                </p>
                </>
              ) : 
              ('')
            }
            
          </div>
        </section>


        <section className="section-hr bg-body">
          <div className="section-content">
            <hr/>
          </div>
        </section>
        


        <section className="section-connect bg-body">

          <div className="section-content">
            <h2 className="fs-1">
              Connect with Us
            </h2>
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8">
                <p className="fs-4 my-4">
                  Reach out for family addiction support, drug use help, recovery resources, or support groups for family members of addicts.
                  You can also get involved at our next <Link href="/events" className="text-nowrap">community event</Link>.
                </p>
                <p className="fs-4 my-4">
                  Call BADD-SF at <a href={`tel:${GLOBALS.GLOBAL_PHON1A}`} className="text-nowrap">{GLOBALS.GLOBAL_PHON1B}</a>
                  {' '}(<a href={`tel:${GLOBALS.GLOBAL_PHON1A}`} className="text-nowrap">{GLOBALS.GLOBAL_PHON1A}</a>) to start a conversation.
                </p>
              </div>
            </div>


            <div className="row justify-content-center my-3">
              <div className="col-12 col-md-6 col-lg-5 text-center">
                <div className="card card-slim me-2 mb-2 sm-w-100 w-40 bg-light">
                  <h3 className="fs-5">
                    The Official BADD Mailing List.
                  </h3>
                  <BaddModal 
                    id="badd-newletter-modal" 
                    cta="Sign Up Now" 
                    ctaClass="btn btn-warning my-1 mx-auto w-auto px-4"
                    headline="Mailing List Sign Up"
                  >
                    <div><NewsletterForm region="na2" portalId="242644240" formId="095dd0cf-d901-4366-987b-22307965e1c3" /></div>
                  </BaddModal>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 text-center">
                <div className="card card-slim me-2 mb-2 sm-w-100 w-40 bg-light">
                  <h3 className="fs-5">
                    Follow us on social media.
                  </h3>
                  <div>
                    <a aria-label="BADD on facebook" href={GLOBALS.SOCIAL_MEDIA.FACEBOOK} className="btn btn-primary social-button my-1 me-2" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg> <span aria-hidden="true"></span>
                    </a>
                    {' '}
                    <a aria-label="BADD on youtube" href={GLOBALS.SOCIAL_MEDIA.YOUTUBE} className="btn btn-danger social-button my-1 me-2" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                      </svg> <span aria-hidden="true"></span>
                    </a>
                    {' '}
                    <a aria-label="BADD on X" href={GLOBALS.SOCIAL_MEDIA.TWITTER} className="btn btn-secondary social-button my-1 me-2" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg> <span aria-hidden="true"></span>
                    </a>
                    {' '}
                    <a aria-label="BADD on LinkedIn" href={GLOBALS.SOCIAL_MEDIA.LINKEDIN} className="btn btn-primary social-button my-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                      </svg> <span aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>



        <section className="ourwork bg-light">

          <div className="section-content">
            <h2 className="fs-1">
              BADD stands for 
              Brothers Against 
              Drug Deaths
            </h2>
            <div className="row py-5 justify-content-center">

              <div className="col-11 col-md-6 col-lg-5 text-sm-center text-md-start fs-4">
                <p>
                  “BADD is a ministry born out of the pain of losing my son, 
                  TC, to addiction while he was in custody. 
                  We believe God can turn grief into purpose, 
                  so we’re standing in the gap for families battling addiction, 
                  mental illness, and injustice—especially in our Black and 
                  underserved communities.
                </p>
                <p>
                  We advocate for healing over punishment, 
                  support families in crisis, and help people coming out of 
                  incarceration find a path to restoration.
                </p>
                <p>
                  We lean on 
                  Proverbs 16:3: ‘Commit to the Lord whatever you do, and He will establish your plans.’
                </p>
                <p>
                  BADD is our commitment—and we’re trusting God to use it for change.”
                </p>
                <p>Theris L. Coats, Sr.<br/>CEO of BADD</p>
              </div>

              <div className="col-md-1 py-4"></div>

              <div className="col-sm-7 col-md-4 col-lg-5">
                <Image
                  src="/badd-assets/events/2025-international-overdose-awareness-day-photo-3.jpeg"
                  width={3024} // Original image width
                  height={4032} // Original image height
                  alt="Photo of BADD CEO and Co-Founder Theris L. Coats Sr. and Mayor Daniel Lurie together at San Francisco City Hall for international overdose awareness day"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                  unoptimized={true}
                />
              </div>

            </div>
          </div>

        </section>


        <section className="crisis bg-body">

          <div className="section-content">


            <div className="row">
              <h2 className="fs-1">The Crisis & Taking Action</h2>
            </div>

            <div className="py-1"></div>
            <div className="row my-5">
              
              <div className="col-12">

                    <div className="row justify-content-center">
                      <div className="col-7 col-md-3 col-lg-3">
                        <div className="mx-4">
                        <Image
                          src="/badd-assets/graphics/treatment-not-punishment.jpeg"
                          width={1024}
                          height={1536}
                          className="rounded-3 img-full-width"
                          alt="This is a crisis, we need treatment, not punishment."
                          unoptimized={true}
                        />
                        </div>
                        <div className="py-4"></div>
                      </div>
                      <div className="col-12 col-md-8 col-lg-8 text-sm-center text-md-start">
                        <h3 className="fs-2">
                          <strong>Our Young People Are Dying — And We’re Not Paying Attention</strong>
                        </h3>
                        <div className="py-2"></div>
                        <p className="fs-3">
                          There is a crisis hiding in plain sight. Mental illness and drug addiction are not just personal struggles—they are public health emergencies that are claiming the lives of our young people at alarming and disproportionate rates, especially in underrepresented communities.
                        </p>
                        
                      </div>
                    </div>


                    <div className="py-4"></div>


                    <div className="row my-5 justify-content-around">
                      <div className="col-lg-8">
                        <h4 className="fs-2">
                          <strong>Taking Action</strong>
                        </h4>
                        <p className="py-2"></p>

                        <p className="fs-4">
                          BADD is taking action to end this crisis, supporting our communities, 
                          advocating for those battling addiction and mental illness. 
                        </p>

                        <p className="py-2"></p>
                        
                        <h5><Link href="/theris-law" className="cta fs-4">Theris’ Law</Link></h5>
                        <p className="fs-4">
                          BADD is proposing new policy change with Theris’ Law, giving families legal pathways to intervene on behalf of loved ones incapacitated by addiction and mental illness.
                        </p>

                        <p className="py-2"></p>

                        <h5><Link href="/events/recovery-first-signing-5-23-2025" className="cta fs-4">The&nbsp;Recovery&nbsp;First&nbsp;Ordinance</Link></h5>
                        <p className="fs-4">
                          BADD supports The&nbsp;Recovery&nbsp;First&nbsp;Ordinance. Sponsored by District 6 Supervisor Matt Dorsey, the legislation enshrines long-term remission through recovery 
                          as San Francisco’s primary substance use disorder policy goal.
                        </p>

                      </div>
                      

                    </div>

                    

                <div className="py-4"></div>

                <h3 className="fs-3">
                  <strong>The Facts of This Crisis</strong>
                </h3>



                <div className="row justify-content-center py-5">
                  <div className="col-sm-5 col-lg-3 mb-3">
                    <div className="px-3 py-4 p-md-4 border rounded-3 h-100 bg-gradient-long">
                      <h4 className="py-3 fs-5 dark-red-text">Over 200% increase</h4>
                      <p>
                      in drug overdose deaths among people aged 15–24 in the past decade.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-3 mb-3">
                    <div className="px-3 py-4 p-md-4 border rounded-3 h-100 bg-gradient-short">
                      <h4 className="py-3 fs-5 dark-red-text">Black American overdoses up more than 44%</h4>
                      <p>
                      The highest increase in overdose death rates between 2019 and 2020, yet they are often the least likely to receive treatment.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-3 mb-3">
                    <div className="px-3 py-4 p-md-4 border rounded-3 h-100 bg-gradient-long">
                      <h4 className="py-3 fs-5 dark-red-text">1 in 5 youth live with a mental health condition</h4>
                      <p>
                      But more than half go without any care. Many are misdiagnosed or ignored until it’s too late.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-3 mb-3">
                    <div className="px-3 py-4 p-md-4 border rounded-3 h-100 bg-gradient-short">
                      <h4 className="py-3 fs-5 dark-red-text">Suicide</h4>
                      <p>
                      is now the second leading cause of death for those aged 10–34.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-12 p-4"></div>
            </div>

            <div className="row">
              <div className="col-12">
                <p className="fs-3">
                  <strong>This isn’t just a health issue. <br/>It’s a justice issue.</strong>
                </p>
              </div>
            </div>



            <div className="row py-4 justify-content-around">
              <div className="col-12 d-block d-lg-none">
                <div className="crop-image-y-15">
                  <Image
                    src="/badd-assets/graphics/pano-girl-funeral.jpeg"
                    width={1920}
                    height={1280}
                    className="img-full-width photo-old"
                    alt="Drug overdose deaths memorials"
                    unoptimized={true}
                  />
                </div>
                <div className="py-3"></div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 text-sm-center text-md-start">
                <p className="fs-4">
                  It’s time to shift the conversation from punishment to treatment, advocacy, and prevention. We must invest in resources, provide trauma-informed care, and challenge the stigma that keeps too many suffering in silence.
                </p>
                <p className="fs-4">
                  BADD – Brothers Against Drug Deaths is here to speak up, stand up, and save lives.
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="mx-4 d-none d-lg-block">
                  <Image
                    src="/badd-assets/graphics/pano-girl-funeral.jpeg"
                    width={1920}
                    height={1280}
                    className="img-full-width photo-old"
                    alt="Drug overdose deaths memorials"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>



          </div>
          

        </section>



        <section className="articles bg-light">

          <div className="section-content">
            <div className="row">
              <h2 className="fs-1">News Articles</h2>
            </div>
            <div className="album articles my-5">
              <Articles />
            </div>
          </div>

        </section>


      </main>
      <BaddFooter />
    </div>
  );
}
