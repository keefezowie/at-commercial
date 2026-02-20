"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/marketing/BeforeAfterSlider";
import { ImageLightbox, type LightboxImage } from "@/components/marketing/ImageLightbox";
import { TrackedAppAccessCtas } from "@/components/marketing/TrackedAppAccessCtas";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import { type PageTemplate } from "@/lib/analytics";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

type Props = {
  pageTemplate?: PageTemplate;
};

export function CadShowcase({ pageTemplate = "home" }: Props) {
  const profile = useMotionProfile("medium");
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const showcaseMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className={`section ${styles.cadSection}`}>
      <m.div className="container" {...sectionMotion}>
        <SectionShell
          eyebrow="CAD Translation"
          title="Bring DWG and DXF workflows into your translation delivery lane."
          description="Keep engineering markups, layer naming, and handoff quality intact across multilingual CAD delivery."
          tone="inverse"
          className={styles.cadSectionTop}
          titleClassName={styles.cadSectionTitle}
          descriptionClassName={styles.cadSectionDescription}
        />

        <m.div className={styles.cadShowcase} {...showcaseMotion}>
          <m.article className={`card ${styles.cadPanel} ${styles.cardInteractive}`} {...itemMotion}>
            <h3>Engineering-native workflow support</h3>
            <p className={`section-description ${styles.cadPanelDescription}`}>
              Use one authenticated flow for business files and CAD deliverables without switching tools.
            </p>
            <TrackedAppAccessCtas
              surface="cad_section"
              pageTemplate={pageTemplate}
              containerClassName={styles.cadPrimaryActions}
              tertiaryClassName={`${styles.tertiaryCtaLink} ${styles.cadSalesLink}`}
              dataTestId="cad-primary-actions"
            />
          </m.article>

          <m.aside className={`${styles.cadVisual} glass ${styles.cardInteractive}`} {...itemMotion}>
            <div className={styles.cadVisualHead}>
              <h3>Before and after CAD localization</h3>
              <p>Annotation anchors stay stable while engineering labels are translated.</p>
            </div>
            <BeforeAfterSlider
              id="cad-showcase"
              title="CAD localization preview"
              before={{
                src: "/mockups/result-cad-before.svg",
                alt: "CAD source annotations before translation"
              }}
              after={{
                src: "/mockups/result-cad-after.svg",
                alt: "CAD annotations after translation"
              }}
              compact
              onOpenImage={setActiveImage}
            />
          </m.aside>
        </m.div>
      </m.div>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
