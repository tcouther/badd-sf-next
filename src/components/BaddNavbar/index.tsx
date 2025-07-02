"use client";

import Link from "next/link";


const BaddNavbar = () => {

	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Website Navigation">
		
		<div className="container-fluid">
			<Link className="navbar-brand" href="/"><span className="navbar-brand-background"></span><span className="navbar-brand-foreground short-title d-md-none">BADD</span><span className="navbar-brand-foreground d-none d-md-block">BROTHERS AGAINST DRUG DEATHS</span></Link>
			<button 
			className="navbar-toggler" 
			type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarsExample07XL" 
			aria-controls="navbarsExample07XL" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExample07XL">
				<ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link" href="/events">Events</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/who-we-are">Who We Are</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/connect">Connect</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/give">Give</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    );

};

export default BaddNavbar;
