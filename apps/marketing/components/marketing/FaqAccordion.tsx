"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/components/marketing/marketing.module.css";
import { useMotionSafe } from "@/lib/motion";
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
  const { section } = useMotionSafe();

  return (
    <section className="section">
      <motion.div className="container" {...section()}>
        <div className={styles.sectionTop}>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Answers to high-intent evaluation questions.</h2>
        </div>
        <div className={styles.faqList}>
          {items.map((item, index) => {
            const open = openItem === index;
            return (
              <article key={item.question} className={styles.faqItem}>
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
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.p
                      id={`faq-${index}`}
                      aria-labelledby={`faq-trigger-${index}`}
                      className={styles.faqAnswer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

