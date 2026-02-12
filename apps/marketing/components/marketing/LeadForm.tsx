"use client";

import { useMemo, useState } from "react";
import styles from "@/components/marketing/marketing.module.css";
import type { MarketingLeadResponse } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

const fileTypeOptions = ["DOCX", "PPTX", "XLSX", "PDF", "TXT", "DWG", "DXF"];
const languageOptions = ["English", "Indonesian", "Japanese", "Korean", "German", "French", "Spanish"];

type LeadFormState = {
  email: string;
  full_name: string;
  company: string;
  role: string;
  use_case: "business_docs" | "cad_workflow" | "mixed" | "other";
  monthly_volume: string;
  file_types: string[];
  target_languages: string[];
  notes: string;
  intent: "demo" | "security_review" | "pricing_discussion";
  consent: boolean;
};

type Props = {
  sourcePage: string;
};

const initialState: LeadFormState = {
  email: "",
  full_name: "",
  company: "",
  role: "",
  use_case: "business_docs",
  monthly_volume: "",
  file_types: [],
  target_languages: [],
  notes: "",
  intent: "demo",
  consent: false
};

export function LeadForm({ sourcePage }: Props) {
  const [state, setState] = useState<LeadFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<MarketingLeadResponse | null>(null);

  const hasSelectedTypes = useMemo(() => state.file_types.length > 0, [state.file_types.length]);
  const hasSelectedLanguages = useMemo(
    () => state.target_languages.length > 0,
    [state.target_languages.length]
  );

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};
    if (!state.full_name.trim()) next.full_name = "Full name is required.";
    if (!state.email.trim() || !state.email.includes("@")) next.email = "Valid email is required.";
    if (!state.company.trim()) next.company = "Company is required.";
    if (!state.role.trim()) next.role = "Role is required.";
    if (!state.monthly_volume.trim()) next.monthly_volume = "Monthly volume is required.";
    if (!hasSelectedTypes) next.file_types = "Select at least one file type.";
    if (!hasSelectedLanguages) next.target_languages = "Select at least one target language.";
    if (!state.consent) next.consent = "Consent is required.";
    return next;
  };

  const updateStarted = () => {
    if (!started) {
      setStarted(true);
      trackEvent("demo_form_start");
    }
  };

  const toggleMultiValue = (key: "file_types" | "target_languages", value: string) => {
    updateStarted();
    setState((previous) => {
      const exists = previous[key].includes(value);
      const nextValues = exists
        ? previous[key].filter((item) => item !== value)
        : [...previous[key], value];
      return { ...previous, [key]: nextValues };
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    setResult(null);
    if (Object.keys(validation).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      const query = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      query.forEach((value, key) => {
        if (key.startsWith("utm_")) utm[key] = value;
      });

      const response = await fetch("/api/marketing/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...state,
          consent: true,
          source_page: sourcePage,
          utm
        })
      });

      const payload: MarketingLeadResponse = await response.json();
      setResult(payload);
      if (response.ok && payload.status === "accepted") {
        trackEvent("demo_form_submit_success", { route: payload.route ?? "unknown" });
        setState(initialState);
      } else {
        trackEvent("demo_form_submit_error", { reason: payload.message });
      }
    } catch (error) {
      setResult({ status: "rejected", message: "Unable to submit request right now." });
      trackEvent("demo_form_submit_error", { reason: "network_or_server_error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={`card ${styles.formWrap}`} onSubmit={onSubmit} noValidate>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label htmlFor="full_name">Full name</label>
          <input
            id="full_name"
            value={state.full_name}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({ ...previous, full_name: event.target.value }));
            }}
          />
          {errors.full_name ? <p className={styles.errorText}>{errors.full_name}</p> : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            type="email"
            value={state.email}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({ ...previous, email: event.target.value }));
            }}
          />
          {errors.email ? <p className={styles.errorText}>{errors.email}</p> : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={state.company}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({ ...previous, company: event.target.value }));
            }}
          />
          {errors.company ? <p className={styles.errorText}>{errors.company}</p> : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            value={state.role}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({ ...previous, role: event.target.value }));
            }}
          />
          {errors.role ? <p className={styles.errorText}>{errors.role}</p> : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="use_case">Primary use case</label>
          <select
            id="use_case"
            value={state.use_case}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({
                ...previous,
                use_case: event.target.value as LeadFormState["use_case"]
              }));
            }}
          >
            <option value="business_docs">Business documents</option>
            <option value="cad_workflow">CAD workflow</option>
            <option value="mixed">Mixed workload</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label htmlFor="monthly_volume">Monthly document volume</label>
          <input
            id="monthly_volume"
            placeholder="e.g. 5,000 files/month"
            value={state.monthly_volume}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({ ...previous, monthly_volume: event.target.value }));
            }}
          />
          {errors.monthly_volume ? <p className={styles.errorText}>{errors.monthly_volume}</p> : null}
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label>File types in scope</label>
          <div className={styles.chipCheckGroup}>
            {fileTypeOptions.map((option) => {
              const checked = state.file_types.includes(option);
              return (
                <label key={option} className={styles.chipCheck} data-checked={checked}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleMultiValue("file_types", option)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {errors.file_types ? <p className={styles.errorText}>{errors.file_types}</p> : null}
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label>Target languages</label>
          <div className={styles.chipCheckGroup}>
            {languageOptions.map((option) => {
              const checked = state.target_languages.includes(option);
              return (
                <label key={option} className={styles.chipCheck} data-checked={checked}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleMultiValue("target_languages", option)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {errors.target_languages ? <p className={styles.errorText}>{errors.target_languages}</p> : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="intent">Primary intent</label>
          <select
            id="intent"
            value={state.intent}
            onChange={(event) =>
              setState((previous) => ({
                ...previous,
                intent: event.target.value as LeadFormState["intent"]
              }))
            }
          >
            <option value="demo">Demo</option>
            <option value="security_review">Security review</option>
            <option value="pricing_discussion">Pricing discussion</option>
          </select>
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            rows={4}
            value={state.notes}
            onChange={(event) =>
              setState((previous) => ({ ...previous, notes: event.target.value }))
            }
          />
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label className={styles.chipCheck} data-checked={state.consent}>
            <input
              type="checkbox"
              checked={state.consent}
              onChange={(event) =>
                setState((previous) => ({ ...previous, consent: event.target.checked }))
              }
            />
            I agree to be contacted about this request.
          </label>
          {errors.consent ? <p className={styles.errorText}>{errors.consent}</p> : null}
        </div>
      </div>

      <div className="cta-row" style={{ marginTop: "1rem" }}>
        <button type="submit" className="button button-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>

      {result ? (
        <p className={result.status === "accepted" ? styles.successNote : styles.errorText}>
          {result.message}
        </p>
      ) : null}
    </form>
  );
}

