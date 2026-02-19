"use client";

import { m } from "framer-motion";
import styles from "@/components/marketing/styles/hero.module.css";
import { createStaggerContainer, createStaggerItem, useMotionProfile } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
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
      </m.div>
    </section>
  );
}
