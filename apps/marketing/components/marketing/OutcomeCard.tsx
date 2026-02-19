import styles from "@/components/marketing/styles/sections.module.css";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  item: Outcome;
  index: number;
};

const figureLabels = ["FIG 0.2", "FIG 0.3", "FIG 0.4"] as const;

export function OutcomeCard({ item, index }: Props) {
  const variantIndex = index % 3;
  const label = figureLabels[variantIndex];

  return (
    <article className={`card ${styles.outcomeCard} ${styles.cardInteractive}`}>
      <div className={styles.outcomeFigureHead} aria-hidden>
        <span className={`mono ${styles.figureLabel}`}>{label}</span>

        {variantIndex === 0 ? (
          <div className={`${styles.outcomeFigure} ${styles.figureStack}`}>
            <span className={styles.figureStackTop} />
            <span className={styles.figureStackLayer} />
            <span className={styles.figureStackLayer} />
            <span className={styles.figureStackLayer} />
            <span className={styles.figureStackLayer} />
          </div>
        ) : null}

        {variantIndex === 1 ? (
          <div className={`${styles.outcomeFigure} ${styles.figureCubes}`}>
            <span className={`${styles.figureCube} ${styles.figureCubeA}`} />
            <span className={`${styles.figureCube} ${styles.figureCubeB}`} />
            <span className={`${styles.figureCube} ${styles.figureCubeC}`} />
            <span className={`${styles.figureCube} ${styles.figureCubeD}`} />
          </div>
        ) : null}

        {variantIndex === 2 ? (
          <div className={`${styles.outcomeFigure} ${styles.figureStairs}`}>
            <span className={`${styles.figureStep} ${styles.figureStepA}`} />
            <span className={`${styles.figureStep} ${styles.figureStepB}`} />
            <span className={`${styles.figureStep} ${styles.figureStepC}`} />
            <span className={`${styles.figureStep} ${styles.figureStepD}`} />
            <span className={`${styles.figureStep} ${styles.figureStepE}`} />
            <span className={`${styles.figureStep} ${styles.figureStepF}`} />
          </div>
        ) : null}
      </div>

      <h3 className={styles.outcomeTitle}>{item.title}</h3>
      <p className={styles.outcomeSummary}>{item.summary}</p>
    </article>
  );
}
