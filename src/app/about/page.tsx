import { Button } from "@/components/ui/Button";
import { Mail, Globe, ShieldCheck, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">CryptowithAliwaris</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Welcome to Cryptowith Aliwaris, an independent, information-based website created for people who want to better understand cryptocurrency, blockchain systems, and modern digital technologies such as Artificial Intelligence.
                        </p>
                    </div>

                    {/* Main Content Areas */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="glass p-8 rounded-3xl border border-white/5">
                            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Digital Economy & AI</h3>
                            <p className="text-gray-400 leading-relaxed">
                                The purpose of this platform is to share clear, practical, and regularly updated knowledge about the digital economy.
                                Along with cryptocurrency topics, Cryptowith Aliwaris also covers how Artificial Intelligence and modern digital tools are influencing online businesses, financial systems, and global technology trends.
                            </p>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-white/5">
                            <div className="bg-purple-500/10 p-3 rounded-xl w-fit mb-4">
                                <Globe className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Global Reach</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We publish content related to crypto news, market movements, blockchain fundamentals, and technology awareness from different regions of the world, including the USA, UK, Europe, Asia, and other emerging markets. All content is written in a simple and reader-friendly style so that both beginners and experienced users can easily follow the information.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Compliance */}
                    <div className="mb-16 glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-green-500/10 p-3 rounded-xl">
                                <ShieldCheck className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Our mission is to educate, inform, and empower our readers by delivering trustworthy content while fully complying with global advertising standards, including Google AdSense policies.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h4 className="font-semibold text-white mb-2">⚠️ Disclaimer</h4>
                            <p className="text-sm text-gray-400">
                                We place strong importance on accuracy, transparency, and content quality. The information available on this website is provided strictly for educational and informational purposes only. We do not offer financial, investment, or legal advice, and readers are encouraged to carry out their own research before making any decisions.
                            </p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-12 rounded-3xl border border-white/5">
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            For questions, feedback, or business inquiries, please contact us.
                            Thank you for visiting CryptowithAliwaris and being part of our growing community.
                        </p>

                        <a href="mailto:syedaliwaris125@gmail.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            <Mail className="w-5 h-5" />
                            syedaliwaris125@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
