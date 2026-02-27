"use client";

import Link from "next/link";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

import { siteConfig } from "@/lib/site-config";

type Props = {
  pageTemplate?: PageTemplate;
};

export function FinalCtaBand({ pageTemplate = "home" }: Props) {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const contentMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section-tight">
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.finalBand} {...contentMotion}>
          <m.h2 {...itemMotion}>Ready to eliminate layout rework?</m.h2>
          <m.p {...itemMotion}>
            Try the core Transora app instantly with our free tier, or connect with sales for enterprise scope, procurement, and onboarding alignment.
          </m.p>
          <m.div className="cta-row" {...itemMotion}>
            <m.div {...itemMotion}>
              <a
                href={`${siteConfig.appUrl}/register`}
                className={`button button-primary link-focus ${styles.finalPrimaryCta}`}
                style={{ backgroundColor: "var(--accent-electric)", color: "#000", borderColor: "var(--accent-electric)" }}
              >
                Start for Free
              </a>
            </m.div>
            <m.div {...itemMotion}>
              <Link
                href="/contact"
                className={`button button-secondary link-focus ${styles.finalSecondaryCta}`}
              >
                Contact Sales
              </Link>
            </m.div>
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
}
