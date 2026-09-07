import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doma } from "@/data/products";

export const metadata = {
  title: "Дома ручной рубки — каталог | Северный Лес",
  description: "Каталог домов ручной рубки из сосны. От гостевых до больших семейных. Открытый прайс. Доставка по Беларуси.",
};

export default function DomaPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Дома</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Дома ручной рубки
          </h1>
          <p className="text-lg text-gray-600">
            От гостевого домика до большого семейного дома. Сосна Витебской области.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {doma.map((dom) => (
            <Link
              key={dom.slug}
              href={`/doma/${dom.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`/images/${dom.slug === '6x6-gostevoy' ? '09-dom-6x6-gostevoy' : dom.slug === '6x8-semeynyy' ? '10-dom-6x8-semeynyy' : '11-dom-8x10-bolshoy'}.webp`}
                  alt={dom.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#C17817] transition">
                  {dom.name}
                </h3>
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>📐 {dom.size}</span>
                  <span>🌲 {dom.wood}</span>
                  <span>⏱ {dom.weeks} нед.</span>
                </div>
                <div className="text-2xl font-bold text-[#2D4A32]">
                  от {dom.price.toLocaleString()} р.
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
