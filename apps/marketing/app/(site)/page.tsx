import type { Metadata } from "next/types";
import { CadShowcase } from "@/components/marketing/CadShowcase";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { FormatsMatrix } from "@/components/marketing/FormatsMatrix";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { HeroLayered } from "@/components/marketing/HeroLayered";
import { PricingPreviewSection } from "@/components/marketing/PricingPreviewSection";
import { ProblemFraming } from "@/components/marketing/ProblemFraming";
import { ProofChipRail } from "@/components/marketing/ProofChipRail";
import { SecurityPanel } from "@/components/marketing/SecurityPanel";
import { TranslationResultsGallery } from "@/components/marketing/TranslationResultsGallery";
import {
  faqs,
  formatRows,
  outcomes,
  pricingPreview,
  problemCards,
  proofChips
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
      <ProofChipRail title="Enterprise readiness snapshot" items={proofChips} />
      <TranslationResultsGallery />
      <ProblemFraming items={problemCards} />
      <div id="features">
        <OutcomesSection items={outcomes} />
      </div>
      <div id="formats">
        <FormatsMatrix rows={formatRows} />
      </div>
      <div id="cad-translation">
        <CadShowcase pageTemplate="home" />
      </div>
      <div id="security">
        <SecurityPanel pageTemplate="home" />
      </div>
      <div id="pricing">
        <PricingPreviewSection items={pricingPreview} pageTemplate="home" />
      </div>
      <FaqAccordion items={faqs} />
      <div id="contact">
        <FinalCtaBand pageTemplate="home" />
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
    </main>
  );
}

