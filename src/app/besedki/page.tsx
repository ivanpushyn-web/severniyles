import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { besedki } from "@/data/products";

export const metadata = {
  title: "Беседки ручной рубки — каталог | Северный Лес",
  description: "Каталог беседок ручной рубки из сосны. Открытые и закрытые. Открытый прайс. Доставка по Беларуси.",
};

export default function BesedkiPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Беседки</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Беседки ручной рубки
          </h1>
          <p className="text-lg text-gray-600">
            От простых открытых до беседок с мангальной зоной. Сосна Витебской области.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {besedki.map((besedka) => (
            <Link
              key={besedka.slug}
              href={`/besedki/${besedka.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`/images/${besedka.slug === '3x3-malaya' ? '12-besedka-3x3-malaya' : '13-besedka-4x4-srednyaya'}.webp`}
                  alt={besedka.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#C17817] transition">
                  {besedka.name}
                </h3>
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>📐 {besedka.size}</span>
                  <span>🌲 {besedka.wood}</span>
                  <span>⏱ {besedka.weeks} нед.</span>
                </div>
                <div className="text-2xl font-bold text-[#2D4A32]">
                  от {besedka.price.toLocaleString()} р.
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
