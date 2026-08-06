// Replaces the old celebration.png, which shipped with a visible Adobe Stock
// watermark across it.
const PIECES = [
  { x: 8, delay: 0, color: "#ff6f91", rotate: -18 },
  { x: 20, delay: 0.35, color: "#ffb454", rotate: 24 },
  { x: 33, delay: 0.12, color: "#7dd3c0", rotate: -8 },
  { x: 46, delay: 0.5, color: "#fff4e6", rotate: 30 },
  { x: 58, delay: 0.22, color: "#ff6f91", rotate: -26 },
  { x: 71, delay: 0.62, color: "#ffb454", rotate: 12 },
  { x: 84, delay: 0.08, color: "#c4b5fd", rotate: -14 },
  { x: 93, delay: 0.44, color: "#7dd3c0", rotate: 20 },
];

const Confetti = () => (
  <div className="relative mx-auto h-32 w-full max-w-sm" aria-hidden="true">
    {PIECES.map((p) => (
      <span
        key={p.x}
        className="animate-confetti absolute top-0 block h-3 w-2 rounded-[2px]"
        style={{
          left: `${p.x}%`,
          backgroundColor: p.color,
          animationDelay: `${p.delay}s`,
          transform: `rotate(${p.rotate}deg)`,
        }}
      />
    ))}

    <div className="animate-pop absolute inset-x-0 bottom-0 text-6xl sm:text-7xl">🎉</div>
  </div>
);

export default Confetti;
