"use client";

//Globals
import GLOBALS from "../../app/globals.json";

//CookieConsent
import CookieConsent from "react-cookie-consent";

const BaddFooter = () => {

	return (
		<footer className="bg-dark text-muted p-5">
			<div className="container">
				<p className="float-right">
					<a href="#">Back to top</a>
				</p>
				<p>
					{GLOBALS.COPYRIGHT}
					<br/>
					{GLOBALS.GLOBAL_FEDEIN !== "" ? 
						`BADD is a 501(c)(3) nonprofit organization, Federal Tax ID #${GLOBALS.GLOBAL_FEDEIN}.` : 
						`BADD is a nonprofit organization, 501(c)(3) and charitible registration status pending.`
					}
				</p>
				<p></p>
			</div>

			<CookieConsent
	          location="bottom"
	          buttonText="Accept"
	          cookieName="myWebsiteCookieConsent"
	          expires={365}
	          onAccept={() => {
	            console.log("Cookies accepted!");
	          }}
	          style={{ background: "#2B373B" }}
	          buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
	        >
	          This website uses cookies to enhance user experience.
	        </CookieConsent>
		</footer>


    );

};

export default BaddFooter;
