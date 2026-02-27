"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { SvgCadWorkflow } from "@/components/marketing/SvgCadWorkflow";
import { MockupCad } from "@/components/marketing/FormatMockups";
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
  const [isTranslated, setIsTranslated] = useState(false);
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
              <div className={styles.cadVisualHead} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3>Layer-Preserving Translation</h3>
                  <p>Toggle to see how text layers are translated while geometry remains untouched.</p>
                </div>
                <button 
                  onClick={() => setIsTranslated(!isTranslated)}
                  style={{
                    background: isTranslated ? "var(--accent-electric)" : "transparent",
                    color: isTranslated ? "#000" : "var(--text-primary)",
                    border: `1px solid ${isTranslated ? "var(--accent-electric)" : "var(--border)"}`,
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontWeight: 600,
                    transition: "all 0.2s ease"
                  }}
                >
                  {isTranslated ? "View Original" : "Translate Layer"}
                </button>
              </div>
              <div className={styles.cadVisualCanvas} style={{ overflow: "hidden", position: "relative" }}>
                <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                  <MockupCad state={isTranslated ? "after" : "before"} />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
