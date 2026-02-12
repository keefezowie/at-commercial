"use client";

import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  index: number;
  item: Outcome;
};

export function OutcomeCard({ index, item }: Props) {
  const { item: itemMotion } = useMotionSafe();

  return (
    <motion.article className={`card ${styles.outcomeCard}`} {...itemMotion(index)}>
      <h3 className={styles.outcomeTitle}>{item.title}</h3>
      <p className={styles.outcomeSummary}>{item.summary}</p>
    </motion.article>
  );
}

