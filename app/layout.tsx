import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georges Metri | Resume",
  description: "Digital resume with a resume-only chat assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-zinc-50 text-zinc-900"
      >
        {children}
      </body>
    </html>
  );
}
