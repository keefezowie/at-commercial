"use client";

import Link from "next/link";
import type { Route } from "next";
import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { trackEvent } from "@/lib/analytics";
import { createStaggerItem, motionTokens, useMotionProfile } from "@/lib/motion";

type PricingItem = {
  tier: string;
  audience: string;
  points: string[];
  cta: string;
  href: Route;
  featured?: boolean;
};

type Props = {
  item: PricingItem;
};

export function PricingPreviewCard({ item }: Props) {
  const profile = useMotionProfile("low");
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <m.article className={`card ${styles.priceCard} ${styles.cardInteractive}`} {...itemMotion}>
      {item.featured ? (
        <m.span
          className={styles.priceBadge}
          animate={profile.reduced ? { opacity: 1 } : { y: [0, -4, 0] }}
          transition={
            profile.reduced
              ? undefined
              : {
                  duration: motionTokens.duration.floatLoop / 1000,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY
                }
          }
        >
          Most popular
        </m.span>
      ) : null}
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
    </m.article>
  );
}
