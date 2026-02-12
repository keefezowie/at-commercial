import styles from "@/components/marketing/marketing.module.css";
import Link from "next/link";

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
          <div className="cta-row" style={{ marginTop: "1.2rem" }}>
            <Link href="/contact" className="button button-primary link-focus">
              Contact
            </Link>
            <Link href="/" className="button button-secondary link-focus">
              Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
