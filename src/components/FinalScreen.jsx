import ActionRow from "./ActionRow";

const FinalScreen = () => (
  <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
    <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-marigold/80">
        Then say it
      </p>

      <h2 className="text-2xl font-medium leading-snug text-cream sm:text-3xl">
        I miss you too, Bunny.
      </h2>

      <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
        Eight chapters, and you are in every one of them. Do not let a website be the last
        word on it. Tell me yourself, in whatever words you want.
      </p>

      <ActionRow />
    </div>
  </section>
);

export default FinalScreen;
