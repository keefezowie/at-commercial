"use client";

import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import styles from "@/components/marketing/styles/hero.module.css";
import { MagneticAction } from "@/components/marketing/MagneticAction";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import {
  createHeroLayer,
  createMicroInteraction,
  motionEasing,
  motionTokens,
  useMotionProfile
} from "@/lib/motion";

const floatingChips = [
  { label: "Format Integrity", value: "DOCX / PPTX / XLSX", style: { top: "8%", right: "-2%" } },
  { label: "OCR Pipeline", value: "Embedded & image text", style: { bottom: "11%", left: "-4%" } },
  { label: "Engineering Flow", value: "DWG + DXF support", style: { top: "68%", right: "-1%" } }
] as const;

export function HeroLayered() {
  const sectionRef = useRef<HTMLElement>(null);
  const profile = useMotionProfile("high");
  const buttonMotion = createMicroInteraction(profile, { kind: "button" });
  const heroDelays = useMemo(
    () => ({
      headline: profile.reduced ? 0 : 0.1,
      subhead: profile.reduced ? 0 : 0.2,
      cta: profile.reduced ? 0 : 0.3,
      chips: profile.reduced ? 0 : 0.36,
      visual: profile.reduced ? 0 : 0.45
    }),
    [profile.reduced]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, profile.reduced ? 0 : -motionTokens.parallax.backgroundRange]
  );
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, profile.reduced ? 0 : -motionTokens.parallax.foregroundRange]
  );

  return (
    <section ref={sectionRef} className={styles.hero} data-reduced-motion={profile.reduced ? "true" : "false"}>
      <div className={styles.heroAmbientBase} aria-hidden />
      <m.div
        className={styles.heroAmbientDrift}
        aria-hidden
        style={profile.reduced ? undefined : { y: backgroundY }}
        animate={
          profile.reduced
            ? undefined
            : {
                x: [-8, 4, -8],
                y: [-4, 6, -4]
              }
        }
        transition={
          profile.reduced
            ? undefined
            : {
                duration: motionTokens.duration.ambientLoop / 1000,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY
              }
        }
      />
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className="eyebrow">Enterprise AI Document Translation Platform</span>
          <m.div
            className={styles.heroAccentLine}
            initial={profile.reduced ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={profile.reduced ? { duration: 0.01 } : { duration: 0.48, delay: 0.12 }}
          />
          <m.h1
            className={styles.heroTitle}
            data-hero-stage="headline"
            data-hero-delay="100"
            {...createHeroLayer(profile, { delay: heroDelays.headline, y: 16 })}
          >
            Translate business and engineering documents without losing operational control.
          </m.h1>
          <m.p
            className={styles.heroLead}
            data-hero-stage="subhead"
            data-hero-delay="200"
            {...createHeroLayer(profile, { delay: heroDelays.subhead, y: 12 })}
          >
            {siteConfig.productName} delivers format-preserving document workflows, glossary and termbase
            control, OCR handling for image text, and CAD translation pathways for DWG and DXF teams.
          </m.p>
          <m.div
            className="cta-row"
            data-hero-stage="cta"
            data-hero-delay="300"
            {...createHeroLayer(profile, { delay: heroDelays.cta, y: 10 })}
          >
            <MagneticAction enabled={profile.allowHover}>
              <m.div {...buttonMotion}>
                <a
                  href={siteConfig.appUrl}
                  className={`button button-primary link-focus ${styles.heroPrimaryCta}`}
                  onClick={() =>
                    trackEvent("cta_primary_app_register_click", {
                      surface: "hero",
                      page_template: "home",
                      cta_role: "primary_register"
                    })
                  }
                >
                  Get Started
                </a>
              </m.div>
            </MagneticAction>
            <MagneticAction enabled={profile.allowHover}>
              <m.a
                {...buttonMotion}
                href={`${siteConfig.appUrl}/login`}
                target="_self"
                rel="noreferrer"
                className={`button button-secondary link-focus ${styles.heroSecondaryCta}`}
                onClick={() =>
                  trackEvent("cta_secondary_app_login_click", {
                    surface: "hero",
                    page_template: "home",
                    cta_role: "secondary_login"
                  })
                }
              >
                Login
              </m.a>
            </MagneticAction>
          </m.div>
          <m.p className={styles.heroSubscriberHint} {...createHeroLayer(profile, { delay: 0.33, y: 8 })}>
            Already have an account? Use Login. New users should start with Get Started.
          </m.p>
          <m.ul className={styles.heroAssurance} {...createHeroLayer(profile, { delay: 0.34, y: 8 })}>
            <li>No credit card required</li>
            <li>Enterprise demo within 48 hours</li>
            <li>Subscription onboarding support included</li>
          </m.ul>
          <m.div
            className={styles.chipRail}
            {...createHeroLayer(profile, { delay: heroDelays.chips, y: 8 })}
          >
            <span className="chip mono">Async tasks + history</span>
            <span className="chip mono">Role-based termbase permissions</span>
            <span className="chip mono">Procurement-ready workflow posture</span>
          </m.div>
        </div>

        <m.div
          className={styles.heroFrameDepth}
          style={profile.reduced ? undefined : { y: visualY }}
          data-hero-stage="visual"
          data-hero-delay="450"
          {...createHeroLayer(profile, { delay: heroDelays.visual, y: 14 })}
        >
          <m.div
            className={styles.heroFrameWrap}
            animate={
              profile.reduced
                ? undefined
                : {
                    y: [0, -6, 0]
                  }
            }
            transition={
              profile.reduced
                ? undefined
                : {
                    duration: motionTokens.duration.floatLoop / 1000,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY
                  }
            }
          >
            <m.div
              className={styles.heroGlow}
              aria-hidden
              animate={
                profile.reduced
                  ? undefined
                  : {
                      opacity: [0.7, 1, 0.7]
                    }
              }
              transition={
                profile.reduced
                  ? undefined
                  : {
                      duration: motionTokens.duration.ambientLoop / 1000,
                      ease: motionEasing.out,
                      repeat: Number.POSITIVE_INFINITY
                    }
              }
            />
            <div className={styles.heroFrame}>
              <div className={styles.heroFrameHead}>
                <p className={styles.heroFrameTitle}>Live workflow preview</p>
                <div className={styles.heroDotRow}>
                  <span className={styles.heroDot} />
                  <span className={styles.heroDot} />
                  <span className={styles.heroDot} />
                </div>
              </div>
              <div className={styles.heroPanel}>
                <div className={styles.heroPanelRow}>
                  <span className={styles.heroPanelLabel}>Pipeline</span>
                  <span className={styles.heroPanelValue}>
                    Upload {"->"} Configure {"->"} Review {"->"} Export
                  </span>
                </div>
                <div className={styles.heroPanelRow}>
                  <span className={styles.heroPanelLabel}>Input batch</span>
                  <span className={styles.heroPanelValue}>DOCX, PDF, DWG, DXF</span>
                </div>
                <div className={styles.heroPanelRow}>
                  <span className={styles.heroPanelLabel}>Controls</span>
                  <span className={styles.heroPanelValue}>Termbase + OCR + scoped access</span>
                </div>
                <div className={styles.heroPanelRow}>
                  <span className={styles.heroPanelLabel}>Status</span>
                  <span className={styles.heroPanelValue}>Active platform availability</span>
                </div>
              </div>
            </div>

            {floatingChips.map((chip, index) => (
              <m.div
                key={chip.label}
                className={styles.heroMetricChip}
                style={chip.style}
                animate={
                  profile.reduced
                    ? { opacity: 1 }
                    : {
                        y: [0, -2, 0],
                        opacity: [0.95, 1, 0.95]
                      }
                }
                transition={{
                  duration: profile.reduced ? 0 : motionTokens.duration.floatLoop / 1000 + index * 0.4,
                  repeat: profile.reduced ? 0 : Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: profile.reduced ? 0 : index * 0.2
                }}
              >
                <strong>{chip.label}</strong>
                {chip.value}
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
