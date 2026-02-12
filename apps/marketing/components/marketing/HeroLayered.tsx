"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { useMotionSafe } from "@/lib/motion";

const floatingChips = [
  { label: "Format Integrity", value: "DOCX / PPTX / XLSX", style: { top: "8%", right: "-2%" } },
  { label: "OCR Pipeline", value: "Embedded & image text", style: { bottom: "11%", left: "-4%" } },
  { label: "Engineering Flow", value: "DWG + DXF support", style: { top: "68%", right: "-1%" } }
] as const;

export function HeroLayered() {
  const { prefersReducedMotion } = useMotionSafe();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.38 }}
        >
          <span className="eyebrow">Enterprise AI Document Translation Platform</span>
          <h1 className={styles.heroTitle}>
            Translate business and engineering documents without losing operational control.
          </h1>
          <p className={styles.heroLead}>
            {siteConfig.productName} delivers format-preserving document workflows, glossary and termbase
            control, OCR handling for image text, and CAD translation pathways for DWG and DXF teams.
          </p>
          <div className="cta-row">
            <motion.div whileTap={{ scale: 0.97 }} whileHover={{ y: -1 }}>
              <Link
                href="/demo"
                className="button button-primary link-focus"
                onClick={() => trackEvent("cta_primary_click", { location: "hero" })}
              >
                Request Demo
              </Link>
            </motion.div>
            <motion.a
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary link-focus"
              onClick={() => trackEvent("cta_open_app_click", { location: "hero" })}
            >
              Open App
            </motion.a>
          </div>
          <div className={styles.chipRail}>
            <span className="chip mono">Async tasks + history</span>
            <span className="chip mono">Role-based termbase permissions</span>
            <span className="chip mono">Procurement-ready workflow posture</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroFrameWrap}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.46, delay: prefersReducedMotion ? 0 : 0.14 }}
        >
          <div className={styles.heroGlow} aria-hidden />
          <div className={styles.heroFrame}>
            <div className={styles.heroFrameHead}>
              <p className={styles.heroFrameTitle}>Live workflow preview</p>
              <div className={styles.heroDotRow}>
                <span className={styles.heroDot} />
                <span className={styles.heroDot} />
                <span className={styles.heroDot} />
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.heroPanelRow}>
                <span className={styles.heroPanelLabel}>Pipeline</span>
                <span className={styles.heroPanelValue}>Upload → Configure → Review → Export</span>
              </div>
              <div className={styles.heroPanelRow}>
                <span className={styles.heroPanelLabel}>Input batch</span>
                <span className={styles.heroPanelValue}>DOCX, PDF, DWG, DXF</span>
              </div>
              <div className={styles.heroPanelRow}>
                <span className={styles.heroPanelLabel}>Controls</span>
                <span className={styles.heroPanelValue}>Termbase + OCR + scoped access</span>
              </div>
              <div className={styles.heroPanelRow}>
                <span className={styles.heroPanelLabel}>Status</span>
                <span className={styles.heroPanelValue}>Active platform availability</span>
              </div>
            </div>
          </div>

          {floatingChips.map((chip, index) => (
            <motion.div
              key={chip.label}
              className={styles.heroMetricChip}
              style={chip.style}
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { y: [-1, 1, -1], opacity: [1, 0.97, 1] }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 5 + index * 0.9,
                repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.35
              }}
            >
              <strong>{chip.label}</strong>
              {chip.value}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

