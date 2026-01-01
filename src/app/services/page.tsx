import Link from "next/link";
import { ArrowRight, BarChart3, Briefcase } from "lucide-react";
import { ReactNode } from "react";

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-6 font-outfit">Our Services</h1>
                    <p className="text-xl text-gray-400">
                        Comprehensive crypto solutions tailored for individuals and institutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Crypto Trading"
                        description="Buy and sell 200+ cryptocurrencies with deep liquidity and low fees. Advanced charting for pros."
                        icon={<BarChart3 className="w-10 h-10 text-blue-500" />}
                        href="/services/crypto-trading"
                    />
                    <ServiceCard
                        title="LinkedIn Rental"
                        description="Rent out your LinkedIn account and earn guaranteed monthly income. Safe, secure, and hassle-free."
                        icon={<Briefcase className="w-10 h-10 text-blue-500" />}
                        href="/services/linkedin-rental"
                    />

                </div>
            </div>
        </div>
    );
}

function ServiceCard({ title, description, icon, href }: { title: string, description: string, icon: ReactNode, href: string }) {
    return (
        <Link href={href} className="block group">
            <div className="h-full p-8 glass rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-gradient-to-b from-white/5 to-transparent">
                <div className="mb-6 bg-black/50 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
