"use client";

import { MotionProps, Transition } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const msToSeconds = (value: number) => value / 1000;

export const motionTokens = {
  duration: {
    micro: 160,
    ui: 200,
    section: 420,
    hero: 450,
    ambientLoop: 8000,
    floatLoop: 7000
  },
  stagger: {
    children: 0.04,
    sectionDelay: 0.04
  },
  nav: {
    scrollThreshold: 32
  },
  hover: {
    cardLift: -3,
    buttonPressScale: 0.98,
    magneticMaxOffset: 3
  },
  parallax: {
    backgroundRange: 10,
    foregroundRange: 5
  }
} as const;

export const motionEasing = {
  out: [0.16, 1, 0.3, 1] as const
};

export const motionSprings = {
  default: {
    type: "spring" as const,
    stiffness: 170,
    damping: 26,
    mass: 0.92
  },
  hero: {
    type: "spring" as const,
    stiffness: 140,
    damping: 24,
    mass: 0.92
  }
};

export const motionViewport = {
  once: true,
  amount: 0.15
} as const;

export type MotionIntensity = "high" | "medium" | "low";

export type MotionProfile = {
  reduced: boolean;
  allowHover: boolean;
  intensity: MotionIntensity;
  intensityScale: number;
  staggerChildren: number;
  sectionDelay: number;
  viewport: typeof motionViewport;
};

const intensityScaleMap: Record<MotionIntensity, number> = {
  high: 1,
  medium: 0.8,
  low: 0.6
};

type SectionRevealOptions = {
  amount?: number;
  delay?: number;
  y?: number;
};

type StaggerOptions = {
  amount?: number;
  delay?: number;
  y?: number;
};

type HeroLayerOptions = {
  delay?: number;
  y?: number;
};

type MicroInteractionOptions = {
  kind: "button" | "card" | "link";
};

const reducedTransition: Transition = {
  duration: msToSeconds(motionTokens.duration.micro),
  ease: motionEasing.out
};

export const useMotionProfile = (intensity: MotionIntensity = "medium"): MotionProfile => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [allowHover, setAllowHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setAllowHover(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return useMemo(() => {
    const reduced = prefersReducedMotion;
    return {
      reduced,
      allowHover: allowHover && !reduced,
      intensity,
      intensityScale: intensityScaleMap[intensity],
      staggerChildren: reduced ? 0.01 : motionTokens.stagger.children,
      sectionDelay: reduced ? 0 : motionTokens.stagger.sectionDelay,
      viewport: motionViewport
    };
  }, [allowHover, intensity, prefersReducedMotion]);
};

export const createSectionReveal = (
  profile: MotionProfile,
  options: SectionRevealOptions = {}
): MotionProps => {
  const revealOffset = options.y ?? 16 * profile.intensityScale;

  if (profile.reduced) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: options.amount ?? motionViewport.amount },
      transition: reducedTransition
    };
  }

  return {
    initial: { opacity: 0, y: revealOffset },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: options.amount ?? motionViewport.amount },
    transition: {
      ...motionSprings.default,
      delay: options.delay ?? profile.sectionDelay
    }
  };
};

export const createStaggerContainer = (
  profile: MotionProfile,
  options: StaggerOptions = {}
): MotionProps => {
  const revealOffset = profile.reduced ? 0 : options.y ?? 16 * profile.intensityScale;
  const visibleTransition: Transition = profile.reduced
    ? {
        ...reducedTransition,
        staggerChildren: profile.staggerChildren,
        delayChildren: 0,
        when: "beforeChildren"
      }
    : {
        ...motionSprings.default,
        delay: options.delay ?? 0,
        when: "beforeChildren",
        staggerChildren: profile.staggerChildren,
        delayChildren: profile.sectionDelay
      };

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: options.amount ?? motionViewport.amount },
    variants: {
      hidden: {
        opacity: 0,
        y: revealOffset
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: visibleTransition
      }
    }
  };
};

export const createStaggerItem = (profile: MotionProfile, options: StaggerOptions = {}): MotionProps => {
  const revealOffset = profile.reduced ? 0 : options.y ?? 12 * profile.intensityScale;

  return {
    variants: {
      hidden: {
        opacity: 0,
        y: revealOffset
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: profile.reduced ? reducedTransition : motionSprings.default
      }
    }
  };
};

export const createHeroLayer = (profile: MotionProfile, options: HeroLayerOptions = {}): MotionProps => {
  const revealOffset = options.y ?? 18 * profile.intensityScale;
  if (profile.reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: reducedTransition
    };
  }

  return {
    initial: { opacity: 0, y: revealOffset },
    animate: { opacity: 1, y: 0 },
    transition: {
      ...motionSprings.hero,
      delay: options.delay ?? 0
    }
  };
};

export const createMicroInteraction = (
  profile: MotionProfile,
  options: MicroInteractionOptions
): MotionProps => {
  if (profile.reduced) {
    return {};
  }

  if (options.kind === "button") {
    return {
      whileTap: { scale: motionTokens.hover.buttonPressScale },
      whileHover: profile.allowHover ? { y: -1 } : undefined,
      transition: {
        duration: msToSeconds(motionTokens.duration.micro),
        ease: motionEasing.out
      }
    };
  }

  if (options.kind === "card") {
    return {
      whileHover: profile.allowHover ? { y: motionTokens.hover.cardLift } : undefined,
      transition: {
        duration: msToSeconds(motionTokens.duration.micro),
        ease: motionEasing.out
      }
    };
  }

  return {
    whileHover: profile.allowHover ? { y: -1 } : undefined,
    transition: {
      duration: msToSeconds(motionTokens.duration.micro),
      ease: motionEasing.out
    }
  };
};
