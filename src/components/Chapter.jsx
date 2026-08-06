import MemoryImage from "./MemoryImage";

const NUMBERS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

// Numbered from position, so reordering story.js never leaves a stale label.
const labelFor = (memory, index) =>
  memory.label ?? `Chapter ${NUMBERS[index] ?? index + 1}`;

const Chapter = ({ memory, index, total, onNext, onBack, isLast }) => (
  <article
    key={memory.slug}
    className="animate-chapter-in mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-14"
  >
    {/* capped so the artwork never pushes the controls off a short screen */}
    <div className="mx-auto w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem]">
      <MemoryImage slug={memory.slug} place={memory.place} />
    </div>

    <div className="text-center md:text-left">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
        {labelFor(memory, index)}
      </p>

      <p className="text-balance text-lg leading-relaxed text-cream sm:text-xl md:text-2xl md:leading-[1.55]">
        {memory.text}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-gradient-to-r from-rose to-marigold px-8 py-3.5 text-base font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream active:scale-100 sm:text-lg"
        >
          {isLast ? "Ek sawaal hai 🥺" : "Aage 💖"}
        </button>

        {index > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="rounded-full px-5 py-3 text-sm font-medium text-cream/70 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            ← Peeche
          </button>
        )}

        <span className="w-full text-xs tracking-widest text-cream/40 md:w-auto md:pl-2">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  </article>
);

export default Chapter;
