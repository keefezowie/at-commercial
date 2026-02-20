"use client";

export function SvgTerminologyScale() {
  return (
    <svg
      viewBox="0 0 400 240"
      width="100%"
      height="100%"
      role="img"
      aria-label="Control terminology at scale"
      style={{ background: "#050505" }}
    >
      <g stroke="#222" strokeWidth="1.5" fill="none">
        <path d="M200 120 L120 70" />
        <path d="M200 120 L280 70" />
        <path d="M200 120 L200 190" />
      </g>

      <circle r="3" fill="#e5e5e5">
        <animateMotion path="M200 120 L120 70" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
      </circle>

      <circle r="3" fill="#e5e5e5">
        <animateMotion path="M200 120 L280 70" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>

      <circle r="3" fill="#e5e5e5">
        <animateMotion path="M200 120 L200 190" dur="2s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>

      <circle cx="200" cy="120" r="16" fill="#111" stroke="#444" strokeWidth="2" />
      <circle cx="200" cy="120" r="6" fill="#e5e5e5">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
      </circle>

      <rect x="104" y="54" width="32" height="32" rx="4" fill="#0a0a0a" stroke="#333" />
      <rect x="264" y="54" width="32" height="32" rx="4" fill="#0a0a0a" stroke="#333" />
      <rect x="184" y="190" width="32" height="32" rx="4" fill="#0a0a0a" stroke="#333" />
    </svg>
  );
}
