import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function NotFoundState() {
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title">The page you requested is not available.</h1>
        <p className="section-description">
          The route may have moved. Use one of the paths below to continue your evaluation journey.
        </p>
        <div className="cta-row" style={{ marginTop: "1rem" }}>
          <Link href="/" className="button button-primary link-focus">
            Back to Home
          </Link>
          <Link href="/demo" className="button button-secondary link-focus">
            Request Demo
          </Link>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary link-focus"
          >
            Subscriber Login
          </a>
        </div>
      </div>
    </main>
  );
}

