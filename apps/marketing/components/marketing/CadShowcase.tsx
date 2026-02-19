"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/marketing/BeforeAfterSlider";
import { ImageLightbox, type LightboxImage } from "@/components/marketing/ImageLightbox";
import styles from "@/components/marketing/marketing.module.css";
import { type PageTemplate, trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
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
        <div className={`${styles.sectionTop} ${styles.cadSectionTop}`}>
          <span className="eyebrow">CAD Translation</span>
          <h2 className={`section-title ${styles.cadSectionTitle}`}>
            Bring DWG and DXF workflows into your translation delivery lane.
          </h2>
          <p className={`section-description ${styles.cadSectionDescription}`}>
            Keep engineering markups, layer naming, and handoff quality intact across multilingual CAD
            delivery.
          </p>
        </div>

        <m.div className={styles.cadShowcase} {...showcaseMotion}>
          <m.article className={`card ${styles.cadPanel} ${styles.cardInteractive}`} {...itemMotion}>
            <h3>Engineering-native workflow support</h3>
            <p className={`section-description ${styles.cadPanelDescription}`}>
              Use one authenticated flow for business files and CAD deliverables without switching tools.
            </p>
            <div className={styles.cadPrimaryActions} data-testid="cad-primary-actions">
              <Link
                href="/demo"
                className="button button-primary link-focus"
                onClick={() =>
                  trackEvent("cta_primary_request_demo_click", {
                    surface: "cad_section",
                    page_template: pageTemplate,
                    cta_role: "primary_demo"
                  })
                }
              >
                Request Demo
              </Link>
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary link-focus"
                onClick={() =>
                  trackEvent("cta_secondary_subscriber_login_click", {
                    surface: "cad_section",
                    page_template: pageTemplate,
                    cta_role: "secondary_login"
                  })
                }
              >
                Subscriber Login
              </a>
            </div>
            <Link
              href="/contact"
              className={`${styles.tertiaryCtaLink} ${styles.cadSalesLink}`}
              onClick={() =>
                trackEvent("cta_tertiary_talk_to_sales_click", {
                  surface: "cad_section",
                  page_template: pageTemplate,
                  cta_role: "tertiary_sales"
                })
              }
            >
              Talk to Sales
            </Link>
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
