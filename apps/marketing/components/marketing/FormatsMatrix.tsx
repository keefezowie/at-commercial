"use client";

import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";

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
  const { section, item } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section()}>
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
            <tbody>
              {rows.map((row, index) => (
                <motion.tr
                  key={row.format}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={item(index).transition}
                >
                  <td className="mono">{row.format}</td>
                  <td>{row.coverage}</td>
                  <td>{row.note}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

