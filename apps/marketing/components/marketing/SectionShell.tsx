import type { ReactNode } from "react";
import styles from "@/components/marketing/styles/sections.module.css";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  size?: "default" | "tight";
  tone?: "default" | "muted" | "accent" | "inverse";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  size = "default",
  tone = "default",
  className,
  titleClassName,
  descriptionClassName,
  children
}: SectionShellProps) {
  return (
    <div
      className={`${styles.sectionTop} ${size === "tight" ? styles.sectionTopTight : ""} ${
        className ?? ""
      }`}
      data-tone={tone}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={`section-title ${titleClassName ?? ""}`}>{title}</h2>
      {description ? (
        <p className={`section-description ${descriptionClassName ?? ""}`}>{description}</p>
      ) : null}
      {children}
    </div>
  );
}
