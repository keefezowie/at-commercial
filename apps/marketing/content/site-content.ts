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
  "DOCX",
  "PPTX",
  "XLSX",
  "PDF",
  "TXT",
  "OCR image translation",
  "DWG",
  "DXF",
  "Glossary & termbase controls"
];

export const problemCards = [
  {
    title: "Formatting rework drains delivery time",
    detail: "Teams lose hours rebuilding layout and style after machine translation export."
  },
  {
    title: "Terminology drifts across teams",
    detail:
      "Without controlled termbases, regional teams publish inconsistent legal and technical language."
  },
  {
    title: "Image text gets skipped",
    detail:
      "Embedded text in diagrams and screenshots is often missed unless OCR is integrated into workflow."
  },
  {
    title: "Engineering translation bottlenecks",
    detail: "CAD handoffs get blocked when DWG and DXF workflows are handled outside translation stack."
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
  { format: "DOCX", coverage: "Full workflow support", note: "Formatting-aware translation flow" },
  { format: "PPTX", coverage: "Full workflow support", note: "Slide text and layout continuity" },
  { format: "XLSX", coverage: "Full workflow support", note: "Table-oriented translation outputs" },
  { format: "PDF", coverage: "Full workflow support", note: "OCR workflow available for scanned inputs" },
  { format: "TXT", coverage: "Full workflow support", note: "High-throughput plain text ingestion" },
  { format: "DWG", coverage: "Workflow support", note: "Engineering pipeline aligned translation" },
  { format: "DXF", coverage: "Workflow support", note: "CAD exchange format coverage" }
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
