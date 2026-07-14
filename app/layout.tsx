import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildPilot AI | AI Product Engineer",
  description: "Turn any software idea into a production-ready engineering plan and Codex-ready project."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
