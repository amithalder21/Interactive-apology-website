// Country code and number only, no plus or spaces, which is what wa.me expects.
const WHATSAPP_NUMBER = "919818335778";
const TEL = "+919818335778";

// She reviews and sends inside WhatsApp herself. Nothing leaves this page on
// its own, and nothing is stored anywhere.
export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const callLink = `tel:${TEL}`;

export const HUG_MESSAGE = "Sending you a hug, Ammy.";
