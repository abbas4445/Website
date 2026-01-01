import Hero from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Globe, Lock, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">Why Choose CryptowithAliwaris?</h2>
            <p className="text-gray-400">
              We provide the most advanced tools for crypto trading and asset management, wrapped in a beautiful interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Lightning Fast"
              description="Execute trades in milliseconds. Our high-frequency engine ensures you never miss a beat."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-green-400" />}
              title="Bank-Grade Security"
              description="Your assets are protected by MPC wallets and cold storage protocols. Sleep safe."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-400" />}
              title="Global Access"
              description="Trade from anywhere in the world. Support for 150+ countries and local currencies."
            />
          </div>

          <div className="mt-20 text-center">
            <Link href="/services">
              <Button variant="secondary" size="lg">Explor Our Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl glass hover:bg-white/5 transition-colors border border-white/5 hover:border-blue-500/30 group">
      <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
