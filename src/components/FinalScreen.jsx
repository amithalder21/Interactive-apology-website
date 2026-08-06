const FinalScreen = ({ onReplay }) => (
  <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
    <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
        Thank you
      </p>

      <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
        You were never going to stay angry for long.
      </h2>

      <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
        From a pizza dosa in CR Park to a cab going nowhere through Connaught Place, you are
        in every one of these. That was the only point I was trying to make.
      </p>

      <button
        type="button"
        onClick={onReplay}
        className="mt-10 rounded-full bg-gradient-to-r from-rose to-marigold px-10 py-3.5 text-lg font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
      >
        Read it again
      </button>
    </div>
  </section>
);

export default FinalScreen;
