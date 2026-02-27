"use client";

export function SvgCadWorkflow() {
  return (
    <svg
      viewBox="0 0 400 240"
      width="100%"
      height="100%"
      role="img"
      aria-label="Handle CAD workflow in same platform"
      style={{ background: "#050505" }}
    >
      <g stroke="#222" strokeWidth="1" fill="none">
        <path d="M 100 120 L 200 70 L 300 120 L 200 170 Z" />
        <path d="M 150 95 L 250 145" />
        <path d="M 150 145 L 250 95" />
      </g>

      <g transform="translate(150, 95)">
        <line x1="0" y1="0" x2="-20" y2="-30" stroke="#444" strokeWidth="1" />
        <rect x="-50" y="-45" width="40" height="12" rx="2" fill="#111" stroke="#333" />
        <rect x="-45" y="-42" width="30" height="6" rx="2" fill="#333">
          <animate attributeName="fill" values="#333;var(--accent-electric);#333" dur="4s" repeatCount="indefinite" keyTimes="0;0.2;1" />
        </rect>
      </g>

      <g transform="translate(250, 145)">
        <line x1="0" y1="0" x2="20" y2="30" stroke="#444" strokeWidth="1" />
        <rect x="10" y="30" width="40" height="12" rx="2" fill="#111" stroke="#333" />
        <rect x="15" y="33" width="30" height="6" rx="2" fill="#333">
          <animate attributeName="fill" values="#333;var(--accent-electric);#333" dur="4s" repeatCount="indefinite" keyTimes="0;0.6;1" />
        </rect>
      </g>

      <circle cx="200" cy="120" r="4" fill="var(--accent-electric)">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
