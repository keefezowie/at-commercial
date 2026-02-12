import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { PricingPreviewSection } from "@/components/marketing/PricingPreviewSection";
import { pricingPreview } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";

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
        description="Pricing is scoped during discovery and pilot planning to reflect document volume, controls, and CAD requirements."
      />
      <PricingPreviewSection items={pricingPreview} />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row">
            <Link href="/contact" className="button button-primary link-focus">
              Talk to Sales
            </Link>
            <Link href="/demo" className="button button-secondary link-focus">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
      <FinalCtaBand />
    </main>
  );
}

