"use client";

import { type MouseEvent, type ReactNode, useRef } from "react";
import { m, type MotionProps } from "framer-motion";
import styles from "./SpotlightCard.module.css";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  motionProps?: MotionProps;
};

export function SpotlightCard({ children, className, contentClassName, motionProps }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <m.div
      ref={cardRef}
      className={`card ${styles.spotlightCard} ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      {...motionProps}
    >
      <div className={`${styles.cardContent} ${contentClassName ?? ""}`}>{children}</div>
    </m.div>
  );
}

