import type { Metadata } from "next/types";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/demo",
  title: "Get Started | Enterprise Translation Evaluation",
  description:
    "Start your evaluation instantly. Access the platform, configure glossaries, and translate documents immediately."
});

export default function DemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get Started"
        title="Start translating your documents immediately."
        description="Access the platform directly to begin your evaluation with full feature access."
      />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row" style={{ flexDirection: "column", alignItems: "start", gap: "1.5rem" }}>
             <a
              href={siteConfig.appUrl}
              className="button button-primary link-focus"
              style={{ minWidth: "200px", justifyContent: "center" }}
            >
              Launch Platform
            </a>
            
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                Already have an account?
              </p>
              <a
                href={`${siteConfig.appUrl}/login`}
                target="_self"
                rel="noreferrer"
                className="button button-secondary link-focus"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
