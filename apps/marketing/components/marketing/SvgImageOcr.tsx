"use client";

export function SvgImageOcr() {
  return (
    <svg
      viewBox="0 0 400 240"
      width="100%"
      height="100%"
      role="img"
      aria-label="Translate text in images"
      style={{ background: "#050505" }}
    >
      <rect x="110" y="40" width="180" height="160" rx="6" fill="#0a0a0a" stroke="#222" strokeWidth="1" />

      <circle cx="160" cy="100" r="30" fill="none" stroke="#222" strokeWidth="2" />
      <path d="M110 160 Q160 100 210 160 T290 160" fill="none" stroke="#222" strokeWidth="2" />

      <rect x="220" y="70" width="50" height="10" rx="2" fill="#222" />
      <rect x="220" y="85" width="40" height="10" rx="2" fill="#222" />

      <rect x="215" y="65" width="60" height="35" rx="4" fill="none" stroke="var(--accent-electric)" strokeWidth="1" strokeDasharray="4 4" opacity="0">
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" keyTimes="0;0.2;0.8;1" />
      </rect>

      <g opacity="0">
        <rect x="220" y="70" width="50" height="10" rx="2" fill="var(--accent-electric)" />
        <rect x="220" y="85" width="40" height="10" rx="2" fill="var(--accent-electric)" />
        <animate attributeName="opacity" values="0;0;1;1;0" dur="3s" repeatCount="indefinite" keyTimes="0;0.2;0.3;0.8;1" />
      </g>
    </svg>
  );
}
