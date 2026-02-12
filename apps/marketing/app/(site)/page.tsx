import type { Metadata } from "next";
import { CadShowcase } from "@/components/marketing/CadShowcase";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { FormatsMatrix } from "@/components/marketing/FormatsMatrix";
import { HeroLayered } from "@/components/marketing/HeroLayered";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { PricingPreviewSection } from "@/components/marketing/PricingPreviewSection";
import { ProblemFraming } from "@/components/marketing/ProblemFraming";
import { ProofChipRail } from "@/components/marketing/ProofChipRail";
import { SecurityPanel } from "@/components/marketing/SecurityPanel";
import { WorkflowStepper } from "@/components/marketing/WorkflowStepper";
import {
  faqs,
  formatRows,
  outcomes,
  pricingPreview,
  problemCards,
  proofChips,
  workflowSteps
} from "@/content/site-content";
import { faqPageSchema, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: `${siteConfig.productName} | Enterprise AI Document Translation Platform`,
  description:
    "Format-preserving enterprise AI translation workflows for DOCX, PPTX, XLSX, PDF, TXT, OCR image content, and CAD files (DWG, DXF)."
});

export default function HomePage() {
  return (
    <main>
      <HeroLayered />
      <ProofChipRail items={proofChips} />
      <ProblemFraming items={problemCards} />
      <OutcomesSection items={outcomes} />
      <WorkflowStepper items={workflowSteps} />
      <FormatsMatrix rows={formatRows} />
      <CadShowcase />
      <SecurityPanel />
      <PricingPreviewSection items={pricingPreview} />
      <FaqAccordion items={faqs} />
      <FinalCtaBand />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
    </main>
  );
}

