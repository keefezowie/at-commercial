"use client";

import Link from "next/link";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
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

type Props = {
  pageTemplate?: PageTemplate;
};

export function SecurityPanel({ pageTemplate = "home" }: Props) {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 12 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Security Snapshot"
          title="Designed for enterprise procurement conversations."
          description="This V1 marketing site avoids unverified certification claims while clearly presenting operational controls. Discovery and security review lead into subscription onboarding."
        />

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
            className="button button-primary link-focus"
            onClick={() =>
              trackEvent("cta_primary_request_demo_click", {
                surface: "security_section",
                page_template: pageTemplate,
                cta_role: "primary_demo"
              })
            }
          >
            Request Demo
          </Link>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary link-focus"
            onClick={() =>
              trackEvent("cta_secondary_subscriber_login_click", {
                surface: "security_section",
                page_template: pageTemplate,
                cta_role: "secondary_login"
              })
            }
          >
            Subscriber Login
          </a>
          <Link
            href="/contact"
            className={styles.tertiaryCtaLink}
            onClick={() =>
              trackEvent("cta_tertiary_talk_to_sales_click", {
                surface: "security_section",
                page_template: pageTemplate,
                cta_role: "tertiary_sales"
              })
            }
          >
            Talk to Sales
          </Link>
        </div>
      </m.div>
    </section>
  );
}
