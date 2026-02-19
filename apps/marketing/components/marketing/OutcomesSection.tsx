"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { OutcomeCard } from "@/components/marketing/OutcomeCard";
import { SectionShell } from "@/components/marketing/SectionShell";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  items: Outcome[];
};

export function OutcomesSection({ items }: Props) {
  const profile = useMotionProfile("medium");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const gridMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Outcome Grid"
          title="Benefit-first capabilities for enterprise translation programs."
          description="Core workflows map directly to validated capabilities, avoiding speculative claims and reducing procurement friction."
        />
        <m.div className="grid-2" style={{ marginTop: "1.6rem" }} {...gridMotion}>
          {items.map((item, index) => (
            <m.div key={item.title} {...itemMotion}>
              <OutcomeCard item={item} index={index} />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
