import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Бани ручной рубки — каталог | Северный Лес",
  description:
    "Каталог бань ручной рубки из сосны. Размеры 3×4, 5×3, 5×4, 6×6. Открытый прайс. Доставка по Беларуси.",
};

export default async function BanyPage() {
  const bany = await getProducts("banya");

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Бани</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Бани ручной рубки
          </h1>
          <p className="text-lg text-gray-600">
            Из северной сосны. Открытый прайс. Доставка по Беларуси.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-16">
          {bany.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
