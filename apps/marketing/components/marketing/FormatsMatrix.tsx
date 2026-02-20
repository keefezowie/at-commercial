"use client";

import { m } from "framer-motion";
import { SvgFormatCad, SvgFormatDocx, SvgFormatPptx } from "@/components/marketing/FormatIllustrations";
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
  useCase: string;
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
              description="Validate file coverage against real enterprise workloads before rollout: SOPs, security policy packs, and engineering handoff files."
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
                  <th>Common Use Case</th>
                </tr>
              </thead>
              <m.tbody {...tableMotion}>
                {rows.map((row) => (
                  <m.tr key={row.format} {...itemMotion}>
                    <td className="mono">{row.format}</td>
                    <td>{row.coverage}</td>
                    <td>{row.note}</td>
                    <td>{row.useCase}</td>
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
              <h3>DOCX and XLSX table fidelity</h3>
              <p>Table grids and structured cells remain stable for SOPs, trackers, and regulated reporting exports.</p>
              <div className={styles.formatPreviewVisual}>
                <SvgFormatDocx />
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
                <SvgFormatPptx />
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
                <SvgFormatCad />
              </div>
            </SpotlightCard>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
