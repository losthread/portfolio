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

      {/* ─── Dark Mode: Lighter Cyber Blobs + Nature Doodles (Fishes, Leaves, Flowers) ─ */}
      <div className="fixed inset-0 pointer-events-none -z-10 hidden overflow-hidden sm:dark:block select-none">
        {/* SVG Filter for Dark Blobs (kept lighter) */}
        <svg className="absolute width-0 height-0 hidden" aria-hidden="true">
          <defs>
            <filter id="dark-blob-texture" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.025 0.05"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="35"
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
                k3="-0.22"
                k4="0"
              />
            </filter>
          </defs>
        </svg>

        {/* Existing Blobs Top-Left */}
        <div className="absolute top-0 left-0 w-87.5 h-77.5 sm:w-107.5 sm:h-92.5 opacity-18 mix-blend-screen transform -translate-x-12 -translate-y-8">
          <svg
            viewBox="0 0 500 450"
            className="w-full h-full"
            style={{ filter: "url(#dark-blob-texture)" }}
          >
            <path
              d="M 90 80 C 220 30, 360 90, 420 220 C 370 330, 210 390, 100 310 C 20 250, 20 140, 90 80 Z"
              fill="#10b981"
              opacity="0.6"
            />
            <path
              d="M 140 120 C 260 70, 380 150, 390 270 C 310 350, 170 320, 120 230 C 80 170, 90 140, 140 120 Z"
              fill="#948979"
              opacity="0.7"
            />
            <circle cx="210" cy="190" r="18" fill="#10b981" opacity="0.8" />
            <circle cx="300" cy="140" r="12" fill="#948979" opacity="0.8" />
          </svg>
        </div>

        {/* Top Right Dark Mode Serpentine Dragon Doodle */}
        <div className="absolute top-2 right-4 sm:top-6 sm:right-12 w-55 h-55 sm:w-70 sm:h-70 opacity-30 mix-blend-screen pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dragon Body (Serpentine S-Curve) */}
            <path
              d="M 160 30 C 130 10, 90 20, 80 50 C 70 80, 120 100, 110 130 C 100 160, 60 160, 40 140 C 25 125, 30 105, 45 100 C 55 95, 65 105, 55 115 C 45 125, 35 120, 45 135 C 55 150, 90 145, 95 125 C 105 100, 55 80, 65 45 C 78 12, 125 0, 160 30 Z"
              fill="#10b981"
              opacity="0.25"
            />
            <path
              d="M 160 30 C 130 10, 90 20, 80 50 C 70 80, 120 100, 110 130 C 100 160, 60 160, 40 140"
              stroke="#34d399"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Dragon Head */}
            <g transform="translate(150, 20) rotate(-20)">
              <path
                d="M 0 10 C 10 5, 20 5, 25 12 C 20 18, 10 18, 0 15 Z"
                fill="#34d399"
              />
              <path
                d="M -5 5 C -10 -5, -20 -8, -18 -2 C -15 2, -8 5, -5 5 Z"
                fill="#fbbf24"
              />
              <path
                d="M 0 2 C -3 -8, -12 -12, -10 -5 C -8 -1, -3 2, 0 2 Z"
                fill="#fbbf24"
                opacity="0.8"
              />
              <circle cx="12" cy="9" r="2" fill="#fbbf24" />
              <path
                d="M 22 14 C 28 18, 32 15, 35 20"
                stroke="#6ee7b7"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Dragon Fins / Spikes along back */}
            <path d="M 125 22 L 130 15 L 132 25 Z" fill="#6ee7b7" />
            <path d="M 105 25 L 110 17 L 112 28 Z" fill="#6ee7b7" />
            <path d="M 85 38 L 88 29 L 92 41 Z" fill="#6ee7b7" />
            <path d="M 77 62 L 70 57 L 80 67 Z" fill="#6ee7b7" />
            <path d="M 98 102 L 105 100 L 99 110 Z" fill="#6ee7b7" />
            <path d="M 106 122 L 113 122 L 105 130 Z" fill="#6ee7b7" />

            {/* Dragon Wings / Paws */}
            <path
              d="M 95 65 C 115 50, 125 60, 115 75 C 105 70, 98 68, 95 65 Z"
              fill="#34d399"
              opacity="0.7"
            />

            {/* Tail Flame Tuft */}
            <path
              d="M 40 140 C 30 148, 20 142, 25 155 C 32 165, 45 152, 40 140 Z"
              fill="#fbbf24"
              opacity="0.85"
            />

            {/* Floating Sparks */}
            <circle cx="170" cy="50" r="2.5" fill="#fbbf24" opacity="0.9" />
            <circle cx="140" cy="70" r="2" fill="#34d399" opacity="0.8" />
            <circle cx="110" cy="150" r="1.5" fill="#fbbf24" opacity="0.7" />
            <circle cx="60" cy="160" r="2" fill="#6ee7b7" opacity="0.8" />
          </svg>
        </div>

        {/* ─── Nature Doodles ──── */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* TOP RIGHT Nature Group: Swimming Fish + Vine & Leaves */}
          <g opacity="0.3">
            {/* Swimming Fish 1 (Koi doodle) */}
            <g transform="translate(1060, 110) rotate(-15)">
              <path
                d="M 0 0 C 15 -10, 35 -10, 50 0 C 35 10, 15 10, 0 0 Z"
                fill="#10b981"
                opacity="0.8"
              />
              <path d="M 0 0 L -12 -8 L -8 0 L -12 8 Z" fill="#6ee7b7" />
              <circle cx="40" cy="-2" r="1.5" fill="#042f2e" />
            </g>

            {/* Botanical Leaf Branch */}
            <path
              d="M 1140 50 Q 1090 90, 1050 160 M 1110 80 Q 1130 90, 1125 100 M 1085 115 Q 1105 130, 1095 140"
              stroke="#6ee7b7"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Floating Petals */}
            <path
              d="M 1010 140 C 1016 133, 1028 137, 1022 146 C 1016 155, 1004 147, 1010 140 Z"
              fill="#34d399"
              opacity="0.8"
            />
            <path
              d="M 1120 180 C 1126 173, 1138 177, 1132 186 C 1126 195, 1114 187, 1120 180 Z"
              fill="#948979"
              opacity="0.7"
            />
          </g>

          {/* BOTTOM RIGHT Nature Group: Panda Eating Bamboo */}
          <g transform="translate(1030, 630) rotate(-4) scale(1.2)" opacity="0.3">
            {/* Bamboo */}
            <path
              d="M 72 106 Q 66 72, 76 42 Q 82 20, 78 -8"
              stroke="#34d399"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M 70 83 L 81 84 M 70 54 L 81 55 M 76 24 L 79 25" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            <path d="M 77 20 C 92 8, 101 16, 82 27 Z" fill="#6ee7b7" />
            <path d="M 74 47 C 57 34, 52 44, 71 53 Z" fill="#10b981" />

            {/* Panda Body */}
            <ellipse cx="30" cy="91" rx="29" ry="25" fill="#64748b" opacity="0.85" />
            <ellipse cx="30" cy="95" rx="16" ry="18" fill="#c4bdb2" opacity="0.8" />
            <ellipse cx="7" cy="105" rx="10" ry="7" fill="#334155" opacity="0.9" />
            <ellipse cx="54" cy="105" rx="10" ry="7" fill="#334155" opacity="0.9" />

            {/* Panda Head */}
            <circle cx="28" cy="54" r="29" fill="#c4bdb2" opacity="0.9" />
            <circle cx="8" cy="32" r="11" fill="#334155" opacity="0.9" />
            <circle cx="49" cy="31" r="11" fill="#334155" opacity="0.9" />
            <ellipse cx="17" cy="52" rx="9" ry="13" fill="#334155" opacity="0.85" transform="rotate(35 17 52)" />
            <ellipse cx="40" cy="52" rx="9" ry="13" fill="#334155" opacity="0.85" transform="rotate(-35 40 52)" />
            <circle cx="17" cy="52" r="2.5" fill="#6ee7b7" />
            <circle cx="40" cy="52" r="2.5" fill="#6ee7b7" />
            <path d="M 25 62 Q 29 59, 33 62 Q 29 68, 25 62 Z" fill="#334155" />

            {/* Bamboo Leaf in Paw */}
            <path d="M 48 83 Q 61 77, 72 83" stroke="#34d399" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 62 79 C 75 68, 83 77, 65 85 Z" fill="#6ee7b7" />
            <path d="M 67 82 C 79 86, 82 96, 66 88 Z" fill="#10b981" />
          </g>

          {/* BOTTOM LEFT Dark Mode Group: Flowerpot, Plant, Dirt & Side Elements */}
          <g opacity="0.3">
            {/* Main Flowerpot & Plant */}
            <g transform="translate(130, 710)">
              {/* Dirt Mounds Beside Pot */}
              <ellipse cx="-48" cy="2" rx="22" ry="7" fill="#877b66" opacity="0.65" />
              <ellipse cx="46" cy="2" rx="26" ry="8" fill="#877b66" opacity="0.6" />

              {/* Scattered Dirt Particles & Small Pebbles */}
              <circle cx="-58" cy="1" r="2.5" fill="#64748b" opacity="0.8" />
              <circle cx="-38" cy="4" r="2" fill="#877b66" opacity="0.9" />
              <circle cx="36" cy="4" r="3" fill="#64748b" opacity="0.8" />
              <circle cx="58" cy="2" r="2" fill="#877b66" opacity="0.9" />

              {/* Side Element 1: Small Sprout Growing From Dirt Mound */}
              <g transform="translate(50, 0)">
                <path d="M 0 0 Q 0 -18, 6 -24" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 6 -24 C -6 -32, -4 -16, 6 -24 Z" fill="#10b981" />
                <path d="M 6 -24 C 18 -32, 16 -16, 6 -24 Z" fill="#6ee7b7" />
              </g>

              {/* Side Element 2: Fallen Leaf Beside Pot */}
              <path
                d="M -52 -5 C -66 -16, -44 -18, -52 -5 Z"
                fill="#6ee7b7"
                opacity="0.85"
              />

              {/* Terracotta/Taupe Flowerpot Body */}
              <path
                d="M -26 -42 L -20 2 C -20 7, 20 7, 20 2 L 26 -42 Z"
                fill="#c4bdb2"
                opacity="0.72"
              />
              {/* Flowerpot Rim */}
              <rect
                x="-30"
                y="-50"
                width="60"
                height="9"
                rx="3"
                fill="#bbb3a7"
                opacity="0.72"
              />

              {/* Pot Soil Surface */}
              <ellipse cx="0" cy="-49" rx="26" ry="4" fill="#817a70" opacity="0.65" />

              {/* Plant Stems Growing out of Pot */}
              <path
                d="M 0 -50 Q -12 -75, -22 -92 M 0 -50 Q 12 -80, 26 -96 M 0 -50 Q -2 -88, 2 -112"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Plant Leaves */}
              <path
                d="M -22 -92 C -38 -106, -32 -82, -22 -92 Z"
                fill="#34d399"
              />
              <path
                d="M 26 -96 C 42 -110, 36 -86, 26 -96 Z"
                fill="#6ee7b7"
              />
              <path
                d="M -10 -70 C -26 -80, -18 -60, -10 -70 Z"
                fill="#10b981"
              />
              <path
                d="M 10 -72 C 26 -82, 18 -62, 10 -72 Z"
                fill="#34d399"
              />

              {/* Small Yellow Flower at the Top */}
              <g transform="translate(2, -114)">
                <circle cx="-5" cy="-5" r="4" fill="#fbbf24" opacity="0.9" />
                <circle cx="5" cy="-5" r="4" fill="#fbbf24" opacity="0.9" />
                <circle cx="-5" cy="5" r="4" fill="#fbbf24" opacity="0.9" />
                <circle cx="5" cy="5" r="4" fill="#fbbf24" opacity="0.9" />
                <circle cx="0" cy="0" r="3" fill="#10b981" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
