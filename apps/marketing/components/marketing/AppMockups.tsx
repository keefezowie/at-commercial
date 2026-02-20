"use client";

import { useId } from "react";

export function AppMockupDocx() {
  const clipPathId = `scan-docx-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="DOCX document table translation preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />
      <circle cx="28" cy="12" r="3" fill="#333333" />
      <circle cx="40" cy="12" r="3" fill="#333333" />

      <rect y="24" width="400" height="20" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <rect x="10" y="30" width="20" height="8" rx="2" fill="#222222" />
      <rect x="35" y="30" width="40" height="8" rx="2" fill="#222222" />

      <rect x="100" y="55" width="200" height="150" rx="4" fill="#0A0A0A" stroke="#333333" strokeWidth="1" />
      <g stroke="#222222" strokeWidth="1" fill="none">
        <rect x="120" y="75" width="160" height="80" rx="2" />
        <line x1="120" y1="95" x2="280" y2="95" />
        <line x1="120" y1="115" x2="280" y2="115" />
        <line x1="120" y1="135" x2="280" y2="135" />
        <line x1="170" y1="75" x2="170" y2="155" />
      </g>

      <clipPath id={clipPathId}>
        <rect x="100" y="55" width="200" height="0">
          <animate
            attributeName="height"
            values="0;150;150;0"
            dur="5s"
            repeatCount="indefinite"
            keyTimes="0;0.6;0.9;1"
          />
        </rect>
      </clipPath>

      <g fill="#2A2A2A">
        <rect x="125" y="82" width="30" height="6" rx="2" />
        <rect x="175" y="82" width="60" height="6" rx="2" />
        <rect x="125" y="102" width="25" height="6" rx="2" />
        <rect x="175" y="102" width="80" height="6" rx="2" />
      </g>

      <g fill="#EDEDED" clipPath={`url(#${clipPathId})`}>
        <rect x="125" y="82" width="30" height="6" rx="2" />
        <rect x="175" y="82" width="60" height="6" rx="2" />
        <rect x="125" y="102" width="25" height="6" rx="2" />
        <rect x="175" y="102" width="80" height="6" rx="2" />
      </g>

      <line x1="90" y1="55" x2="310" y2="55" stroke="#EDEDED" strokeWidth="1" strokeOpacity="0.4">
        <animate attributeName="y1" values="55;205;205;55" dur="5s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
        <animate attributeName="y2" values="55;205;205;55" dur="5s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
      </line>
    </svg>
  );
}

export function AppMockupXlsx() {
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="XLSX spreadsheet translation preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />
      <circle cx="28" cy="12" r="3" fill="#333333" />
      <circle cx="40" cy="12" r="3" fill="#333333" />
      <rect y="24" width="400" height="15" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />

      <g stroke="#1A1A1A" strokeWidth="1" fill="none">
        <line x1="40" y1="39" x2="40" y2="225" />
        <line x1="120" y1="39" x2="120" y2="225" />
        <line x1="200" y1="39" x2="200" y2="225" />
        <line x1="280" y1="39" x2="280" y2="225" />
        <line x1="0" y1="60" x2="400" y2="60" />
        <line x1="0" y1="90" x2="400" y2="90" />
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="150" x2="400" y2="150" />
      </g>

      <rect x="120" y="60" width="80" height="30" fill="none" stroke="#EDEDED" strokeWidth="1">
        <animate attributeName="y" values="60;90;120;60" dur="6s" repeatCount="indefinite" keyTimes="0;0.33;0.66;1" />
      </rect>

      <g fill="#EDEDED">
        <rect x="125" y="70" width="60" height="8" rx="2" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" />
        </rect>
        <rect x="125" y="100" width="50" height="8" rx="2" opacity="0">
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="6s"
            repeatCount="indefinite"
            keyTimes="0;0.4;0.9;1"
            begin="2s"
          />
        </rect>
      </g>
    </svg>
  );
}

