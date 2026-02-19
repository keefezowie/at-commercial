"use client";

import { useMemo, useState } from "react";
import styles from "@/components/marketing/styles/forms.module.css";
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
  const pageTemplate = sourcePage === "/demo" ? "demo" : "home";
  const [state, setState] = useState<LeadFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
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
      trackEvent("demo_form_start", {
        surface: "demo_page",
        page_template: pageTemplate
      });
    }
  };

  const markTouched = (field: string) => {
    setTouched((previous) => ({ ...previous, [field]: true }));
  };

  const clearError = (field: string) => {
    setErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const showError = (field: string) =>
    Boolean(errors[field]) && (submitAttempted || touched[field]);

  const toggleMultiValue = (key: "file_types" | "target_languages", value: string) => {
    updateStarted();
    markTouched(key);
    clearError(key);
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
    setSubmitAttempted(true);
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
        trackEvent("demo_form_submit_success", {
          surface: "demo_page",
          page_template: pageTemplate,
          route: payload.route ?? "unknown"
        });
        setState(initialState);
        setErrors({});
        setTouched({});
        setSubmitAttempted(false);
      } else {
        trackEvent("demo_form_submit_error", {
          surface: "demo_page",
          page_template: pageTemplate,
          reason: payload.message
        });
      }
    } catch (error) {
      setResult({ status: "rejected", message: "Unable to submit request right now." });
      trackEvent("demo_form_submit_error", {
        surface: "demo_page",
        page_template: pageTemplate,
        reason: "network_or_server_error"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={`card ${styles.formWrap}`} onSubmit={onSubmit} noValidate>
      <p className={styles.formIntro}>
        Start with your contact and scope details. We use this to route demo and onboarding guidance.
      </p>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={showError("email")}
            aria-describedby={showError("email") ? "lead-email-error" : undefined}
            value={state.email}
            onChange={(event) => {
              updateStarted();
              clearError("email");
              setState((previous) => ({ ...previous, email: event.target.value }));
            }}
            onBlur={() => {
              markTouched("email");
              setErrors(validate());
            }}
          />
          {showError("email") ? (
            <p id="lead-email-error" className={styles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="full_name">Full name</label>
          <input
            id="full_name"
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={showError("full_name")}
            aria-describedby={showError("full_name") ? "lead-full-name-error" : undefined}
            value={state.full_name}
            onChange={(event) => {
              updateStarted();
              clearError("full_name");
              setState((previous) => ({ ...previous, full_name: event.target.value }));
            }}
            onBlur={() => {
              markTouched("full_name");
              setErrors(validate());
            }}
          />
          {showError("full_name") ? (
            <p id="lead-full-name-error" className={styles.errorText}>
              {errors.full_name}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            placeholder="Acme Corporation"
            autoComplete="organization"
            aria-invalid={showError("company")}
            aria-describedby={showError("company") ? "lead-company-error" : undefined}
            value={state.company}
            onChange={(event) => {
              updateStarted();
              clearError("company");
              setState((previous) => ({ ...previous, company: event.target.value }));
            }}
            onBlur={() => {
              markTouched("company");
              setErrors(validate());
            }}
          />
          {showError("company") ? (
            <p id="lead-company-error" className={styles.errorText}>
              {errors.company}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            placeholder="Localization manager"
            autoComplete="organization-title"
            aria-invalid={showError("role")}
            aria-describedby={showError("role") ? "lead-role-error" : undefined}
            value={state.role}
            onChange={(event) => {
              updateStarted();
              clearError("role");
              setState((previous) => ({ ...previous, role: event.target.value }));
            }}
            onBlur={() => {
              markTouched("role");
              setErrors(validate());
            }}
          />
          {showError("role") ? (
            <p id="lead-role-error" className={styles.errorText}>
              {errors.role}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="intent">Primary intent</label>
          <select
            id="intent"
            value={state.intent}
            onChange={(event) => {
              updateStarted();
              setState((previous) => ({
                ...previous,
                intent: event.target.value as LeadFormState["intent"]
              }));
            }}
          >
            <option value="demo">Demo</option>
            <option value="security_review">Security review</option>
            <option value="pricing_discussion">Pricing discussion</option>
          </select>
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
            aria-invalid={showError("monthly_volume")}
            aria-describedby={showError("monthly_volume") ? "lead-monthly-volume-error" : undefined}
            value={state.monthly_volume}
            onChange={(event) => {
              updateStarted();
              clearError("monthly_volume");
              setState((previous) => ({ ...previous, monthly_volume: event.target.value }));
            }}
            onBlur={() => {
              markTouched("monthly_volume");
              setErrors(validate());
            }}
          />
          {showError("monthly_volume") ? (
            <p id="lead-monthly-volume-error" className={styles.errorText}>
              {errors.monthly_volume}
            </p>
          ) : null}
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
          {showError("file_types") ? <p className={styles.errorText}>{errors.file_types}</p> : null}
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
          {showError("target_languages") ? <p className={styles.errorText}>{errors.target_languages}</p> : null}
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label htmlFor="notes">Notes (optional)</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Share timeline, stakeholders, and constraints."
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
              aria-invalid={showError("consent")}
              aria-describedby={showError("consent") ? "lead-consent-error" : undefined}
              checked={state.consent}
              onChange={(event) => {
                markTouched("consent");
                clearError("consent");
                setState((previous) => ({ ...previous, consent: event.target.checked }));
              }}
            />
            I agree to be contacted about this request.
          </label>
          {showError("consent") ? (
            <p id="lead-consent-error" className={styles.errorText}>
              {errors.consent}
            </p>
          ) : null}
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

