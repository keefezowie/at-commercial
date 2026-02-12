"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { OutcomeCard } from "@/components/marketing/OutcomeCard";
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
        <div className={styles.sectionTop}>
          <span className="eyebrow">Outcome Grid</span>
          <h2 className="section-title">Benefit-first capabilities for enterprise translation programs.</h2>
          <p className="section-description">
            Core workflows map directly to validated capabilities, avoiding speculative claims and reducing
            procurement friction.
          </p>
        </div>
        <m.div className="grid-2" style={{ marginTop: "1.6rem" }} {...gridMotion}>
          {items.map((item) => (
            <m.div key={item.title} {...itemMotion}>
              <OutcomeCard item={item} />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
