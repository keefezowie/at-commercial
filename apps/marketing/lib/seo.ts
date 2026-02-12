import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  path: string;
  title: string;
  description: string;
};

export const buildPageMetadata = ({ path, title, description }: MetadataInput): Metadata => {
  const canonical = `${siteConfig.marketingUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.marketingUrl),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.productName
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
};

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  url: siteConfig.marketingUrl,
  email: siteConfig.supportEmail,
  sameAs: [siteConfig.appUrl]
});

export const softwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.productName,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock"
  },
  url: siteConfig.appUrl
});

export const faqPageSchema = (
  questions: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

