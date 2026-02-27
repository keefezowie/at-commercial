"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { SpotlightCard } from "@/components/marketing/SpotlightCard";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type Item = {
  title: string;
  detail: string;
};

type Props = {
  items: Item[];
};

export function ProblemFraming({ items }: Props) {
  const profile = useMotionProfile("medium");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const gridMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Operational Risks"
          title="Most translation initiatives fail in operations control, not language coverage."
          description="For manufacturing and IT teams, broken formatting, uncontrolled terminology, and CAD workflow gaps directly delay deployment."
        />

        <m.div className={`grid-4 ${styles.problemGrid}`} {...gridMotion}>
          {items.map((problem) => (
            <SpotlightCard
              key={problem.title}
              className={styles.problemCard}
              motionProps={itemMotion}
            >
              <h3>{problem.title}</h3>
              <p>{problem.detail}</p>
            </SpotlightCard>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
