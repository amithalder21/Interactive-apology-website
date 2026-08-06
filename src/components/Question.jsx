import { useState } from "react";
import ActionRow from "./ActionRow";

// Two honest answers. "A little, still" is a real answer rather than a button
// that runs away from the cursor, so it gets a reply instead of a dead end.
const Question = ({ onNotAngry }) => {
  const [stillAngry, setStillAngry] = useState(false);

  return (
    <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
      <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
          One question
        </p>

        <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
          Are you still angry with me?
        </h2>

        <p className="mt-3 text-lg text-marigold/90 sm:text-xl">
          Or do you still miss your Bunny?
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onNotAngry}
            className="rounded-full bg-gradient-to-r from-rose to-marigold px-10 py-3.5 text-lg font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            I miss you more
          </button>

          <button
            type="button"
            onClick={() => setStillAngry(true)}
            className="rounded-full px-8 py-3.5 text-lg font-medium text-cream/70 ring-1 ring-cream/20 transition-colors hover:text-cream hover:ring-cream/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Still a little angry
          </button>
        </div>

        {stillAngry && (
          <div className="mt-8 border-t border-cream/10 pt-8">
            <p className="text-base leading-relaxed text-cream/70">
              That is fair, and I would rather have it straight than have you pretend otherwise.
              Take whatever time you need. I am not going anywhere.
            </p>

            <ActionRow />
          </div>
        )}
      </div>
    </section>
  );
};

export default Question;
