"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { useMotionSafe } from "@/lib/motion";

export function FinalCtaBand() {
  const { section } = useMotionSafe();

  return (
    <section className="section-tight">
      <motion.div className="container" {...section(0.03)}>
        <div className={styles.finalBand}>
          <h2>Run a guided evaluation with real documents and engineering workflows.</h2>
          <p>
            Move from pilot validation to production onboarding with structured demos, terminology setup,
            and cross-team rollout guidance.
          </p>
          <div className="cta-row">
            <Link
              href="/demo"
              className="button button-secondary link-focus"
              onClick={() => trackEvent("cta_primary_click", { location: "final_cta" })}
            >
              Request Demo
            </Link>
            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary link-focus"
              onClick={() => trackEvent("cta_open_app_click", { location: "final_cta" })}
            >
              Open App
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

