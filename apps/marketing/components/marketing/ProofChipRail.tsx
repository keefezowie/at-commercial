"use client";

import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";

type Props = {
  title?: string;
  items: string[];
};

export function ProofChipRail({ title = "Supported workflows", items }: Props) {
  const { item } = useMotionSafe();

  return (
    <section className="section-tight">
      <div className="container">
        <div className={styles.sectionTop}>
          <span className="eyebrow">Proof Rail</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className={styles.chipRail} aria-label="Format and capability proof chips">
          {items.map((chip, index) => (
            <motion.span key={chip} className="chip mono" {...item(index)}>
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

