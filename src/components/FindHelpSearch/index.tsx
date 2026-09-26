"use client";

type FindHelpSearchProps = {
  width: string;
};

const fhConfig:Record<string, string> = {
  ref : "ref=www.badd-sf.org",
  text_search : "text_search=true",
  btn_color : "btn_color=E35E13",
  btn_text : "btn_text=GET%20HELP",
  btn_text_color : "btn_text_color=FFFFFF",
  postal_placeholder : "postal_placeholder=Enter%20ZIP%20code",
  search_placeholder : "search_placeholder=What%20help%20do%20you%20need%3F",
  org : "org=BADD%20-%20Brothers%20Against%20Drug%20Deaths"
};

const fhQueryString:string = '?' +
  fhConfig.ref + '&' +
  fhConfig.text_search + '&' +
  fhConfig.btn_color + '&' +
  fhConfig.btn_text + '&' +
  fhConfig.btn_text_color + '&' +
  fhConfig.postal_placeholder + '&' +
  fhConfig.search_placeholder + '&' +
  fhConfig.org;

const fhLink:string = "https://www.findhelp.com/widget/v2/communitydemo";

export default function FindHelpSearch({ width }: FindHelpSearchProps) {
  return (
    <div className="findhelp-search">
      <iframe
        className="findhelp-search-embed"
        src={fhLink + fhQueryString}
        title="Search Findhelp for local community resources"
        width={width}
        height="240"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
        sandbox="allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox">
      </iframe>
    </div>
  );
}
