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
              Enterprise AI document translation workflows for business and engineering teams. Live
              platform access is available now.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <section>
              <h3>Product</h3>
              <Link href="/features" className="link-focus">
                Features
              </Link>
              <Link href="/formats" className="link-focus">
                Formats
              </Link>
              <Link href="/cad-translation" className="link-focus">
                CAD Translation
              </Link>
              <Link href="/pricing" className="link-focus">
                Pricing
              </Link>
            </section>
            <section>
              <h3>Company</h3>
              <Link href="/security" className="link-focus">
                Security
              </Link>
              <Link href="/contact" className="link-focus">
                Contact
              </Link>
              <a href={siteConfig.appUrl} target="_blank" rel="noreferrer" className="link-focus">
                Open App
              </a>
              <a href="#" aria-disabled className="link-focus">
                Status
              </a>
            </section>
            <section>
              <h3>Legal</h3>
              <Link href="/privacy" className="link-focus">
                Privacy
              </Link>
              <Link href="/terms" className="link-focus">
                Terms
              </Link>
              <a href={`mailto:${siteConfig.supportEmail}`} className="link-focus">
                {siteConfig.supportEmail}
              </a>
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
