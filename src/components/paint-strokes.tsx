export function PaintStrokes() {
  return (
    <>
      {/* ─── Light Mode Artsy Paint Strokes (Top-Right & Bottom-Left) + Doodles ──── */}
      <div className="fixed inset-0 pointer-events-none -z-10 hidden overflow-hidden sm:block dark:hidden select-none">
        <svg className="absolute width-0 height-0 hidden" aria-hidden="true">
          <defs>
            <filter id="brush-texture-tr" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04 0.08"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="22"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feComposite
                in="displaced"
                in2="noise"
                operator="arithmetic"
                k1="0"
                k2="1.1"
                k3="-0.25"
                k4="0"
              />
            </filter>

            <filter id="brush-texture-bl" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035 0.075"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="26"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feComposite
                in="displaced"
                in2="noise"
                operator="arithmetic"
                k1="0"
                k2="1.15"
                k3="-0.28"
                k4="0"
              />
            </filter>
          </defs>
        </svg>

        {/* Top Left Light Mode Doodly Stamp */}
        <div className="absolute top-6 left-6 w-44 h-44 sm:top-10 sm:left-10 sm:w-52 sm:h-52 opacity-35 rotate-[-8deg]">
          <svg
            viewBox="0 0 180 180"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="90"
              cy="90"
              r="58"
              fill="#facc15"
              opacity="0.16"
              stroke="#f472b6"
              strokeWidth="2"
              strokeDasharray="2 7"
              strokeLinecap="round"
            />
            <circle
              cx="90"
              cy="90"
              r="44"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="1 6"
              strokeLinecap="round"
            />
            {/* Small Cat Doodle */}
            <path
              d="M 66 82 L 69 58 L 84 68 Q 90 66, 96 68 L 111 58 L 114 82 Q 119 92, 114 103 Q 106 118, 90 118 Q 74 118, 66 103 Q 61 92, 66 82 Z"
              fill="#fff"
              opacity="0.85"
              stroke="#334155"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M 70 65 L 72 76 L 81 70 Z M 110 65 L 108 76 L 99 70 Z"
              fill="#f472b6"
              opacity="0.75"
            />
            <path d="M 77 88 Q 81 84, 85 88" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <path d="M 95 88 Q 99 84, 103 88" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <path d="M 86 99 Q 90 96, 94 99 Q 90 105, 86 99 Z" fill="#f472b6" />
            <path d="M 90 104 Q 86 110, 81 108 M 90 104 Q 94 110, 99 108" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 75 98 L 58 95 M 75 103 L 58 106 M 105 98 L 122 95 M 105 103 L 122 106" fill="none" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
            <path
              d="M 90 48 L 94 60 L 106 64 L 94 68 L 90 80 L 86 68 L 74 64 L 86 60 Z"
              fill="#38bdf8"
              opacity="0.75"
            />
            <path
              d="M 31 72 Q 22 86, 30 101 M 149 70 Q 158 84, 150 100 M 57 139 Q 76 151, 94 147"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray="1 6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Top Right Light Mode Brush Strokes (Pink, Light Blue, Soft Yellow) + Notebook Doodles */}
        <div className="absolute top-0 right-0 w-105 h-95 sm:w-135 sm:h-115 opacity-40 mix-blend-multiply transform translate-x-12 -translate-y-12">
          <svg
            viewBox="0 0 500 450"
            className="w-full h-full"
            style={{ filter: "url(#brush-texture-tr)" }}
          >
            {/* Slanted Pink Stroke */}
            <path
              d="M 120 10 C 220 30, 340 70, 480 160 C 440 210, 310 150, 180 80 Z"
              fill="#f472b6"
              opacity="0.55"
            />
            {/* Slanted Light Blue Stroke */}
            <path
              d="M 200 -20 C 310 40, 420 120, 510 240 C 470 270, 360 170, 240 60 Z"
              fill="#38bdf8"
              opacity="0.45"
            />
            {/* Slanted Soft Yellow Stroke */}
            <path
              d="M 280 20 C 360 80, 440 180, 490 320 C 450 340, 370 230, 290 120 Z"
              fill="#facc15"
              opacity="0.5"
            />
            {/* Scattered Gaps */}
            <circle cx="210" cy="110" r="14" fill="#f472b6" opacity="0.35" />
            <circle cx="340" cy="220" r="18" fill="#38bdf8" opacity="0.3" />
            <circle cx="410" cy="140" r="12" fill="#facc15" opacity="0.4" />
            <circle cx="290" cy="60" r="8" fill="#f472b6" opacity="0.3" />

            {/* Subtle Notebook Doodles */}
            {/* 5-Petal Daisy */}
            <g transform="translate(360, 100)">
              <circle cx="0" cy="-8" r="5" fill="#f472b6" opacity="0.8" />
              <circle cx="8" cy="0" r="5" fill="#f472b6" opacity="0.8" />
              <circle cx="0" cy="8" r="5" fill="#f472b6" opacity="0.8" />
              <circle cx="-8" cy="0" r="5" fill="#f472b6" opacity="0.8" />
              <circle cx="0" cy="0" r="4" fill="#facc15" />
            </g>

            {/* Sparkle Star */}
            <path
              d="M 240 180 Q 240 190 250 190 Q 240 190 240 200 Q 240 190 230 190 Q 240 190 240 180 Z"
              fill="#38bdf8"
              opacity="0.9"
            />
            {/* Small Doodle Flower */}
            <g transform="translate(283, 245)">
              <circle cx="0" cy="-9" r="6" fill="#f472b6" opacity="0.8" />
              <circle cx="9" cy="0" r="6" fill="#38bdf8" opacity="0.75" />
              <circle cx="0" cy="9" r="6" fill="#f472b6" opacity="0.8" />
              <circle cx="-9" cy="0" r="6" fill="#38bdf8" opacity="0.75" />
              <circle cx="0" cy="0" r="4" fill="#facc15" />
              <path d="M 0 15 Q 4 28, 0 40" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <path d="M 0 28 Q -10 22, -15 28 Q -8 32, 0 30 Z" fill="#10b981" opacity="0.75" />
            </g>
          </svg>
        </div>

        {/* Bottom Left Light Mode Brush Strokes (Pink, Light Blue, Soft Yellow) + Notebook Doodles */}
        <div className="absolute bottom-0 left-0 w-105 h-95 sm:w-135 sm:h-115 opacity-40 mix-blend-multiply transform -translate-x-20 translate-y-12">
          <svg
            viewBox="0 0 500 450"
            className="w-full h-full"
            style={{ filter: "url(#brush-texture-bl)" }}
          >
            {/* Slanted Soft Yellow Stroke */}
            <path
              d="M 10 320 C 110 220, 240 140, 380 90 C 350 50, 210 110, 80 220 Z"
              fill="#facc15"
              opacity="0.5"
            />
            {/* Slanted Light Blue Stroke */}
            <path
              d="M -20 400 C 90 280, 210 180, 340 120 C 310 80, 170 160, 40 300 Z"
              fill="#38bdf8"
              opacity="0.45"
            />
            {/* Slanted Pink Stroke */}
            <path
              d="M 40 450 C 140 320, 270 220, 410 170 C 370 130, 230 200, 90 350 Z"
              fill="#f472b6"
              opacity="0.5"
            />
            {/* Scattered Gaps */}
            <circle cx="150" cy="260" r="16" fill="#38bdf8" opacity="0.35" />
            <circle cx="260" cy="170" r="12" fill="#f472b6" opacity="0.4" />
            <circle cx="110" cy="340" r="20" fill="#facc15" opacity="0.3" />
            <circle cx="210" cy="380" r="10" fill="#38bdf8" opacity="0.35" />

            {/* Subtle Notebook Doodles */}
            {/* Yellow Daisy */}
            <g transform="translate(180, 230)">
              <circle cx="0" cy="-7" r="4.5" fill="#facc15" opacity="0.9" />
              <circle cx="7" cy="0" r="4.5" fill="#facc15" opacity="0.9" />
              <circle cx="0" cy="7" r="4.5" fill="#facc15" opacity="0.9" />
              <circle cx="-7" cy="0" r="4.5" fill="#facc15" opacity="0.9" />
              <circle cx="0" cy="0" r="3.5" fill="#f472b6" />
            </g>

            {/* Sparkle Star */}
            <path
              d="M 290 140 Q 290 150 300 150 Q 290 150 290 160 Q 290 150 280 150 Q 290 150 290 140 Z"
              fill="#facc15"
              opacity="0.9"
            />
            {/* Wavy Dotted Accent Line */}
            <path
              d="M 120 380 Q 150 360, 180 380"
              stroke="#f472b6"
              strokeWidth="2"
              strokeDasharray="3 3"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Bottom Right Light Mode Paint Splashes */}
        <div className="absolute bottom-0 right-0 w-96 h-80 sm:w-120 sm:h-96 opacity-35 mix-blend-multiply transform translate-x-10 translate-y-8">
          <svg
            viewBox="0 0 420 340"
            className="w-full h-full"
            style={{ filter: "url(#brush-texture-tr)" }}
          >
            <path
              d="M 175 270 C 145 248, 154 216, 188 207 C 214 199, 230 214, 254 205 C 278 196, 305 211, 303 237 C 301 263, 275 276, 250 274 C 224 272, 207 292, 175 270 Z"
              fill="#f472b6"
              opacity="0.48"
            />
            <path
              d="M 190 235 C 172 215, 184 190, 213 185 C 239 181, 250 196, 272 188 C 294 180, 318 195, 315 217 C 312 240, 288 249, 265 244 C 239 238, 216 260, 190 235 Z"
              fill="#38bdf8"
              opacity="0.4"
            />
            <path
              d="M 216 257 C 204 237, 220 220, 242 222 C 261 224, 270 237, 288 232 C 306 227, 322 241, 316 258 C 308 279, 282 280, 265 270 C 248 260, 230 278, 216 257 Z"
              fill="#facc15"
              opacity="0.42"
            />
            <circle cx="145" cy="226" r="8" fill="#f472b6" opacity="0.55" />
            <circle cx="329" cy="210" r="6" fill="#38bdf8" opacity="0.6" />
            <circle cx="338" cy="246" r="3" fill="#facc15" opacity="0.8" />
            <circle cx="180" cy="290" r="4" fill="#facc15" opacity="0.7" />
            <path
              d="M 135 198 C 126 188, 129 178, 140 174 C 148 171, 155 177, 153 185 C 151 194, 143 202, 135 198 Z"
              fill="#38bdf8"
              opacity="0.5"
            />
            <path
              d="M 314 176 C 321 165, 333 166, 337 176 C 340 185, 331 193, 322 190 C 314 187, 309 183, 314 176 Z"
              fill="#f472b6"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

    </>
  );
}
