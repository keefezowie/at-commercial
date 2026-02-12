"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { trackEvent } from "@/lib/analytics";
import { useMotionSafe } from "@/lib/motion";

const securityPoints = [
  {
    title: "Authenticated access controls",
    summary: "User identity and access are required for operational workflows and history visibility."
  },
  {
    title: "Permissioned terminology governance",
    summary: "Managed termbase permissions help protect approved vocabulary across teams."
  },
  {
    title: "Operational workflow transparency",
    summary: "Asynchronous task processing and history flows support traceable execution."
  }
];

export function SecurityPanel() {
  const { section, item } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section()}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Security Snapshot</span>
          <h2 className="section-title">Designed for enterprise procurement conversations.</h2>
          <p className="section-description">
            This V1 marketing site avoids unverified certification claims while clearly presenting
            operational controls and access posture.
          </p>
        </div>

        <ul className={styles.securityList}>
          {securityPoints.map((point, index) => (
            <motion.li key={point.title} className={`card ${styles.securityItem}`} {...item(index)}>
              <span className={styles.securityIcon} aria-hidden />
              <div>
                <h3>{point.title}</h3>
                <p className="section-description">{point.summary}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="cta-row" style={{ marginTop: "1rem" }}>
          <Link
            href="/demo"
            className="button button-secondary link-focus"
            onClick={() => trackEvent("security_section_cta_click", { target: "demo" })}
          >
            Request Security Overview
          </Link>
          <Link
            href="/contact"
            className="button button-secondary link-focus"
            onClick={() => trackEvent("security_section_cta_click", { target: "contact" })}
          >
            Contact Sales
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

