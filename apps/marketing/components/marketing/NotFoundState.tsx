import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
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
            <a href={siteConfig.appUrl} className="button button-secondary link-focus">
              Get Started
            </a>
            <a
              href={`${siteConfig.appUrl}/login`}
              target="_self"
              rel="noreferrer"
              className="button button-secondary link-focus"
            >
              Login
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

