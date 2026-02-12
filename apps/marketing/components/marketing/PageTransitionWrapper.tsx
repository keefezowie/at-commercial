"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";
import { motionSprings, useMotionProfile } from "@/lib/motion";

type Props = {
  children: ReactNode;
};

export function PageTransitionWrapper({ children }: Props) {
  const profile = useMotionProfile("low");

  return (
    <m.div
      initial={profile.reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        profile.reduced
          ? { duration: 0.01 }
          : {
              ...motionSprings.default
            }
      }
    >
      {children}
    </m.div>
  );
}
