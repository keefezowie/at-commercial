"use client";

import { m, useScroll } from "framer-motion";
import styles from "@/components/marketing/styles/shell.module.css";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.scrollProgress} aria-hidden>
      <m.div className={styles.scrollProgressBar} style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

