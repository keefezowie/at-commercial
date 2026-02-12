import { MotionProps, useReducedMotion } from "framer-motion";

const springBase = { type: "spring", stiffness: 140, damping: 18, mass: 0.8 };

export const motionPresets = {
  sectionReveal: (delay = 0): MotionProps => ({
    initial: { opacity: 0, y: 18, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.28 },
    transition: { ...springBase, delay }
  }),
  itemReveal: (index = 0): MotionProps => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { ...springBase, delay: index * 0.06 }
  }),
  buttonTap: {
    whileTap: { scale: 0.97 },
    whileHover: { y: -1 }
  } as MotionProps
};

export const useMotionSafe = () => {
  const prefersReducedMotion = useReducedMotion();

  const section = (delay = 0): MotionProps =>
    prefersReducedMotion
      ? {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.18, delay }
        }
      : motionPresets.sectionReveal(delay);

  const item = (index = 0): MotionProps =>
    prefersReducedMotion
      ? {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.14, delay: index * 0.03 }
        }
      : motionPresets.itemReveal(index);

  return {
    prefersReducedMotion,
    section,
    item
  };
};

