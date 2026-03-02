import type { Metadata } from "next/types";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { buildPageMetadata, organizationSchema, softwareApplicationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { GlobalLoader } from "@/components/marketing/GlobalLoader";
import { ThemeToggle } from "@/components/marketing/ThemeToggle";

const themeInitializer = `(function(){
  try {
    var storageKey = "transora-theme";
    var storedTheme = window.localStorage.getItem(storageKey);
    var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    var resolvedTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : (prefersLight ? "light" : "dark");
    var root = document.documentElement;
    root.dataset.theme = resolvedTheme;
    root.classList.toggle("dark", resolvedTheme === "dark");
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.classList.add("dark");
  }
})();`;

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
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body
        className={`noise-overlay ${inter.variable} ${mono.variable}`}
      >
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitializer }}
        />
        <GlobalLoader />
        {children}
        <ThemeToggle />
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
