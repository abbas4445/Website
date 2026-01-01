import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 font-outfit">
                        Building the <span className="text-blue-500">financial infrastructure</span> of tomorrow.
                    </h1>

                    <div className="prose prose-invert prose-lg mb-12">
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            CryptowithAliwaris was born from a simple belief: that financial freedom should be accessible to everyone, everywhere.
                            We are a team of engineers, financial experts, and dreamers working together to bridge the gap between
                            traditional finance and the blockchain economy.
                        </p>
                        <p className="text-gray-400 mb-6">
                            Founded in 2024, we started with a secure wallet solution and have expanded into a full-scale ecosystem
                            offering trading, staking, and institutional custody. Our mission is to accelerate the world&apos;s transition
                            to digital assets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 my-20">
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
                            <p className="text-gray-400">To create a borderless financial system where value moves as freely as information.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Values</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>• Security First</li>
                                <li>• Radical Transparency</li>
                                <li>• User Obsession</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-12 rounded-3xl border border-white/5">
                        <h2 className="text-3xl font-bold mb-6">Ready to join the revolution?</h2>
                        <Button size="lg">Join CryptowithAliwaris</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
