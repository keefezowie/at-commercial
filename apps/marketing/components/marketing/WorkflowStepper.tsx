"use client";

import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";

type Step = {
  label: string;
  detail: string;
};

type Props = {
  items: Step[];
};

export function WorkflowStepper({ items }: Props) {
  const { section, item } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section(0.05)}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Workflow</span>
          <h2 className="section-title">From upload to export with operational controls in place.</h2>
          <p className="section-description">
            A practical delivery path for business files and engineering artifacts with asynchronous task
            flow and authenticated history.
          </p>
        </div>

        <div className={styles.workflowWrap}>
          {items.map((step, index) => (
            <motion.article key={step.label} className={`card ${styles.workflowItem}`} {...item(index)}>
              <span className={styles.workflowPoint} aria-hidden />
              <h3>
                {index + 1}. {step.label}
              </h3>
              <p>{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

