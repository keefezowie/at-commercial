"use client";

import type { Route } from "next";
import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { PricingPreviewCard } from "@/components/marketing/PricingPreviewCard";
import { createSectionReveal, createStaggerContainer, useMotionProfile } from "@/lib/motion";

type PricingItem = {
  tier: string;
  audience: string;
  points: string[];
  cta: string;
  href: Route;
  featured?: boolean;
};

type Props = {
  items: PricingItem[];
};

export function PricingPreviewSection({ items }: Props) {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const gridMotion = createStaggerContainer(profile, { y: 0 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">Pricing Preview</span>
          <h2 className="section-title">Commercial pathways for pilot to enterprise rollout.</h2>
          <p className="section-description">
            Plans are scoped through evaluation and procurement discussions based on volume and workflow
            complexity.
          </p>
        </div>
        <m.div className={`grid-3 ${styles.pricingGrid}`} {...gridMotion}>
          {items.map((item) => (
            <PricingPreviewCard key={item.tier} item={item} />
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
