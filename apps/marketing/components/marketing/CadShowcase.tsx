"use client";

import { m } from "framer-motion";
import { SvgCadWorkflow } from "@/components/marketing/SvgCadWorkflow";
import { AbstractCadFlow } from "@/components/marketing/AbstractCadFlow";
import { SpotlightCard } from "@/components/marketing/SpotlightCard";
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
  const sectionMotion = createSectionReveal(profile, { y: 14 });
  const containerMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 10 });

  return (
    <section className={`section ${styles.cadSection}`}>
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.cadShowcaseLayout} {...containerMotion}>
          <m.div {...itemMotion}>
            <SectionShell
              eyebrow="CAD Translation"
              title="Bring DWG and DXF workflows into your translation delivery lane."
              description="Keep engineering markups, layer naming, and handoff quality intact across multilingual CAD delivery."
              tone="inverse"
              className={styles.cadSectionTop}
              titleClassName={styles.cadSectionTitle}
              descriptionClassName={styles.cadSectionDescription}
            />
          </m.div>

          <div className={styles.cadShowcase}>
            <SpotlightCard className={styles.cadPanel} contentClassName={styles.cadPanelContent} motionProps={itemMotion}>
              <div className={styles.cadPanelVisual}>
                <SvgCadWorkflow />
              </div>
              <div>
                <h3>Engineering-native workflow support</h3>
                <p className={`section-description ${styles.cadPanelDescription}`}>
                  Use one authenticated flow for business files and CAD deliverables without switching tools.
                </p>
              </div>
              <TrackedAppAccessCtas
                surface="cad_section"
                pageTemplate={pageTemplate}
                containerClassName={styles.cadPrimaryActions}
                tertiaryClassName="button button-secondary link-focus"
                dataTestId="cad-primary-actions"
              />
            </SpotlightCard>

            <SpotlightCard
              className={`${styles.cadVisual} glass`}
              contentClassName={styles.cadVisualContent}
              motionProps={itemMotion}
            >
              <div className={styles.cadVisualHead}>
                <h3>Before and after CAD localization</h3>
                <p>Annotation anchors stay stable while engineering labels are translated.</p>
              </div>
              <div className={styles.cadVisualCanvas}>
                <AbstractCadFlow className={styles.cadVisualFlow} />
              </div>
            </SpotlightCard>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
