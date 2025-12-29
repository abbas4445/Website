"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X, Bitcoin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Crypto Trading", href: "/services/crypto-trading" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Bitcoin className="text-white h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        FutureFi
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:glow"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
