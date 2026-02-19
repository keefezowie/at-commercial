"use client";

import { m, useScroll } from "framer-motion";
import styles from "@/components/marketing/styles/shell.module.css";
import { useMotionProfile } from "@/lib/motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const profile = useMotionProfile("low");

  if (profile.reduced) {
    return null;
  }

  return (
    <div className={styles.scrollProgress} aria-hidden>
      <m.div className={styles.scrollProgressBar} style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

