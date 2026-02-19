import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { SecurityPanel } from "@/components/marketing/SecurityPanel";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  path: "/security",
  title: "Security | Procurement Readiness Snapshot",
  description:
    "Review access, permissioning, and workflow controls for enterprise translation evaluations without unsupported compliance claims."
});

export default function SecurityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Security"
        title="Trust pathways for procurement and security stakeholders."
        description="Operational controls are presented clearly while avoiding unverified certification or regulatory claims."
      />
      <SecurityPanel pageTemplate="security" />
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
      <FinalCtaBand pageTemplate="security" />
    </main>
  );
}

