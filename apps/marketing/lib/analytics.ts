"use client";

export type MarketingEvent = {
  event_name: string;
  page_path: string;
  session_id: string;
  timestamp: string;
  metadata?: Record<string, string | number | boolean>;
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
  metadata?: Record<string, string | number | boolean>
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

