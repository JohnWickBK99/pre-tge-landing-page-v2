"use client";

import type React from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ScrambleHover from "@/components/ui/scramble";
import { geist } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { forwardRef, useEffect, useRef, useState } from "react";
import { AnimatedList } from "./magicui/animated-list";
import { MorphingText } from "./magicui/morphing-text";
import { IconCloud } from "./ui/icon-cloud";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isCliHovering, setIsCliHovering] = useState(false);
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false);
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [baseColor, setBaseColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0);

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]); // #e78a53
    setGlowColor([0.906, 0.541, 0.325]); // #e78a53
    setDark(theme === "dark" ? 1 : 0);
  }, [theme]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputValue("");
    }
  };
  const images = [
    "https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png", //BNB
    "https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png", //Arbitrum
    "https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png", //Solana
    "https://i.ibb.co/BPzpZDn/ethereum-logo-png-seeklogo-527153.png", //Ethereum
    "https://s2.coinmarketcap.com/static/img/coins/128x128/27716.png",
    "https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png",
    "https://s2.coinmarketcap.com/static/img/coins/128x128/11840.png",
    "https://s2.coinmarketcap.com/static/img/coins/128x128/27657.png",
  ];

  return (
    <section
      id="features"
      className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32"
    >
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className
          )}
        >
          Features
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>Trading Features</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* Dual Platform */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden gap-2 rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight text-foreground">
                    Dual Platform System
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Separate optimized platforms for buyers and sellers with
                      tailored interfaces and features for each user type.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="absolute inset-0 opacity-40">
                      <img
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="Dual Platform System"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 121 94"
                        className="absolute"
                      >
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={
                            isCliHovering
                              ? { pathLength: 1 }
                              : { pathLength: 0 }
                          }
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 121 94"
                        className="absolute"
                      >
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={
                            isCliHovering
                              ? { pathLength: 1 }
                              : { pathLength: 0 }
                          }
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div> */}

                    {/* <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={
                        isCliHovering
                          ? { scale: [1, 1.342, 1, 1.342] }
                          : { scale: 1 }
                      }
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    /> */}

                    <div className="flex items-center justify-center h-full">
                      <MorphingText
                        texts={[
                          "Dual Platform",
                          "Role-specific",
                          "Multi-chain",
                          "Personalized",
                          "Optimized UX",
                          "Seamless interaction",
                          "Scalable",
                        ]}
                        className="text-foreground text-3xl sm:text-4xl pb-10"
                      />
                    </div>

                    {/* <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        width="350"
                        height="350"
                        viewBox="0 0 350 350"
                        className="opacity-40"
                      >
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={
                            isCliHovering
                              ? { pathLength: 1, rotate: 360 }
                              : { pathLength: 0, rotate: 0 }
                          }
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isCliHovering
                                ? Number.POSITIVE_INFINITY
                                : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div> */}
                  </div>
                </div>
              </motion.div>

              {/* Multi-Chain Support */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col gap-2 overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight text-foreground">
                    Multi-Chain Support
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Multi-chain, multi-wallet — one app for every token.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <h1 className=" mt-0 sm:mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                    <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                      <ScrambleHover
                        text="Multi-chain"
                        scrambleSpeed={1000}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent"
                        isHovering={false}
                        setIsHovering={setIsHovering}
                        characters="Ethereum,Solana,Base,BNB Smart Chain,Arbitrum"
                      />
                    </span>
                  </h1>
                  <div className="absolute top-52 z-10 flex items-center justify-center">
                    <div className="w-[400px] h-[400px]">
                      <IconCloud images={images} size={32} />
                    </div>
                  </div>
                  <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </motion.div>

              {/* Smart Escrow */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col gap-2 overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.5)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight text-foreground">
                    Smart Escrow Contracts
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <div className="">
                      Smart escrow contracts enable{" "}
                      <span className="font-semibold text-foreground">
                        secure
                      </span>
                      ,{" "}
                      <span className="font-semibold text-foreground">
                        instant
                      </span>
                      , and{" "}
                      <span className="font-semibold text-foreground">
                        dispute-free transactions.
                      </span>{" "}
                    </div>
                  </div>
                </div>
                {/* <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-lg">
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="p-4">
                        <div className="w-full min-h-[100px] bg-transparent border-none text-white text-base leading-relaxed">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-white/70">
                              Escrow Status:
                            </span>
                            <span className="text-green-400 font-medium">
                              Active
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/70">Settlement:</span>
                            <span className="text-blue-400 font-medium">
                              Automated
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-4 pb-4">
                        <div className="flex items-center gap-3">
                          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white/70"
                            >
                              <path d="M9 12l2 2 4-4"></path>
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                            </svg>
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e78a53] hover:bg-[#e78a53]/90 transition-colors text-white font-medium">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 12l2 2 4-4"></path>
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                            </svg>
                            Execute
                          </button>
                        </div>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/70"
                          >
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10,17 15,12 10,7"></polyline>
                            <line x1="15" x2="3" y1="12" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="flex items-center justify-center">
                  <AnimatedBeamDemo />
                </div>
              </motion.div>

              {/* Instant Settlement */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 20px 40px rgba(231, 138, 83, 0.3)",
                  borderColor: "rgba(231, 138, 83, 0.6)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight text-foreground">
                    Pre-TGE AI Assistant
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <div className="max-w-[460px]">
                      <span className="font-semibold text-foreground">
                        AI assistant
                      </span>{" "}
                      delivering pre-TGE analysis, token insights, market
                      research, and investment guidance for smarter decisions.
                    </div>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-lg">
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#e78a53] to-[#f4a261] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="M9 12l2 2 4-4" />
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              Pre-TGE AI
                            </div>
                          </div>
                          <div className="ml-auto">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        <div
                          ref={(el) => {
                            if (el) {
                              // Auto-scroll to bottom when new messages appear
                              const scrollToBottom = () => {
                                el.scrollTo({
                                  top: el.scrollHeight,
                                  behavior: "smooth",
                                });
                              };

                              // Use MutationObserver to detect when new messages are added
                              const observer = new MutationObserver(() => {
                                scrollToBottom();
                              });

                              observer.observe(el, {
                                childList: true,
                                subtree: true,
                              });

                              // Initial scroll to bottom
                              setTimeout(scrollToBottom, 100);

                              // Cleanup observer when component unmounts
                              return () => observer.disconnect();
                            }
                          }}
                          className="mb-4 h-[200px] overflow-y-scroll overflow-x-hidden scrollbar-hide"
                        >
                          <AnimatedList delay={2000}>
                            <div className="flex gap-3 mb-3">
                              <div className="w-6 h-6 rounded-full bg-[#e78a53] flex-shrink-0 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  AI
                                </span>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                                <p className="text-white text-sm">
                                  I can help you analyze pre-TGE tokens, provide
                                  market insights, and evaluate investment
                                  opportunities. What would you like to know?
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 justify-end mb-3">
                              <div className="bg-[#e78a53] rounded-lg p-3 max-w-[80%]">
                                <p className="text-white text-sm">
                                  Analyze $TOKEN pre-market potential
                                </p>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                <span className="text-white text-xs">U</span>
                              </div>
                            </div>

                            <div className="flex gap-3 mb-3">
                              <div className="w-6 h-6 rounded-full bg-[#e78a53] flex-shrink-0 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  AI
                                </span>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                                <p className="text-white text-sm">
                                  <strong>Token Analysis:</strong>
                                  <br />• Market Cap: $2.5M
                                  <br />• Risk Score: Medium
                                  <br />• Growth Potential: High
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 justify-end mb-3">
                              <div className="bg-[#e78a53] rounded-lg p-3 max-w-[80%]">
                                <p className="text-white text-sm">
                                  What about tokenomics?
                                </p>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                <span className="text-white text-xs">U</span>
                              </div>
                            </div>

                            <div className="flex gap-3 mb-3">
                              <div className="w-6 h-6 rounded-full bg-[#e78a53] flex-shrink-0 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  AI
                                </span>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                                <p className="text-white text-sm">
                                  <strong>Tokenomics Analysis:</strong>
                                  <br />• Total Supply: 100M
                                  <br />• Team Allocation: 15%
                                  <br />• Vesting: 24 months
                                  <br />• Utility Score: 8.5/10
                                </p>
                              </div>
                            </div>
                          </AnimatedList>
                        </div>

                        <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                          <input
                            type="text"
                            placeholder="Ask about any token..."
                            className="flex-1 bg-transparent text-white text-sm placeholder-white/50 border-none outline-none"
                          />
                          <button className="p-2 rounded-md bg-[#e78a53] hover:bg-[#e78a53]/90 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="m22 2-7 20-4-9-9-4Z" />
                              <path d="M22 2 11 13" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <motion.div
                        className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                        animate={
                          isFeature4Hovering
                            ? { scale: [1, 1.1, 1] }
                            : { scale: 1 }
                        }
                        transition={{
                          duration: 2,
                          repeat: isFeature4Hovering
                            ? Number.POSITIVE_INFINITY
                            : 0,
                        }}
                      >
                        Live Analysis
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                        animate={
                          isFeature4Hovering
                            ? { scale: [1, 1.1, 1] }
                            : { scale: 1 }
                        }
                        transition={{
                          duration: 2,
                          delay: 0.5,
                          repeat: isFeature4Hovering
                            ? Number.POSITIVE_INFINITY
                            : 0,
                        }}
                      >
                        Pre-TGE Expert
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  );
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-xl border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-4 !py-16 sm:p-6 lg:p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-full max-w-lg flex-col items-stretch justify-between gap-10 text-2xs sm:!text-xs text-center text-background">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="whitespace-nowrap">
            <div>
              Buyer
              <br />
              <span className="text-xs">Deposit Collateral</span>
            </div>
          </Circle>
          <Circle ref={div4Ref} className="whitespace-nowrap">
            <div>
              Seller
              <br />
              <span className="text-xs">Receive Collateral</span>
            </div>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          {/* <Circle ref={div2Ref}>Personalized</Circle> */}
          <div></div>
          <Circle
            ref={div3Ref}
            className="size-12 sm:size-16 rounded-full p-0 relative"
          >
            <img
              src="/logo/pre-tge-bl-sm.png"
              alt="Logo"
              className="w-4/5 h-auto"
            />
          </Circle>
          <div></div>
          {/* <Circle ref={div6Ref}>Optimized UX</Circle> */}
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <div>
              Seller
              <br />
              <span className="text-xs">Deposit Collateral</span>
            </div>
          </Circle>
          <Circle ref={div5Ref}>
            <div>
              Buyer
              <br />
              <span className="text-xs">Receive tokens</span>
            </div>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={-75}
        endYOffset={-10}
      />
      {/* <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      /> */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div3Ref}
        curvature={-75}
        endYOffset={-10}
      />
      {/* <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      /> */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div3Ref}
        curvature={75}
        endYOffset={10}
      />
    </div>
  );
}
