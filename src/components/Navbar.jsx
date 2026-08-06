import BackgroundMusic from "./BackgroundMusic";

// Navbar is mounted for the whole session, so the audio element lives here and
// the track survives moving between chapters.
const Navbar = () => (
  <header className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-10 sm:py-6">
    <h1 className="text-xl font-semibold tracking-tight text-cream sm:text-2xl">Bunny</h1>

    <div className="flex items-center gap-3">
      <p className="text-right text-xs font-medium uppercase tracking-[0.2em] text-marigold/80 sm:text-sm">
        Our story
      </p>

      <BackgroundMusic />
    </div>
  </header>
);

export default Navbar;
