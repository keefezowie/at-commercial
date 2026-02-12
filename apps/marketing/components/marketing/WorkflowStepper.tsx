"use client";

import { m } from "framer-motion";
import { useState } from "react";
import styles from "@/components/marketing/marketing.module.css";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type Step = {
  label: string;
  detail: string;
};

type Props = {
  items: Step[];
};

export function WorkflowStepper({ items }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const profile = useMotionProfile("medium");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Workflow</span>
          <h2 className="section-title">From upload to export with operational controls in place.</h2>
          <p className="section-description">
            A practical delivery path for business files and engineering artifacts with asynchronous task
            flow and authenticated history.
          </p>
        </div>

        <m.div className={styles.workflowWrap} {...listMotion}>
          {items.map((step, index) => (
            <m.article
              key={step.label}
              className={`card ${styles.workflowItem} ${index === activeStep ? styles.workflowItemActive : ""}`}
              onViewportEnter={() => setActiveStep(index)}
              onFocusCapture={() => setActiveStep(index)}
              viewport={{ amount: 0.45, once: false }}
              {...itemMotion}
            >
              <span
                className={`${styles.workflowPoint} ${index === activeStep ? styles.workflowPointActive : ""}`}
                aria-hidden
              />
              <h3>
                {index + 1}. {step.label}
              </h3>
              <p>{step.detail}</p>
            </m.article>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
