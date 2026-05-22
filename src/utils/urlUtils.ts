export const normalizeImageUrl = (input:string) : string => {

  const url = input.trim();

  if (!url.includes('http')) {
    return safeImageUrl(url,true) as string;
  }

	const urlObj : URL = new URL(input);

	if (urlObj && urlObj.hasOwnProperty('path')) {
		return safeImageUrl('https://badd-sf.org' + urlObj.pathname, false) as string;
	} else {
		return safeImageUrl(url, false) as string;
	}
};

export const safeUrl = (input:string) : string => { 

  const DEFAULT_URL = 'https://badd-sf.org';

  const ALLOWED_HOSTS = new Set([
    "cub.dpx.mybluehost.me",
    "www.badd-sf.org",
  ]);

  const trimmed = input.trim();

  // Reject obviously dangerous schemes before parsing
  if (/^(javascript|data|vbscript|file|blob):/i.test(trimmed)) {
    return DEFAULT_URL;
  }

  try {
    const url = new URL(trimmed);

    // Only allow http/https
    if (!["http:", "https:"].includes(url.protocol)) {
      return DEFAULT_URL;
    }

    // Only allow trusted domains
    if (!ALLOWED_HOSTS.has(url.hostname)) {
      return DEFAULT_URL;
    }

    return url.href;
  } catch {
    return DEFAULT_URL;
  }
};

export const safeImageUrl = (input:string, isRelative:boolean) : string => {
  const ALLOWED_HOSTS = new Set([
    "cub.dpx.mybluehost.me",
    "www.badd-sf.org",
  ]);

  const DEFAULT_IMAGE = "/badd-assets/graphics/fallback-image.jpeg";

  if (typeof input !== "string") return DEFAULT_IMAGE;

  const trimmed = input.trim();

  // Reject obviously dangerous schemes before parsing
  if (/^(javascript|data|vbscript|file|blob):/i.test(trimmed)) {
    return DEFAULT_IMAGE;
  }

  if (isRelative) {
    if (!/\.(jpe?g|png|webp|gif|avif|svg)$/i.test(trimmed)) {
      return DEFAULT_IMAGE;
    }
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    // Only allow http/https
    if (!["http:", "https:"].includes(url.protocol)) {
      return DEFAULT_IMAGE;
    }

    // Only allow trusted domains
    if (!ALLOWED_HOSTS.has(url.hostname)) {
      return DEFAULT_IMAGE;
    }

    // Optional: only allow image extensions
    if (!/\.(jpe?g|png|webp|gif|avif|svg)$/i.test(url.pathname)) {
      return DEFAULT_IMAGE;
    }

    return url.href;
  } catch {
    return DEFAULT_IMAGE;
  }
}
