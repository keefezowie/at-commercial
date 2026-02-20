import type { Metadata } from "next/types";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import styles from "@/components/marketing/styles/sections.module.css";
import { buildPageMetadata } from "@/lib/seo";

const tiers = [
  {
    name: "Starter",
    price: "Rp 99.000/bln",
    subtitle: "Freelancers & individuals",
    highlights: ["600.000 chars", "2 image credits", "All document formats", "20 MB max file size"]
  },
  {
    name: "Bisnis",
    price: "Rp 299.000/bln",
    subtitle: "SMBs & agencies",
    highlights: ["2.000.000 chars", "10 image credits", "Custom glossary", "50 MB max file size"]
  },
  {
    name: "Enterprise",
    price: "Rp 1.199.000/bln",
    subtitle: "High-volume operations",
    highlights: ["10.000.000 chars", "30 image credits", "API access", "100 MB max file size"]
  }
] as const;

const comparisonRows = [
  { feature: "Monthly Price", starter: "Rp 99.000", bisnis: "Rp 299.000", enterprise: "Rp 1.199.000" },
  { feature: "Character Quota / mo", starter: "600.000", bisnis: "2.000.000", enterprise: "10.000.000" },
  { feature: "Image Regen Credits / mo", starter: "2", bisnis: "10", enterprise: "30" },
  { feature: "Supported Formats", starter: "All", bisnis: "All", enterprise: "All" },
  { feature: "Batch API (Async Queue)", starter: "—", bisnis: "✓", enterprise: "✓" },
  { feature: "Glossary / Custom Terms", starter: "—", bisnis: "✓", enterprise: "✓" },
  { feature: "Translation History", starter: "30 days", bisnis: "90 days", enterprise: "1 year" },
  { feature: "Max File Size", starter: "20 MB", bisnis: "50 MB", enterprise: "100 MB" },
  { feature: "Max Images per File", starter: "10", bisnis: "30", enterprise: "50" },
  { feature: "Priority Processing", starter: "—", bisnis: "—", enterprise: "✓" },
  { feature: "API Access", starter: "—", bisnis: "—", enterprise: "✓" },
  { feature: "Dedicated Support", starter: "—", bisnis: "Email", enterprise: "Email + Chat" },
  { feature: "Image Credit Add-On Pack", starter: "5 cr / Rp 25k", bisnis: "5 cr / Rp 25k", enterprise: "10 cr / Rp 45k" }
] as const;

export const metadata: Metadata = buildPageMetadata({
  path: "/pricing",
  title: "Pricing | Commercial Qualification",
  description:
    "Commercial pathway overview for pilot, growth, and enterprise evaluation, including procurement-oriented consultation."
});

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Flexible plans for individual creators, growing teams, and enterprise operations."
        description="All prices are monthly (IDR). Choose a plan based on quota, collaboration requirements, and automation needs."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Subscription tiers</h2>
          <p className="section-description" style={{ marginTop: "0.6rem" }}>
            No annual lock-in required. Annual plans may include discounting as an optional upsell.
          </p>
          <div className={styles.pricingTierGrid}>
            {tiers.map((tier) => (
              <article key={tier.name} className={`card ${styles.pricingTierCard}`}>
                <header className={styles.pricingTierHead}>
                  <h3>{tier.name}</h3>
                  <p className={styles.pricingTierPrice}>{tier.price}</p>
                  <p className={styles.pricingTierSubtitle}>{tier.subtitle}</p>
                </header>
                <ul className={styles.pricingTierList}>
                  {tier.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 className="section-title">Full feature comparison</h2>
          <p className="section-description" style={{ marginTop: "0.6rem" }}>
            Public plan details only. Internal finance metrics are intentionally excluded.
          </p>
          <div className={styles.pricingComparisonWrap}>
            <table className={styles.pricingComparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Bisnis</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.starter}</td>
                    <td>{row.bisnis}</td>
                    <td>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <FinalCtaBand pageTemplate="pricing" />
    </main>
  );
}

