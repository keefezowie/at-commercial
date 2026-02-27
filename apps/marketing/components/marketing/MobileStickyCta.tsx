"use client";

import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "@/components/marketing/styles/shell.module.css";
import { resolvePageTemplate, trackEvent } from "@/lib/analytics";
import { useMotionProfile } from "@/lib/motion";

import { siteConfig } from "@/lib/site-config";

const revealOffset = 32;

export function MobileStickyCta() {
  const pathname = usePathname();
  const profile = useMotionProfile("low");
  const [visible, setVisible] = useState(false);
  const pageTemplate = useMemo(() => resolvePageTemplate(pathname), [pathname]);
  const hideSticky = pathname.startsWith("/demo");

  useEffect(() => {
    if (hideSticky) {
      setVisible(false);
      return;
    }

    let frame = 0;
    const updateVisibility = () => {
      frame = 0;
      const nextVisible = window.scrollY > revealOffset;
      setVisible((current) => (current === nextVisible ? current : nextVisible));
    };

    const scheduleVisibilityUpdate = () => {
      if (frame !== 0) {
        return;
      }
      frame = window.requestAnimationFrame(updateVisibility);
    };

    scheduleVisibilityUpdate();
    window.addEventListener("scroll", scheduleVisibilityUpdate, { passive: true });
    window.addEventListener("resize", scheduleVisibilityUpdate);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleVisibilityUpdate);
      window.removeEventListener("resize", scheduleVisibilityUpdate);
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
              href={`${siteConfig.appUrl}/register`}
              className={`button button-primary link-focus ${styles.mobileStickyButton}`}
              style={{ backgroundColor: "var(--accent-electric)", color: "#000", borderColor: "var(--accent-electric)" }}
            >
              Start for Free
            </a>
            <a
              href="/contact"
              className={`button button-secondary link-focus ${styles.mobileStickyButton}`}
            >
              Contact Sales
            </a>
          </m.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
