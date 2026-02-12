import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/terms",
  title: "Terms of Use | Commercial Website",
  description:
    "Terms governing use of the commercial marketing website, inquiry forms, and informational content."
});

const sections = [
  {
    heading: "Website Scope",
    paragraphs: [
      "This website provides commercial and informational content for enterprise document translation services.",
      "Use of the production application is governed by separate customer agreements and platform terms."
    ]
  },
  {
    heading: "Use Restrictions",
    paragraphs: [
      "You agree not to misuse form endpoints, attempt unauthorized access, or interfere with site availability.",
      "Submitted information must be accurate and provided with consent where required."
    ]
  },
  {
    heading: "Disclaimers",
    paragraphs: [
      "Capabilities described on this site are limited to confirmed workflow support and do not imply unlisted features or certifications.",
      "Commercial pricing and implementation terms are finalized through direct sales process."
    ]
  }
];

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms of Use"
      updatedDate="February 12, 2026"
      intro="These terms govern your use of the commercial website and related inquiry workflows."
      sections={sections}
    />
  );
}
