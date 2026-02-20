import Link from "next/link";
import { type CtaSurface, type PageTemplate, trackEvent } from "@/lib/analytics";

type Props = {
  surface: CtaSurface;
  pageTemplate: PageTemplate;
  containerClassName?: string;
  tertiaryClassName?: string;
  includeTalkToSales?: boolean;
  dataTestId?: string;
};

export function TrackedAppAccessCtas({
  surface,
  pageTemplate,
  containerClassName = "cta-row",
  tertiaryClassName = "button button-secondary link-focus",
  includeTalkToSales = true,
  dataTestId
}: Props) {
  if (!includeTalkToSales) {
    return null;
  }

  return (
    <div className={containerClassName} data-testid={dataTestId}>
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
    </div>
  );
}
