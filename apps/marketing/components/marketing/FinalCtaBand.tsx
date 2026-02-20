"use client";

import Link from "next/link";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { MagneticAction } from "@/components/marketing/MagneticAction";
import { siteConfig } from "@/lib/site-config";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import {
  createMicroInteraction,
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
  const buttonMotion = createMicroInteraction(profile, { kind: "button" });
  const linkMotion = createMicroInteraction(profile, { kind: "link" });

  return (
    <section className="section-tight">
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.finalBand} {...contentMotion}>
          <m.h2 {...itemMotion}>Start translating your documents with engineering-grade precision.</m.h2>
          <m.p {...itemMotion}>
            Create an account to access our translation platform, terminology management, and team collaboration tools immediately.
          </m.p>
          <m.div className="cta-row" {...itemMotion}>
            <MagneticAction enabled={profile.allowHover}>
              <m.div {...buttonMotion}>
                <a
                  href={siteConfig.appUrl}
                  className={`button button-primary link-focus ${styles.finalPrimaryCta}`}
                  onClick={() =>
                    trackEvent("cta_primary_app_register_click", {
                      surface: "final_cta",
                      page_template: pageTemplate,
                      cta_role: "primary_register"
                    })
                  }
                >
                  Get Started
                </a>
              </m.div>
            </MagneticAction>
            <MagneticAction enabled={profile.allowHover}>
              <m.a
                {...linkMotion}
                href={`${siteConfig.appUrl}/login`}
                target="_self"
                rel="noreferrer"
                className={`button button-secondary link-focus ${styles.finalSecondaryCta}`}
                onClick={() =>
                  trackEvent("cta_secondary_app_login_click", {
                    surface: "final_cta",
                    page_template: pageTemplate,
                    cta_role: "secondary_login"
                  })
                }
              >
                Login
              </m.a>
            </MagneticAction>
            <m.div {...itemMotion}>
              <Link
                href="/contact"
                className={styles.tertiaryCtaLink}
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
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
}
