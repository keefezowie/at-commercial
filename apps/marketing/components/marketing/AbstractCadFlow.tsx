"use client";

import { useId } from "react";

type AbstractCadFlowProps = {
  className?: string;
};

export function AbstractCadFlow({ className }: AbstractCadFlowProps) {
  const baseId = useId().replace(/:/g, "");
  const glowId = `${baseId}-glow`;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      role="img"
      aria-label="Abstract CAD translation flow"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="#333333" strokeWidth="1" fill="none">
        <path d="M 50 150 L 200 75 L 350 150 L 200 225 Z" />
        <path d="M 125 112.5 L 275 187.5" />
        <path d="M 125 187.5 L 275 112.5" />
      </g>

      <circle cx="50" cy="150" r="4" fill="#d2d6dd" filter={`url(#${glowId})`}>
        <animate attributeName="cx" values="50;200;200" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="150;75;75" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;0" dur="3s" repeatCount="indefinite" />
      </circle>

      <circle cx="200" cy="225" r="4" fill="#a4b1c0" filter={`url(#${glowId})`}>
        <animate attributeName="cx" values="200;350;350" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="225;150;150" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;0" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

