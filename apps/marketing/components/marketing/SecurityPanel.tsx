"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { type PageTemplate } from "@/lib/analytics";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

const securityPoints = [
  {
    title: "Zero-Retention Workflows",
    summary:
      "Document data is processed for workflow execution and then flushed; content is not retained for public model training."
  },
  {
    title: "Role-Based Access Control (RBAC)",
    summary:
      "Glossary and termbase changes are restricted to designated localization managers with controlled approval paths."
  },
  {
    title: "Audit-Ready Histories",
    summary:
      "Authenticated task logs provide the traceability enterprise IT governance teams require during compliance reviews."
  }
];

type Props = {
  pageTemplate?: PageTemplate;
};

export function SecurityPanel(_: Props) {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 12 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Enterprise Security Controls"
          title="Security answers aligned with procurement and IT governance questionnaires."
          description="Review the operational controls enterprise teams typically require before approving translation platform deployment."
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

      </m.div>
    </section>
  );
}
