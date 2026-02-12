import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy Policy | Commercial Website",
  description:
    "Privacy notice for marketing-site inquiries, analytics events, and sales communication preferences."
});

const sections = [
  {
    heading: "Data We Collect",
    paragraphs: [
      "We collect information submitted through demo and contact forms, including name, email, company, role, use-case context, and inquiry notes.",
      "We also collect lightweight website interaction events for conversion analytics, including page path, event name, and timestamp."
    ]
  },
  {
    heading: "How We Use Data",
    paragraphs: [
      "Submitted inquiry data is used to route sales and onboarding conversations and to respond to requested evaluations.",
      "Analytics data is used to improve page performance, conversion clarity, and user experience."
    ]
  },
  {
    heading: "Retention and Contact",
    paragraphs: [
      "Inquiry records are retained for commercial follow-up and planning unless deletion is requested through support channels.",
      "To request deletion or correction, contact the sales/support address listed on the contact page."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      updatedDate="February 12, 2026"
      intro="This privacy notice applies to the commercial website experience, including inquiry forms and conversion analytics."
      sections={sections}
    />
  );
}
