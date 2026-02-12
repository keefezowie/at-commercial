"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
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
        <div className={styles.sectionTop}>
          <span className="eyebrow">Operational Risks</span>
          <h2 className="section-title">
            Most document translation projects break on operations, not language coverage.
          </h2>
          <p className="section-description">
            Enterprise teams need consistent formatting, terminology control, image-text support, and
            engineering compatibility in one governed workflow.
          </p>
        </div>

        <m.div className={`grid-4 ${styles.problemGrid}`} {...gridMotion}>
          {items.map((problem) => (
            <m.article
              key={problem.title}
              className={`card ${styles.problemCard} ${styles.cardInteractive}`}
              {...itemMotion}
            >
              <h3>{problem.title}</h3>
              <p>{problem.detail}</p>
            </m.article>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
