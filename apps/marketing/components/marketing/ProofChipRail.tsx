"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type Props = {
  title?: string;
  items: string[];
};

export function ProofChipRail({ title = "Supported workflows", items }: Props) {
  const profile = useMotionProfile("high");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const chipRailMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section-tight">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Proof Rail</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <m.div className={styles.chipRail} aria-label="Format and capability proof chips" {...chipRailMotion}>
          {items.map((chip) => (
            <m.span key={chip} className="chip mono" {...itemMotion}>
              {chip}
            </m.span>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
