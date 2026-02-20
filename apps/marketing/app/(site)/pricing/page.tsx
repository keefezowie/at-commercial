import type { Metadata } from "next/types";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { PricingTiers } from "@/components/marketing/PricingTiers";
import styles from "@/components/marketing/styles/sections.module.css";
import { pricingComparisonRows } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/seo";

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
            Choose a plan based on quota, collaboration requirements, and automation needs.
          </p>
          <PricingTiers />
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
                {pricingComparisonRows.map((row) => (
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
