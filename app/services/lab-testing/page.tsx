import type { Metadata } from "next";
import LabTestingContent from "./LabTestingContent";

export const metadata: Metadata = {
  title: "Lab & Diagnostic Testing | ARCpoint Labs of North Miami Beach | DNA, Drug Testing & More",
  description:
    "Walk-in lab testing, DNA and genetic testing, DOT drug testing, mobile health screenings, and serum tears coordination at ARCpoint Labs of North Miami Beach.",
  openGraph: {
    title: "Lab & Diagnostic Testing | ARCpoint Labs of North Miami Beach",
    description:
      "Walk-in lab testing, DNA and genetic testing, DOT drug testing, mobile health screenings at ARCpoint Labs.",
    url: "https://drotegadnp.com/services/lab-testing",
  },
  twitter: {
    title: "Lab & Diagnostic Testing | ARCpoint Labs of North Miami Beach",
    description:
      "Walk-in lab testing, DNA and genetic testing, DOT drug testing, and mobile health screenings.",
  },
  alternates: { canonical: "https://drotegadnp.com/services/lab-testing" },
};

export default function LabTestingPage() {
  return <LabTestingContent />;
}
