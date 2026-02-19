"use client";

import Image from "next/image";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
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
  const bodyMotion = createStaggerContainer(profile, { y: 0 });
  const rowMotion = createStaggerItem(profile, { y: 8 });
  const previewMotion = createStaggerContainer(profile, { y: 0 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Formats Matrix"
          title={title}
          description="Supported formats shown below represent available workflow coverage. Scope and volume can be qualified during evaluation."
        />

        <div className={`card ${styles.formatsTableWrap}`}>
          <table className={styles.formatsTable}>
            <thead>
              <tr>
                <th className="mono">Format</th>
                <th>Coverage</th>
                <th>Notes</th>
              </tr>
            </thead>
            <m.tbody {...bodyMotion}>
              {rows.map((row) => (
                <m.tr key={row.format} {...rowMotion}>
                  <td className="mono">{row.format}</td>
                  <td>{row.coverage}</td>
                  <td>{row.note}</td>
                </m.tr>
              ))}
            </m.tbody>
          </table>
        </div>
        <m.div className={styles.formatPreviewGrid} {...previewMotion}>
          <m.article className={`card ${styles.formatPreviewCard}`} {...rowMotion}>
            <h3>DOCX and table fidelity</h3>
            <p>Columns, row spacing, and ownership metadata remain structured in translated exports.</p>
            <Image
              src="/mockups/result-doc-after.svg"
              alt="DOCX translated output preview"
              width={1200}
              height={760}
              className={styles.formatPreviewImage}
            />
          </m.article>
          <m.article className={`card ${styles.formatPreviewCard}`} {...rowMotion}>
            <h3>PPTX visual continuity</h3>
            <p>Slide hierarchy and bullet rhythm preserve presentation readability after translation.</p>
            <Image
              src="/mockups/result-slide-after.svg"
              alt="PPTX translated output preview"
              width={1200}
              height={760}
              className={styles.formatPreviewImage}
            />
          </m.article>
          <m.article className={`card ${styles.formatPreviewCard}`} {...rowMotion}>
            <h3>DWG and DXF annotation mapping</h3>
            <p>Annotation positions stay anchored while layer labels are localized for engineering teams.</p>
            <Image
              src="/mockups/result-cad-after.svg"
              alt="CAD translated output preview"
              width={1200}
              height={760}
              className={styles.formatPreviewImage}
            />
          </m.article>
        </m.div>
      </m.div>
    </section>
  );
}
