"use client";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { PricingPreviewCard } from "@/components/marketing/PricingPreviewCard";
import { SectionShell } from "@/components/marketing/SectionShell";
import type { PageTemplate } from "@/lib/analytics";
import { createSectionReveal, createStaggerContainer, useMotionProfile } from "@/lib/motion";

type PricingItem = {
  tier: string;
  price: string;
  audience: string;
  points: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

type Props = {
  items: PricingItem[];
  pageTemplate?: PageTemplate;
};

export function PricingPreviewSection({ items, pageTemplate = "home" }: Props) {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const gridMotion = createStaggerContainer(profile, { y: 0 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Pricing Preview"
          title="Preview the same monthly plans shown on the full pricing page."
          description="Starter, Bisnis, and Enterprise tiers below mirror the current public pricing structure."
        />
        <m.div className={`grid-3 ${styles.pricingGrid}`} {...gridMotion}>
          {items.map((item) => (
            <PricingPreviewCard key={item.tier} item={item} pageTemplate={pageTemplate} />
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
