import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ProofChipRail } from "@/components/marketing/ProofChipRail";
import { WorkflowStepper } from "@/components/marketing/WorkflowStepper";
import { outcomes, proofChips, workflowSteps } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/features",
  title: "Features | Enterprise AI Document Translation",
  description:
    "Deep-dive into format integrity, termbase governance, OCR image translation, CAD workflow support, and operational async task history."
});

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Production-focused translation capabilities for enterprise delivery teams."
        description="Explore the core workflow capabilities behind document, image-text, and CAD translation operations."
      />
      <ProofChipRail title="Capability proof points" items={proofChips} />
      <OutcomesSection items={outcomes} />
      <WorkflowStepper items={workflowSteps} />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row">
            <Link href="/demo" className="button button-primary link-focus">
              Request Enterprise Demo
            </Link>
            <Link href="/cad-translation" className="button button-secondary link-focus">
              View CAD
            </Link>
          </div>
        </div>
      </section>
      <FinalCtaBand />
    </main>
  );
}
