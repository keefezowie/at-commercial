"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/marketing/BeforeAfterSlider";
import { ImageLightbox, type LightboxImage } from "@/components/marketing/ImageLightbox";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

const translationExamples = [
  {
    id: "docx",
    title: "DOCX layout fidelity",
    summary: "Headers, tables, spacing, and owner columns stay aligned after translation.",
    before: "/mockups/result-doc-before.svg",
    after: "/mockups/result-doc-after.svg"
  },
  {
    id: "pptx",
    title: "PPTX visual continuity",
    summary: "Slide hierarchy and bullet rhythm are preserved while content is translated.",
    before: "/mockups/result-slide-before.svg",
    after: "/mockups/result-slide-after.svg"
  },
  {
    id: "cad",
    title: "DWG and DXF annotation carryover",
    summary: "CAD annotation positions remain intact with translated layer labels.",
    before: "/mockups/result-cad-before.svg",
    after: "/mockups/result-cad-after.svg"
  }
] as const;

export function TranslationResultsGallery() {
  const profile = useMotionProfile("low");
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const gridMotion = createStaggerContainer(profile, { y: 0 });
  const cardMotion = createStaggerItem(profile, { y: 8 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="Translation Results"
          title="See before and after outputs at a glance."
          description="Synthetic previews below show the type of format-preserving results teams can expect during evaluation."
        />
        <m.div className={styles.resultsGrid} {...gridMotion}>
          {translationExamples.map((example) => (
            <m.article key={example.id} className={`card ${styles.resultCard}`} {...cardMotion}>
              <div className={styles.resultCardHead}>
                <h3>{example.title}</h3>
                <p>{example.summary}</p>
              </div>
              <BeforeAfterSlider
                id={example.id}
                title={example.title}
                before={{ src: example.before, alt: `${example.title} before translation` }}
                after={{ src: example.after, alt: `${example.title} after translation` }}
                onOpenImage={setActiveImage}
              />
            </m.article>
          ))}
        </m.div>
      </m.div>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
