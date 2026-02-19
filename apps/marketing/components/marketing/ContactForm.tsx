"use client";

import { useState } from "react";
import styles from "@/components/marketing/styles/forms.module.css";
import { trackEvent } from "@/lib/analytics";

type ContactState = {
  full_name: string;
  email: string;
  company: string;
  intent: "sales" | "support" | "partnership";
  message: string;
  consent: boolean;
};

const initialState: ContactState = {
  full_name: "",
  email: "",
  company: "",
  intent: "sales",
  message: "",
  consent: false
};

export function ContactForm() {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};
    if (!state.full_name.trim()) next.full_name = "Full name is required.";
    if (!state.email.trim() || !state.email.includes("@")) next.email = "Valid email is required.";
    if (!state.message.trim()) next.message = "Message is required.";
    if (!state.consent) next.consent = "Consent is required.";
    return next;
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    const validation = validate();
    setErrors(validation);
    setMessage(null);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/marketing/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, consent: true })
      });
      const payload = (await response.json()) as { status: string; message: string };
      setMessage(payload.message);
      setSuccess(response.ok && payload.status === "accepted");
      if (response.ok) {
        trackEvent("contact_submit_success", {
          surface: "contact_page",
          page_template: "contact"
        });
        setState(initialState);
        setErrors({});
        setTouched({});
        setSubmitAttempted(false);
      } else {
        trackEvent("contact_submit_error", {
          surface: "contact_page",
          page_template: "contact",
          reason: payload.message
        });
      }
    } catch {
      setSuccess(false);
      setMessage("Unable to send inquiry right now.");
      trackEvent("contact_submit_error", {
        surface: "contact_page",
        page_template: "contact",
        reason: "network_or_server_error"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={`card ${styles.formWrap}`} onSubmit={onSubmit} noValidate>
      <p className={styles.formIntro}>
        Share your requirements and we will route the conversation to sales, support, or partnership.
      </p>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label htmlFor="contact_email">Work email</label>
          <input
            id="contact_email"
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={showError("email")}
            aria-describedby={showError("email") ? "contact-email-error" : undefined}
            value={state.email}
            onChange={(event) => {
              clearError("email");
              setState((previous) => ({ ...previous, email: event.target.value }));
            }}
            onBlur={() => {
              markTouched("email");
              setErrors(validate());
            }}
          />
          {showError("email") ? (
            <p id="contact-email-error" className={styles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact_name">Full name</label>
          <input
            id="contact_name"
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={showError("full_name")}
            aria-describedby={showError("full_name") ? "contact-name-error" : undefined}
            value={state.full_name}
            onChange={(event) => {
              clearError("full_name");
              setState((previous) => ({ ...previous, full_name: event.target.value }));
            }}
            onBlur={() => {
              markTouched("full_name");
              setErrors(validate());
            }}
          />
          {showError("full_name") ? (
            <p id="contact-name-error" className={styles.errorText}>
              {errors.full_name}
            </p>
          ) : null}
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact_company">Company</label>
          <input
            id="contact_company"
            placeholder="Acme Corporation"
            autoComplete="organization"
            value={state.company}
            onChange={(event) =>
              setState((previous) => ({ ...previous, company: event.target.value }))
            }
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact_intent">Intent</label>
          <select
            id="contact_intent"
            value={state.intent}
            onChange={(event) =>
              setState((previous) => ({
                ...previous,
                intent: event.target.value as ContactState["intent"]
              }))
            }
          >
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label htmlFor="contact_message">Message</label>
          <textarea
            id="contact_message"
            rows={5}
            placeholder="Tell us your language pairs, file formats, and timeline."
            aria-invalid={showError("message")}
            aria-describedby={showError("message") ? "contact-message-error" : undefined}
            value={state.message}
            onChange={(event) => {
              clearError("message");
              setState((previous) => ({ ...previous, message: event.target.value }));
            }}
            onBlur={() => {
              markTouched("message");
              setErrors(validate());
            }}
          />
          {showError("message") ? (
            <p id="contact-message-error" className={styles.errorText}>
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className={`${styles.formField} ${styles.formFull}`}>
          <label className={styles.chipCheck} data-checked={state.consent}>
            <input
              type="checkbox"
              aria-invalid={showError("consent")}
              aria-describedby={showError("consent") ? "contact-consent-error" : undefined}
              checked={state.consent}
              onChange={(event) => {
                markTouched("consent");
                clearError("consent");
                setState((previous) => ({ ...previous, consent: event.target.checked }));
              }}
            />
            I agree to be contacted about this inquiry.
          </label>
          {showError("consent") ? (
            <p id="contact-consent-error" className={styles.errorText}>
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="cta-row" style={{ marginTop: "1rem" }}>
        <button className="button button-primary" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>

      {message ? <p className={success ? styles.successNote : styles.errorText}>{message}</p> : null}
    </form>
  );
}

