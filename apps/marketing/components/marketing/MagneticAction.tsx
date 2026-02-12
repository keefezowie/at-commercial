"use client";

import { ReactNode, useMemo, useState } from "react";
import { m } from "framer-motion";
import { motionTokens } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  enabled: boolean;
};

type Offset = {
  x: number;
  y: number;
};

const initialOffset: Offset = { x: 0, y: 0 };

export function MagneticAction({ children, className, enabled }: Props) {
  const [offset, setOffset] = useState<Offset>(initialOffset);

  const transition = useMemo(
    () => ({
      type: "spring" as const,
      stiffness: 240,
      damping: 24,
      mass: 0.7
    }),
    []
  );

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalizedX = (event.clientX - centerX) / (rect.width / 2 || 1);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2 || 1);
    const maxOffset = motionTokens.hover.magneticMaxOffset;
    setOffset({
      x: Math.max(-maxOffset, Math.min(maxOffset, normalizedX * maxOffset)),
      y: Math.max(-maxOffset, Math.min(maxOffset, normalizedY * maxOffset))
    });
  };

  const resetOffset = () => setOffset(initialOffset);

  return (
    <m.div
      className={className}
      data-magnetic-enabled={enabled ? "true" : "false"}
      animate={enabled ? offset : initialOffset}
      transition={transition}
      onMouseMove={onMouseMove}
      onMouseLeave={resetOffset}
      onBlur={resetOffset}
    >
      {children}
    </m.div>
  );
}
