import styles from "@/components/marketing/marketing.module.css";
import { OutcomeCard } from "@/components/marketing/OutcomeCard";

type Outcome = {
  title: string;
  summary: string;
};

type Props = {
  items: Outcome[];
};

export function OutcomesSection({ items }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sectionTop}>
          <span className="eyebrow">Outcome Grid</span>
          <h2 className="section-title">Benefit-first capabilities for enterprise translation programs.</h2>
          <p className="section-description">
            Core workflows map directly to validated capabilities, avoiding speculative claims and reducing
            procurement friction.
          </p>
        </div>
        <div className="grid-2" style={{ marginTop: "1.6rem" }}>
          {items.map((item, index) => (
            <OutcomeCard key={item.title} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

