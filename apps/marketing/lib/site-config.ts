const productName = process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "{PRODUCT_NAME}";
const marketingDomain = process.env.NEXT_PUBLIC_MARKETING_DOMAIN ?? "{MARKETING_DOMAIN}";
const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN ?? "{APP_DOMAIN}";

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
  companyName: "AT Translation Technologies",
  supportEmail: "sales@at-translate.example",
  contactPhone: "+1 (555) 214-6400"
} as const;

