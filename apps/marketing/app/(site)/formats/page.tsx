import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { FormatsMatrix } from "@/components/marketing/FormatsMatrix";
import { PageHero } from "@/components/marketing/PageHero";
import { formatRows } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/formats",
  title: "Formats | Translation Workflow Coverage",
  description:
    "Validate technical fit with supported business formats (DOCX, PPTX, XLSX, PDF, TXT) and CAD formats (DWG, DXF)."
});

export default function FormatsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Formats"
        title="Validate technical fit quickly with transparent format coverage."
        description="Use this matrix to align procurement and delivery teams around supported file workflows and evaluation scope."
      />
      <FormatsMatrix title="Supported file workflow matrix" rows={formatRows} />
      <section className="section-tight">
        <div className="container">
          <div className="cta-row">
            <Link href="/demo" className="button button-primary link-focus">
              Start Evaluation
            </Link>
            <Link href="/demo" className="button button-secondary link-focus">
              Request Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
      <FinalCtaBand />
    </main>
  );
}

