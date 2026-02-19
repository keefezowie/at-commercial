import type { Metadata } from "next";
import Link from "next/link";
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
        description="Provide document volume, format mix, language targets, and intent so the team can tailor evaluation and subscription onboarding guidance."
      />
      <section className="section-tight">
        <div className="container">
          <LeadForm sourcePage="/demo" />
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <p style={{ margin: "0.45rem 0 0", color: "var(--text-secondary)" }}>
              Already subscribed?
            </p>
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
    </main>
  );
}
