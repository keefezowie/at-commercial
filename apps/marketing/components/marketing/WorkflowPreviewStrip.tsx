"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useState } from "react";
import { ImageLightbox, type LightboxImage } from "@/components/marketing/ImageLightbox";
import styles from "@/components/marketing/marketing.module.css";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

const workflowPanels = [
  {
    id: "upload",
    title: "Upload",
    image: "/mockups/workflow-upload.svg",
    note: "Drop mixed business and CAD files in one batch."
  },
  {
    id: "configure",
    title: "Configure",
    image: "/mockups/workflow-configure.svg",
    note: "Apply glossary, OCR, and access controls per project."
  },
  {
    id: "review",
    title: "Review",
    image: "/mockups/workflow-review.svg",
    note: "Verify translated segments and quality checks."
  },
  {
    id: "export",
    title: "Export",
    image: "/mockups/workflow-export.svg",
    note: "Deliver multilingual package with audit-friendly logs."
  }
] as const;

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function WorkflowPreviewStrip({
  eyebrow = "Platform Screens",
  title = "A quick visual of the delivery flow.",
  description = "These synthetic product previews illustrate the sequence teams follow from upload through export."
}: Props) {
  const profile = useMotionProfile("low");
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section-tight">
      <m.div className="container" {...sectionMotion}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>
        <m.div className={styles.workflowPreviewGrid} {...listMotion}>
          {workflowPanels.map((panel, index) => (
            <m.article key={panel.id} className={`card ${styles.workflowPreviewCard}`} {...itemMotion}>
              <div className={styles.workflowPreviewHead}>
                <span className={styles.workflowPreviewStep}>Step {index + 1}</span>
                <h3>{panel.title}</h3>
              </div>
              <button
                type="button"
                className={styles.workflowPreviewZoom}
                aria-label={`Open ${panel.title} preview`}
                onClick={() =>
                  setActiveImage({
                    src: panel.image,
                    alt: `${panel.title} workflow preview`,
                    title: `${panel.title} workflow preview`
                  })
                }
              >
                <Image
                  src={panel.image}
                  alt={`${panel.title} workflow preview`}
                  width={860}
                  height={560}
                  className={styles.workflowPreviewImage}
                />
              </button>
              <p>{panel.note}</p>
            </m.article>
          ))}
        </m.div>
      </m.div>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
