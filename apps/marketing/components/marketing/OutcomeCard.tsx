import styles from "@/components/marketing/marketing.module.css";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  item: Outcome;
};

export function OutcomeCard({ item }: Props) {
  return (
    <article className={`card ${styles.outcomeCard} ${styles.cardInteractive}`}>
      <h3 className={styles.outcomeTitle}>{item.title}</h3>
      <p className={styles.outcomeSummary}>{item.summary}</p>
    </article>
  );
}
