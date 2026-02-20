import type { Metadata } from "next/types";
import { NotFoundState } from "@/components/marketing/NotFoundState";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/404",
  title: "404 | Page Not Found",
  description: "Recovery page with navigation back to homepage and demo request flow."
});

export default function FourZeroFourPage() {
  return <NotFoundState />;
}

