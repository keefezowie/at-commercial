"use client";

type MockupProps = {
  state: "before" | "after";
};

export function MockupDocx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="DOCX translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />
      <circle cx="28" cy="12" r="3" fill="#333" />

      <rect x="80" y="45" width="240" height="170" rx="4" fill="#0A0A0A" stroke="#333" strokeWidth="1" />

      <text x="100" y="70" fill="#EDEDED" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Spesifikasi Sistem" : "System Specification"}
      </text>
      <rect x="100" y="80" width="140" height="4" fill="#222" rx="2" />
      <rect x="100" y="90" width="200" height="4" fill="#222" rx="2" />

      <g stroke="#333" strokeWidth="1" fill="none">
        <rect x="100" y="110" width="200" height="60" rx="2" />
        <line x1="100" y1="130" x2="300" y2="130" />
        <line x1="100" y1="150" x2="300" y2="150" />
        <line x1="180" y1="110" x2="180" y2="170" />
      </g>

      <g fill="#A0A0A0" fontSize="10" fontFamily="system-ui, sans-serif">
        <text x="110" y="123" fill="#EDEDED" fontWeight="700">
          {isAfter ? "Komponen" : "Component"}
        </text>
        <text x="190" y="123" fill="#EDEDED" fontWeight="700">
          {isAfter ? "Kebutuhan" : "Requirement"}
        </text>

        <text x="110" y="143">{isAfter ? "Tegangan" : "Voltage"}</text>
        <text x="190" y="143">220V - 240V AC</text>

        <text x="110" y="163">{isAfter ? "Pendinginan" : "Cooling"}</text>
        <text x="190" y="163">{isAfter ? "Udara Aktif" : "Active Air"}</text>
      </g>
    </svg>
  );
}

export function MockupXlsx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="XLSX translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />
      <rect y="24" width="400" height="20" fill="#0A0A0A" stroke="#222" strokeWidth="1" />

      <g stroke="#222" strokeWidth="1" fill="none">
        <line x1="40" y1="44" x2="40" y2="225" />
        <line x1="140" y1="44" x2="140" y2="225" />
        <line x1="240" y1="44" x2="240" y2="225" />

        <line x1="0" y1="70" x2="400" y2="70" />
        <line x1="0" y1="100" x2="400" y2="100" />
        <line x1="0" y1="130" x2="400" y2="130" />
      </g>

      <g fill="#555" fontSize="10" fontFamily="monospace" textAnchor="middle">
        <text x="90" y="60">A</text>
        <text x="190" y="60">B</text>
        <text x="290" y="60">C</text>
        <text x="20" y="90">1</text>
        <text x="20" y="120">2</text>
      </g>

      <g fill="#EDEDED" fontSize="11" fontFamily="system-ui, sans-serif">
        <text x="50" y="90" fontWeight="700">
          {isAfter ? "Laporan Q3" : "Q3 Report"}
        </text>
        <text x="150" y="90" fontWeight="700">
          {isAfter ? "Pendapatan" : "Revenue"}
        </text>
        <text x="250" y="90" fontWeight="700">
          {isAfter ? "Pertumbuhan" : "Growth"}
        </text>

        <text x="50" y="120" fill="#A0A0A0">
          {isAfter ? "Penjualan Domestik" : "Domestic Sales"}
        </text>
        <text x="150" y="120" fill="#A0A0A0">
          $1,450,000
        </text>
        <text x="250" y="120" fill="#4ade80">
          +14.2%
        </text>
      </g>
    </svg>
  );
}

