import Link from "next/link";

type Props = {
  showTalkToSales?: boolean;
  showViewPricing?: boolean;
  className?: string;
};

export function AppAccessCtaRow({
  showTalkToSales = true,
  showViewPricing = false,
  className
}: Props) {
  if (!showTalkToSales && !showViewPricing) {
    return null;
  }

  return (
    <div className={className ?? "cta-row"}>
      {showTalkToSales ? (
        <Link href="/contact" className="button button-secondary link-focus">
          Talk to Sales
        </Link>
      ) : null}
      {showViewPricing ? (
        <Link href="/pricing" className="button button-secondary link-focus">
          View Pricing
        </Link>
      ) : null}
    </div>
  );
}
