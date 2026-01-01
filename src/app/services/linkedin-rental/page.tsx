"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

type AccountType = "fresh" | "aged" | "premium";

const pricing = {
    fresh: { base: 15, name: "Fresh Account" },
    aged: { base: 35, name: "1+ Year Old" },
    premium: { base: 60, name: "Sales Nav Premium" },
};

export default function LinkedinRentalPage() {
    const [accountType, setAccountType] = useState<AccountType>("aged");
    const [duration, setDuration] = useState(1);

    const basePrice = pricing[accountType].base;
    let discount = 0;
    if (duration >= 3) discount = 0.10;
    if (duration >= 6) discount = 0.20;

    const totalPrice = (basePrice * duration * (1 - discount)).toFixed(2);

    return (
        <div className="min-h-screen py-20 relative overflow-hidden bg-black text-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6 text-blue-400 font-semibold tracking-wider text-sm uppercase">
                        <span className="w-8 h-[2px] bg-blue-400"></span>
                        Professional Networking
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 font-outfit leading-tight">
                        Rent Verified <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">LinkedIn Accounts.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Scale your outreach instantly with our high-quality, verified LinkedIn accounts. Perfect for recruitment, sales, and marketing campaigns.
                    </p>

                    <div className="space-y-6 mb-10">
                        {["Phone Verified (PVA)", "Cookie Replacement Guarantee", "24/7 Support", "Instant Delivery"].map((item) => (
                            <div key={item} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Rental Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-2xl relative bg-white/5 backdrop-blur-xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-[2rem] pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Users className="text-blue-400" /> Rental Calculator
                            </h3>

                            <div className="space-y-6">
                                {/* Account Type Selection */}
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Account Type</label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {(Object.keys(pricing) as AccountType[]).map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setAccountType(type)}
                                                className={`p-4 rounded-xl border text-left transition-all ${accountType === type
                                                        ? "bg-blue-600/20 border-blue-500 text-white"
                                                        : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="font-semibold">{pricing[type].name}</span>
                                                    <span className="text-blue-400">${pricing[type].base}/mo</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Duration Selection */}
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Duration</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[1, 3, 6].map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => setDuration(m)}
                                                className={`py-2 rounded-lg border transition-all ${duration === m
                                                        ? "bg-blue-600 border-blue-500 text-white"
                                                        : "bg-black/40 border-white/10 text-gray-400"
                                                    }`}
                                            >
                                                {m} Mo
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Total Price */}
                                <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400">Total Price</span>
                                        {discount > 0 && (
                                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                                {discount * 100}% OFF
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-4xl font-bold text-white">
                                        ${totalPrice}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        {duration} month{duration > 1 ? 's' : ''} rental
                                    </div>
                                </div>

                                <Button className="w-full text-lg h-12 bg-blue-600 hover:bg-blue-500">
                                    Rent Account Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
