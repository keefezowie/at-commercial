"use client";

import Link from "next/link";
import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { trackEvent } from "@/lib/analytics";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

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
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 12 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Security Snapshot</span>
          <h2 className="section-title">Designed for enterprise procurement conversations.</h2>
          <p className="section-description">
            This V1 marketing site avoids unverified certification claims while clearly presenting
            operational controls and access posture.
          </p>
        </div>

        <m.ul className={styles.securityList} {...listMotion}>
          {securityPoints.map((point) => (
            <m.li key={point.title} className={`card ${styles.securityItem} ${styles.cardInteractive}`} {...itemMotion}>
              <span className={styles.securityIcon} aria-hidden />
              <div>
                <h3>{point.title}</h3>
                <p className="section-description">{point.summary}</p>
              </div>
            </m.li>
          ))}
        </m.ul>

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
      </m.div>
    </section>
  );
}
