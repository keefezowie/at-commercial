import type { Route } from "next";
import { siteConfig } from "@/lib/site-config";

type NavLink = {
  label: string;
  href: Route;
};

type PricingPreviewItem = {
  tier: string;
  price: string;
  audience: string;
  points: string[];
  cta: string;
  href: Route | string;
  featured?: boolean;
};

export type PricingTier = {
  name: string;
  price: string;
  subtitle: string;
  highlights: string[];
};

export type PricingComparisonRow = {
  feature: string;
  starter: string;
  bisnis: string;
  enterprise: string;
};


export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
] satisfies readonly NavLink[];

export const proofChips = [
  "SOC2-ready security posture",
  "Format-preserving engine",
  "Enterprise termbases",
  "RBAC governance controls",
  "OCR image-text extraction",
  "DWG + DXF pathways",
  "Authenticated task history",
  "Procurement-ready onboarding"
];

export const problemCards = [
  {
    title: "Formatting rework blocks deployment.",
    detail:
      "IT and engineering teams lose thousands of hours rebuilding layouts for technical manuals and SOPs after standard machine translation."
  },
  {
    title: "Fragmented terminology creates compliance risks.",
    detail:
      "Without governed termbases, regional teams publish conflicting instructions in critical process documents."
  },
  {
    title: "Image-embedded text breaks training accuracy.",
    detail:
      "Critical labels inside diagrams and UI screenshots are missed when OCR is outside the governed translation workflow."
  },
  {
    title: "CAD localization stalls engineering handoffs.",
    detail:
      "Production teams lose velocity when DWG and DXF localization depends on disconnected tools and manual rework."
  }
];

export const outcomes = [
  {
    title: "Preserve document structure",
    summary: "Format-aware workflows for DOCX, PPTX, XLSX, PDF, and TXT keep output production-ready."
  },
  {
    title: "Control terminology at scale",
    summary:
      "Managed glossary workflows with role-based termbase permissions for consistent enterprise language."
  },
  {
    title: "Translate text in images",
    summary:
      "OCR-driven extraction and translation for both embedded and standalone images without separate tooling."
  },
  {
    title: "Handle CAD in same platform",
    summary:
      "DWG and DXF workflow support bridges engineering documents into standard translation operations."
  }
];

export const workflowSteps = [
  {
    label: "Upload",
    detail: "Submit files in business or CAD-compatible formats and assign target language sets."
  },
  {
    label: "Configure",
    detail: "Apply glossary/termbase rules, OCR options, and access permissions based on project needs."
  },
  {
    label: "Review",
    detail: "Track asynchronous jobs with authenticated history and validate terminology and layout quality."
  },
  {
    label: "Export",
    detail: "Deliver translated outputs through structured workflow options for document and CAD pipelines."
  }
];

export const formatRows = [
  {
    format: "DOCX",
    coverage: "Full workflow support",
    note: "Formatting-aware translation flow",
    useCase: "Standard operating procedures (SOPs), IT security policies, regulatory filings"
  },
  {
    format: "PPTX",
    coverage: "Full workflow support",
    note: "Slide text and layout continuity",
    useCase: "Cross-site engineering briefings, program reviews, training decks"
  },
  {
    format: "XLSX",
    coverage: "Full workflow support",
    note: "Table-oriented translation outputs",
    useCase: "Quality trackers, procurement matrices, BOM-related operational sheets"
  },
  {
    format: "PDF",
    coverage: "Full workflow support",
    note: "OCR workflow available for scanned inputs",
    useCase: "Standard operating procedures (SOPs), IT security policies, regulatory filings"
  },
  {
    format: "TXT",
    coverage: "Full workflow support",
    note: "High-throughput plain text ingestion",
    useCase: "System logs, release notes, technical change summaries"
  },
  {
    format: "OCR / Image Text",
    coverage: "Integrated workflow support",
    note: "Embedded and standalone image text extraction",
    useCase: "Embedded system diagrams, software UI screenshots in training manuals"
  },
  {
    format: "DWG",
    coverage: "Workflow support",
    note: "Engineering pipeline aligned translation",
    useCase: "Production line layouts, solar cell manufacturing schematics, mechanical assemblies"
  },
  {
    format: "DXF",
    coverage: "Workflow support",
    note: "CAD exchange format coverage",
    useCase: "Production line layouts, solar cell manufacturing schematics, mechanical assemblies"
  }
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "Rp 99.000/bln",
    subtitle: "Freelancers & individuals",
    highlights: ["600.000 chars", "2 image credits", "All document formats", "20 MB max file size"]
  },
  {
    name: "Bisnis",
    price: "Rp 299.000/bln",
    subtitle: "SMBs & agencies",
    highlights: ["2.000.000 chars", "10 image credits", "Custom glossary", "50 MB max file size"]
  },
  {
    name: "Enterprise",
    price: "Rp 1.199.000/bln",
    subtitle: "High-volume operations",
    highlights: ["10.000.000 chars", "30 image credits", "API access", "100 MB max file size"]
  }
] satisfies readonly PricingTier[];

