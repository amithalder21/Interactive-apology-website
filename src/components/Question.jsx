import { useState } from "react";

// Two honest answers. "Not yet" is allowed to be a real answer rather than a
// button that runs away from the cursor.
const Question = ({ onYes }) => {
  const [notYet, setNotYet] = useState(false);

  return (
    <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
      <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
          One question
        </p>

        <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
          So, are we alright?
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onYes}
            className="rounded-full bg-gradient-to-r from-rose to-marigold px-10 py-3.5 text-lg font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            We are
          </button>

          <button
            type="button"
            onClick={() => setNotYet(true)}
            className="rounded-full px-8 py-3.5 text-lg font-medium text-cream/70 ring-1 ring-cream/20 transition-colors hover:text-cream hover:ring-cream/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Not yet
          </button>
        </div>

        {notYet && (
          <p className="mt-8 text-base leading-relaxed text-cream/70">
            That is fair, and I am not going to talk you out of it. Take the time you need.
            I am not going anywhere.
          </p>
        )}
      </div>
    </section>
  );
};

export default Question;
