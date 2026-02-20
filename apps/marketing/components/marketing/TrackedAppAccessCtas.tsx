import Link from "next/link";
import { type CtaSurface, type PageTemplate, trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

type Props = {
  surface: CtaSurface;
  pageTemplate: PageTemplate;
  containerClassName?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  tertiaryClassName?: string;
  includeTalkToSales?: boolean;
  dataTestId?: string;
};

export function TrackedAppAccessCtas({
  surface,
  pageTemplate,
  containerClassName = "cta-row",
  primaryClassName = "button button-primary link-focus",
  secondaryClassName = "button button-secondary link-focus",
  tertiaryClassName = "button button-secondary link-focus",
  includeTalkToSales = true,
  dataTestId
}: Props) {
  return (
    <div className={containerClassName} data-testid={dataTestId}>
      <a
        href={siteConfig.appUrl}
        className={primaryClassName}
        onClick={() =>
          trackEvent("cta_primary_app_register_click", {
            surface,
            page_template: pageTemplate,
            cta_role: "primary_register"
          })
        }
      >
        Get Started
      </a>
      <a
        href={`${siteConfig.appUrl}/login`}
        target="_self"
        rel="noreferrer"
        className={secondaryClassName}
        onClick={() =>
          trackEvent("cta_secondary_app_login_click", {
            surface,
            page_template: pageTemplate,
            cta_role: "secondary_login"
          })
        }
      >
        Login
      </a>
      {includeTalkToSales ? (
        <Link
          href="/contact"
          className={tertiaryClassName}
          onClick={() =>
            trackEvent("cta_tertiary_talk_to_sales_click", {
              surface,
              page_template: pageTemplate,
              cta_role: "tertiary_sales"
            })
          }
        >
          Talk to Sales
        </Link>
      ) : null}
    </div>
  );
}
