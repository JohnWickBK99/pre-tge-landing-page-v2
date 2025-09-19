"use client";

import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function LiveTokensTicker() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const pausedTimeRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(0); // Track last progress to prevent jerks
  const [tokens, setTokens] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime - lastProgressRef.current * 30000;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = (elapsed / 30000) % 1; // 30 second loop
      const translateX = -progress * 100;

      element.style.transform = `translateX(${translateX}%)`;
      lastProgressRef.current = progress; // Store current progress

      if (!isHovered) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (!isHovered) {
      startTimeRef.current = undefined;
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getTokens = async () => {
    try {
      const response = await axios.get(`
https://app.pretgemarket.xyz/api/v1/tokens?statuses=active&page=1&limit=50`);
      setTokens(response.data.data);
      // Trigger animation after data is loaded
      setTimeout(() => setIsLoaded(true), 100);
    } catch (error) {
      console.log(error, "error in getTokens");
    }
  };

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/20 backdrop-blur-sm mt-6">
      <div className="container mx-auto px-4 py-3">
        <motion.div
          className="flex items-center gap-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              Live Trading Now
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {tokens.length} Active Tokens
          </Badge>
        </motion.div>

        <motion.div
          className="overflow-hidden min-h-[50px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div ref={scrollRef} className="flex gap-8">
            <AnimatePresence>
              {[...tokens, ...tokens].map((token, index) => (
                <motion.div
                  key={`${token.symbol}-${index}`}
                  className="token-card flex items-center gap-3 min-w-fit bg-black/20 rounded-lg px-4 py-2 border border-white/10 hover:bg-black/30 transition-colors cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={token?.logo || "/placeholder.svg"}
                        alt={`${token?.symbol} logo`}
                        className="w-8 h-8 rounded-full"
                      />
                      <img
                        src={token?.networks?.logo || "/placeholder.svg"}
                        alt={`${token?.networks?.name} network`}
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-black/50"
                      />
                    </div>
                    <span className="font-semibold text-white text-sm">
                      {token?.symbol}
                    </span>
                  </div>

                  {/* <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-300">{token.price}</span>
                  </div> */}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
