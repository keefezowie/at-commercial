"use client";

import { useState } from "react";
import styles from "@/components/marketing/styles/sections.module.css";
import { pricingTiers } from "@/content/site-content";

export function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <div className={styles.pricingToggleWrap}>
        <span className={!isAnnual ? styles.pricingToggleActive : ""}>Monthly</span>
        <button
          type="button"
          className={styles.pricingToggleBtn}
          onClick={() => setIsAnnual(!isAnnual)}
          aria-pressed={isAnnual}
        >
          <span className={styles.pricingToggleThumb} data-annual={isAnnual} />
        </button>
        <span className={isAnnual ? styles.pricingToggleActive : ""}>
          Annually <span className={styles.pricingDiscountBadge}>Save up to 20%</span>
        </span>
      </div>

      <div className={styles.pricingTierGrid}>
        {pricingTiers.map((tier) => (
          <article key={tier.name} className={`card ${styles.pricingTierCard}`}>
            <header className={styles.pricingTierHead}>
              <h3>{tier.name}</h3>
              <p className={styles.pricingTierPrice}>
                {isAnnual ? tier.annualPrice : tier.price}
              </p>
              <p className={styles.pricingTierSubtitle}>{tier.subtitle}</p>
            </header>
            <ul className={styles.pricingTierList}>
              {tier.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
