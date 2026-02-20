import type { Metadata } from "next/types";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/demo",
  title: "Demo Request | Enterprise Translation Evaluation",
  description:
    "Request a guided commercial walkthrough for enterprise translation workflows and rollout planning."
});

export default function DemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Demo Request"
        title="Start with a guided translation workflow walkthrough."
        description="Use the buttons below for commercial intake. Header actions remain available for direct platform access and login."
      />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row">
            <Link href="/contact" className="button button-primary link-focus">
              Talk to Sales
            </Link>
            <Link href="/pricing" className="button button-secondary link-focus">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
