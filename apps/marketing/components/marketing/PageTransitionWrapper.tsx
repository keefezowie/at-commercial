"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "@/lib/motion";

type Props = {
  children: ReactNode;
};

export function PageTransitionWrapper({ children }: Props) {
  const { prefersReducedMotion } = useMotionSafe();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 130, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

