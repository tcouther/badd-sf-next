"use client";

const GoFundMe = () => {
	
	const htmlContent = '<div class="gfm-embed" data-url="https://www.gofundme.com/f/support-badd-break-the-cycle-of-drug-deaths/widget/medium?sharesheet=undefined&attribution_id=sl:e37bcbd0-cfcc-4e09-8c9f-718132a067cd"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>';

	// 1. Just set HTML dangerously
	return (<div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />);
};

export default GoFundMe;