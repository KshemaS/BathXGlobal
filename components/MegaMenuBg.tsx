"use client";

const RIPPLE_RINGS = Array.from({ length: 5 }, (_, i) => i);

export default function MegaMenuBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ellipse — slow clockwise */}
      <ellipse
        cx="720" cy="460"
        rx="580" ry="310"
        stroke="white" strokeWidth="0.7" strokeOpacity="0.09"
        className="mega-orbit-cw"
        style={{ animationDuration: "30s", animationDelay: "-7.5s" }}
      />

      {/* Mid ellipse — counter-clockwise */}
      <ellipse
        cx="720" cy="460"
        rx="370" ry="210"
        stroke="white" strokeWidth="0.55" strokeOpacity="0.07"
        className="mega-orbit-ccw"
        style={{ animationDuration: "22s", animationDelay: "-8s" }}
      />

      {/* Inner ellipse — faster clockwise */}
      <ellipse
        cx="720" cy="460"
        rx="190" ry="110"
        stroke="white" strokeWidth="0.4" strokeOpacity="0.06"
        className="mega-orbit-cw"
        style={{ animationDuration: "14s", animationDelay: "-6s" }}
      />

      {/* Water-ripple rings from bottom-right corner */}
      {RIPPLE_RINGS.map((i) => (
        <circle
          key={i}
          cx="1350" cy="860" r="700"
          stroke="white" strokeWidth="0.5"
          className="mega-bg-ring"
          style={{ animationDelay: `${i * 2}s` }}
        />
      ))}

      {/* Subtle flowing water-surface curves */}
      <path
        d="M-80 480 C 280 400 680 560 1100 460 S 1500 500 1600 440"
        stroke="white" strokeWidth="0.45" strokeOpacity="0.04"
      />
      <path
        d="M-80 640 C 360 560 760 720 1200 620 S 1600 680 1800 630"
        stroke="white" strokeWidth="0.4" strokeOpacity="0.03"
      />
    </svg>
  );
}
