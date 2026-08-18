import type { Project } from "@/data/portfolio";

/** Abstract, code-inspired visuals — no stock photos, no fake screenshots. */
export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  const stroke = "currentColor";
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface text-accent/70">
      <div className="grid-backdrop absolute inset-0 opacity-60" />
      <svg
        viewBox="0 0 320 200"
        className="relative h-full w-full"
        role="img"
        aria-label="Abstract project visualisation"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant === "nlp" && (
          <g fill="none" stroke={stroke} strokeWidth="1">
            {[0, 1, 2, 3].map((r) => (
              <g key={r}>
                {[0, 1, 2, 3, 4, 5].map((c) => (
                  <rect
                    key={c}
                    x={30 + c * 44}
                    y={40 + r * 32}
                    width={30 + ((c * 7 + r * 3) % 12)}
                    height="14"
                    rx="3"
                    opacity={(c + r) % 3 === 0 ? 0.9 : 0.22}
                    fill={(c + r) % 3 === 0 ? "currentColor" : "none"}
                  />
                ))}
              </g>
            ))}
          </g>
        )}
        {variant === "network" && (
          <g fill="none" stroke={stroke} strokeWidth="1">
            {[60, 120, 180, 240].map((x) => (
              <line key={x} x1={x} y1="52" x2="160" y2="130" opacity="0.35" />
            ))}
            {[60, 120, 180, 240].map((x) => (
              <circle key={x} cx={x} cy="52" r="7" fill="currentColor" opacity="0.75" />
            ))}
            <rect x="120" y="118" width="80" height="24" rx="4" opacity="0.6" />
            <line x1="160" y1="142" x2="160" y2="168" opacity="0.4" />
            <rect x="96" y="168" width="128" height="18" rx="3" opacity="0.35" />
          </g>
        )}
        {variant === "grid" && (
          <g fill="none" stroke={stroke} strokeWidth="1">
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}${c}`}
                  x={26 + c * 70}
                  y={30 + r * 50}
                  width="56"
                  height="36"
                  rx="4"
                  opacity={r === 1 && c === 2 ? 0.9 : 0.28}
                />
              )),
            )}
            <circle cx="222" cy="98" r="26" opacity="0.5" />
          </g>
        )}
        {variant === "vision" && (
          <g fill="none" stroke={stroke} strokeWidth="1">
            <rect x="40" y="46" width="110" height="70" rx="3" opacity="0.85" />
            <rect x="176" y="86" width="86" height="54" rx="3" opacity="0.4" />
            <line x1="40" y1="160" x2="280" y2="160" opacity="0.25" strokeDasharray="6 8" />
            <text x="40" y="38" fontSize="9" fill="currentColor" stroke="none" opacity="0.8">
              0.94
            </text>
            <text x="176" y="78" fontSize="9" fill="currentColor" stroke="none" opacity="0.5">
              0.61
            </text>
          </g>
        )}
        {variant === "tokens" && (
          <g stroke={stroke} strokeWidth="1" fill="none">
            {Array.from({ length: 26 }).map((_, i) => (
              <rect
                key={i}
                x={24 + (i % 7) * 40}
                y={36 + Math.floor(i / 7) * 38}
                width={18 + ((i * 11) % 20)}
                height="12"
                rx="6"
                opacity={i % 4 === 0 ? 0.85 : 0.2}
              />
            ))}
          </g>
        )}
        {variant === "chart" && (
          <g fill="none" stroke={stroke} strokeWidth="1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect
                key={i}
                x={32 + i * 34}
                y={170 - (24 + ((i * 37) % 110))}
                width="18"
                height={24 + ((i * 37) % 110)}
                opacity={i === 5 ? 0.9 : 0.25}
                fill={i === 5 ? "currentColor" : "none"}
              />
            ))}
            <line x1="24" y1="170" x2="296" y2="170" opacity="0.35" />
          </g>
        )}
      </svg>
    </div>
  );
}
