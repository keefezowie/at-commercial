"use client";

import { useId } from "react";

type AbstractDocumentFlowProps = {
  className?: string;
};

export function AbstractDocumentFlow({ className }: AbstractDocumentFlowProps) {
  const baseId = useId().replace(/:/g, "");
  const gradientId = `${baseId}-active-gradient`;
  const maskId = `${baseId}-scanner-mask`;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      role="img"
      aria-label="Abstract document translation flow"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="100%" stopColor="#eeeeee" />
        </linearGradient>
        <clipPath id={maskId}>
          <rect x="0" y="0" width="400" height="0">
            <animate
              attributeName="height"
              values="0;300;300;0"
              dur="4s"
              repeatCount="indefinite"
              keyTimes="0;0.6;0.9;1"
            />
          </rect>
        </clipPath>
      </defs>

      <rect x="100" y="40" width="200" height="220" rx="8" fill="#111111" stroke="#333333" strokeWidth="1" />

      <g fill="#2a2a2a">
        <rect x="120" y="70" width="160" height="8" rx="4" />
        <rect x="120" y="95" width="130" height="8" rx="4" />
        <rect x="120" y="120" width="150" height="8" rx="4" />
        <rect x="120" y="145" width="140" height="8" rx="4" />
      </g>

      <g fill={`url(#${gradientId})`} clipPath={`url(#${maskId})`}>
        <rect x="120" y="70" width="160" height="8" rx="4" />
        <rect x="120" y="95" width="130" height="8" rx="4" />
        <rect x="120" y="120" width="150" height="8" rx="4" />
        <rect x="120" y="145" width="140" height="8" rx="4" />
      </g>

      <line x1="90" y1="40" x2="310" y2="40" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4">
        <animate attributeName="y1" values="40;260;260;40" dur="4s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
        <animate attributeName="y2" values="40;260;260;40" dur="4s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          dur="4s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.6;0.7;1"
        />
      </line>
    </svg>
  );
}

