import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
    icon: [{ url: "/logo/favicon.ico", sizes: "48x48" }],
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
        url: "/logo/pre-tge-w.svg",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PreTGE Marketplace",
    description:
      "Leading secure marketplace for Pre-TGE token trading with escrow protection",
    url: "https://pretgemarket.xyz",
    logo: {
      "@type": "ImageObject",
      url: `"https://pretgemarket.xyz/images/pre-tge-logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: ["https://x.com/PreTGEMarket"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${"https://pretgemarket.xyz"}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "PreTGE Marketplace Ltd",
      logo: {
        "@type": "ImageObject",
        url: `${"https://pretgemarket.xyz"}/logo/pre-tge-logo.png`,
      },
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "PreTGE Marketplace",
    description:
      "Secure marketplace for Pre-TGE token trading with escrow protection",
    url: "https://pretgemarket.xyz",
    logo: `${"https://pretgemarket.xyz"}/logo/pre-tge-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-PreTGE",
      contactType: "Customer Service",
      email: "support@pretgemarket.xyz",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
      addressRegion: "Worldwide",
    },
    foundingDate: "2024",
    numberOfEmployees: "10-50",
    serviceType: "Cryptocurrency Trading Platform",
  };
  return (
    <html lang="en" className={`dark ${suisseIntl.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
      </head>
      <body className="dark font-sans">
        <main>{children}</main>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        {/* Schema.org for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://pretgemarket.xyz",
              },
            ],
          })}
        </script>
      </body>
    </html>
  );
}
