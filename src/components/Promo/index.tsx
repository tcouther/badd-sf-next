"use client";
import Link from "next/link";
import Image from "next/image";

const Promo = () => {
	
	return (<section className="section-beyond bg-black">
          <div className="section-content">
            <div>
              <p className="fs-4 text-white">Brother’s Against Drug Deaths Presents...</p>
              <h2 className="fs-1">Beyond My Family’s Reach</h2>
            </div>
            <div className="row my-5 justify-content-center">
              


              <div className="col-lg-10 text-white fs-4">
                <p className="pt-4 px-5">
                  Join BADD for the theatrical world premier of 
                  this emotionally charged play. 
                  Get Free Tickets Now!
                </p>
                <p className="pt-3">
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach" className="btn btn-outline-warning btn-md me-2 mb-1">2:00pm Show</Link>
                  <Link href="https://tinyurl.com/BeyondMyFamilysReach7" className="btn btn-outline-warning btn-md mb-1">7:00pm Show</Link>
                </p>
              </div>
              <div className="col-lg-6 text-white fs-4">
                <div className="py-4">
                  <Image
                  src="/badd-assets/events/2025-play-beyond-my-familys-reach-wide.jpeg"
                  width={1024} // Original image width
                  height={1536} // Original image height
                  alt="Promotional Photo Beyond My Family’s Reach Play"
                  aria-hidden="true"
                  className="rounded-3 img-full-width"
                  />
                </div>
              </div>
              <div className="col-11 col-lg-9 text-white fs-4">
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
              </div>



              <div className="col-lg-9 text-white fs-4">
                <div className="py-4"></div>
                <div className="p-3">
                  <small>Made possible by...</small>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-3 col-sm-3 col-md-2 py-2">
                    <Link href="https://www.stlrentertainment.com/" target="_blank">
                    <Image
                      src="/badd-assets/logos/stlr-logo-brand-vert-web.png"
                      width={100} // Original image width
                      height={80} // Original image height
                      alt="STLR Entertainment, We Book Premier Talent"
                      className="img-full-width"
                    />
                    </Link>
                  </div>
                  <div className="col-4 col-sm-4 col-md-3 py-2 brightness-3">
                    <Link href="https://www.neighborsbettersf.com/" target="_blank">
                    <Image
                      src="/badd-assets/logos/neighbors-logo.svg"
                      width={100} // Original image width
                      height={80} // Original image height
                      alt="Neighbors for a Better San Francisco is an organization of dedicated San Franciscans committed to public safety, serious solutions to homelessness"
                      className="img-full-width"
                    />
                    </Link>
                  </div>
                  <div className="col-3 col-sm-3 col-md-2 py-2">
                    <Link href="https://www.avenuegreenlightsf.org/" target="_blank">
                    <Image
                      src="/badd-assets/logos/logo-aveenue-greenlight.png"
                      width={100} // Original image width
                      height={80} // Original image height
                      alt="Avenue Greenlight, provides funding through grants to merchant organizations and other community groups"
                      className="img-full-width"
                    />
                    </Link>
                  </div>
                  <div className="col-7 col-sm-7 col-md-3 py-4">
                    <Link href="https://www.oldskoolcafe.org/" target="_blank">
                    <Image
                      src="/badd-assets/logos/old-skool-cafe-logo.jpg"
                      width={100} // Original image width 
                      height={80} // Original image height
                      alt="Old Skool Cafe, youth run supper club"
                      className="wtborder img-full-width"
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
	);
};

export default Promo;