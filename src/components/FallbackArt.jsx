// Generated stand-in art, one scene per chapter, used until a real illustration
// is dropped into src/assets/memories/. Deliberately abstract, with no faces, so
// it reads as placeholder scenery rather than a poor drawing of the two of you.

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
  // Dusk over a crowded market street.
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

  // Scattered colour above a laptop showing a shared screen.
  "holi-lockdown": (
    <Scene id="holi" from="#5b2a72" to="#1b1033">
      {[
        [58, 96, "#ff6f91"],
        [104, 62, "#ffb454"],
        [162, 84, "#7dd3c0"],
        [214, 58, "#c4b5fd"],
        [246, 108, "#fff4e6"],
        [82, 142, "#ffb454"],
        [196, 138, "#ff6f91"],
      ].map(([cx, cy, fill]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="13" fill={fill} opacity="0.55" />
      ))}
      <rect x="62" y="196" width="176" height="112" rx="8" fill="#fff4e6" opacity="0.92" />
      <rect x="74" y="208" width="152" height="88" rx="4" fill="#3b1d5e" />
      <path d="M138 236l30 16-30 16z" fill="#ff6f91" />
      <rect x="46" y="308" width="208" height="10" rx="5" fill="#fff4e6" opacity="0.75" />
    </Scene>
  ),

  // A television at home.
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

  // Street lamps and a skyline after sundown.
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

  // A cinema screen seen over rows of seats.
  "tom-jerry-theatre": (
    <Scene id="theatre" from="#3b1d5e" to="#1b1033">
      <path d="M40 108h220l16 132H24z" fill="#fff4e6" opacity="0.9" />
      <path d="M54 122h192l12 104H42z" fill="#5b2a72" />
      <circle cx="126" cy="176" r="22" fill="#ffb454" opacity="0.9" />
      <circle cx="182" cy="182" r="15" fill="#ff6f91" opacity="0.9" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[24, 92, 160, 228].map((x) => (
            <rect
              key={x}
              x={x + row * 8}
              y={276 + row * 40}
              width="52"
              height="28"
              rx="10"
              fill="#1b1033"
              opacity={0.6 + row * 0.15}
            />
          ))}
        </g>
      ))}
    </Scene>
  ),

  // A platform, late, with the train already gone.
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

  // City lights going past a cab window.
  "cp-cab": (
    <Scene id="cpcab" from="#5b2a72" to="#1b1033">
      <rect x="44" y="96" width="212" height="180" rx="22" fill="#1b1033" opacity="0.75" />
      <rect x="58" y="110" width="184" height="152" rx="16" fill="#2a1547" />
      {[
        [88, 150, 7],
        [132, 132, 5],
        [176, 158, 8],
        [214, 136, 5],
        [104, 196, 5],
        [158, 210, 7],
        [206, 194, 5],
      ].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#ffb454" opacity="0.75" />
      ))}
      <path d="M58 236q92 -26 184 0v26H58z" fill="#3b1d5e" opacity="0.9" />
      <rect x="44" y="286" width="212" height="16" rx="8" fill="#fff4e6" opacity="0.25" />
      <path d="M96 330q54 -26 108 0v34H96z" fill="#ff6f91" opacity="0.5" />
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
