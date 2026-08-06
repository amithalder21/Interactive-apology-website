// Generated stand-in art, one scene per chapter, used until a real illustration
// is dropped into src/assets/memories/. Deliberately abstract — no faces — so it
// reads as placeholder scenery rather than a bad drawing of the two of you.

const Scene = ({ id, from, to, children }) => (
  <svg viewBox="0 0 300 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={from} />
        <stop offset="100%" stopColor={to} />
      </linearGradient>
    </defs>
    <rect width="300" height="400" fill={`url(#sky-${id})`} />
    {children}
  </svg>
);

const scenes = {
  "nehru-place": (
    <Scene id="nehru" from="#ff9a6b" to="#3b1d5e">
      <circle cx="150" cy="150" r="38" fill="#ffd18c" opacity="0.85" />
      {[20, 62, 104, 150, 196, 238].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={200 + (i % 3) * 26}
          width="34"
          height={200 - (i % 3) * 26}
          fill="#1b1033"
          opacity={0.75 + (i % 2) * 0.15}
        />
      ))}
      {[36, 78, 120, 166, 212, 254].map((x, i) => (
        <rect key={x} x={x} y={228 + (i % 3) * 26} width="6" height="8" fill="#ffb454" opacity="0.8" />
      ))}
    </Scene>
  ),

  illusions: (
    <Scene id="illusions" from="#5b2a72" to="#1b1033">
      {[130, 106, 82, 58, 34, 14].map((r, i) => (
        <circle
          key={r}
          cx="150"
          cy="200"
          r={r}
          fill="none"
          stroke={i % 2 ? "#ff6f91" : "#ffb454"}
          strokeWidth="6"
          opacity={0.35 + i * 0.1}
        />
      ))}
    </Scene>
  ),

  "tom-jerry": (
    <Scene id="tomjerry" from="#3b1d5e" to="#1b1033">
      <rect x="46" y="120" width="208" height="140" rx="14" fill="#fff4e6" opacity="0.92" />
      <rect x="60" y="134" width="180" height="112" rx="8" fill="#5b2a72" />
      <circle cx="118" cy="190" r="26" fill="#ffb454" />
      <circle cx="188" cy="196" r="18" fill="#ff6f91" />
      <rect x="140" y="260" width="20" height="26" fill="#fff4e6" opacity="0.7" />
      <rect x="112" y="286" width="76" height="10" rx="5" fill="#fff4e6" opacity="0.7" />
      <path d="M96 330h48l-10 34H106z" fill="#ff6f91" opacity="0.85" />
      <path d="M170 330h44l-8 34h-28z" fill="#ffb454" opacity="0.85" />
    </Scene>
  ),

  "saket-evening": (
    <Scene id="saket" from="#ff6f91" to="#1b1033">
      <path d="M0 300h300v100H0z" fill="#1b1033" opacity="0.85" />
      {[30, 84, 138, 196, 250].map((x, i) => (
        <rect key={x} x={x} y={220 + (i % 2) * 30} width="42" height={110 - (i % 2) * 30} fill="#2a1547" />
      ))}
      <path d="M0 190q75 40 150 0t150 0" fill="none" stroke="#ffd18c" strokeWidth="2" opacity="0.8" />
      {[20, 70, 120, 170, 220, 270].map((x, i) => (
        <circle key={x} cx={x} cy={195 + (i % 2 ? 12 : 4)} r="5" fill="#ffb454" />
      ))}
    </Scene>
  ),

  "metro-hug": (
    <Scene id="metro" from="#3b1d5e" to="#1b1033">
      <rect x="0" y="96" width="300" height="14" fill="#5b2a72" />
      <rect x="24" y="110" width="16" height="200" fill="#2a1547" />
      <rect x="260" y="110" width="16" height="200" fill="#2a1547" />
      <rect x="0" y="310" width="300" height="90" fill="#1b1033" />
      <circle cx="132" cy="212" r="30" fill="#ff6f91" opacity="0.9" />
      <circle cx="172" cy="212" r="30" fill="#ffb454" opacity="0.9" />
      <path d="M112 246q38 34 76 0v64h-76z" fill="#ff6f91" opacity="0.55" />
      <path d="M150 148l14 16-14 16-14-16z" fill="#ffd18c" opacity="0.9" />
    </Scene>
  ),

  "movie-call": (
    <Scene id="moviecall" from="#5b2a72" to="#1b1033">
      <rect x="30" y="120" width="90" height="160" rx="14" fill="#fff4e6" opacity="0.92" />
      <rect x="180" y="120" width="90" height="160" rx="14" fill="#fff4e6" opacity="0.92" />
      <rect x="40" y="134" width="70" height="132" rx="6" fill="#3b1d5e" />
      <rect x="190" y="134" width="70" height="132" rx="6" fill="#3b1d5e" />
      <path d="M120 200h60" stroke="#ffb454" strokeWidth="4" strokeDasharray="8 7" />
      <path d="M64 186l26 14-26 14z" fill="#ff6f91" />
      <path d="M214 186l26 14-26 14z" fill="#ff6f91" />
      <path
        d="M150 316c-16-14-28-22-28-34a14 14 0 0126-7 14 14 0 0126 7c0 12-12 20-24 34z"
        fill="#ff6f91"
      />
    </Scene>
  ),

  sorry: (
    <Scene id="sorry" from="#ff6f91" to="#3b1d5e">
      <path
        d="M150 300c-46-40-80-62-80-98a40 40 0 0175-20 40 40 0 0175 20c0 36-34 58-70 98z"
        fill="#fff4e6"
        opacity="0.92"
      />
      <path d="M150 300c-46-40-80-62-80-98a40 40 0 0175-20v118z" fill="#ffd18c" opacity="0.6" />
    </Scene>
  ),
};

const FallbackArt = ({ slug }) => (
  <div className="h-full w-full" aria-hidden="true">
    {scenes[slug] ?? scenes.sorry}
  </div>
);

export default FallbackArt;
