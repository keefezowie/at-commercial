import type { Metadata } from "next/types";
import { FinalCtaBand } from "@/components/marketing/FinalCtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { SecurityPanel } from "@/components/marketing/SecurityPanel";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/security",
  title: "Security | Procurement Readiness Snapshot",
  description:
    "Review access, permissioning, and workflow controls for enterprise translation evaluations without unsupported compliance claims."
});

export default function SecurityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Security"
        title="Trust pathways for procurement and security stakeholders."
        description="Operational controls are presented clearly while avoiding unverified certification or regulatory claims."
      />
      <SecurityPanel pageTemplate="security" />
      <FinalCtaBand pageTemplate="security" />
    </main>
  );
}

