import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { PricingPreviewSection } from "@/components/marketing/PricingPreviewSection";
import { WorkflowPreviewStrip } from "@/components/marketing/WorkflowPreviewStrip";
import { pricingPreview } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  path: "/pricing",
  title: "Pricing | Commercial Qualification",
  description:
    "Commercial pathway overview for pilot, growth, and enterprise evaluation, including procurement-oriented consultation."
});

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Commercial evaluation paths aligned to scale and workflow complexity."
        description="Procurement path: discovery, guided demo, then subscription onboarding based on document volume, controls, and CAD requirements."
      />
      <PricingPreviewSection items={pricingPreview} pageTemplate="pricing" />
      <WorkflowPreviewStrip
        eyebrow="Demo Walkthrough"
        title="What teams review before subscription onboarding."
        description="Pricing conversations are grounded in real workflow previews from intake to export, including controls and CAD coverage."
      />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row">
            <Link href="/demo" className="button button-primary link-focus">
              Request Demo
            </Link>
            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary link-focus"
            >
              Subscriber Login
            </a>
            <Link href="/contact" className="button button-secondary link-focus">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
      <FinalCtaBand pageTemplate="pricing" />
    </main>
  );
}

