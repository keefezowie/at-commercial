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
          <m.h2 {...itemMotion}>Book a guided rollout discussion for your translation workflows.</m.h2>
          <m.p {...itemMotion}>
            Header actions remain available for platform access. Use this section to connect with sales for scope,
            procurement, and onboarding alignment.
          </m.p>
          <m.div className="cta-row" {...itemMotion}>
            <m.div {...itemMotion}>
              <Link
                href="/contact"
                className={`button button-primary link-focus ${styles.finalPrimaryCta}`}
                onClick={() =>
                  trackEvent("cta_tertiary_talk_to_sales_click", {
                    surface: "final_cta",
                    page_template: pageTemplate,
                    cta_role: "tertiary_sales"
                  })
                }
              >
                Talk to Sales
              </Link>
            </m.div>
            <m.div {...itemMotion}>
              <Link
                href="/pricing"
                className={`button button-secondary link-focus ${styles.finalSecondaryCta}`}
              >
                View Pricing
              </Link>
            </m.div>
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
}
