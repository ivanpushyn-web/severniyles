import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticle, getAllSlugs } from "@/data/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  
  if (!article) {
    return { title: "Статья не найдена | Северный Лес" };
  }

  return {
    title: `${article.title} | Северный Лес`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  // Простой рендер markdown-подобного контента
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      // Заголовки
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="font-serif text-xl font-bold text-[#2D4A32] mt-8 mb-4">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-serif text-2xl sm:text-3xl font-bold text-[#2D4A32] mt-10 mb-6">
            {block.replace("## ", "")}
          </h2>
        );
      }
      
      // Таблицы
      if (block.startsWith("|")) {
        const rows = block.split("\n").filter((r) => r.trim() && !r.trim().match(/^\|[\s\-|:]+\|$/));
        const headers = rows[0]?.split("|").map((c) => c.trim()).filter(Boolean) || [];
        const bodyRows = rows.slice(1);
        
        return (
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2D4A32] text-white">
                  {headers.map((h, j) => (
                    <th key={j} className="px-4 py-3 text-left font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, j) => {
                  const cells = row.split("|").map((c) => c.trim()).filter(Boolean);
                  return (
                    <tr key={j} className={j % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {cells.map((cell, k) => (
                        <td key={k} className="px-4 py-3 border-t border-gray-200">{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }

      // Списки
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }

      // Нумерованные списки
      if (block.match(/^\d\./)) {
        const items = block.split("\n").filter((l) => l.match(/^\d\./));
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, j) => (
              <li key={j}>{item.replace(/^\d\.\s*/, "")}</li>
            ))}
          </ol>
        );
      }

      // Жирный текст и курсив
      const processed = block
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#2D4A32]">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

      return (
        <p
          key={i}
          className="text-gray-700 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    });
  };

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
            <span className="bg-[#F5F5DC] text-[#2D4A32] px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} чтения</span>
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
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>

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
