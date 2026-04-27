"use client";

import Script from "next/script";
import { type ReactNode } from "react";

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

function openCalendlyPopup() {
  if (typeof window === "undefined") return;

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }

  const tryOpen = (attempt = 0) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    if (attempt < 100) setTimeout(() => tryOpen(attempt + 1), 50);
  };
  tryOpen();
}

export function CalendlyScripts() {
  return (
    <>
      <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="stylesheet" href={CALENDLY_CSS} />
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
  return (
    <div
      className={`calendly-inline-widget ${className ?? ""}`.trim()}
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height }}
    />
  );
}
