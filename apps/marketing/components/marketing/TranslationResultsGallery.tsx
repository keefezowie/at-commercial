"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/marketing/BeforeAfterSlider";
import {
  MockupCad,
  MockupDocx,
  MockupImage,
  MockupPdf,
  MockupPptx,
  MockupXlsx
} from "@/components/marketing/FormatMockups";
import { ImageLightbox, type LightboxImage } from "@/components/marketing/ImageLightbox";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { createSectionReveal, createStaggerContainer, createStaggerItem, useMotionProfile } from "@/lib/motion";

const formatExamples = [
  { id: "docx", title: "DOCX / Word", desc: "Table layouts perfectly anchored.", component: MockupDocx },
  { id: "xlsx", title: "XLSX / Excel", desc: "Cell grids and numerical logic preserved.", component: MockupXlsx },
  { id: "pptx", title: "PPTX / PowerPoint", desc: "Slide hierarchy and visual rhythm aligned.", component: MockupPptx },
  { id: "pdf", title: "PDF / Manuals", desc: "Multi-column technical documents OCR-parsed cleanly.", component: MockupPdf },
  { id: "ocr", title: "Image OCR", desc: "Embedded diagrams targeted and extracted.", component: MockupImage },
  { id: "cad", title: "DWG / DXF", desc: "Engineering layers natively localized.", component: MockupCad }
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
          eyebrow="Format Coverage"
          title="Pixel-perfect fidelity across business and engineering files."
          description="Transora reconstructs files as structured layout systems, preserving hierarchy while localized text updates in place."
        />
        <m.div className={styles.showcaseGrid2Col} {...gridMotion}>
          {formatExamples.map((example) => {
            const Component = example.component;
            return (
              <m.article key={example.id} className={`card ${styles.resultCard}`} {...cardMotion}>
                <div className={styles.resultCardHead}>
                  <h3>{example.title}</h3>
                  <p>{example.desc}</p>
                </div>
                <BeforeAfterSlider
                  id={example.id}
                  title={example.title}
                  before={{ element: <Component state="before" />, alt: `${example.title} English source` }}
                  after={{ element: <Component state="after" />, alt: `${example.title} Translated output` }}
                  onOpenImage={setActiveImage}
                />
              </m.article>
            );
          })}
        </m.div>
      </m.div>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}

