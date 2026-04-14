import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDD Profiler\u2122 \u2014 Automated Enhanced Due Diligence",
  description:
    "AI-powered BSA/AML compliance automation. Risk score every customer, generate analyst-grade EDD reports, and flag suspicious activity in minutes.",
  openGraph: {
    title: "EDD Profiler\u2122 \u2014 Automated Enhanced Due Diligence",
    description:
      "Risk score every customer. Generate analyst-grade EDD reports. Flag suspicious activity. All in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-gray-900 antialiased">{children}</body>
    </html>
  );
}
