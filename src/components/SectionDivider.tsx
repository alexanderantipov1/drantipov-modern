import { type CSSProperties } from "react";

interface SectionDividerProps {
  /** Colour of the divider (matches the next section's background). */
  fill?: string;
  /** Style: curve = soft wave, slant = diagonal, peaks = triangle peaks. */
  variant?: "curve" | "slant" | "wave";
  /** Flip vertically (use when divider sits at the top of a section). */
  flip?: boolean;
  /** Height in pixels. */
  height?: number;
  className?: string;
}

export default function SectionDivider({
  fill = "currentColor",
  variant = "curve",
  flip = false,
  height = 80,
  className = "",
}: SectionDividerProps) {
  const transform: CSSProperties = flip
    ? { transform: "rotate(180deg)" }
    : {};

  const paths = {
    curve:
      "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z",
    slant: "M0,0 L1440,80 L1440,80 L0,80 Z",
    wave:
      "M0,30 C120,70 240,10 360,30 C480,50 600,10 720,30 C840,50 960,10 1080,30 C1200,50 1320,10 1440,30 L1440,80 L0,80 Z",
  };

  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      style={{ height, ...transform }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
