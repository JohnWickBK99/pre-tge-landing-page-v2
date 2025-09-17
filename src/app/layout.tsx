import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../assets/fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = {
  title: "pre-tge - Next-Generation Pre-Market Token Trading",
  description:
    "The next-generation platform for secure and efficient pre-TGE trading. Trade tokens before they go live with automated escrow smart contracts.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${suisseIntl.variable}`}>
      <body className="dark font-sans">{children}</body>
    </html>
  );
}
