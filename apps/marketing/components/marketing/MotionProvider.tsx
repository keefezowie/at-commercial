"use client";

import { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
};

export function MotionProvider({ children }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

