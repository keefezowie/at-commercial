import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Props = {
  showTalkToSales?: boolean;
  className?: string;
  loginLabel?: string;
};

export function AppAccessCtaRow({
  showTalkToSales = false,
  className,
  loginLabel = "Login"
}: Props) {
  return (
    <div className={className ?? "cta-row"}>
      <a href={siteConfig.appUrl} className="button button-primary link-focus">
        Get Started
      </a>
      <a
        href={`${siteConfig.appUrl}/login`}
        target="_self"
        rel="noreferrer"
        className="button button-secondary link-focus"
      >
        {loginLabel}
      </a>
      {showTalkToSales ? (
        <Link href="/contact" className="button button-secondary link-focus">
          Talk to Sales
        </Link>
      ) : null}
    </div>
  );
}
