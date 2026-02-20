"use client";

import Link from "next/link";
import type { Route } from "next";
import { m } from "framer-motion";
import styles from "@/components/marketing/styles/hero.module.css";
import { createStaggerContainer, createStaggerItem, useMotionProfile } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: Route;
};

export function PageHero({ eyebrow, title, description, primaryCtaLabel, primaryCtaHref }: Props) {
  const profile = useMotionProfile("medium");
  const containerMotion = createStaggerContainer(profile, { y: 14 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className={styles.pageHero}>
      <m.div className="container" {...containerMotion}>
        <m.span className="eyebrow" {...itemMotion}>
          {eyebrow}
        </m.span>
        <m.h1 {...itemMotion}>{title}</m.h1>
        <m.p {...itemMotion}>{description}</m.p>
        {primaryCtaLabel && primaryCtaHref ? (
          <m.div className={`cta-row ${styles.pageHeroActions}`} {...itemMotion}>
            <Link href={primaryCtaHref} className={`button button-primary link-focus ${styles.pageHeroPrimaryCta}`}>
              {primaryCtaLabel}
            </Link>
          </m.div>
        ) : null}
      </m.div>
    </section>
  );
}
