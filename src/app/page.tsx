"use client";
import { Background } from "@/components/background";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";
import Features from "@/components/features";
import { Header } from "@/components/header";
import Hero from "@/components/home/hero";
import { LiveTokensTicker } from "@/components/live-tokens-ticker";
import { NewReleasePromo } from "@/components/new-release-promo";
import { StickyFooter } from "@/components/sticky-footer";
import { TestimonialsSection } from "@/components/testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  const handleMobileNavClick = (elementId: string) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120; // Account for sticky header height + margin
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      <Background />

      <Header onMobileNavClick={handleMobileNavClick} />

      {/* Live Tokens Ticker */}
      <LiveTokensTicker />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      <div id="comparison">
        <ComparisonSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  );
}
