export const BRAND = "THE UAE SAFARI";
export const TAGLINE = "Beyond Roads. Beyond Limits.";
export const WEBSITE = "theuaesafari.com";
export const PHONE_DISPLAY = "+971 54 285 9030";
export const PHONE_RAW = "971542859030";
export const INSTAGRAM = "@theuaesafari";
export const INSTAGRAM_URL = "https://instagram.com/theuaesafari";
export const AREAS = "Dubai & Sharjah";

export function whatsappLink(message = "Hello THE UAE SAFARI, I would like to book a Dubai desert safari.") {
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;
}
