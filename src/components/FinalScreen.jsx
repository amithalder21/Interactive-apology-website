import ActionRow from "./ActionRow";

const FinalScreen = ({ onReplay }) => (
  <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
    <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
        Thank you
      </p>

      <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
        Then that is more than I had earned today.
      </h2>

      <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
        From a pizza dosa in CR Park to a cab going nowhere through Connaught Place, you are
        in every one of these. That was the only point I was trying to make.
      </p>

      <ActionRow />

      <button
        type="button"
        onClick={onReplay}
        className="mt-8 text-sm font-medium text-cream/50 underline underline-offset-4 transition-colors hover:text-cream/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
      >
        Try again
      </button>
    </div>
  </section>
);

export default FinalScreen;
