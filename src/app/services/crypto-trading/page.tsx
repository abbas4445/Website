"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDownUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CryptoTradingPage() {
    const [amount, setAmount] = useState<string>("1000");

    const btcPrice = 64500; // Mock price
    const converted = (parseFloat(amount || "0") / btcPrice).toFixed(6);

    return (
        <div className="min-h-screen py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-2 mb-6 text-blue-400 font-semibold tracking-wider text-sm uppercase">
                        <span className="w-8 h-[2px] bg-blue-400"></span>
                        Advanced Trading
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 font-outfit leading-tight">
                        Buy & Sell Crypto <br /> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Real-Time.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Experience zero-fee trading on your first $10,000. Access deep liquidity pools and execute orders with institutional-grade latency.
                    </p>
                    <ul className="space-y-4 mb-10">
                        {["Instant Settlement", "Best Price Routing", "Bank-Level Security"].map((item) => (
                            <li key={item} className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Swap Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-[2rem] pointer-events-none" />

                        <h3 className="text-xl font-bold mb-6 flex justify-between items-center relative z-10">
                            Swap
                            <span className="text-xs font-normal bg-white/10 px-2 py-1 rounded-full text-gray-400">0.1% Slippage</span>
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {/* From */}
                            <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>You pay</span>
                                    <span>Balance: $50,230.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="bg-transparent text-3xl font-bold w-full focus:outline-none text-white appearance-none"
                                        placeholder="0"
                                    />
                                    <div className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 font-bold ml-4">
                                        <span className="w-5 h-5 bg-green-500 rounded-full"></span> USD
                                    </div>
                                </div>
                            </div>

                            {/* Switcher */}
                            <div className="flex justify-center -my-2 relative z-20">
                                <div className="bg-blue-600 p-2 rounded-xl shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <ArrowDownUp className="text-white w-5 h-5" />
                                </div>
                            </div>

                            {/* To */}
                            <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>You receive</span>
                                    <span>~ 1 BTC = $64,500</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-3xl font-bold text-blue-400">
                                        {converted}
                                    </div>
                                    <div className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 font-bold ml-4">
                                        <span className="w-5 h-5 bg-orange-500 rounded-full"></span> BTC
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-4 h-14 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0">
                                Buy Bitcoin Now
                            </Button>

                            <p className="text-center mt-4 text-xs text-gray-500">
                                By continuing, you agree to our{" "}
                                <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    Terms and Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
