const ProgressDots = ({ total, current, onJump }) => (
  <nav aria-label="Chapters" className="flex items-center justify-center gap-2.5">
    {Array.from({ length: total }).map((_, i) => {
      const done = i <= current;
      return (
        <button
          key={i}
          type="button"
          onClick={() => onJump(i)}
          aria-label={`Chapter ${i + 1}`}
          aria-current={i === current ? "step" : undefined}
          className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marigold ${
            i === current
              ? "w-8 bg-marigold"
              : done
                ? "w-2.5 bg-rose/70 hover:bg-rose"
                : "w-2.5 bg-cream/25 hover:bg-cream/50"
          }`}
        />
      );
    })}
  </nav>
);

export default ProgressDots;
