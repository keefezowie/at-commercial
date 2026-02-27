"use client";

type MockupProps = {
  state: "before" | "after";
};

// Common UI elements for the mockups
const WindowChrome = () => (
  <>
    <rect width="400" height="24" fill="#111" />
    <line x1="0" y1="24" x2="400" y2="24" stroke="#222" strokeWidth="1" />
    <circle cx="16" cy="12" r="3" fill="#333" />
    <circle cx="28" cy="12" r="3" fill="#333" />
    <circle cx="40" cy="12" r="3" fill="#333" />
  </>
);

export function MockupDocx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="DOCX translation mockup">
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor { animation: blink 1s step-end infinite; }
      `}</style>
      <WindowChrome />
      
      {/* Toolbar */}
      <rect y="24" width="400" height="20" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <rect x="10" y="28" width="12" height="12" rx="2" fill="#222" />
      <rect x="26" y="28" width="12" height="12" rx="2" fill="#222" />
      <rect x="42" y="28" width="12" height="12" rx="2" fill="#222" />
      <rect x="60" y="28" width="40" height="12" rx="2" fill="#111" stroke="#333" strokeWidth="1" />
      
      {/* Document Page */}
      <rect x="80" y="55" width="240" height="250" rx="2" fill="#111" stroke="#333" strokeWidth="1" />
      
      {/* Header */}
      <text x="100" y="80" fill="#EDEDED" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Perjanjian Kerahasiaan (NDA)" : "Non-Disclosure Agreement (NDA)"}
      </text>
      <line x1="100" y1="88" x2="300" y2="88" stroke="#333" strokeWidth="1" />
      
      {/* Paragraph */}
      <text x="100" y="105" fill="#A0A0A0" fontSize="6" fontFamily="system-ui, sans-serif">
        {isAfter ? "Perjanjian ini dibuat pada tanggal 12 Mei 2024, antara:" : "This Agreement is entered into on May 12, 2024, between:"}
      </text>
      {isAfter && <line x1="265" y1="100" x2="265" y2="106" stroke="#00E5FF" strokeWidth="1" className="cursor" />}
      {!isAfter && <line x1="275" y1="100" x2="275" y2="106" stroke="#00E5FF" strokeWidth="1" className="cursor" />}
      
      {/* Complex Table */}
      <g stroke="#444" strokeWidth="1" fill="none">
        <rect x="100" y="115" width="200" height="45" />
        <line x1="100" y1="130" x2="300" y2="130" />
        <line x1="100" y1="145" x2="300" y2="145" />
        <line x1="160" y1="115" x2="160" y2="160" />
      </g>
      
      <g fill="#EDEDED" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">
        <text x="105" y="125">{isAfter ? "Pihak" : "Party"}</text>
        <text x="165" y="125">{isAfter ? "Detail Entitas" : "Entity Details"}</text>
      </g>
      
      <g fill="#A0A0A0" fontSize="5" fontFamily="system-ui, sans-serif">
        <text x="105" y="140">{isAfter ? "Pihak Pengungkap" : "Disclosing Party"}</text>
        <text x="165" y="140">TechNova Solutions Inc. (ID: 992-A)</text>
        
        <text x="105" y="155">{isAfter ? "Pihak Penerima" : "Receiving Party"}</text>
        <text x="165" y="155">Global Dynamics LLC (ID: 441-B)</text>
      </g>
      
      {/* Signature Block */}
      <text x="100" y="180" fill="#A0A0A0" fontSize="6" fontFamily="system-ui, sans-serif">
        {isAfter ? "Ditandatangani oleh:" : "Signed by:"}
      </text>
      <line x1="100" y1="200" x2="180" y2="200" stroke="#444" strokeWidth="1" strokeDasharray="2 2" />
      <text x="100" y="210" fill="#777" fontSize="5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Perwakilan Sah" : "Authorized Representative"}
      </text>
    </svg>
  );
}

export function MockupXlsx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="XLSX translation mockup">
      <style>{`
        @keyframes drawChart { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
        .chart-line { stroke-dasharray: 300; animation: drawChart 2s ease-out forwards; }
      `}</style>
      <WindowChrome />
      
      {/* Ribbon */}
      <rect y="24" width="400" height="25" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <rect x="10" y="30" width="30" height="12" rx="2" fill="#222" />
      <rect x="45" y="30" width="30" height="12" rx="2" fill="#111" />
      <rect x="80" y="30" width="30" height="12" rx="2" fill="#111" />
      
      {/* Formula Bar */}
      <rect y="49" width="400" height="16" fill="#111" stroke="#222" strokeWidth="1" />
      <text x="10" y="60" fill="#777" fontSize="7" fontFamily="monospace">fx</text>
      <text x="25" y="60" fill="#EDEDED" fontSize="7" fontFamily="monospace">=SUM(C4:F4)*1.15</text>

      {/* Grid Lines */}
      <g stroke="#222" strokeWidth="1" fill="none">
        <line x1="30" y1="65" x2="30" y2="225" />
        <line x1="120" y1="65" x2="120" y2="225" />
        <line x1="170" y1="65" x2="170" y2="225" />
        <line x1="220" y1="65" x2="220" y2="225" />
        <line x1="270" y1="65" x2="270" y2="225" />
        <line x1="320" y1="65" x2="320" y2="225" />
        
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="100" x2="400" y2="100" />
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="140" x2="400" y2="140" />
        <line x1="0" y1="160" x2="400" y2="160" />
      </g>

      {/* Headers */}
      <g fill="#555" fontSize="7" fontFamily="monospace" textAnchor="middle">
        <text x="75" y="75">A</text>
        <text x="145" y="75">B</text>
        <text x="195" y="75">C</text>
        <text x="245" y="75">D</text>
        <text x="295" y="75">E</text>
        <text x="15" y="93">1</text>
        <text x="15" y="113">2</text>
        <text x="15" y="133">3</text>
        <text x="15" y="153">4</text>
      </g>

      {/* Data */}
      <g fill="#EDEDED" fontSize="7" fontFamily="system-ui, sans-serif">
        <text x="35" y="94" fontWeight="700">{isAfter ? "Kategori Metrik" : "Metric Category"}</text>
        <text x="125" y="94" fontWeight="700">Q1</text>
        <text x="175" y="94" fontWeight="700">Q2</text>
        <text x="225" y="94" fontWeight="700">Q3</text>
        <text x="275" y="94" fontWeight="700">{isAfter ? "Proyeksi" : "Projected"}</text>

        <text x="35" y="114" fill="#A0A0A0">{isAfter ? "Pendapatan Lisensi" : "License Revenue"}</text>
        <text x="125" y="114" fill="#A0A0A0">125.4K</text>
        <text x="175" y="114" fill="#A0A0A0">142.8K</text>
        <text x="225" y="114" fill="#A0A0A0">156.2K</text>
        <text x="275" y="114" fill="#EDEDED">180.5K</text>

        <text x="35" y="134" fill="#A0A0A0">{isAfter ? "Biaya Operasional" : "Operating Costs"}</text>
        <text x="125" y="134" fill="#A0A0A0">84.2K</text>
        <text x="175" y="134" fill="#A0A0A0">86.5K</text>
        <text x="225" y="134" fill="#A0A0A0">89.1K</text>
        <text x="275" y="134" fill="#EDEDED">92.0K</text>
        
        <text x="35" y="154" fontWeight="700">{isAfter ? "Margin Bersih" : "Net Margin"}</text>
        <text x="125" y="154" fontWeight="700">32.8%</text>
        <text x="175" y="154" fontWeight="700">39.4%</text>
        <text x="225" y="154" fontWeight="700">42.9%</text>
        <text x="275" y="154" fontWeight="700">49.0%</text>
      </g>
      
      {/* Embedded Chart */}
      <rect x="35" y="170" width="285" height="45" rx="2" fill="#111" stroke="#333" strokeWidth="1" />
      <text x="45" y="182" fill="#A0A0A0" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Tren Pertumbuhan" : "Growth Trend"}
      </text>
      <path d="M 45 205 L 100 195 L 155 190 L 210 185 L 265 175" fill="none" stroke="#00E5FF" strokeWidth="2" className="chart-line" />
      <circle cx="45" cy="205" r="2" fill="#00E5FF" />
      <circle cx="100" cy="195" r="2" fill="#00E5FF" />
      <circle cx="155" cy="190" r="2" fill="#00E5FF" />
      <circle cx="210" cy="185" r="2" fill="#00E5FF" />
      <circle cx="265" cy="175" r="2" fill="#00E5FF" />
    </svg>
  );
}

export function MockupPptx({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PPTX translation mockup">
      <WindowChrome />

      {/* Sidebar */}
      <rect y="24" width="60" height="201" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <rect x="10" y="35" width="40" height="25" rx="2" fill="#111" stroke="#444" strokeWidth="1" />
      <rect x="10" y="70" width="40" height="25" rx="2" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <rect x="10" y="105" width="40" height="25" rx="2" fill="#0A0A0A" stroke="#222" strokeWidth="1" />

      {/* Main Slide */}
      <rect x="80" y="40" width="300" height="170" rx="4" fill="#111" stroke="#333" strokeWidth="1" />

      {/* Slide Title */}
      <text x="100" y="65" fill="#EDEDED" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Arsitektur Sistem Inti" : "Core System Architecture"}
      </text>
      <line x1="100" y1="75" x2="360" y2="75" stroke="#333" strokeWidth="1" />

      {/* Complex Diagram */}
      <g transform="translate(100, 90)">
        {/* Block 1 */}
        <rect x="0" y="0" width="70" height="40" rx="4" fill="#1A1A1A" stroke="#555" strokeWidth="1" />
        <text x="35" y="15" fill="#EDEDED" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Penyerapan" : "Ingestion"}
        </text>
        <text x="35" y="25" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "API & Webhook" : "API & Webhooks"}
        </text>
        <text x="35" y="32" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Validasi Data" : "Data Validation"}
        </text>

        {/* Arrow 1 */}
        <path d="M 75 20 L 90 20 L 85 15 M 90 20 L 85 25" fill="none" stroke="#555" strokeWidth="1.5" />

        {/* Block 2 */}
        <rect x="95" y="0" width="70" height="40" rx="4" fill="#222" stroke="#777" strokeWidth="1" />
        <text x="130" y="15" fill="#EDEDED" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Pemrosesan" : "Processing"}
        </text>
        <text x="130" y="25" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Mesin ML" : "ML Engine"}
        </text>
        <text x="130" y="32" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Transformasi" : "Transformation"}
        </text>

        {/* Arrow 2 */}
        <path d="M 170 20 L 185 20 L 180 15 M 185 20 L 180 25" fill="none" stroke="#555" strokeWidth="1.5" />

        {/* Block 3 */}
        <rect x="190" y="0" width="70" height="40" rx="4" fill="#1A1A1A" stroke="#555" strokeWidth="1" />
        <text x="225" y="15" fill="#EDEDED" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Penyimpanan" : "Storage"}
        </text>
        <text x="225" y="25" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Gudang Data" : "Data Warehouse"}
        </text>
        <text x="225" y="32" fill="#A0A0A0" fontSize="5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          {isAfter ? "Pencadangan" : "Cold Backup"}
        </text>
      </g>

      {/* Footer Notes */}
      <circle cx="105" cy="155" r="2" fill="#777" />
      <text x="115" y="157" fill="#A0A0A0" fontSize="6" fontFamily="system-ui, sans-serif">
        {isAfter ? "Semua node memiliki redundansi N+1." : "All nodes feature N+1 redundancy."}
      </text>
      <circle cx="105" cy="170" r="2" fill="#777" />
      <text x="115" y="172" fill="#A0A0A0" fontSize="6" fontFamily="system-ui, sans-serif">
        {isAfter ? "Latensi target < 50ms." : "Target latency < 50ms."}
      </text>
    </svg>
  );
}

export function MockupPdf({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="PDF translation mockup">
      <WindowChrome />
      <rect x="150" y="4" width="100" height="16" rx="8" fill="#1A1A1A" />

      {/* PDF Document Background */}
      <rect x="60" y="35" width="280" height="180" fill="#111" stroke="#333" strokeWidth="1" />

      {/* PDF Header */}
      <rect x="60" y="35" width="280" height="35" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      
      {/* Logo */}
      <rect x="270" y="40" width="60" height="18" fill="#222" rx="2" />
      <circle cx="280" cy="49" r="4" fill="#555" />
      <text x="288" y="51" fill="#EDEDED" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">TechNova</text>

      {/* Header Text */}
      <text x="68" y="48" fill="#EDEDED" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Analisis Tekno-Ekonomi" : "Techno-Economic Analysis of"}
      </text>
      <text x="68" y="59" fill="#EDEDED" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Modul Surya berbasis Wafer Persegi Panjang" : "Solar Modules based on Rectangular Wafers"}
      </text>
      <text x="68" y="68" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        Dr. Sarah Jenkins, Michael Chen, Elena Rodriguez
      </text>

      {/* Column 1 */}
      <text x="68" y="80" fill="#EDEDED" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Motivasi" : "Motivation"}
      </text>
      <rect x="68" y="83" width="2" height="2" fill="#555" />
      <text x="72" y="85" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Sel surya selalu berbasis" : "Solar cells were always based"}
      </text>
      <text x="72" y="89" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "pada wafer persegi" : "on (pseudo-) square wafers"}
      </text>

      <rect x="68" y="93" width="2" height="2" fill="#555" />
      <text x="72" y="95" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Format sel baru" : "Novel cell formats"}
      </text>

      <text x="68" y="105" fill="#EDEDED" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Format Wafer dan Sel" : "Wafer and Cell Formats"}
      </text>
      
      <circle cx="85" cy="125" r="14" fill="#222" stroke="#444" strokeWidth="1" />
      <text x="85" y="126" fill="#EDEDED" fontSize="4" fontWeight="700" textAnchor="middle">M10</text>
      
      <circle cx="125" cy="125" r="14" fill="#333" stroke="#555" strokeWidth="1" />
      <text x="125" y="126" fill="#EDEDED" fontSize="4" fontWeight="700" textAnchor="middle">M10R</text>
      
      <circle cx="85" cy="160" r="16" fill="#1A1A1A" stroke="#444" strokeWidth="1" />
      <text x="85" y="161" fill="#EDEDED" fontSize="4" fontWeight="700" textAnchor="middle">G12</text>
      
      <circle cx="125" cy="160" r="16" fill="#2A2A2A" stroke="#555" strokeWidth="1" />
      <text x="125" y="161" fill="#EDEDED" fontSize="4" fontWeight="700" textAnchor="middle">G12R</text>

      {/* Column 2 */}
      <text x="155" y="80" fill="#EDEDED" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Asumsi Model Biaya" : "Cost Model Assumptions"}
      </text>
      
      <rect x="155" y="85" width="85" height="35" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <circle cx="180" cy="102" r="14" fill="#333" opacity="0.8" />
      <rect x="170" y="92" width="20" height="20" fill="none" stroke="#777" strokeWidth="0.5" />
      <line x1="180" y1="85" x2="180" y2="120" stroke="#777" strokeWidth="0.5" strokeDasharray="1 1" />
      <line x1="155" y1="102" x2="240" y2="102" stroke="#777" strokeWidth="0.5" strokeDasharray="1 1" />
      
      <text x="200" y="95" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">Ingot</text>
      <text x="200" y="100" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">Cell area</text>
      
      <rect x="155" y="125" width="2" height="2" fill="#555" />
      <text x="159" y="127" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Biaya ingot terdiri dari" : "Ingot costs consist of"}
      </text>
      <rect x="155" y="131" width="2" height="2" fill="#555" />
      <text x="159" y="133" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Luas penampang ingot" : "Ingot cross section area"}
      </text>

      <text x="155" y="145" fill="#EDEDED" fontSize="4" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Tabel 1: Biaya sel dan wafer" : "Table 1: Cell and wafer costs"}
      </text>
      <rect x="155" y="148" width="85" height="20" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <line x1="155" y1="153" x2="240" y2="153" stroke="#333" strokeWidth="0.5" />
      <line x1="155" y1="158" x2="240" y2="158" stroke="#333" strokeWidth="0.5" />
      <line x1="155" y1="163" x2="240" y2="163" stroke="#333" strokeWidth="0.5" />
      <text x="157" y="151" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">Wafer M10</text>
      <text x="215" y="151" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">0.137 </text>
      <text x="157" y="156" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">Wafer G12</text>
      <text x="215" y="156" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">0.191 </text>
      <text x="157" y="161" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">Cell M10</text>
      <text x="215" y="161" fill="#A0A0A0" fontSize="3" fontFamily="system-ui, sans-serif">0.035 /Wp</text>

      {/* Column 3 */}
      <text x="250" y="80" fill="#EDEDED" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Hasil" : "Results"}
      </text>
      
      <rect x="250" y="83" width="2" height="2" fill="#555" />
      <text x="254" y="85" fill="#A0A0A0" fontSize="3.5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Penggunaan ingot meningkat" : "Ingot usage increases"}
      </text>
      <rect x="250" y="88" width="80" height="25" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <path d="M252 110 Q 272 95, 328 92" fill="none" stroke="#EDEDED" strokeWidth="1" />
      <path d="M252 112 Q 272 100, 328 98" fill="none" stroke="#A0A0A0" strokeWidth="1" />
      <path d="M252 105 Q 272 98, 328 95" fill="none" stroke="#777" strokeWidth="1" />
      
      <rect x="250" y="118" width="2" height="2" fill="#555" />
      <text x="254" y="120" fill="#A0A0A0" fontSize="3.5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Kerugian pada tingkat modul" : "Losses on module level"}
      </text>
      <rect x="250" y="123" width="80" height="25" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <path d="M252 125 Q 282 130, 328 145" fill="none" stroke="#EDEDED" strokeWidth="1" />
      <path d="M252 127 Q 282 135, 328 142" fill="none" stroke="#777" strokeWidth="1" />
      
      <rect x="250" y="155" width="80" height="25" fill="#222" stroke="#444" strokeWidth="1" />
      <text x="254" y="162" fill="#EDEDED" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {isAfter ? "Ringkasan" : "Summary"}
      </text>
      <rect x="254" y="166" width="2" height="2" fill="#777" />
      <text x="258" y="168" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Wafer persegi panjang" : "Rectangular wafers"}
      </text>
      <text x="258" y="172" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "mengurangi limbah" : "reduce waste in ingots"}
      </text>
      <rect x="254" y="176" width="2" height="2" fill="#777" />
      <text x="258" y="178" fill="#A0A0A0" fontSize="3.5" fontFamily="system-ui, sans-serif">
        {isAfter ? "Biaya transportasi" : "Transport costs shift"}
      </text>
    </svg>
  );
}

export function MockupImage({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="Image OCR translation mockup">
      <style>{`
        @keyframes scan { 0% { transform: translateY(0); } 50% { transform: translateY(140px); } 100% { transform: translateY(0); } }
        .scan-line { animation: scan 3s linear infinite; }
      `}</style>
      <WindowChrome />

      {/* Image Viewer Background */}
      <rect x="60" y="35" width="280" height="180" rx="4" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      
      {/* Scanned Blueprint/Diagram */}
      <g transform="translate(80, 50)">
        {/* Diagram Lines */}
        <rect x="20" y="20" width="200" height="120" fill="none" stroke="#333" strokeWidth="2" />
        <line x1="20" y1="60" x2="220" y2="60" stroke="#333" strokeWidth="2" />
        <line x1="120" y1="20" x2="120" y2="140" stroke="#333" strokeWidth="2" />
        <circle cx="120" cy="60" r="30" fill="none" stroke="#333" strokeWidth="2" />
        <circle cx="120" cy="60" r="20" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* OCR Bounding Boxes & Text */}
        {/* Title */}
        <rect x="25" y="25" width="80" height="15" fill={isAfter ? "#111" : "none"} stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
        <text x="30" y="35" fill={isAfter ? "#EDEDED" : "#A0A0A0"} fontSize="7" fontWeight="700" fontFamily="monospace">
          {isAfter ? "POMPA UTAMA" : "MAIN PUMP"}
        </text>

        {/* Label 1 */}
        <rect x="130" y="25" width="80" height="12" fill={isAfter ? "#111" : "none"} stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
        <text x="135" y="34" fill={isAfter ? "#EDEDED" : "#A0A0A0"} fontSize="6" fontFamily="monospace">
          {isAfter ? "KATUP TEKANAN" : "PRESSURE VALVE"}
        </text>

        {/* Label 2 */}
        <rect x="25" y="120" width="70" height="12" fill={isAfter ? "#111" : "none"} stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
        <text x="30" y="129" fill={isAfter ? "#EDEDED" : "#A0A0A0"} fontSize="6" fontFamily="monospace">
          {isAfter ? "ALIRAN MASUK" : "INFLOW TUBE"}
        </text>

        {/* Label 3 */}
        <rect x="130" y="120" width="70" height="12" fill={isAfter ? "#111" : "none"} stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
        <text x="135" y="129" fill={isAfter ? "#EDEDED" : "#A0A0A0"} fontSize="6" fontFamily="monospace">
          {isAfter ? "ALIRAN KELUAR" : "OUTFLOW TUBE"}
        </text>
        
        {/* Measurement */}
        <rect x="155" y="65" width="40" height="10" fill={isAfter ? "#111" : "none"} stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
        <text x="160" y="73" fill={isAfter ? "#EDEDED" : "#A0A0A0"} fontSize="5" fontFamily="monospace">
          {isAfter ? "DIAMETER 40mm" : "40mm DIAMETER"}
        </text>
        
        {/* Scanning Line */}
        {!isAfter && (
          <g className="scan-line">
            <line x1="10" y1="20" x2="230" y2="20" stroke="#00E5FF" strokeWidth="2" opacity="0.8" />
            <rect x="10" y="0" width="220" height="20" fill="url(#scan-grad)" opacity="0.3" />
          </g>
        )}
      </g>
      <defs>
        <linearGradient id="scan-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MockupCad({ state }: MockupProps) {
  const isAfter = state === "after";
  return (
    <svg viewBox="0 0 400 225" width="100%" height="100%" style={{ background: "#050505" }} role="img" aria-label="CAD translation mockup">
      <WindowChrome />
      
      {/* CAD Toolbar */}
      <rect y="24" width="40" height="201" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
      <circle cx="20" cy="40" r="6" fill="none" stroke="#555" strokeWidth="1.5" />
      <rect x="14" y="55" width="12" height="12" fill="none" stroke="#555" strokeWidth="1.5" />
      <path d="M 14 85 L 20 75 L 26 85 Z" fill="none" stroke="#555" strokeWidth="1.5" />
      <line x1="14" y1="100" x2="26" y2="100" stroke="#555" strokeWidth="1.5" />

      {/* CAD Drawing Area */}
      <g transform="translate(200, 120)">
        {/* Grid */}
        <g stroke="#111" strokeWidth="1" fill="none">
          <path d="M-150 -80 L150 -80 M-150 -40 L150 -40 M-150 0 L150 0 M-150 40 L150 40 M-150 80 L150 80" />
          <path d="M-120 -100 L-120 100 M-80 -100 L-80 100 M-40 -100 L-40 100 M0 -100 L0 100 M40 -100 L40 100 M80 -100 L80 100 M120 -100 L120 100" />
        </g>

        {/* Mechanical Part */}
        <path d="M-60 40 L-60 -40 L-20 -40 L-20 -60 L20 -60 L20 -40 L60 -40 L60 40 Z" fill="none" stroke="#EDEDED" strokeWidth="2" />
        <circle cx="-40" cy="0" r="10" fill="none" stroke="#EDEDED" strokeWidth="2" />
        <circle cx="40" cy="0" r="10" fill="none" stroke="#EDEDED" strokeWidth="2" />
        
        {/* Centerlines */}
        <line x1="-55" y1="0" x2="-25" y2="0" stroke="#555" strokeWidth="1" strokeDasharray="5 2 1 2" />
        <line x1="-40" y1="-15" x2="-40" y2="15" stroke="#555" strokeWidth="1" strokeDasharray="5 2 1 2" />
        <line x1="25" y1="0" x2="55" y2="0" stroke="#555" strokeWidth="1" strokeDasharray="5 2 1 2" />
        <line x1="40" y1="-15" x2="40" y2="15" stroke="#555" strokeWidth="1" strokeDasharray="5 2 1 2" />

        {/* Dimensions & Annotations */}
        {/* Top Dimension */}
        <line x1="-20" y1="-65" x2="-20" y2="-85" stroke="#777" strokeWidth="1" />
        <line x1="20" y1="-65" x2="20" y2="-85" stroke="#777" strokeWidth="1" />
        <line x1="-20" y1="-80" x2="20" y2="-80" stroke="#777" strokeWidth="1" />
        <polygon points="-20,-80 -15,-82 -15,-78" fill="#777" />
        <polygon points="20,-80 15,-82 15,-78" fill="#777" />
        <rect x="-15" y="-88" width="30" height="12" fill="#050505" />
        <text x="0" y="-80" fill="#A0A0A0" fontSize="6" fontFamily="monospace" textAnchor="middle">
          {isAfter ? "LEBAR 40" : "WIDTH 40"}
        </text>

        {/* Side Annotation */}
        <line x1="65" y1="0" x2="90" y2="-20" stroke="#777" strokeWidth="1" />
        <line x1="90" y1="-20" x2="120" y2="-20" stroke="#777" strokeWidth="1" />
        <text x="95" y="-24" fill="#EDEDED" fontSize="6" fontFamily="monospace">
          {isAfter ? "PERMUKAAN HALUS" : "SMOOTH FINISH"}
        </text>
        <text x="95" y="-12" fill="#A0A0A0" fontSize="5" fontFamily="monospace">
          {isAfter ? "TOLERANSI 0.1" : "TOLERANCE 0.1"}
        </text>

        {/* Hole Annotation */}
        <line x1="-33" y1="7" x2="-10" y2="25" stroke="#777" strokeWidth="1" />
        <line x1="-10" y1="25" x2="30" y2="25" stroke="#777" strokeWidth="1" />
        <text x="-5" y="21" fill="#EDEDED" fontSize="6" fontFamily="monospace">
          {isAfter ? "2x LUBANG TEMBUS" : "2x THRU HOLE"}
        </text>
        <text x="-5" y="33" fill="#A0A0A0" fontSize="5" fontFamily="monospace">
          {isAfter ? "DIAMETER 20" : "DIAMETER 20"}
        </text>
      </g>
      
      {/* Title Block */}
      <g transform="translate(260, 185)">
        <rect x="0" y="0" width="130" height="30" fill="#0A0A0A" stroke="#333" strokeWidth="1" />
        <line x1="0" y1="15" x2="130" y2="15" stroke="#333" strokeWidth="1" />
        <line x1="65" y1="0" x2="65" y2="30" stroke="#333" strokeWidth="1" />
        
        <text x="5" y="10" fill="#777" fontSize="4" fontFamily="monospace">PROJECT</text>
        <text x="5" y="25" fill="#777" fontSize="4" fontFamily="monospace">PART</text>
        <text x="70" y="10" fill="#777" fontSize="4" fontFamily="monospace">SCALE</text>
        <text x="70" y="25" fill="#777" fontSize="4" fontFamily="monospace">DATE</text>
        
        <text x="30" y="10" fill="#EDEDED" fontSize="5" fontFamily="monospace" fontWeight="700">
          {isAfter ? "MESIN INTI" : "CORE ENGINE"}
        </text>
        <text x="30" y="25" fill="#EDEDED" fontSize="5" fontFamily="monospace" fontWeight="700">
          {isAfter ? "BRAKET" : "BRACKET"}
        </text>
        <text x="95" y="10" fill="#EDEDED" fontSize="5" fontFamily="monospace">1:1</text>
        <text x="95" y="25" fill="#EDEDED" fontSize="5" fontFamily="monospace">2024-05-12</text>
      </g>
    </svg>
  );
}
