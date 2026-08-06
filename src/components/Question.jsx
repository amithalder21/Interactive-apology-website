import { useRef, useState } from "react";

// "Still a little angry" is not a real option. It slips away from the cursor
// every time it is approached, so the only answer she can actually land on is
// "I miss you more".
const TEASES = [
  "Not that one.",
  "That button does not work, sorry.",
  "You are getting closer. Still no.",
  "It is going to keep doing that.",
];

const Question = ({ onNotAngry }) => {
  const [dodges, setDodges] = useState(0);
  const [pos, setPos] = useState(null);
  const areaRef = useRef(null);
  const buttonRef = useRef(null);

  // Measured rather than percentage based, so the whole button stays inside the
  // card at any width instead of being clipped at the edges.
  const dodge = (e) => {
    e.preventDefault();
    setDodges((n) => n + 1);

    const area = areaRef.current?.getBoundingClientRect();
    const button = buttonRef.current?.getBoundingClientRect();
    if (!area || !button) return;

    const maxX = Math.max(0, area.width - button.width);
    const maxY = Math.max(0, area.height - button.height);

    setPos({ x: Math.random() * maxX, y: Math.random() * maxY });
  };

  return (
    <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
          One question
        </p>

        <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
          Are you still angry with me?
        </h2>

        <p className="mt-3 text-lg text-marigold/90 sm:text-xl">
          Or do you still miss your Ammy?
        </p>

        {/* fixed height so the dodging button never shifts the layout */}
        <div ref={areaRef} className="relative mt-10 h-40 sm:h-44">
          {/* left in normal flow: absolute positioning halves its available
              width at phone sizes and wraps the label */}
          <div className="relative z-10 flex justify-center pt-5">
            <button
              type="button"
              onClick={onNotAngry}
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-rose to-marigold px-10 py-3.5 text-lg font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              I miss you more
            </button>
          </div>

          <button
            ref={buttonRef}
            type="button"
            onClick={dodge}
            onMouseEnter={dodge}
            onTouchStart={dodge}
            style={
              pos
                ? { top: `${pos.y}px`, left: `${pos.x}px` }
                : { top: "5.5rem", left: "50%", transform: "translateX(-50%)" }
            }
            className="absolute whitespace-nowrap rounded-full px-8 py-3 text-base font-medium text-cream/60 ring-1 ring-cream/20 transition-all duration-200 ease-out hover:text-cream/80"
          >
            Still a little angry
          </button>
        </div>

        {dodges > 0 && (
          <p className="text-sm italic text-cream/50">
            {TEASES[Math.min(dodges - 1, TEASES.length - 1)]}
          </p>
        )}
      </div>
    </section>
  );
};

export default Question;
