import styles from "@/components/marketing/marketing.module.css";
import { PricingPreviewCard } from "@/components/marketing/PricingPreviewCard";

type PricingItem = {
  tier: string;
  audience: string;
  points: string[];
  cta: string;
  href: string;
};

type Props = {
  items: PricingItem[];
};

export function PricingPreviewSection({ items }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sectionTop}>
          <span className="eyebrow">Pricing Preview</span>
          <h2 className="section-title">Commercial pathways for pilot to enterprise rollout.</h2>
          <p className="section-description">
            Plans are scoped through evaluation and procurement discussions based on volume and workflow
            complexity.
          </p>
        </div>
        <div className={`grid-3 ${styles.pricingGrid}`}>
          {items.map((item, index) => (
            <PricingPreviewCard key={item.tier} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

