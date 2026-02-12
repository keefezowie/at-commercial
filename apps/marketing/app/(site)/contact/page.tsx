import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/marketing/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact | Sales and Commercial Inquiries",
  description:
    "Contact the commercial team for demos, pricing discussions, security workflow reviews, and onboarding support."
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Reach sales for evaluations, procurement support, or commercial planning."
        description="Use the form below and include your project context. We route requests for sales, support, and partnership discussions."
      />
      <section className="section-tight">
        <div className="container">
          <ContactForm />
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link href="/demo" className="button button-secondary link-focus">
              Request Demo
            </Link>
          </div>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
            Direct contact: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> |{" "}
            {siteConfig.contactPhone}
          </p>
        </div>
      </section>
    </main>
  );
}
