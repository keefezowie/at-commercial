"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@/components/marketing/styles/shell.module.css";
import { MagneticAction } from "@/components/marketing/MagneticAction";
import { navLinks } from "@/content/site-content";
import { createMicroInteraction, motionEasing, motionTokens, useMotionProfile } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { resolvePageTemplate, trackEvent } from "@/lib/analytics";

const mobileMenuId = "mobile-nav-menu";
const mobileToggleId = "mobile-nav-toggle";

export function GlobalNav() {
  const pathname = usePathname();
  const profile = useMotionProfile("low");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pageTemplate = useMemo(() => resolvePageTemplate(pathname), [pathname]);

  const uiTransition = useMemo(
    () =>
      profile.reduced
        ? { duration: 0.12 }
        : { duration: motionTokens.duration.ui / 1000, ease: motionEasing.out },
    [profile.reduced]
  );

  const buttonMotion = createMicroInteraction(profile, { kind: "button" });
  const linkMotion = createMicroInteraction(profile, { kind: "link" });

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
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 981px)");
    const onViewportChange = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", onViewportChange);
    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, []);

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
          <span className={styles.brandLogoWrap} aria-hidden>
            <Image
              src="/brand/transora-logo.png"
              alt=""
              width={52}
              height={52}
              className={`${styles.brandLogo} ${styles.brandLogoMonochrome}`}
            />
          </span>
          <span className={styles.brandText}>{siteConfig.productName}</span>
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
            <m.div {...buttonMotion}>
              <a
                href={`${siteConfig.appUrl}/register`}
                className={`button button-primary link-focus ${styles.navPrimaryCta}`}
                onClick={() =>
                  trackEvent("cta_primary_app_register_click", {
                    surface: "global_nav",
                    page_template: pageTemplate,
                    cta_role: "primary_register"
                  })
                }
              >
                Get Started
              </a>
            </m.div>
          </MagneticAction>
          <div className={styles.navSubscriberBlock}>
            <m.a
              {...linkMotion}
              href={`${siteConfig.appUrl}/login`}
              target="_self"
              rel="noreferrer"
              className={`${styles.navSubscriberLink} link-focus`}
              onClick={() =>
                trackEvent("cta_secondary_app_login_click", {
                  surface: "global_nav",
                  page_template: pageTemplate,
                  cta_role: "secondary_login"
                })
              }
            >
              Login
            </m.a>
          </div>
        </div>

        <button
          type="button"
          id={mobileToggleId}
          className={`${styles.menuToggle} link-focus`}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          aria-haspopup="menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          data-testid="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span className={styles.menuToggleBar} aria-hidden />
          <span className={styles.menuToggleBar} aria-hidden />
          <span className={styles.menuToggleBar} aria-hidden />
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
              role="dialog"
              aria-modal="true"
              aria-labelledby={mobileToggleId}
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
                <m.div {...buttonMotion}>
                  <a
                    href={siteConfig.appUrl}
                    className="button button-primary link-focus"
                    onClick={() => {
                      setMenuOpen(false);
                      trackEvent("cta_primary_app_register_click", {
                        surface: "mobile_nav",
                        page_template: pageTemplate,
                        cta_role: "primary_register"
                      });
                    }}
                  >
                   Get Started
                  </a>
                </m.div>
                <p className={styles.mobileSubscriberHint}>
                  Already have an account?{" "}
                  <m.a
                    {...linkMotion}
                    href={`${siteConfig.appUrl}/login`}
                    target="_self"
                    rel="noreferrer"
                    className={`${styles.mobileSubscriberLink} link-focus`}
                    onClick={() => {
                      setMenuOpen(false);
                      trackEvent("cta_secondary_app_login_click", {
                        surface: "mobile_nav",
                        page_template: pageTemplate,
                        cta_role: "secondary_login"
                      });
                    }}
                  >
                    Login
                  </m.a>
                </p>
              </div>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </m.header>
  );
}
