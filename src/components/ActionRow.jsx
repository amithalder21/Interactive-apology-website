import { useState } from "react";
import { HUG_MESSAGE, callLink, whatsappLink } from "../data/contact";

const linkClass =
  "rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream";

// Nothing is sent from this page. Each action hands off to her own WhatsApp or
// dialer with the text already filled in, so she sees it before it goes.
const ActionRow = ({ withReply = true }) => {
  const [reply, setReply] = useState("");

  return (
    <div className="mt-8">
      {withReply && (
        <label className="block text-left">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-marigold/80">
            Say it back, in your own words
          </span>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows={3}
            placeholder="Optional. Whatever you want to say."
            className="w-full resize-none rounded-2xl border-0 bg-night/50 p-4 text-base text-cream ring-1 ring-cream/20 placeholder:text-cream/35 focus:outline-none focus:ring-2 focus:ring-marigold/70"
          />
        </label>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappLink(reply.trim())}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} bg-gradient-to-r from-rose to-marigold text-night shadow-glow`}
        >
          Message me on WhatsApp
        </a>

        <a href={callLink} className={`${linkClass} text-cream/80 ring-1 ring-cream/25 hover:text-cream`}>
          Call me
        </a>

        <a
          href={whatsappLink(HUG_MESSAGE)}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} text-cream/80 ring-1 ring-cream/25 hover:text-cream`}
        >
          Send a hug to Ammy
        </a>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-cream/40">
        Each of these opens your own app with the message ready. Nothing is sent until you send it.
      </p>
    </div>
  );
};

export default ActionRow;
