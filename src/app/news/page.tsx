import Link from "next/link";
import { newsArticles } from "@/lib/news-data";
import { ArrowRight, Calendar } from "lucide-react";

export default function NewsPage() {
    return (
        <div className="min-h-screen py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Crypto News</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest trends, insights, and analysis from the world of digital finance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {newsArticles.map((article) => (
                        <Link href={`/news/${article.id}`} key={article.id} className="group">
                            <div className="glass h-full p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl">{article.flag}</span>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="w-4 h-4" />
                                        {article.date}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {article.summary}
                                </p>

                                <div className="flex items-center text-blue-400 font-medium group-hover:gap-2 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
