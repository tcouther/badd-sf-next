export default function ImageLoader({ src }) {

  /*
  For static builds:
  This is used by next config,
  resolving image paths to the correct static path
  */

  const startsWithSlash = (str)=>{
    if (str && str.length > 0) {
      return str[0] === '/';
    }
    return false;
  };

  const domain = "https://www.badd-sf.org";

  if ( src === "" ) {
    return "";
  } else {
    return ( startsWithSlash(src) ) ? `${domain}${src}` : `${domain}/${src}`;
  }
}
