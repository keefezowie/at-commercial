import styles from "@/components/marketing/styles/legal.module.css";
import { AppAccessCtaRow } from "@/components/marketing/AppAccessCtaRow";

type Section = {
  heading: string;
  paragraphs: string[];
};

type Props = {
  title: string;
  updatedDate: string;
  intro: string;
  sections: Section[];
};

export function LegalPageTemplate({ title, updatedDate, intro, sections }: Props) {
  return (
    <main className={styles.legalWrap}>
      <div className="container">
        <article>
          <h1>{title}</h1>
          <p>
            <strong>Last updated:</strong> {updatedDate}
          </p>
          <p>{intro}</p>
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <AppAccessCtaRow className="cta-row" showViewPricing />
        </article>
      </div>
    </main>
  );
}
