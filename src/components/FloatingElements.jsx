// Replaces the drifting emoji with quiet points of light, so the background
// carries the same warmth without competing with the writing.
const motes = Array.from({ length: 22 }).map((_, i) => ({
  left: (i * 41) % 100,
  delay: (i * 1.9) % 14,
  duration: 20 + ((i * 5) % 14),
  size: 2 + ((i * 3) % 4),
  warm: i % 3 === 0,
}));

const FloatingElements = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {motes.map((m, i) => (
      <span
        key={i}
        className={`floating-element absolute bottom-[-40px] rounded-full ${
          m.warm ? "bg-marigold" : "bg-rose"
        }`}
        style={{
          left: `${m.left}%`,
          width: `${m.size}px`,
          height: `${m.size}px`,
          animationDelay: `${m.delay}s`,
          animationDuration: `${m.duration}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingElements;
