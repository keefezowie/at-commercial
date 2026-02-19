"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
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
        <SectionShell eyebrow="Coverage Snapshot" title={title} size="tight" />
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
