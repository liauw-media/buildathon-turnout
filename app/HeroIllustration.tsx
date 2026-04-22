// Non-partisan civic illustration for the landing hero.
// No flags, politicians, rallies, or political symbols — just an abstract
// "diaspora connects across distance" metaphor: minimalist globe, city pins,
// connecting arcs, and a floating paper ballot with a soft checkmark.

export default function HeroIllustration() {
  // Pin positions (in the SVG's 500x500 coordinate space), loosely representing
  // a handful of diaspora hubs — not any specific country.
  const pins = [
    { x: 170, y: 200, r: 4 }, // west
    { x: 210, y: 180, r: 5 },
    { x: 250, y: 170, r: 6 }, // center (largest)
    { x: 290, y: 190, r: 5 },
    { x: 310, y: 230, r: 4 },
    { x: 220, y: 240, r: 4 },
    { x: 275, y: 265, r: 4 },
    { x: 195, y: 290, r: 4 }, // south
    { x: 335, y: 270, r: 4 }, // east
  ];

  // Arcs between pins to suggest connection (pick some pleasant ones)
  const arcs = [
    [0, 2],
    [2, 4],
    [2, 6],
    [1, 6],
    [3, 6],
    [6, 8],
    [7, 6],
    [5, 7],
  ] as const;

  return (
    <div className="pointer-events-none relative w-full select-none">
      <svg
        viewBox="0 0 500 500"
        className="block h-auto w-full"
        role="img"
        aria-label="Abstract illustration of a diaspora voter network connected across distance"
      >
        <defs>
          {/* Background soft radial */}
          <radialGradient id="hero-bg" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#eef2ff" stopOpacity="1" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Pin gradient */}
          <radialGradient id="hero-pin" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>

          {/* Ballot / envelope gradient */}
          <linearGradient id="hero-ballot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>

          {/* Arc gradient */}
          <linearGradient id="hero-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>

          {/* Soft shadow for the ballot */}
          <filter id="hero-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="500" height="500" fill="url(#hero-bg)" />

        {/* Stylized globe: latitude/longitude rings */}
        <g
          fill="none"
          stroke="#c7d2fe"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        >
          <circle cx="250" cy="240" r="130" />
          <ellipse cx="250" cy="240" rx="130" ry="40" />
          <ellipse cx="250" cy="240" rx="130" ry="80" />
          <ellipse cx="250" cy="240" rx="65" ry="130" />
          <ellipse cx="250" cy="240" rx="110" ry="130" />
          <line x1="120" y1="240" x2="380" y2="240" />
          <line x1="250" y1="110" x2="250" y2="370" />
        </g>

        {/* Connecting arcs between pins */}
        <g fill="none" strokeWidth="1.6" strokeLinecap="round">
          {arcs.map(([a, b], i) => {
            const p1 = pins[a];
            const p2 = pins[b];
            const mx = (p1.x + p2.x) / 2;
            const my = (p1.y + p2.y) / 2 - 28;
            return (
              <path
                key={i}
                d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`}
                stroke="url(#hero-arc)"
              />
            );
          })}
        </g>

        {/* Pins */}
        <g>
          {pins.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={p.r + 3}
                fill="#6366f1"
                opacity="0.18"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={p.r}
                fill="url(#hero-pin)"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </g>

        {/* Floating paper ballot with checkmark */}
        <g transform="translate(320 120) rotate(8)" filter="url(#hero-shadow)">
          <rect
            x="0"
            y="0"
            width="140"
            height="180"
            rx="10"
            fill="url(#hero-ballot)"
            stroke="#a5b4fc"
            strokeWidth="1.2"
          />
          {/* Ballot header line */}
          <rect x="18" y="22" width="60" height="6" rx="3" fill="#c7d2fe" />
          <rect x="18" y="36" width="104" height="4" rx="2" fill="#e0e7ff" />
          {/* Check boxes */}
          <g>
            <rect
              x="18"
              y="62"
              width="16"
              height="16"
              rx="3"
              fill="#ffffff"
              stroke="#c7d2fe"
              strokeWidth="1.5"
            />
            <rect x="44" y="68" width="80" height="4" rx="2" fill="#c7d2fe" />

            <rect
              x="18"
              y="92"
              width="16"
              height="16"
              rx="3"
              fill="#ffffff"
              stroke="#c7d2fe"
              strokeWidth="1.5"
            />
            <rect x="44" y="98" width="70" height="4" rx="2" fill="#c7d2fe" />

            {/* Checked one — accent indigo */}
            <rect
              x="18"
              y="122"
              width="16"
              height="16"
              rx="3"
              fill="#6366f1"
              stroke="#4338ca"
              strokeWidth="1"
            />
            <path
              d="M 21 130 L 25 134 L 31 127"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="44" y="128" width="86" height="4" rx="2" fill="#6366f1" />
          </g>
        </g>

        {/* Small floating envelope (subtle, lower-left) */}
        <g transform="translate(60 330) rotate(-6)" opacity="0.9">
          <rect
            x="0"
            y="0"
            width="70"
            height="46"
            rx="3"
            fill="#ffffff"
            stroke="#a5b4fc"
            strokeWidth="1.2"
          />
          <path
            d="M 0 0 L 35 24 L 70 0"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
