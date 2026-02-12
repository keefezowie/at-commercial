"use client";

import Link from "next/link";
import { m } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { MagneticAction } from "@/components/marketing/MagneticAction";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import {
  createMicroInteraction,
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";

export function FinalCtaBand() {
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const contentMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 8 });
  const buttonMotion = createMicroInteraction(profile, { kind: "button" });

  return (
    <section className="section-tight">
      <m.div className="container" {...sectionMotion}>
        <m.div className={styles.finalBand} {...contentMotion}>
          <m.h2 {...itemMotion}>Run a guided evaluation with real documents and engineering workflows.</m.h2>
          <m.p {...itemMotion}>
            Move from pilot validation to production onboarding with structured demos, terminology setup,
            and cross-team rollout guidance.
          </m.p>
          <m.div className="cta-row" {...itemMotion}>
            <MagneticAction enabled={profile.allowHover}>
              <m.div {...buttonMotion}>
                <Link
                  href="/demo"
                  className="button button-secondary link-focus"
                  onClick={() => trackEvent("cta_primary_click", { location: "final_cta" })}
                >
                  Request Enterprise Demo
                </Link>
              </m.div>
            </MagneticAction>
            <MagneticAction enabled={profile.allowHover}>
              <m.a
                {...buttonMotion}
                href={siteConfig.appUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary link-focus"
                onClick={() => trackEvent("cta_open_app_click", { location: "final_cta" })}
              >
                Open App
              </m.a>
            </MagneticAction>
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
}
