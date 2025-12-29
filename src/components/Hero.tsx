"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Bitcoin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-300 text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Live Crypto Trading Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-outfit">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Digital Assets</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Experience the next generation of crypto exchange. Fast, secure, and designed for professionals and beginners alike.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group">
                            Start Trading
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg">
                            View Markets
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">5M+</div>
                            <div className="text-sm text-gray-500">Users Verified</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">$50B+</div>
                            <div className="text-sm text-gray-500">Quarterly Volume</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
                            <div className="text-sm text-gray-500">Latency</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Decorative Card Stack */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
                        {/* Card 1 */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-64 h-80 glass-card rounded-3xl p-6 z-10 border-t border-l border-white/20 transform rotate-6 shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <Bitcoin className="w-10 h-10 text-orange-500" />
                                <span className="text-green-400">+12.5%</span>
                            </div>
                            <div className="text-2xl font-bold mb-2">Bitcoin</div>
                            <div className="text-gray-400 text-sm mb-8">BTC/USD</div>
                            <div className="h-16 w-full bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg relative overflow-hidden">
                                <svg className="absolute bottom-0 w-full h-full text-orange-500" preserveAspectRatio="none">
                                    <path d="M0,50 Q20,40 40,45 T80,30 T120,40 T160,20 T200,30 V60 H0 Z" fill="currentColor" opacity="0.4" />
                                    <path d="M0,50 Q20,40 40,45 T80,30 T120,40 T160,20 T200,30" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            animate={{ y: [0, -30, 0] }}
                            transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
                            className="absolute bottom-20 left-10 w-64 h-72 glass-card rounded-3xl p-6 z-20 border-t border-l border-white/20 transform -rotate-6 backdrop-blur-xl bg-black/40"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <ShieldCheck className="text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-bold">Security</div>
                                    <div className="text-xs text-gray-400">Audited & Safe</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-3/4" />
                                </div>
                                <div className="h-2 bg-white/10 rounded-full w-2/3 overflow-hidden">
                                    <div className="h-full bg-purple-500 w-1/2" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
