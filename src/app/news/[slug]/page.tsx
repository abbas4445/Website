import { newsArticles } from "@/lib/news-data";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Use proper type for PageProps in Next.js 15+ (Params is a Promise)
export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = newsArticles.find((a) => a.id === slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen py-20 bg-black">
            {/* Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Link href="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to News
                </Link>

                <div className="max-w-3xl mx-auto">
                    <div className="mb-12 text-center">
                        <div className="text-6xl mb-6 animate-fade-in">{article.flag}</div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </div>
                    </div>

                    <div
                        className="prose prose-invert prose-lg max-w-none 
                        prose-h3:text-2xl prose-h3:font-bold prose-h3:text-blue-400 prose-h3:mt-12 prose-h3:mb-6
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </div>
        </article>
    );
}

// Generate static params for all articles
export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.id,
    }));
}
