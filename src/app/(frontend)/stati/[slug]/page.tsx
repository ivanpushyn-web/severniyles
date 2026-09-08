import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticle, formatDate } from "@/lib/content";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Статья не найдена | Северный Лес" };
  }

  return {
    title: `${article.metaTitle || article.title} | Северный Лес`,
    description: article.metaDescription || article.excerpt,
    robots: article.noindex ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/stati" className="hover:text-[#2D4A32]">Статьи</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">{article.title}</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
            {article.category && (
              <span className="bg-[#F5F5DC] text-[#2D4A32] px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
            )}
            {article.publishedDate && <span>{formatDate(article.publishedDate)}</span>}
            {article.readTime && (
              <>
                <span>·</span>
                <span>{article.readTime} чтения</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D4A32] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
            {article.excerpt}
          </p>

          {/* Content */}
          <RichText
            data={article.content}
            className="article-body max-w-none text-gray-700 leading-relaxed"
          />

          {/* CTA */}
          <div className="mt-12 bg-[#2D4A32] text-white rounded-xl p-6 sm:p-8 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">
              Остались вопросы?
            </h3>
            <p className="opacity-90 mb-6">
              Позвоните нам — расскажем всё о банях и подберём проект под ваш участок.
            </p>
            <Link
              href="/kontakty"
              className="inline-block bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Связаться с нами
            </Link>
          </div>
        </article>

        {/* Back to articles */}
        <div className="mt-8 text-center">
          <Link
            href="/stati"
            className="inline-flex items-center gap-2 text-[#C17817] font-medium hover:gap-3 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Все статьи
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