export function MockupPptx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PPTX translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />

      <rect y="24" width="60" height="201" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <rect x="10" y="40" width="40" height="25" rx="2" fill="#111" stroke="#444" strokeWidth="1" />
      <rect x="10" y="75" width="40" height="25" rx="2" fill="#0A0A0A" stroke="#222" strokeWidth="1" />

      <rect x="80" y="40" width="300" height="170" rx="4" fill="#0A0A0A" stroke="#333" strokeWidth="1" />

      <circle cx="310" cy="125" r="40" fill="none" stroke="#222" strokeWidth="4" />
      <path d="M290 125 L310 105 L330 140" fill="none" stroke="#222" strokeWidth="2" />

      <text x="110" y="75" fill="#EDEDED" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Peta Jalan Operasional" : "Operational Roadmap"}
      </text>
      <circle cx="115" cy="100" r="3" fill="#A0A0A0" />
      <text x="130" y="104" fill="#A0A0A0" fontSize="12" fontFamily="system-ui, sans-serif">
        {isAfter ? "Integrasi basis data pusat" : "Central database integration"}
      </text>

      <circle cx="115" cy="125" r="3" fill="#A0A0A0" />
      <text x="130" y="129" fill="#A0A0A0" fontSize="12" fontFamily="system-ui, sans-serif">
        {isAfter ? "Pelatihan staf regional" : "Regional staff training"}
      </text>

      <circle cx="115" cy="150" r="3" fill="#A0A0A0" />
      <text x="130" y="154" fill="#A0A0A0" fontSize="12" fontFamily="system-ui, sans-serif">
        {isAfter ? "Pembaruan protokol keamanan" : "Security protocol updates"}
      </text>
    </svg>
  );
}

export function MockupPdf({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PDF translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />
      <rect x="150" y="4" width="100" height="16" rx="8" fill="#1A1A1A" />

      <rect x="100" y="40" width="200" height="170" rx="2" fill="#0A0A0A" stroke="#333" strokeWidth="1" />

      <text x="120" y="70" fill="#EDEDED" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Kepatuhan TI (Bab 4)" : "IT Compliance (Ch. 4)"}
      </text>

      <g fill="#A0A0A0" fontSize="8" fontFamily="system-ui, sans-serif">
        <text x="120" y="90">
          {isAfter ? "Semua aset yang" : "All assets deployed"}
        </text>
        <text x="120" y="102">
          {isAfter ? "disebarkan harus" : "must be logged"}
        </text>
        <text x="120" y="114">
          {isAfter ? "dicatat secara aman." : "securely."}
        </text>

        <text x="210" y="90">
          {isAfter ? "Tinjauan triwulanan" : "Quarterly reviews"}
        </text>
        <text x="210" y="102">
          {isAfter ? "diperlukan untuk" : "are required for"}
        </text>
        <text x="210" y="114">
          {isAfter ? "semua basis data." : "all databases."}
        </text>
      </g>
    </svg>
  );
}

export function MockupImage({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="Image OCR translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />

      <rect x="80" y="45" width="240" height="150" rx="4" fill="#0A0A0A" stroke="#333" strokeWidth="1" />

      <rect x="130" y="80" width="140" height="80" rx="4" fill="none" stroke="#444" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="200" cy="120" r="20" fill="none" stroke="#444" strokeWidth="2" />

      <rect x="160" y="110" width="80" height="20" rx="2" fill="#111" stroke="#333" />
      <text
        x="200"
        y="124"
        fill={isAfter ? "#EDEDED" : "#A0A0A0"}
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
      >
        {isAfter ? "KLIK DI SINI" : "CLICK HERE"}
      </text>
    </svg>
  );
}

export function MockupCad({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="CAD translation mockup">
      <rect width="400" height="24" fill="#111" />
      <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
      <circle cx="16" cy="12" r="3" fill="#333" />
      <rect y="24" width="40" height="201" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <circle cx="20" cy="40" r="6" fill="none" stroke="#333" />

      <g transform="translate(200, 120)">
        <g stroke="#1A1A1A" strokeWidth="1" fill="none">
          <path d="M-100 0 L100 0 M0 -100 L0 100" />
        </g>

        <path d="M-30 20 L0 -10 L30 20 L0 50 Z" fill="none" stroke="#555" strokeWidth="2" />
        <path d="M-30 20 L0 -10 L0 -50 L-30 -20 Z" fill="none" stroke="#555" strokeWidth="2" />

        <line x1="0" y1="-30" x2="50" y2="-60" stroke="#444" strokeDasharray="2 2" />
        <rect x="50" y="-70" width="80" height="18" rx="2" fill="#111" stroke="#333" />
        <text x="90" y="-57" fill="#EDEDED" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">
          {isAfter ? "Sumbu Atas" : "Top Axis"}
        </text>

        <line x1="30" y1="20" x2="70" y2="40" stroke="#444" strokeDasharray="2 2" />
        <rect x="70" y="30" width="80" height="18" rx="2" fill="#111" stroke="#333" />
        <text x="110" y="43" fill="#EDEDED" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">
          {isAfter ? "Tepi Depan" : "Front Edge"}
        </text>
      </g>
    </svg>
  );
}

