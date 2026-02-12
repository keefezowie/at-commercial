"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@/components/marketing/marketing.module.css";
import { navLinks } from "@/content/site-content";
import { motionPresets } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function GlobalNav() {
  const pathname = usePathname();

  return (
    <header className={styles.navWrap}>
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
                className={`${styles.navLink} link-focus ${active ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navCtas}>
          <motion.a
            {...motionPresets.buttonTap}
            href={siteConfig.appUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary link-focus"
            onClick={() => trackEvent("cta_open_app_click", { location: "global_nav" })}
          >
            Open App
          </motion.a>
          <motion.div {...motionPresets.buttonTap}>
            <Link
              href="/demo"
              className="button button-primary link-focus"
              onClick={() => trackEvent("cta_primary_click", { location: "global_nav" })}
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

