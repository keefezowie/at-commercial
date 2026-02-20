import type { Metadata } from "next/types";
import { CadShowcase } from "@/components/marketing/CadShowcase";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { WorkflowStepper } from "@/components/marketing/WorkflowStepper";
import { workflowSteps } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/cad-translation",
  title: "CAD Translation | DWG and DXF Workflows",
  description:
    "Evaluate CAD translation workflows with DWG and DXF support positioned alongside business document translation controls."
});

export default function CadTranslationPage() {
  return (
    <main>
      <PageHero
        eyebrow="CAD Translation"
        title="Engineering translation workflows that align with enterprise documentation delivery."
        description="Support DWG and DXF handoffs without splitting tooling between business and engineering teams."
      />
      <CadShowcase pageTemplate="cad_translation" />
      <WorkflowStepper items={workflowSteps} />
      <FinalCtaBand pageTemplate="cad_translation" />
    </main>
  );
}

