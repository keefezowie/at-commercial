"use client";

import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";

type Item = {
  title: string;
  detail: string;
};

type Props = {
  items: Item[];
};

export function ProblemFraming({ items }: Props) {
  const { section, item } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section()}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Problem Framing</span>
          <h2 className="section-title">
            Most document translation projects break on operations, not language coverage.
          </h2>
          <p className="section-description">
            Enterprise teams need consistent formatting, terminology control, image-text support, and
            engineering compatibility in one governed workflow.
          </p>
        </div>

        <div className={`grid-4 ${styles.problemGrid}`}>
          {items.map((problem, index) => (
            <motion.article key={problem.title} className={`card ${styles.problemCard}`} {...item(index)}>
              <h3>{problem.title}</h3>
              <p>{problem.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

