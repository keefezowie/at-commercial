"use client";

import { m } from "framer-motion";
import { AbstractCadFlow } from "@/components/marketing/AbstractCadFlow";
import { AbstractDocumentFlow } from "@/components/marketing/AbstractDocumentFlow";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { SpotlightCard } from "@/components/marketing/SpotlightCard";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type FormatRow = {
  format: string;
  coverage: string;
  note: string;
};

type Props = {
  title?: string;
  rows: FormatRow[];
};

export function FormatsMatrix({ title = "Technical fit at a glance", rows }: Props) {
  const profile = useMotionProfile("medium");
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const containerMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });
  const tableMotion = createStaggerContainer(profile, { y: 0 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.formatsLayout} {...containerMotion}>
          <m.div {...itemMotion}>
            <SectionShell
              eyebrow="Formats Matrix"
              title={title}
              description="Supported formats shown below represent available workflow coverage. Scope and volume can be qualified during evaluation."
            />
          </m.div>

          <SpotlightCard
            className={styles.formatsTableWrap}
            contentClassName={styles.formatsTableCardContent}
            motionProps={itemMotion}
          >
            <table className={styles.formatsTable}>
              <thead>
                <tr>
                  <th className="mono">Format</th>
                  <th>Coverage</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <m.tbody {...tableMotion}>
                {rows.map((row) => (
                  <m.tr key={row.format} {...itemMotion}>
                    <td className="mono">{row.format}</td>
                    <td>{row.coverage}</td>
                    <td>{row.note}</td>
                  </m.tr>
                ))}
              </m.tbody>
            </table>
          </SpotlightCard>

          <div className={styles.formatPreviewGrid}>
            <SpotlightCard
              className={styles.formatPreviewSpotlight}
              contentClassName={styles.formatPreviewCard}
              motionProps={itemMotion}
            >
              <h3>DOCX and table fidelity</h3>
              <p>Columns, row spacing, and ownership metadata remain structured in translated exports.</p>
              <div className={styles.formatPreviewVisual}>
                <AbstractDocumentFlow className={styles.formatPreviewFlow} />
              </div>
            </SpotlightCard>
            <SpotlightCard
              className={styles.formatPreviewSpotlight}
              contentClassName={styles.formatPreviewCard}
              motionProps={itemMotion}
            >
              <h3>PPTX visual continuity</h3>
              <p>Slide hierarchy and bullet rhythm preserve presentation readability after translation.</p>
              <div className={styles.formatPreviewVisual}>
                <AbstractDocumentFlow className={styles.formatPreviewFlow} />
              </div>
            </SpotlightCard>
            <SpotlightCard
              className={styles.formatPreviewSpotlight}
              contentClassName={styles.formatPreviewCard}
              motionProps={itemMotion}
            >
              <h3>DWG and DXF annotation mapping</h3>
              <p>Annotation positions stay anchored while layer labels are localized for engineering teams.</p>
              <div className={styles.formatPreviewVisual}>
                <AbstractCadFlow className={styles.formatPreviewFlow} />
              </div>
            </SpotlightCard>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
