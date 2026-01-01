import Link from "next/link";
import { Bitcoin, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-1.5 rounded-lg">
                                <Bitcoin className="text-white h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-white">CryptowithAliwaris</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering the next generation of digital finance. Secure, fast, and reliable crypto services.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/services/crypto-trading" className="hover:text-blue-400 transition-colors">Crypto Trading</Link></li>
                            <li><Link href="/services/linkedin-rental" className="hover:text-blue-400 transition-colors">LinkedIn Rental</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors"><Instagram size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} CryptowithAliwaris. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
