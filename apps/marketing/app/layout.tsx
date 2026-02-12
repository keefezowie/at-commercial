import type { Metadata } from "next";
import { Sora, Manrope, IBM_Plex_Mono } from "next/font/google";
import "@/app/globals.css";
import { buildPageMetadata, organizationSchema, softwareApplicationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    path: "/",
    title: `${siteConfig.productName} | Enterprise AI Document Translation Platform`,
    description:
      "Premium commercial website for enterprise document translation workflows with format integrity, terminology control, OCR support, and CAD translation pathways."
  }),
  keywords: [
    "enterprise document translation",
    "AI translation platform",
    "CAD translation",
    "OCR translation workflow",
    "terminology management"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`noise-overlay ${sora.variable} ${manrope.variable} ${mono.variable}`}
      >
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
        />
      </body>
    </html>
  );
}
