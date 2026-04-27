"use client";

import Script from "next/script";
import { useEffect, useRef, type ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/connect-drotegadnp/30min";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function ensureCalendlyCss() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  document.head.appendChild(link);
}

function openCalendlyPopup() {
  ensureCalendlyCss();
  if (typeof window === "undefined") return;

  const tryOpen = (attempt = 0) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    if (attempt < 50) {
      setTimeout(() => tryOpen(attempt + 1), 100);
    }
  };
  tryOpen();
}

export function CalendlyScripts() {
  return (
    <>
      <link rel="preconnect" href="https://assets.calendly.com" />
      <Script src={CALENDLY_JS} strategy="afterInteractive" />
    </>
  );
}

interface BookAppointmentButtonProps {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}

export function BookAppointmentButton({
  className,
  children = "Book an Appointment",
  ariaLabel,
  onClick,
}: BookAppointmentButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        openCalendlyPopup();
      }}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

interface CalendlyInlineProps {
  className?: string;
  height?: number;
}

export function CalendlyInline({
  className,
  height = 700,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    ensureCalendlyCss();
    if (initializedRef.current) return;

    const init = (attempt = 0) => {
      if (!containerRef.current) return;
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        });
        initializedRef.current = true;
        return;
      }
      if (attempt < 50) {
        setTimeout(() => init(attempt + 1), 100);
      }
    };
    init();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: 320, height }}
    />
  );
}
