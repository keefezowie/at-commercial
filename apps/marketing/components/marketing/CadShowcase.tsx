"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { trackEvent } from "@/lib/analytics";
import { useMotionSafe } from "@/lib/motion";

export function CadShowcase() {
  const { section, item } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section(0.04)}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">CAD Translation</span>
          <h2 className="section-title">
            Bring DWG and DXF engineering workflows into your translation delivery lane.
          </h2>
          <p className="section-description">
            CAD coverage is a practical differentiator for teams coordinating product documentation,
            engineering diagrams, and global implementation handoffs.
          </p>
        </div>

        <div className={styles.cadShowcase}>
          <motion.article className={`card ${styles.cadPanel}`} {...item(0)}>
            <h3>Engineering-native workflow support</h3>
            <p className="section-description">
              Use the same authenticated flow to manage translation jobs across business files and CAD
              deliverables without moving to disconnected tooling.
            </p>
            <div className="cta-row" style={{ marginTop: "1rem" }}>
              <Link
                href="/demo"
                className="button button-primary link-focus"
                onClick={() => trackEvent("cad_section_cta_click", { target: "demo" })}
              >
                Request CAD Demo
              </Link>
              <Link
                href="/contact"
                className="button button-secondary link-focus"
                onClick={() => trackEvent("cad_section_cta_click", { target: "contact" })}
              >
                Talk to Sales
              </Link>
            </div>
          </motion.article>

          <motion.aside className={`${styles.cadVisual} glass`} {...item(1)}>
            <div className={styles.cadVisualGrid}>
              <div className={styles.cadVisualBox}>
                <p className="mono">Input</p>
                <strong>DWG / DXF batch</strong>
                <p>Engineering layout and annotation structures staged for processing.</p>
              </div>
              <div className={styles.cadVisualBox}>
                <p className="mono">Controls</p>
                <strong>Glossary + OCR</strong>
                <p>Apply terminology standards and OCR flows for embedded references.</p>
              </div>
              <div className={styles.cadVisualBox}>
                <p className="mono">Review</p>
                <strong>Async traceability</strong>
                <p>Task state and history available to authenticated stakeholders.</p>
              </div>
              <div className={styles.cadVisualBox}>
                <p className="mono">Output</p>
                <strong>Workflow-aligned export</strong>
                <p>Route translated assets back into engineering documentation pipelines.</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

