"use client";

import { useId } from "react";

export function SvgFormatDocx() {
  const clipPathId = `scan-docx-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" style={{ background: "transparent" }} role="img" aria-label="DOCX table fidelity illustration">
      <g transform="translate(130, 30)">
        <rect x="0" y="0" width="140" height="180" rx="4" fill="#0A0A0A" stroke="#333333" strokeWidth="1" />

        <rect x="20" y="20" width="80" height="6" rx="2" fill="#222222" />
        <rect x="20" y="32" width="50" height="4" rx="2" fill="#222222" />

        <g stroke="#333333" strokeWidth="1" fill="none">
          <rect x="20" y="50" width="100" height="90" rx="2" />
          <line x1="20" y1="80" x2="120" y2="80" />
          <line x1="20" y1="110" x2="120" y2="110" />
          <line x1="60" y1="50" x2="60" y2="140" />
        </g>

        <g fill="#EDEDED">
          <clipPath id={clipPathId}>
            <rect x="0" y="0" width="140" height="0">
              <animate
                attributeName="height"
                values="0;180;180;0"
                dur="4s"
                repeatCount="indefinite"
                keyTimes="0;0.6;0.9;1"
              />
            </rect>
          </clipPath>
          <g clipPath={`url(#${clipPathId})`}>
            <rect x="25" y="60" width="25" height="8" rx="2" />
            <rect x="65" y="60" width="45" height="8" rx="2" />

            <rect x="25" y="90" width="15" height="8" rx="2" />
            <rect x="65" y="90" width="35" height="8" rx="2" />

            <rect x="25" y="120" width="20" height="8" rx="2" />
            <rect x="65" y="120" width="40" height="8" rx="2" />
          </g>
        </g>

        <line x1="10" y1="0" x2="130" y2="0" stroke="#EDEDED" strokeWidth="1" strokeOpacity="0.5">
          <animate attributeName="y1" values="10;170;170;10" dur="4s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
          <animate attributeName="y2" values="10;170;170;10" dur="4s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.1;0.8;1" />
        </line>
      </g>
    </svg>
  );
}

export function SvgFormatPptx() {
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" style={{ background: "transparent" }} role="img" aria-label="PPTX visual continuity illustration">
      <g transform="translate(100, 50)">
        <rect x="0" y="0" width="200" height="130" rx="4" fill="#0A0A0A" stroke="#333333" strokeWidth="1" />

        <rect x="10" y="10" width="60" height="110" rx="2" fill="#111111" stroke="#222222" strokeWidth="1" />
        <circle cx="40" cy="45" r="16" fill="none" stroke="#333333" strokeWidth="1" />
        <path d="M25 85 L55 85 M25 95 L45 95" stroke="#333333" strokeWidth="1" fill="none" />

        <rect x="85" y="20" width="90" height="8" rx="2" fill="#333333" />

        <g fill="#EDEDED">
          <circle cx="90" cy="50" r="2" />
          <rect x="100" y="47" width="70" height="6" rx="2" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" keyTimes="0;0.2;0.8;1" />
          </rect>

          <circle cx="90" cy="75" r="2" />
          <rect x="100" y="72" width="50" height="6" rx="2" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" keyTimes="0;0.4;0.8;1" />
          </rect>

          <circle cx="90" cy="100" r="2" />
          <rect x="100" y="97" width="80" height="6" rx="2" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" keyTimes="0;0.6;0.8;1" />
          </rect>
        </g>
      </g>
    </svg>
  );
}

export function SvgFormatCad() {
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" style={{ background: "transparent" }} role="img" aria-label="DWG and DXF annotation mapping illustration">
      <g transform="translate(200, 120)">
        <g stroke="#333333" strokeWidth="1" fill="none">
          <polygon points="0,-40 60,-10 0,20 -60,-10" />
          <polygon points="-60,-10 0,20 0,80 -60,50" />
          <polygon points="60,-10 0,20 0,80 60,50" />
          <path d="M0 -20 L30 -5 L0 10 L-30 -5 Z" stroke="#222222" />
        </g>

        <g>
          <line x1="0" y1="-20" x2="-40" y2="-60" stroke="#555555" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="-80" y="-75" width="40" height="15" rx="2" fill="#0A0A0A" stroke="#444444" strokeWidth="1" />
          <rect x="-75" y="-71" width="30" height="7" rx="2" fill="#EDEDED" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.3;0.8;1" />
          </rect>
        </g>

        <g>
          <line x1="30" y1="35" x2="80" y2="5" stroke="#555555" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="80" y="-5" width="50" height="15" rx="2" fill="#0A0A0A" stroke="#444444" strokeWidth="1" />
          <rect x="85" y="-1" width="40" height="7" rx="2" fill="#EDEDED" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;0.8;1" />
          </rect>
        </g>
      </g>
    </svg>
  );
}

