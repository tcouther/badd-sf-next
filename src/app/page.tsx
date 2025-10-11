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
        

        <section className="jumbotron p-3 p-md-5 bg-light">
          <div className="section-content">
            <div className="row align-items-center">
              <div className="col-md-5 offset-lg-1 offset-md-none">
                <a className="logo-frame" href="#" target="_blank">
                  <Image
                    src="/badd-assets/logos/brothers-against-drug-deaths-logo-web.png"
                    width={1000}
                    height={1300}
                    alt="BADD Brother Against Drug Deaths Logo"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="p-2">
                  <h1 className="display-4 font-italic logo-color-text" style={{display: 'none'}}>Brothers Against Drug Deaths</h1>
                  
                  <p className="lead my-4 font-weight-bold fs-3">
                    <b>
                      Recovery advocacy, mental health support, and justice, for those battling addiction and mental illness, 
                      particularly within Black and underserved communities. 
                    </b>
                  </p>

                  <hr/>

                  <p className="lead my-4 fs-5">
                    <Link href="/theris-law" className="btn btn-primary btn-lg">
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
                    </svg>
                    <span>&nbsp; Learn About Theris’ Law &nbsp;</span>
                    &nbsp;
                    </Link>
                  </p>

                  
                  
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
              </div>
            </div>
          </div>
        </section>


        <section className="section-connect bg-black">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 general-content text-white fs-4">
                <p>Brother’s Against Drug Deaths Presents...</p>
                <h2 className="fs-1">Beyond My Family’s Reach</h2>

                <p className="pt-4">
                  Join BADD for the theatrical world premier of 
                  this emotionally charged play. Get Free Tickets Now!
                </p>
                <p className="pt-3">
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach" className="btn btn-warning btn-md me-2 mb-1">2:00pm Show</Link>
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach7" className="btn btn-warning btn-md mb-1">7:00pm Show</Link>
                </p>

                <div className="py-4 d-block d-sm-none">
                  <Image
                  src="/badd-assets/events/2025-play-beyond-my-familys-reach-wide.jpeg"
                  layout="responsive"
                  width={1024} // Original image width
                  height={1536} // Original image height
                  alt="Promotional Photo Beyond My Family’s Reach Play"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                />
                </div>
                
                <p className="pt-3">
                  Through raw dialogue, soul-stirring scenes, and a compassionate lens, 
                  Beyond My Family’s Reach calls us to witness the strength it takes to heal-and the power of family, 
                  love, and community to try.
                </p>
                <p>
                  Saturday, November 22, 2025 
                  <br/>Ruth Williams Bayview Opera House
                  <br/>
                </p>




                <div className="col-lg-10 col-md-8 col-sm-8">
                  <div className="row">
                    <div className="col-md-12 p-3">
                      <small>Made possible by...</small>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center">

                    <div className="col-4 px-3 py-2 brightness-3">
                      <Link href="https://www.neighborsbettersf.com/" target="_blank">
                      <Image
                        src="/badd-assets/logos/neighbors-logo.svg"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="Neighbors for a Better San Francisco is an organization of dedicated San Franciscans committed to public safety, serious solutions to homelessness"
                      />
                      </Link>
                    </div>
                    
                    <div className="col-4 px-5 py-2">
                      <Link href="https://www.stlrentertainment.com/" target="_blank">
                      <Image
                        src="/badd-assets/logos/stlr-logo-brand-vert-web.png"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="STLR Entertainment, We Book Premier Talent"
                      />
                      </Link>
                    </div>
                    
                    <div className="col-4 px-5 py-2">
                      <Link href="https://www.avenuegreenlightsf.org/" target="_blank">
                      <Image
                        src="/badd-assets/logos/logo-aveenue-greenlight.png"
                        layout="responsive"
                        width={100} // Original image width
                        height={100} // Original image height
                        alt="Avenue Greenlight, provides funding through grants to merchant organizations and other community groups"
                      />
                      </Link>
                    </div>
                  </div>
                </div>




              </div>
              <div className="col-lg-1">
              </div>

              <div className="col-lg-5 col-sm-9">
                <Image
                  src="/badd-assets/events/2025-play-beyond-my-familys-reach-pic.jpeg"
                  layout="responsive"
                  width={1024} // Original image width
                  height={1536} // Original image height
                  alt="Promotional Photo Beyond My Family’s Reach Play"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="section-connect bg-body">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">
                Connect with Us
              </h2>
            </div>
            <div className="row">

              <div className="col-lg-12 general-content">
                <p className="fs-4">
                  Reach out and connect with us 

                  <br/>or get involved at our next <Link href="/events">community event</Link>.
                </p>
              </div>

              <div className="col-md-12 py-2"></div>

            </div>
            <div className="row">

                <div className="col-lg-12 col-lg-12">
                  <div className="general-content d-flex flex-column flex-md-row">


                    <div className="card card-slim me-2 mb-2">
                      <h3 className="fs-5">
                        The Official BADD Mailing List.
                      </h3>
                      <BaddModal 
                        id="badd-newletter-modal" 
                        cta="Sign Up Now" 
                        ctaClass="btn btn-warning my-1 mw-50"
                        headline="Mailing List Sign Up"
                      >
                        <div><NewsletterForm region="na2" portalId="242644240" formId="095dd0cf-d901-4366-987b-22307965e1c3" /></div>
                      </BaddModal>
                    </div>


                    <div className="card card-slim me-2 mb-2">
                      <h3 className="fs-5">
                        Follow us on social media.
                      </h3>
                      <div>
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
                      </div>
                    </div>

                  </div>
                </div>

                

            </div>
          </div>

        </section>



        <section className="ourwork bg-light">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">
                BADD stands for 
                Brothers Against 
                Drug Deaths
              </h2>
            </div>
            <div className="row">

              <div className="col-md-7 col-lg-6 general-content fs-4">
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

              <div className="col-sm-9 col-md-4 col-lg-5">
                {/*
                  <Image
                  src="/badd-assets/graphics/badd-stands-for.jpeg"
                  width={1005}
                  height={1501}
                  className="rounded-3 img-full-width"
                  alt="This is a crisis, we need treatment, not punishment."
                  />
                */}

                <Image
                  src="/badd-assets/events/2025-international-overdose-awareness-day-photo-3.jpeg"
                  layout="responsive"
                  width={3024} // Original image width
                  height={4032} // Original image height
                  alt="Photo of BADD CEO and Co-Founder Theris L. Coats Sr. and Mayor Daniel Lurie together at San Francisco City Hall for international overdose awareness day"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                />

                {/*
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02LQGQWuv9TBhf315AhrS9LojFAFbFpCLGRBQRDUcvxNNg4yKCcgGM4GwKKfTtC1Dl%26id%3D61575812852358&width=500&show_text=true&height=704&appId" 
                  width="500" 
                  height="704" 
                  style={{border:'none', overflow:'hidden'}} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                */}
              </div>

            </div>
          </div>

        </section>


        <section className="ourwork bg-body">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">The Crisis & Taking Action</h2>
            </div>



            <div className="row">
              
              <div className="general-content col-md-12">

                <div className="row">

                  <div className="col-md-11">

                    <div className="row">
                      <div className="col-sm-9 col-md-4 col-lg-3">
                        <Image
                          src="/badd-assets/graphics/treatment-not-punishment.jpeg"
                          width={1024}
                          height={1536}
                          className="rounded-3 img-full-width"
                          alt="This is a crisis, we need treatment, not punishment."
                        />
                        <div className="py-4"></div>
                      </div>
                      <div className="col-sm-11 col-md-8 col-lg-9">
                        <h3 className="fs-2">
                          <strong>Our Young People Are Dying — And We’re Not Paying Attention</strong>
                        </h3>
                        <p className="fs-3">
                          There is a crisis hiding in plain sight. Mental illness and drug addiction are not just personal struggles—they are public health emergencies that are claiming the lives of our young people at alarming and disproportionate rates, especially in underrepresented communities.
                        </p>
                      </div>
                    </div>


                    <div className="py-4"></div>


                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="fs-2">
                          <strong>Taking Action</strong>
                        </h4>
                        <p className="py-1"></p>

                        <p className="fs-4">
                          BADD is taking action to end this crisis, supporting our communities, 
                          advocating for those battling addiction and mental illness. 
                        </p>
                        
                        <h5><Link href="/theris-law">Theris’ Law</Link></h5>
                        <p className="fs-4">
                          BADD is proposing new policy change with Theris’ Law, giving families legal pathways to intervene on behalf of loved ones incapacitated by addiction and mental illness.
                        </p>

                        <h5><Link href="/events/recovery-first-signing-5-23-2025">The&nbsp;Recovery&nbsp;First&nbsp;Ordinance</Link></h5>
                        <p className="fs-4">
                          BADD supports The&nbsp;Recovery&nbsp;First&nbsp;Ordinance. Sponsored by District 6 Supervisor Matt Dorsey, the legislation enshrines long-term remission through recovery 
                          as San Francisco’s primary substance use disorder policy goal.
                        </p>

                      </div>
                      

                    </div>

                    
                  </div>

                  
                </div>

                <div className="py-4"></div>

                <h3 className="fs-3">
                  <strong>The Facts of This Crisis</strong>
                </h3>

                <div className="py-2"></div>

                <div className="row">
                  <div className="col-sm-6 col-lg-3 general-content mb-3">
                    <p className="p-3 p-md-4 border rounded-3 h-100 bg-gradient-long">
                      <strong className="fs-5">Over 200% increase</strong>
                      <br/>
                      in drug overdose deaths among people aged 15–24 in the past decade.
                    </p>
                  </div>
                  <div className="col-sm-6 col-lg-3 general-content mb-3">
                    <p className="p-3 p-md-4 border rounded-3 h-100 bg-gradient-short">
                      <strong className="fs-5">Black American overdoses up more than 44%</strong>
                      <br/>
                      The highest increase in overdose death rates between 2019 and 2020, yet they are often the least likely to receive treatment.
                    </p>
                  </div>
                  <div className="col-sm-6 col-lg-3 general-content mb-3">
                    <p className="p-3 p-md-4 border rounded-3 h-100 bg-gradient-long">
                      <strong className="fs-5">1 in 5 youth live with a mental health condition</strong>
                      <br/>
                      But more than half go without any care. Many are misdiagnosed or ignored until it’s too late.
                    </p>
                  </div>
                  <div className="col-sm-6 col-lg-3 general-content mb-3">
                    <p className="p-3 p-md-4 border rounded-3 h-100 bg-gradient-short">
                      <strong className="fs-5">Suicide</strong>
                      <br/>
                      is now the second leading cause of death for those aged 10–34.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-12 p-4"></div>
            </div>

            <div className="row">
              <div className="general-content col-md-7 col-sm-12">
                <p className="fs-3">
                  <strong>This isn’t just a health issue. <br/>It’s a justice issue.</strong>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="general-content col-md-7 col-sm-12">
                <p className="fs-4">
                  It’s time to shift the conversation from punishment to treatment, advocacy, and prevention. We must invest in resources, provide trauma-informed care, and challenge the stigma that keeps too many suffering in silence.
                </p>
                <p className="fs-4">
                  BADD – Brothers Against Drug Deaths is here to speak up, stand up, and save lives.
                </p>
              </div>
              
              <div className="col-md-4 col-sm-10">
                <Image
                  src="/badd-assets/graphics/pano-girl-funeral.jpeg"
                  width={1920}
                  height={1280}
                  className="rounded-3 img-full-width photo-old"
                  alt="Drug overdose deaths memorials"
                />
              </div>
            </div>

          </div>

        </section>



        <section className="articles bg-light">

          <div className="section-content">
            <div className="headline-content">
              <h2 className="fs-1">News Articles</h2>
            </div>
            <div className="album articles">
              <Articles />
            </div>
          </div>

        </section>


      </main>
      <BaddFooter />
    </div>
  );
}
