import Confetti from "./Confetti";

const FinalScreen = ({ onReplay }) => (
  <section className="animate-chapter-in mx-auto w-full max-w-2xl px-2 text-center">
    <div className="rounded-[2.5rem] bg-cream/[0.07] p-8 shadow-glow ring-1 ring-cream/15 backdrop-blur-xl sm:p-12">
      <Confetti />

      <h2 className="mt-8 text-2xl font-medium leading-snug text-cream sm:text-4xl">
        Mujhe pata tha tum zyada der naraz nahi reh sakti 🥹💖
      </h2>

      <p className="mt-5 text-lg text-rose sm:text-2xl">Ab bas smiles hi smiles 🎉</p>

      <p className="mt-8 text-sm leading-relaxed text-cream/60">
        Nehru Place se Saket tak, aur ab har raat wali movie call tak — <br className="hidden sm:block" />
        har chapter mein tum ho, Bunny.
      </p>

      <button
        type="button"
        onClick={onReplay}
        className="mt-10 rounded-full bg-gradient-to-r from-rose to-marigold px-10 py-3.5 text-lg font-semibold text-night shadow-glow transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
      >
        Phir se dekhein 🔁
      </button>
    </div>
  </section>
);

export default FinalScreen;
