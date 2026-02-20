import { type ReactNode } from "react";
import styles from "@/components/marketing/OutcomeCard.module.css";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  item: Outcome;
  figureLabel: string;
  figure: ReactNode;
};

export function OutcomeCard({ item, figureLabel, figure }: Props) {
  return (
    <article className={styles.outcomeCard}>
      <div className={styles.outcomeFigureHead}>
        <span className={`mono ${styles.figureLabel}`}>{figureLabel}</span>
        <div className={styles.outcomeVisual} aria-hidden>
          {figure}
        </div>
      </div>

      <h3 className={styles.outcomeTitle}>{item.title}</h3>
      <p className={styles.outcomeSummary}>{item.summary}</p>
    </article>
  );
}
