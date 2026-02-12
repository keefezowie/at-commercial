"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
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

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Formats Matrix</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">
            Supported formats shown below represent available workflow coverage. Scope and volume can be
            qualified during evaluation.
          </p>
        </div>

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
      </m.div>
    </section>
  );
}
