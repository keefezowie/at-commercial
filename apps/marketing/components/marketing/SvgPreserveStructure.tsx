"use client";

import { useId } from "react";

export function SvgPreserveStructure() {
  const baseId = useId().replace(/:/g, "");
  const gradientId = `${baseId}-scan-glow`;
  const maskId = `${baseId}-scan-mask`;

  return (
    <svg
      viewBox="0 0 400 240"
      width="100%"
      height="100%"
      role="img"
      aria-label="Preserve document structure"
      style={{ background: "#050505" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="var(--accent-electric)" />
        </linearGradient>
        <clipPath id={maskId}>
          <rect x="0" y="0" width="400" height="0">
            <animate
              attributeName="height"
              values="0;240;240;0"
              dur="4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;0.9;1"
            />
          </rect>
        </clipPath>
      </defs>

      <rect x="110" y="30" width="180" height="180" rx="6" fill="#0a0a0a" stroke="#222" strokeWidth="1" />
      <rect x="130" y="50" width="140" height="60" rx="4" fill="#1a1a1a" stroke="#333" strokeDasharray="4 4" />

      <g fill="#222">
        <rect x="130" y="130" width="140" height="6" rx="3" />
        <rect x="130" y="145" width="110" height="6" rx="3" />
        <rect x="130" y="160" width="130" height="6" rx="3" />
        <rect x="130" y="175" width="90" height="6" rx="3" />
      </g>

      <g fill={`url(#${gradientId})`} clipPath={`url(#${maskId})`}>
        <rect x="130" y="130" width="140" height="6" rx="3" />
        <rect x="130" y="145" width="110" height="6" rx="3" />
        <rect x="130" y="160" width="130" height="6" rx="3" />
        <rect x="130" y="175" width="90" height="6" rx="3" />
      </g>

      <line x1="100" y1="30" x2="300" y2="30" stroke="#fff" strokeOpacity="0.3" strokeWidth="1">
        <animate attributeName="y1" values="30;210;210;30" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;0.9;1" />
        <animate attributeName="y2" values="30;210;210;30" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;0.9;1" />
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          dur="4s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.5;0.6;1"
        />
      </line>
    </svg>
  );
}
