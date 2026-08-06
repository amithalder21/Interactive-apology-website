import { useEffect, useRef } from "react";

// Shown before the first chapter. The single button is the gesture browsers
// require before audio is allowed to play, so the track starts reliably here
// rather than being refused. It is focused on open, so Enter works without
// reaching for the mouse.
const StartGate = ({ onBegin }) => {
  const primaryRef = useRef(null);

  useEffect(() => {
    primaryRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 px-5 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="start-title"
        className="animate-chapter-in w-full max-w-md rounded-[2rem] bg-cream p-8 text-center shadow-2xl sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-plum/70">For you</p>

        <h2 id="start-title" className="mt-3 text-3xl font-semibold text-night">
          Bunny
        </h2>

        <p className="mt-4 text-base leading-relaxed text-night/70">
          Eight chapters, and about four minutes of your time. There is a song underneath it,
          which you can turn off at any point with the speaker in the corner.
        </p>

        <div className="mt-8">
          <button
            ref={primaryRef}
            type="button"
            onClick={onBegin}
            className="w-full rounded-full bg-gradient-to-r from-rose to-marigold px-8 py-3.5 text-base font-semibold text-night shadow-lg transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
          >
            Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGate;
