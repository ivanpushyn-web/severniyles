import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "О нас — Северный Лес | Бани, дома, беседки ручной рубки",
  description: "Производство срубов ручной рубки в Витебске. Собственный цех, опытные плотники, открытый прайс.",
};

export default function ONasPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">О нас</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            О нас
          </h1>
          <p className="text-lg text-gray-600">
            Производство срубов ручной рубки в Витебске
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-6">
              Честное дерево
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                «Северный Лес» — это молодое производство срубов ручной рубки 
                из Витебска. Мы начали в 2026 году, потому что видели проблему: 
                на рынке либо дорогие оцилиндрованные дома из России, либо 
                «деды» без гарантий и сроков.
              </p>
              <p>
                Мы верим, что баня и дом должны строиться по-честному: 
                без скрытых доплат, без «договорных» цен, без экономии 
                на материале.
              </p>
              <p>
                Наш слоган — «Из северного леса — под ключ». Это значит: 
                мы берём сосну Витебской области (северная древесина плотнее 
                и долговечнее) и делаем из неё готовое строение.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#d4a574] to-[#8b6914] rounded-2xl flex items-center justify-center text-9xl">
            🌲
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-8 text-center">
            Наши принципы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D4A32] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white">
                💰
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Открытый прайс</h3>
              <p className="text-gray-600">
                Все цены на сайте. Никаких «по запросу» и сюрпризов после звонка.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C17817] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white">
                🛠️
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Ручная работа</h3>
              <p className="text-gray-600">
                Каждое бревно обрабатывается вручную. Обработка под рубанок — стандарт, не опция.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B87333] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white">
                🤝
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Как соседу</h3>
              <p className="text-gray-600">
                Мы не продавцы, а плотники. Расскажем честно, даже если вы купите не у нас.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kontakty"
            className="inline-block bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-4 px-12 rounded-lg transition text-lg"
          >
            Связаться с нами
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
