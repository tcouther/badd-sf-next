export const normalizeImageUrl = (input) : string => {

	const url = safeImageUrl(input);

	const urlObj : URL = new URL(url);

	if (urlObj && urlObj.hasOwnProperty('path')) {
		return 'https://badd-sf.org' + urlObj.path as string;
	} else {
		return url as string;
	}
};

export const safeImageUrl = (input) : string => {
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