export function AppMockupPptx() {
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PPTX slide translation preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />
      <circle cx="28" cy="12" r="3" fill="#333333" />

      <rect y="24" width="70" height="201" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <rect x="10" y="40" width="50" height="30" rx="2" fill="#111111" stroke="#EDEDED" strokeWidth="1" />
      <rect x="10" y="80" width="50" height="30" rx="2" fill="#111111" stroke="#222222" strokeWidth="1" />

      <rect x="100" y="45" width="270" height="152" rx="4" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <circle cx="300" cy="120" r="30" fill="none" stroke="#222222" strokeWidth="2" />

      <g fill="#EDEDED">
        <rect x="120" y="70" width="100" height="12" rx="2" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.2;0.8;1" />
        </rect>
        <circle cx="125" cy="100" r="3" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.8;1" />
        </circle>
        <rect x="135" y="97" width="80" height="6" rx="2" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.8;1" />
        </rect>
      </g>
    </svg>
  );
}

export function AppMockupPdf() {
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PDF manual translation preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />
      <rect x="150" y="4" width="100" height="16" rx="8" fill="#1A1A1A" />

      <rect x="110" y="40" width="180" height="165" rx="4" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <rect x="120" y="60" width="70" height="80" rx="2" fill="#111111" />
      <rect x="200" y="60" width="80" height="6" rx="2" fill="#222222" />
      <rect x="200" y="72" width="60" height="6" rx="2" fill="#222222" />

      <rect x="198" y="58" width="84" height="10" fill="#EDEDED" opacity="0">
        <animate attributeName="opacity" values="0;0.2;0.2;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.3;0.7;1" />
      </rect>
      <rect x="200" y="60" width="80" height="6" rx="2" fill="#EDEDED" opacity="0">
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.3;0.7;1" />
      </rect>
    </svg>
  );
}

export function AppMockupImage() {
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="Image OCR extraction preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />

      <rect x="60" y="45" width="280" height="150" rx="4" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <path d="M60 195 L150 120 L200 160 L280 90 L340 160" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="160" y="100" width="60" height="16" rx="2" fill="#111111" stroke="#222222" />

      <rect x="155" y="95" width="70" height="26" rx="4" fill="none" stroke="#EDEDED" strokeWidth="1" strokeDasharray="4 4" opacity="0">
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.2;0.8;1" />
      </rect>

      <rect x="240" y="90" width="80" height="20" rx="4" fill="#111111" stroke="#EDEDED" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0;0;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.8;1" />
      </rect>
      <line x1="225" y1="108" x2="240" y2="100" stroke="#EDEDED" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0;0;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.8;1" />
      </line>
    </svg>
  );
}

export function AppMockupCad() {
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="DWG and DXF CAD annotation localization preview">
      <rect width="400" height="24" fill="#111111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333333" />

      <rect y="24" width="40" height="201" fill="#0A0A0A" stroke="#222222" strokeWidth="1" />
      <circle cx="20" cy="40" r="6" fill="none" stroke="#333333" />
      <rect x="14" y="56" width="12" height="12" fill="none" stroke="#333333" />

      <g transform="translate(180, 110)">
        <g stroke="#111111" strokeWidth="1" fill="none">
          <path d="M-100 0 L100 0 M0 -100 L0 100" />
          <path d="M-100 -50 L100 50 M-100 50 L100 -50" />
        </g>

        <path d="M-40 20 L0 -10 L40 20 L0 50 Z" fill="none" stroke="#444444" strokeWidth="1.5" />
        <path d="M-40 20 L0 -10 L0 -50 L-40 -20 Z" fill="none" stroke="#444444" strokeWidth="1.5" />

        <line x1="0" y1="-30" x2="60" y2="-60" stroke="#333333" strokeDasharray="2 2" />
        <rect x="60" y="-70" width="50" height="14" rx="2" fill="#0A0A0A" stroke="#444444" />
        <rect x="65" y="-66" width="40" height="6" rx="2" fill="#EDEDED" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.3;0.8;1" />
        </rect>
      </g>
    </svg>
  );
}

