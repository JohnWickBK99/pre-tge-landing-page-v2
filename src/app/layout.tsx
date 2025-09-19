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
  title: {
    default: "PreTGE Marketplace - Secure Pre-TGE Token Trading Platform",
    template: "%s | PreTGE Marketplace",
  },
  description:
    "Leading secure marketplace for Pre-TGE token trading with escrow protection. Buy and sell pre-launch tokens safely with guaranteed transaction security, KYC verification, and smart contract protection.",
  metadataBase: new URL("https://pretgemarket.xyz"),
  generator: "Next.js",
  applicationName: "PreTGE Marketplace",
  authors: [
    { name: "PreTGE Team", url: "https://pretgemarket.xyz" },
    { name: "PreTGE Marketplace", url: "https://seller.pretgemarket.xyz" },
  ],
  creator: "PreTGE Development Team",
  publisher: "PreTGE Marketplace Ltd",
  category: "Financial Technology",
  classification: "Cryptocurrency Trading Platform",
  keywords: [
    // Core PreTGE Keywords
    "pre-TGE token trading",
    "PreTGE marketplace",
    "secure token escrow",
    "pre-launch token exchange",
    "TGE token presale",

    // Trading & Security Keywords
    "escrow protection trading",
    "secure crypto marketplace",
    "blockchain escrow service",
    "smart contract trading",
    "KYC verified trading",
    "secure token transactions",

    // Marketplace Keywords
    "crypto token marketplace",
    "digital asset trading",
    "peer-to-peer token trading",
    "decentralized trading platform",
    "token listing platform",
    "crypto trading escrow",

    // Business Keywords
    "institutional token trading",
    "token investment platform",
    "crypto asset protection",
    "blockchain security",
    "token sale platform",
    "pre-listing token access",

    // Location/Regional Keywords
    "global token marketplace",
    "international crypto trading",
    "worldwide token exchange",
    "multi-region trading platform",

    // Technology Keywords
    "DeFi trading platform",
    "Web3 marketplace",
    "blockchain technology",
    "smart contract security",
    "crypto wallet integration",
    "multi-chain support",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo/favicon.ico", sizes: "48x48" },
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/logo/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/logo/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pretgemarket.xyz",
    siteName: "PreTGE Marketplace",
    title: "PreTGE Marketplace - Secure Pre-TGE Token Trading Platform",
    description:
      "Leading secure marketplace for Pre-TGE token trading with escrow protection. Buy and sell pre-launch tokens safely with guaranteed transaction security.",
    images: [
      {
        url: "/logo/thumnails.png",
        width: 1200,
        height: 630,
        alt: "PreTGE Marketplace - Secure Token Trading Platform",
        type: "image/png",
      },
      {
        url: "/logo/pre-tge-logo.png",
        width: 512,
        height: 512,
        alt: "PreTGE Marketplace Logo",
        type: "image/png",
      },
    ],
    emails: ["support@pretgemarket.xyz"],
    countryName: "Global",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PreTGEMarket",
    creator: "@PreTGEMarket",
    title: "PreTGE Marketplace - Secure Pre-TGE Token Trading Platform",
    description:
      "Leading secure marketplace for Pre-TGE token trading with escrow protection. Buy and sell pre-launch tokens safely.",
    images: [
      {
        url: "/logo/thumnails.png",
        alt: "PreTGE Marketplace - Secure Token Trading Platform",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://pretgemarket.xyz",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
      "zh-CN": "/zh",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
