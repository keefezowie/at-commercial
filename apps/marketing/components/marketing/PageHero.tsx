import styles from "@/components/marketing/marketing.module.css";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className={styles.pageHero}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

