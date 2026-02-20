"use client";

import Link from "next/link";
import type { Route } from "next";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { siteConfig } from "@/lib/site-config";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import { createStaggerItem, motionTokens, useMotionProfile } from "@/lib/motion";

type PricingItem = {
  tier: string;
  audience: string;
  points: string[];
  cta: string;
  href: Route | string;
  featured?: boolean;
};

type Props = {
  item: PricingItem;
  pageTemplate: PageTemplate;
};

export function PricingPreviewCard({ item, pageTemplate }: Props) {
  const profile = useMotionProfile("low");
  const itemMotion = createStaggerItem(profile, { y: 8 });
  const isPrimary = item.href === siteConfig.appUrl;
  const eventName = isPrimary
    ? "cta_primary_app_register_click"
    : "cta_tertiary_talk_to_sales_click";

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
        href={item.href as Route}
        className={`button ${isPrimary ? "button-primary" : "button-secondary"} link-focus`}
        onClick={() =>
          trackEvent(eventName, {
            surface: "pricing_card",
            page_template: pageTemplate,
            cta_role: isPrimary ? "primary_register" : "tertiary_sales",
            tier: item.tier,
            href: item.href
          })
        }
      >
        {item.cta}
      </Link>
    </m.article>
  );
}
