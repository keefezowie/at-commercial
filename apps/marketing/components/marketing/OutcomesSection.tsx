"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { OutcomeCard } from "@/components/marketing/OutcomeCard";
import { SectionShell } from "@/components/marketing/SectionShell";
import { SvgCadWorkflow } from "@/components/marketing/SvgCadWorkflow";
import { SvgImageOcr } from "@/components/marketing/SvgImageOcr";
import { SvgPreserveStructure } from "@/components/marketing/SvgPreserveStructure";
import { SvgTerminologyScale } from "@/components/marketing/SvgTerminologyScale";
import { SpotlightCard } from "@/components/marketing/SpotlightCard";
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

const outcomeFigures = [
  { label: "FIG 0.1", figure: <SvgPreserveStructure /> },
  { label: "FIG 0.2", figure: <SvgTerminologyScale /> },
  { label: "FIG 0.3", figure: <SvgImageOcr /> },
  { label: "FIG 0.4", figure: <SvgCadWorkflow /> }
] as const;

export function OutcomesSection({ items }: Props) {
  const profile = useMotionProfile("medium");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const containerMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.outcomesLayout} {...containerMotion}>
          <m.div {...itemMotion}>
            <SectionShell
              eyebrow="Outcome Grid"
              title="Benefit-first capabilities for enterprise translation programs."
              description="Core workflows map directly to validated capabilities, avoiding speculative claims and reducing procurement friction."
            />
          </m.div>
          <div className="grid-2" style={{ marginTop: "1.6rem" }}>
            {items.map((item, index) => {
              const visual = outcomeFigures[index % outcomeFigures.length];

              return (
                <SpotlightCard key={item.title} motionProps={itemMotion} contentClassName={styles.outcomeCardContent}>
                  <OutcomeCard item={item} figureLabel={visual.label} figure={visual.figure} />
                </SpotlightCard>
              );
            })}
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
