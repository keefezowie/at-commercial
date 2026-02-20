"use client";

import { type KeyboardEvent, type PointerEvent as ReactPointerEvent, type ReactNode, useRef, useState } from "react";
import styles from "@/components/marketing/styles/sections.module.css";
import type { LightboxImage } from "@/components/marketing/ImageLightbox";

type SlideContent = {
  element: ReactNode;
  alt: string;
  lightboxSrc?: string;
};

type Props = {
  id: string;
  title: string;
  before: SlideContent;
  after: SlideContent;
  compact?: boolean;
  onOpenImage?: (image: LightboxImage) => void;
};

export function BeforeAfterSlider({ id, title, before, after, compact = false, onOpenImage }: Props) {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const beforeLightboxSrc = before.lightboxSrc;
  const afterLightboxSrc = after.lightboxSrc;

  const clampPosition = (value: number) => Math.max(5, Math.min(95, value));

  const updatePosition = (clientX: number) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    const rect = frame.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clampPosition(nextPosition));
  };

  const onFramePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updatePosition(event.clientX);
  };

  const onFramePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) {
      return;
    }
    updatePosition(event.clientX);
  };

  const onFramePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  };

  const onHandleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => clampPosition(current - 2));
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => clampPosition(current + 2));
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(5);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(95);
    }
  };

  return (
    <div
      className={`${styles.beforeAfter} ${compact ? styles.beforeAfterCompact : ""}`}
      data-before-after-id={id}
      data-before-after-position={Math.round(position)}
    >
      <div
        ref={frameRef}
        className={styles.beforeAfterFrame}
        data-before-after-frame="true"
        data-dragging={dragging ? "true" : "false"}
        onPointerDown={onFramePointerDown}
        onPointerMove={onFramePointerMove}
        onPointerUp={onFramePointerUp}
        onPointerCancel={onFramePointerUp}
      >
        <div className={styles.beforeAfterPane} role="img" aria-label={before.alt}>
          {before.element}
        </div>
        <div className={styles.beforeAfterReveal} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <div className={styles.beforeAfterPane} role="img" aria-label={after.alt}>
            {after.element}
          </div>
        </div>
        <div className={styles.beforeAfterDivider} style={{ left: `${position}%` }} aria-hidden />
        <button
          type="button"
          className={styles.beforeAfterHandle}
          style={{ left: `${position}%` }}
          role="slider"
          aria-label={`${title} comparison handle`}
          aria-valuemin={5}
          aria-valuemax={95}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% revealed`}
          onKeyDown={onHandleKeyDown}
        >
          <span className={styles.beforeAfterHandleKnob} aria-hidden />
        </button>
        <div className={styles.beforeAfterBadges}>
          <span>Before</span>
          <span>After</span>
        </div>
      </div>

      {onOpenImage && beforeLightboxSrc && afterLightboxSrc ? (
        <div className={styles.beforeAfterActions}>
          <button
            type="button"
            className={styles.imageAction}
            onClick={() => onOpenImage({ src: beforeLightboxSrc, alt: before.alt, title: `${title} (Before)` })}
          >
            View before
          </button>
          <button
            type="button"
            className={styles.imageAction}
            onClick={() => onOpenImage({ src: afterLightboxSrc, alt: after.alt, title: `${title} (After)` })}
          >
            View after
          </button>
        </div>
      ) : null}
    </div>
  );
}
