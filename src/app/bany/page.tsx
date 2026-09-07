import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bany } from "@/data/products";

export const metadata = {
  title: "Бани ручной рубки — каталог | Северный Лес",
  description: "Каталог бань ручной рубки из сосны. Размеры 3×4, 5×3, 5×4, 6×6. Открытый прайс. Доставка по Беларуси.",
};

export default function BanyPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Бани</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Бани ручной рубки
          </h1>
          <p className="text-lg text-gray-600">
            Из северной сосны. Открытый прайс. Доставка по Беларуси.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-10 shadow-sm">
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="font-bold text-[#2D4A32] mb-3">Размер</div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-[#2D4A32] text-white rounded-full text-sm">Все</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">3×4</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">5×3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">5×4</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">6×6</button>
              </div>
            </div>
            <div>
              <div className="font-bold text-[#2D4A32] mb-3">Тип рубки</div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-[#2D4A32] text-white rounded-full text-sm">Все</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">Русский угол</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">Чистый угол</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">Канадская чаша</button>
              </div>
            </div>
            <div>
              <div className="font-bold text-[#2D4A32] mb-3">Опции</div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">С мансардой</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">С террасой</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2D4A32]">Под рубанок</button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {bany.map((banya) => (
            <Link
              key={banya.slug}
              href={`/bany/${banya.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`/images/${banya.slug === '3x4-kompakt' ? '02-banya-3x4-kompakt' : banya.slug === '5x3-standart' ? '03-banya-5x3-standart' : banya.slug === '5x4-semeynaya' ? '04-banya-5x4-semeynaya' : banya.slug === '6x6-premium' ? '05-banya-6x6-premium' : banya.slug === '6x6-mansarda' ? '06-banya-6x6-mansarda' : '07-banya-5x4-pod-klyuch'}.png`}
                  alt={banya.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
                {banya.hit && (
                  <span className="absolute top-4 left-4 bg-[#C17817] text-white text-xs font-bold px-3 py-1 rounded z-10">
                    Хит
                  </span>
                )}
                {banya.best && (
                  <span className="absolute top-4 left-4 bg-[#2D4A32] text-white text-xs font-bold px-3 py-1 rounded z-10">
                    Выгодно
                  </span>
                )}
                {banya.new && (
                  <span className="absolute top-4 left-4 bg-[#B87333] text-white text-xs font-bold px-3 py-1 rounded z-10">
                    Новинка
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#C17817] transition">
                  {banya.name}
                </h3>
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>📐 {banya.size}</span>
                  <span>🌲 {banya.wood}</span>
                  <span>⏱ {banya.weeks} нед.</span>
                </div>
                <div className="text-2xl font-bold text-[#2D4A32]">
                  {banya.price.toLocaleString()} р.
                  <span className="text-sm font-normal text-gray-500 ml-2">/ сруб</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
