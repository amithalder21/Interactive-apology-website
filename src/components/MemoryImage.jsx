import { memoryImage } from "../data/memoryImages";
import FallbackArt from "./FallbackArt";

// Shows the real illustration once one exists in src/assets/memories/,
// and generated art until then.
const MemoryImage = ({ slug, place }) => {
  const src = memoryImage(slug);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-night/40 shadow-glow ring-1 ring-cream/15">
      {src ? (
        <img
          src={src}
          alt={place}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <FallbackArt slug={slug} />
      )}

      {/* keeps the caption legible over both photos and generated art */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent p-5 pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-marigold/90">
          {place}
        </p>
      </div>
    </div>
  );
};

export default MemoryImage;
