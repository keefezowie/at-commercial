"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { TrackedAppAccessCtas } from "@/components/marketing/TrackedAppAccessCtas";
import { type PageTemplate } from "@/lib/analytics";
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

        <TrackedAppAccessCtas
          surface="security_section"
          pageTemplate={pageTemplate}
          containerClassName="cta-row"
          tertiaryClassName={styles.tertiaryCtaLink}
        />
      </m.div>
    </section>
  );
}
