import Link from "next/link";
import styles from "@/components/marketing/styles/sections.module.css";

export function NotFoundState() {
  return (
    <main className="section">
      <div className="container">
        <article className={`card ${styles.notFoundCard}`}>
          <span className="eyebrow">404</span>
          <h1 className="section-title">The page you requested is not available.</h1>
          <p className="section-description">
            The route may have moved. Use one of the paths below to continue your evaluation journey.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link href="/" className="button button-primary link-focus">
              Back to Home
            </Link>
            <Link href="/contact" className="button button-secondary link-focus">
              Talk to Sales
            </Link>
            <Link href="/pricing" className="button button-secondary link-focus">
              View Pricing
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

