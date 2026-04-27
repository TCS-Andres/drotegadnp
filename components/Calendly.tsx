"use client";

import { useEffect, useState, type ReactNode } from "react";

const CALENDLY_BASE = "https://calendly.com/connect-drotegadnp/30min";

const buildEmbedUrl = (host: string, embedType: "Inline" | "PopupText") => {
  const params = new URLSearchParams({
    embed_domain: host,
    embed_type: embedType,
    hide_gdpr_banner: "1",
  });
  return `${CALENDLY_BASE}?${params.toString()}`;
};

let openModal: (() => void) | null = null;

export function openCalendlyModal() {
  if (openModal) {
    openModal();
  } else if (typeof window !== "undefined") {
    window.open(CALENDLY_BASE, "_blank", "noopener,noreferrer");
  }
}

export function CalendlyHints() {
  return (
    <>
      <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
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
        openCalendlyModal();
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
  const [host, setHost] = useState<string | null>(null);

  useEffect(() => {
    setHost(window.location.hostname);
  }, []);

  return (
    <iframe
      src={host ? buildEmbedUrl(host, "Inline") : undefined}
      title="Schedule an appointment with Dr. Otega"
      className={className}
      style={{ minWidth: 320, height, border: 0, width: "100%" }}
      loading="eager"
    />
  );
}

export function CalendlyModalRoot() {
  const [open, setOpen] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);
  const [host, setHost] = useState<string | null>(null);

  useEffect(() => {
    openModal = () => {
      setShouldMount(true);
      setOpen(true);
    };
    return () => {
      openModal = null;
    };
  }, []);

  useEffect(() => {
    setHost(window.location.hostname);

    const w = window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setShouldMount(true), {
        timeout: 4000,
      });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setShouldMount(true), 2500);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const embedUrl = host ? buildEmbedUrl(host, "PopupText") : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule an appointment"
      aria-hidden={!open}
      className="fixed inset-0 z-[100]"
      style={{
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <button
        type="button"
        aria-label="Close booking dialog"
        onClick={() => setOpen(false)}
        tabIndex={open ? 0 : -1}
        className="absolute inset-0 bg-primary/70 backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: open ? 1 : 0 }}
      />

      <div
        className="relative h-full w-full flex items-center justify-center p-3 sm:p-6 transition-opacity duration-200"
        style={{ opacity: open ? 1 : 0 }}
      >
        <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-[1000px] h-[min(90vh,820px)] shadow-2xl">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            tabIndex={open ? 0 : -1}
            className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white text-primary text-2xl leading-none flex items-center justify-center hover:bg-surface shadow-md"
          >
            &times;
          </button>
          {shouldMount && embedUrl && (
            <iframe
              src={embedUrl}
              title="Schedule an appointment with Dr. Otega"
              className="w-full h-full border-0"
              loading="eager"
            />
          )}
        </div>
      </div>
    </div>
  );
}
