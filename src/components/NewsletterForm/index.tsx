"use client";

import {useEffect} from "react";
let formLoaded = false;

interface IProps {
	region : string;
	portalId : string;
	formId : string;
};
    
const NewsletterForm = (props:IProps) => {
    const { region, portalId, formId } = props;

    useEffect(() => {

    	if ( !formLoaded ) {

			formLoaded = true;

    		const script = document.createElement('script');
	        script.src='https://js.hsforms.net/forms/shell.js';
	        //script.src='https://js-na2.hsforms.net/forms/embed/242644240.js';

	        document.body.appendChild(script);

	        script.addEventListener('load', () => {
	            // @ts-expect-error we need to disable for
	            if (window.hbspt) {
	                // @ts-expect-error we need to disable for
	                window.hbspt.forms.create({
	                    region: region,
	                    portalId: portalId,
	                    formId: formId,
	                    target: '#hubspotForm'
	                })
	            }
	        });
    	}

    }, [formId,portalId,region]);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default NewsletterForm;