import { Footer } from "@/components/marketing/Footer";
import { GlobalNav } from "@/components/marketing/GlobalNav";
import { MotionProvider } from "@/components/marketing/MotionProvider";
import { PageTransitionWrapper } from "@/components/marketing/PageTransitionWrapper";
import { ScrollProgressBar } from "@/components/marketing/ScrollProgressBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <ScrollProgressBar />
      <GlobalNav />
      <PageTransitionWrapper>{children}</PageTransitionWrapper>
      <Footer />
    </MotionProvider>
  );
}