export const pricingComparisonRows = [
  { feature: "Monthly Price", starter: "Rp 99.000", bisnis: "Rp 299.000", enterprise: "Rp 1.199.000" },
  { feature: "Character Quota / mo", starter: "600.000", bisnis: "2.000.000", enterprise: "10.000.000" },
  { feature: "Image Regen Credits / mo", starter: "2", bisnis: "10", enterprise: "30" },
  { feature: "Supported Formats", starter: "All", bisnis: "All", enterprise: "All" },
  { feature: "Batch API (Async Queue)", starter: "No", bisnis: "Yes", enterprise: "Yes" },
  { feature: "Glossary / Custom Terms", starter: "No", bisnis: "Yes", enterprise: "Yes" },
  { feature: "Translation History", starter: "30 days", bisnis: "90 days", enterprise: "1 year" },
  { feature: "Max File Size", starter: "20 MB", bisnis: "50 MB", enterprise: "100 MB" },
  { feature: "Max Images per File", starter: "10", bisnis: "30", enterprise: "50" },
  { feature: "Priority Processing", starter: "No", bisnis: "No", enterprise: "Yes" },
  { feature: "API Access", starter: "No", bisnis: "No", enterprise: "Yes" },
  { feature: "Dedicated Support", starter: "No", bisnis: "Email", enterprise: "Email + Chat" },
  { feature: "Image Credit Add-On Pack", starter: "5 cr / Rp 25k", bisnis: "5 cr / Rp 25k", enterprise: "10 cr / Rp 45k" }
] satisfies readonly PricingComparisonRow[];

export const pricingPreview = pricingTiers.map((tier) => ({
  tier: tier.name,
  price: tier.price,
  audience: tier.subtitle,
  points: tier.highlights,
  cta: "Talk to Sales",
  href: "/contact",
  featured: tier.name === "Bisnis"
})) satisfies readonly PricingPreviewItem[];

export const faqs = [
  {
    question: "How does formatting hold up after translation?",
    answer:
      "The platform is designed for format-aware workflows across supported business files, reducing manual post-translation cleanup."
  },
  {
    question: "Can we enforce approved terminology?",
    answer:
      "Yes. Glossary and termbase workflows support controlled terminology usage with managed permissions."
  },
  {
    question: "Do you support image text translation?",
    answer:
      "Yes. OCR workflows cover text inside both embedded and standalone images before translation."
  },
  {
    question: "What about CAD files?",
    answer:
      "DWG and DXF are supported through dedicated workflow-oriented translation paths for engineering teams."
  },
  {
    question: "Is the platform available now?",
    answer: `Yes. ${siteConfig.productName} is available for subscribed teams through ${siteConfig.appUrl}. New organizations should request a demo to start evaluation and onboarding.`
  },
  {
    question: "How is pricing handled?",
    answer:
      "Commercial plans are scoped by usage and workflow complexity. Teams can request a guided evaluation and pricing discussion."
  }
];
