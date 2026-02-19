const productName = process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "Transora";
const marketingDomain = process.env.NEXT_PUBLIC_MARKETING_DOMAIN ?? "transora.example.com";
const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN ?? "app.transora.example.com";

const withHttps = (domain: string): string => {
  if (domain.startsWith("http://") || domain.startsWith("https://")) {
    return domain;
  }
  return `https://${domain}`;
};

export const siteConfig = {
  productName,
  marketingDomain,
  appDomain,
  marketingUrl: withHttps(marketingDomain),
  appUrl: withHttps(appDomain),
  companyName: "Transora Labs",
  supportEmail: "sales@transora.example",
  contactPhone: "+1 (555) 214-6400"
} as const;

