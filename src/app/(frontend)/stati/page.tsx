import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticles, formatDate } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Статьи о банях и срубах | Северный Лес",
  description:
    "Полезные статьи о ручной рубке, выборе бани, технологиях строительства. Советы от мастеров Северного Леса.",
};

export default async function StatiPage() {
  const articles = await getArticles();

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Статьи</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Статьи
          </h1>
          <p className="text-lg text-gray-600">
            Полезные материалы о банях, срубах и технологиях ручной рубки.
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-gray-500">Статьи скоро появятся.</p>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
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

                <Link href={`/stati/${article.slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D4A32] mb-3 hover:text-[#C17817] transition">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <Link
                  href={`/stati/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#C17817] font-medium hover:gap-3 transition-all"
                >
                  Читать далее
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-[#2D4A32] text-white rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
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
      </main>

      <Footer />
    </>
  );
}
