"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@/components/marketing/marketing.module.css";
import { MagneticAction } from "@/components/marketing/MagneticAction";
import { navLinks } from "@/content/site-content";
import { createMicroInteraction, motionEasing, motionTokens, useMotionProfile } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const mobileMenuId = "mobile-nav-menu";

export function GlobalNav() {
  const pathname = usePathname();
  const profile = useMotionProfile("low");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const uiTransition = useMemo(
    () =>
      profile.reduced
        ? { duration: 0.12 }
        : { duration: motionTokens.duration.ui / 1000, ease: motionEasing.out },
    [profile.reduced]
  );

  const buttonMotion = createMicroInteraction(profile, { kind: "button" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > motionTokens.nav.scrollThreshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <m.header
      className={`${styles.navWrap} ${scrolled ? styles.navWrapScrolled : styles.navWrapTop}`}
      data-nav-state={scrolled ? "scrolled" : "top"}
      initial={profile.reduced ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={uiTransition}
    >
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={`${styles.brand} link-focus`}>
          <span className={styles.brandMark} aria-hidden />
          <span className={styles.brandText}>
            {siteConfig.productName}
            <span className={styles.statusBadge}>Platform available</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} link-focus ${styles.linkUnderline} ${active ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navCtas}>
          <MagneticAction enabled={profile.allowHover}>
            <m.a
              {...buttonMotion}
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary link-focus"
              onClick={() => trackEvent("cta_open_app_click", { location: "global_nav" })}
            >
              Open App
            </m.a>
          </MagneticAction>
          <MagneticAction enabled={profile.allowHover}>
            <m.div {...buttonMotion}>
              <Link
                href="/demo"
                className="button button-primary link-focus"
                onClick={() => trackEvent("cta_primary_click", { location: "global_nav" })}
              >
                Request Demo
              </Link>
            </m.div>
          </MagneticAction>
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} link-focus`}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          data-testid="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleLabel}>Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <m.button
              type="button"
              aria-label="Close menu"
              className={styles.mobileBackdrop}
              data-testid="mobile-menu-backdrop"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={uiTransition}
            />
            <m.div
              id={mobileMenuId}
              className={styles.mobilePanel}
              data-testid="mobile-menu-panel"
              initial={profile.reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={profile.reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={uiTransition}
            >
              <nav className={styles.mobileLinks} aria-label="Mobile primary">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${styles.mobileLink} ${styles.linkUnderline} ${
                        active ? styles.mobileLinkActive : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className={styles.mobileCtas}>
                <m.a
                  {...buttonMotion}
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary link-focus"
                  onClick={() => {
                    setMenuOpen(false);
                    trackEvent("cta_open_app_click", { location: "mobile_nav" });
                  }}
                >
                  Open App
                </m.a>
                <m.div {...buttonMotion}>
                  <Link
                    href="/demo"
                    className="button button-primary link-focus"
                    onClick={() => {
                      setMenuOpen(false);
                      trackEvent("cta_primary_click", { location: "mobile_nav" });
                    }}
                  >
                    Request Demo
                  </Link>
                </m.div>
              </div>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </m.header>
  );
}
