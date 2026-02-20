"use client";

type MetadataValue = string | number | boolean;

export type CtaRole = "primary_demo" | "primary_register" | "secondary_login" | "tertiary_sales";

export type CtaSurface =
  | "global_nav"
  | "mobile_nav"
  | "mobile_sticky_bar"
  | "hero"
  | "final_cta"
  | "pricing_card"
  | "cad_section"
  | "security_section"
  | "features_page"
  | "formats_page"
  | "security_page"
  | "pricing_page"
  | "demo_page"
  | "contact_page"
  | "legal_page"
  | "footer"
  | "not_found";

export type PageTemplate =
  | "home"
  | "features"
  | "formats"
  | "cad_translation"
  | "security"
  | "pricing"
  | "demo"
  | "contact"
  | "legal"
  | "not_found";

export const resolvePageTemplate = (pathname: string): PageTemplate => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/features")) return "features";
  if (pathname.startsWith("/formats")) return "formats";
  if (pathname.startsWith("/cad-translation")) return "cad_translation";
  if (pathname.startsWith("/security")) return "security";
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/demo")) return "demo";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms")) return "legal";
  return "home";
};

export type MarketingEventMetadata = Record<string, MetadataValue> & {
  surface?: CtaSurface;
  page_template?: PageTemplate;
  cta_role?: CtaRole;
};

export type MarketingEvent = {
  event_name: string;
  page_path: string;
  session_id: string;
  timestamp: string;
  metadata?: MarketingEventMetadata;
  utm?: Record<string, string>;
};

const SESSION_KEY = "at_marketing_session";

const getSessionId = (): string => {
  if (typeof window === "undefined") {
    return "server";
  }
  const existing = window.sessionStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const value = crypto.randomUUID();
  window.sessionStorage.setItem(SESSION_KEY, value);
  return value;
};

const getUtm = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    if (key.startsWith("utm_")) utm[key] = value;
  }
  return utm;
};

export const trackEvent = (
  event_name: string,
  metadata?: MarketingEventMetadata
): void => {
  if (typeof window === "undefined") return;

  const payload: MarketingEvent = {
    event_name,
    page_path: window.location.pathname,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    metadata,
    utm: getUtm()
  };

  window.dispatchEvent(new CustomEvent("marketing:event", { detail: payload }));
  (window as Window & { dataLayer?: unknown[] }).dataLayer?.push(payload);
};

