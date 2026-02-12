"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { trackEvent } from "@/lib/analytics";
import { useMotionSafe } from "@/lib/motion";

type PricingItem = {
  tier: string;
  audience: string;
  points: string[];
  cta: string;
  href: string;
};

type Props = {
  item: PricingItem;
  index: number;
};

export function PricingPreviewCard({ item, index }: Props) {
  const { item: itemMotion } = useMotionSafe();

  return (
    <motion.article className={`card ${styles.priceCard}`} {...itemMotion(index)}>
      <h3 className={styles.priceTier}>{item.tier}</h3>
      <p className={styles.priceAudience}>{item.audience}</p>
      <ul className={styles.priceList}>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <Link
        href={item.href}
        className="button button-secondary link-focus"
        onClick={() => trackEvent("pricing_section_cta_click", { tier: item.tier, href: item.href })}
      >
        {item.cta}
      </Link>
    </motion.article>
  );
}

