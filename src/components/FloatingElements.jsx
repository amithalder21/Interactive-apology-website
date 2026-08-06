const elements = ["💗", "✨", "🎬", "💖", "🫂", "🌙"];

// Positions are fixed rather than random so the drift doesn't reshuffle on
// every re-render of the parent.
const drops = Array.from({ length: 18 }).map((_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 1.7) % 12,
  duration: 16 + ((i * 5) % 10),
  size: 16 + ((i * 7) % 18),
  emoji: elements[i % elements.length],
}));

const FloatingElements = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {drops.map((d, i) => (
      <span
        key={i}
        className="floating-element absolute bottom-[-40px]"
        style={{
          left: `${d.left}%`,
          animationDelay: `${d.delay}s`,
          animationDuration: `${d.duration}s`,
          fontSize: `${d.size}px`,
        }}
      >
        {d.emoji}
      </span>
    ))}
  </div>
);

export default FloatingElements;
