import { Footer } from "@/components/marketing/Footer";
import { GlobalNav } from "@/components/marketing/GlobalNav";
import { PageTransitionWrapper } from "@/components/marketing/PageTransitionWrapper";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNav />
      <PageTransitionWrapper>{children}</PageTransitionWrapper>
      <Footer />
    </>
  );
}

