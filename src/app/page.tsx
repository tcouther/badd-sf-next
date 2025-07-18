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
                    layout="responsive"
                    width={1000}
                    height={1300}
                    alt="BADD Brother Against Drug Deaths Logo"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="p-2">
                  <h1 className="display-4 font-italic logo-color-text" style={{display: 'none'}}>Brothers Against Drug Deaths</h1>
                  
                  <p className="lead my-3 font-weight-bold fs-3">
                    <b>
                      Our mission is to advocate for those battling addiction and mental illness, 
                      particularly within Black and underserved communities. 
                    </b>
                  </p>

                  <p className="lead my-3 fs-5">
                    <Link href="/theris-law" className="btn btn-primary">&nbsp; About Theris’ Law &nbsp;</Link>
                  </p>

                  <p className="fs-5">
                    Reach out and <Link href="/connect" aria-label="connect with BADD">connect with us</Link>, 
                    <br/>or follow us on social media.
                  </p>
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

              <div className="col-md-7 col-lg-8 general-content fs-4">
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


              <div className="col-sm-9 col-md-4 col-lg-3">
                <Image
                src="/badd-assets/graphics/badd-stands-for.jpg"
                layout="responsive"
                width={1005}
                height={1501}
                className="rounded-3"
                alt="This is a crisis, we need treatment, not punishment."
                />
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


                  <div className="col-lg-12">
                    <h3 className="fs-2">
                      <strong>Our Young People Are Dying — And We’re Not Paying Attention</strong>
                    </h3>
                  </div>

                  <div className="py-3"></div>


                  {/* 
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-11">
                        <iframe 
                        width="335" 
                        height="600" 
                        src="https://www.youtube.com/embed/oaG3_QhioTg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" allowfullscreen></iframe>
                        https://youtube.com/shorts/oaG3_QhioTg?si=bSeUGpcK-jpQgqnJ 
                      </div>
                      <div className="col-md-1 py-4"></div>
                    </div>
                  </div>
                  */}

                  <div className="col-md-11">
                    <p className="fs-4">
                      There is a crisis hiding in plain sight. Mental illness and drug addiction are not just personal struggles—they are public health emergencies that are claiming the lives of our young people at alarming and disproportionate rates, especially in underrepresented communities.
                    </p>

                    <div className="py-2"></div>

                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="fs-2">
                          <strong>Taking Action</strong>
                        </h4>
                        <p className="py-1"></p>

                        <p className="fs-4">
                          BADD is taking action to end this crisis, supporting our communities, advocating for those battling addiction and mental illness, and  
                          policies like <Link href="/events#event-recovery-first-signing-5-23-2025">The&nbsp;Recovery&nbsp;First&nbsp;Ordinance</Link>. 
                        </p>
                        <div className="py-2"></div>
                      </div>


                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Image
                          src="/badd-assets/graphics/treatment-not-punishment.png"
                          layout="responsive"
                          width={1024}
                          height={1536}
                          className="rounded-3"
                          alt="This is a crisis, we need treatment, not punishment."
                        />
                        <div className="py-4"></div>
                      </div>
                      <div className="col-sm-6 col-md-8 col-lg-7">
                        

                        <p className="fs-4">
                          BADD is proposing new policy change with <Link href="/theris-law">Theris’ Law</Link>, giving families legal pathways to intervene on behalf of loved ones incapacitated by addiction and mental illness.
                        </p>

                        <p className="fs-4">
                          Reach out and <Link href="/connect" aria-label="connect with BADD">Connect with us</Link>, 
                          
                          or join us at our next <Link href="/events">community event or rally</Link>.
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
              <div className="col-md-12 p-5"></div>
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
              
              <div className="col-md-4 col-sm-12">
                <Image
                  src="/badd-assets/graphics/pano-girl-funeral.JPG"
                  layout="responsive"
                  width={1920}
                  height={1280}
                  className="rounded-3"
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
