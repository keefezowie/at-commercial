"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeMode = "dark" | "light";

const storageKey = "transora-theme";

function resolveSystemTheme(): ThemeMode {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const initialTheme = saved === "light" || saved === "dark" ? saved : resolveSystemTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme);
    window.localStorage.setItem(storageKey, theme);
  }, [mounted, theme]);

  const nextTheme = useMemo<ThemeMode>(() => (theme === "dark" ? "light" : "dark"), [theme]);
  const label = nextTheme === "light" ? "Switch to light mode" : "Switch to dark mode";

  const toggle = () => {
    const next = nextTheme;
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        applyTheme(next);
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="theme-toggle link-focus"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <svg key="sun" className="theme-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <path
            d="M12 4.5V2m0 20v-2.5M6.7 6.7 4.9 4.9m14.2 14.2-1.8-1.8M4.5 12H2m20 0h-2.5M6.7 17.3l-1.8 1.8m14.2-14.2-1.8 1.8M12 16.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg key="moon" className="theme-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <path
            d="M21 14.6A9 9 0 1 1 9.4 3a7.1 7.1 0 0 0 11.6 11.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
