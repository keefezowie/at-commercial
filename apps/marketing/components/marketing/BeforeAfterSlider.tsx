"use client";

import Image from "next/image";
import { KeyboardEvent, PointerEvent as ReactPointerEvent, useRef, useState } from "react";
import styles from "@/components/marketing/marketing.module.css";
import type { LightboxImage } from "@/components/marketing/ImageLightbox";

type SlideImage = {
  src: string;
  alt: string;
};

type Props = {
  id: string;
  title: string;
  before: SlideImage;
  after: SlideImage;
  compact?: boolean;
  onOpenImage?: (image: LightboxImage) => void;
};

export function BeforeAfterSlider({ id, title, before, after, compact = false, onOpenImage }: Props) {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

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
        <Image src={before.src} alt={before.alt} width={1200} height={760} className={styles.beforeAfterImage} />
        <div className={styles.beforeAfterReveal} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={after.src} alt={after.alt} width={1200} height={760} className={styles.beforeAfterImage} />
        </div>
        <div className={styles.beforeAfterDivider} style={{ left: `${position}%` }} aria-hidden />
        <button
          type="button"
          className={styles.beforeAfterHandle}
          style={{ left: `${position}%` }}
          role="slider"
          aria-label={`${title} comparison handle`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={onHandleKeyDown}
        >
          <span className={styles.beforeAfterHandleKnob} aria-hidden />
        </button>
        <div className={styles.beforeAfterBadges}>
          <span>Before</span>
          <span>After</span>
        </div>
      </div>

      {onOpenImage ? (
        <div className={styles.beforeAfterActions}>
          <button
            type="button"
            className={styles.imageAction}
            onClick={() => onOpenImage({ src: before.src, alt: before.alt, title: `${title} (Before)` })}
          >
            View before
          </button>
          <button
            type="button"
            className={styles.imageAction}
            onClick={() => onOpenImage({ src: after.src, alt: after.alt, title: `${title} (After)` })}
          >
            View after
          </button>
        </div>
      ) : null}
    </div>
  );
}
