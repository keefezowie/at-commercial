"use client";

import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { type MouseEvent, useEffect } from "react";
import styles from "@/components/marketing/styles/sections.module.css";
import { useMotionProfile } from "@/lib/motion";

export type LightboxImage = {
  src: string;
  alt: string;
  title: string;
};

type Props = {
  image: LightboxImage | null;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: Props) {
  const profile = useMotionProfile("low");

  useEffect(() => {
    if (!image) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [image]);

  useEffect(() => {
    if (!image) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image ? (
        <m.div
          className={styles.lightboxBackdrop}
          role="presentation"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={profile.reduced ? { duration: 0.01 } : { duration: 0.2 }}
        >
          <m.div
            className={styles.lightboxDialog}
            role="dialog"
            aria-modal="true"
            aria-label={image.title}
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
            initial={profile.reduced ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={profile.reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.985 }}
            transition={profile.reduced ? { duration: 0.01 } : { duration: 0.2 }}
          >
            <div className={styles.lightboxHead}>
              <p>{image.title}</p>
              <button type="button" className={styles.lightboxClose} onClick={onClose}>
                Close
              </button>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1040}
              className={styles.lightboxImage}
              priority
            />
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
