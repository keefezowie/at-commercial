import type { Metadata } from "next/types";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { buildPageMetadata, organizationSchema, softwareApplicationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { GlobalLoader } from "@/components/marketing/GlobalLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
  ],
  icons: {
    icon: [{ url: "/brand/transora-logo.png", type: "image/png" }],
    shortcut: "/brand/transora-logo.png",
    apple: "/brand/transora-logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`noise-overlay ${inter.variable} ${mono.variable}`}
      >
        <GlobalLoader />
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
