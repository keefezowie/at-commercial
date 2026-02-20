"use client";

import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "@/components/marketing/styles/shell.module.css";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import { useMotionProfile } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

const revealOffset = 32;

const getPageTemplate = (pathname: string): PageTemplate => {
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

export function MobileStickyCta() {
  const pathname = usePathname();
  const profile = useMotionProfile("low");
  const [visible, setVisible] = useState(false);
  const pageTemplate = useMemo(() => getPageTemplate(pathname), [pathname]);
  const hideSticky = pathname.startsWith("/demo");

  useEffect(() => {
    if (hideSticky) {
      setVisible(false);
      return;
    }

    const updateVisibility = () => setVisible(window.scrollY > revealOffset);
    updateVisibility();
    const interval = window.setInterval(updateVisibility, 160);

    return () => {
      window.clearInterval(interval);
    };
  }, [hideSticky]);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.mobileStickySpacer} aria-hidden />
      <AnimatePresence>
        {!hideSticky && visible ? (
          <m.aside
            className={styles.mobileStickyBar}
            data-testid="mobile-sticky-cta"
            initial={profile.reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={profile.reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            transition={profile.reduced ? { duration: 0.01 } : { duration: 0.18 }}
          >
            <a
              href={siteConfig.appUrl}
              className={`button button-primary link-focus ${styles.mobileStickyButton}`}
              onClick={() =>
                trackEvent("cta_primary_app_register_click", {
                  surface: "mobile_sticky_bar",
                  page_template: pageTemplate,
                  cta_role: "primary_register"
                })
              }
            >
              Get Started
            </a>
            <a
              href={`${siteConfig.appUrl}/login`}
              target="_self"
              rel="noreferrer"
              className={`button button-secondary link-focus ${styles.mobileStickyButton}`}
              onClick={() =>
                trackEvent("cta_secondary_app_login_click", {
                  surface: "mobile_sticky_bar",
                  page_template: pageTemplate,
                  cta_role: "secondary_login"
                })
              }
            >
              Login
            </a>
          </m.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
