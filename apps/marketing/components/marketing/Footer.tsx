import Link from "next/link";
import styles from "@/components/marketing/marketing.module.css";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <strong>{siteConfig.productName}</strong>
            <p>
              Enterprise AI document translation workflows for business and engineering teams.
              Subscription access is available after evaluation and onboarding.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <section className={styles.footerColumn}>
              <h3>Product</h3>
              <ul className={styles.footerLinkList}>
                <li>
                  <Link href="/features" className="link-focus">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/formats" className="link-focus">
                    Formats
                  </Link>
                </li>
                <li>
                  <Link href="/cad-translation" className="link-focus">
                    CAD Translation
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="link-focus">
                    Pricing
                  </Link>
                </li>
              </ul>
            </section>
            <section className={styles.footerColumn}>
              <h3>Company</h3>
              <ul className={styles.footerLinkList}>
                <li>
                  <Link href="/security" className="link-focus">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-focus">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="link-focus">
                    Request Demo
                  </Link>
                </li>
                <li>
                  <a href={siteConfig.appUrl} target="_blank" rel="noreferrer" className="link-focus">
                    Subscriber Login
                  </a>
                </li>
              </ul>
            </section>
            <section className={styles.footerColumn}>
              <h3>Legal</h3>
              <ul className={styles.footerLinkList}>
                <li>
                  <Link href="/privacy" className="link-focus">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="link-focus">
                    Terms
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.supportEmail}`} className={`link-focus ${styles.footerEmail}`}>
                    {siteConfig.supportEmail}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>
            {new Date().getFullYear()} {siteConfig.companyName}
          </span>
          <span>Commercial website for conversion and onboarding inquiries.</span>
        </div>
      </div>
    </footer>
  );
}
