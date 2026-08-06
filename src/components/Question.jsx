import { useState } from "react";

// The "No" button dodges four times, then gives up and disappears.
const DODGES = 5;

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [pos, setPos] = useState(null);

  const dodge = () => {
    const next = noClicks + 1;
    setNoClicks(next);
    if (next >= DODGES) return;

    setPos({
      top: `${Math.random() * 55 + 20}%`,
      left: `${Math.random() * 55 + 20}%`,
    });
  };

  return (
    <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
      <div className="relative rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
          Sach sach batana
        </p>

        <h2 className="text-2xl font-medium leading-snug text-cream sm:text-4xl">
          Ab tumhari narazgi khatam ho gayi? 🥺
        </h2>

        <div className="relative mt-10 flex h-44 items-center justify-center gap-6">
          <button
            type="button"
            onClick={onYes}
            className="z-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-10 py-4 text-xl font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:px-12"
          >
            Haan ❤️
          </button>

          {noClicks < DODGES && (
            <button
              type="button"
              onClick={dodge}
              onMouseEnter={noClicks > 0 ? dodge : undefined}
              style={
                pos
                  ? { position: "absolute", top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }
                  : undefined
              }
              className="rounded-full bg-gradient-to-r from-rose to-pink-500 px-10 py-4 text-xl font-semibold text-night shadow-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:px-12"
            >
              Nahi 😤
            </button>
          )}
        </div>

        {noClicks >= DODGES && (
          <p className="mt-2 text-base italic text-cream/60">
            Ab to sirf ek hi jawab bachta hai… 😌💖
          </p>
        )}
      </div>
    </section>
  );
};

export default Question;
