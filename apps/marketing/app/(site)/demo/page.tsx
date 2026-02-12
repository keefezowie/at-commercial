import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/demo",
  title: "Request Demo | Enterprise Translation Evaluation",
  description:
    "Submit a qualified demo request for business document and CAD translation workflows with glossary, OCR, and operational controls."
});

export default function DemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request Demo"
        title="Tell us your workflow scope and we will route your evaluation request."
        description="Provide document volume, format mix, language targets, and intent so the team can tailor onboarding and commercial guidance."
      />
      <section className="section-tight">
        <div className="container">
          <LeadForm sourcePage="/demo" />
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary link-focus"
            >
              Open App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
