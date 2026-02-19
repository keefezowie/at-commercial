"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import styles from "@/components/marketing/styles/sections.module.css";
import { SectionShell } from "@/components/marketing/SectionShell";
import {
  createSectionReveal,
  createStaggerContainer,
  createStaggerItem,
  useMotionProfile
} from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";

type Item = {
  question: string;
  answer: string;
};

type Props = {
  items: Item[];
};

export function FaqAccordion({ items }: Props) {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const profile = useMotionProfile("low");
  const sectionMotion = createSectionReveal(profile, { y: 10 });
  const listMotion = createStaggerContainer(profile, { y: 0 });
  const itemMotion = createStaggerItem(profile, { y: 6 });

  return (
    <section className="section">
      <m.div className="container" {...sectionMotion}>
        <SectionShell eyebrow="FAQ" title="Answers to high-intent evaluation questions." size="tight" />
        <m.div className={styles.faqList} {...listMotion}>
          {items.map((item, index) => {
            const open = openItem === index;
            return (
              <m.article key={item.question} className={styles.faqItem} {...itemMotion}>
                <button
                  type="button"
                  className={`${styles.faqButton} link-focus`}
                  aria-expanded={open}
                  aria-controls={`faq-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => {
                    setOpenItem(open ? null : index);
                    trackEvent("faq_expand", { question_index: index, open: !open });
                  }}
                >
                  <span>{item.question}</span>
                  <span aria-hidden>{open ? "-" : "+"}</span>
                </button>
                {profile.reduced ? (
                  open ? (
                    <p id={`faq-${index}`} aria-labelledby={`faq-trigger-${index}`} className={styles.faqAnswer}>
                      {item.answer}
                    </p>
                  ) : null
                ) : (
                  <AnimatePresence initial={false}>
                    {open ? (
                      <m.div
                        id={`faq-${index}`}
                        aria-labelledby={`faq-trigger-${index}`}
                        className={styles.faqAnswer}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.answer}
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                )}
              </m.article>
            );
          })}
        </m.div>
      </m.div>
    </section>
  );
}
