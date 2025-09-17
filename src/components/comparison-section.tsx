"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Fee Structure",
      traditional: "5% - 10% or more",
      pretge: "0.5% - 1% (Up to 10x cheaper)",
      traditionalIcon: <X className="h-5 w-5 text-red-500" />,
      pretgeIcon: <Check className="h-5 w-5 text-green-500" />,
    },
    {
      feature: "How it works",
      traditional: "Manual middleman or P2P deals",
      pretge: "Automated Escrow Smart Contract",
      traditionalIcon: <X className="h-5 w-5 text-red-500" />,
      pretgeIcon: <Check className="h-5 w-5 text-green-500" />,
    },
    {
      feature: "Performance",
      traditional: "Slow, requires manual confirmation",
      pretge: "Instant matching & settlement",
      traditionalIcon: <X className="h-5 w-5 text-red-500" />,
      pretgeIcon: <Check className="h-5 w-5 text-green-500" />,
    },
    {
      feature: "Seller Customization",
      traditional: "Basic listing forms",
      pretge: "Full Storefront Control",
      traditionalIcon: <X className="h-5 w-5 text-red-500" />,
      pretgeIcon: <Check className="h-5 w-5 text-green-500" />,
    },
    {
      feature: "Buyer Experience",
      traditional: "Clunky interface, manual tracking",
      pretge: "1-Click Buy & Portfolio Management",
      traditionalIcon: <X className="h-5 w-5 text-red-500" />,
      pretgeIcon: <Check className="h-5 w-5 text-green-500" />,
    },
  ];

  return (
    <section
      id="comparison"
      className="relative overflow-hidden py-12 sm:py-24 md:py-32"
    >
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>⚡</span>
            <span className="text-sm">Comparison</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why choose{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            pre-tge?
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Traditional Platforms */}
            <motion.div
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  Traditional P2P Platforms
                </h3>
                <p className="text-sm text-muted-foreground">
                  Manual OTC platforms
                </p>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {item.traditionalIcon}
                    <div>
                      <p className="font-medium text-sm">{item.feature}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.traditional}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* VS Divider */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 rounded-full p-4 border border-primary/30">
                <span className="text-2xl font-bold text-primary">VS</span>
              </div>
            </motion.div>

            {/* pre-tge Platform */}
            <motion.div
              className="from-primary/20 to-primary/5 rounded-2xl border border-primary/30 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(231,138,83,0.3)_inset] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg text-xs font-medium">
                RECOMMENDED
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  pre-tge Platform
                </h3>
                <p className="text-sm text-muted-foreground">
                  Next-generation trading
                </p>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {item.pretgeIcon}
                    <div>
                      <p className="font-medium text-sm">{item.feature}</p>
                      <p className="text-sm text-primary font-medium">
                        {item.pretge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
