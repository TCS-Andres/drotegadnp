import { Phone } from "lucide-react";
import { BookAppointmentButton } from "@/components/Calendly";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex border-t border-white/10"
      role="complementary"
      aria-label="Quick actions"
    >
      <a
        href="tel:3059780288"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3.5 font-medium min-h-[48px]"
        aria-label="Call Dr. Otega at 305-978-0288"
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Call Now
      </a>
      <BookAppointmentButton className="flex-1 flex items-center justify-center bg-secondary text-primary py-3.5 font-semibold min-h-[48px]">
        Book Appointment
      </BookAppointmentButton>
    </div>
  );
}
