"use client";

import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function LiveTokensTicker() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const pausedTimeRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(0); // Track last progress to prevent jerks
  const [tokens, setTokens] = useState<any[]>([]);

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
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              Live Trading Now
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {tokens.length} Active Tokens
          </Badge>
        </div>

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-8">
            {[...tokens].map((token, index) => (
              <div
                key={`${token.symbol}-${index}`}
                className="token-card flex items-center gap-3 min-w-fit bg-black/20 rounded-lg px-4 py-2 border border-white/10 hover:bg-black/30 transition-colors cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
