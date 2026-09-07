import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bany, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return bany.map((banya) => ({
    slug: banya.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: "Товар не найден — Северный Лес" };
  }
  
  return {
    title: `${product.name} — цена ${product.price.toLocaleString()} р. | Северный Лес`,
    description: `${product.name}. ${product.description} Ручная рубка, сосна, мох. Доставка по Беларуси.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <Link href={`/${product.type === 'banya' ? 'bany' : product.type === 'dom' ? 'doma' : 'besedki'}`} className="hover:text-[#2D4A32]">
            {product.category}и
          </Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="bg-gradient-to-br from-[#d4a574] to-[#8b6914] rounded-2xl h-96 flex items-center justify-center text-8xl mb-4">
              🪵
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-20 flex items-center justify-center text-2xl">
                  🪵
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="text-sm font-bold text-[#C17817] uppercase tracking-wider mb-2">
              {product.category}
            </div>
            <h1 className="font-serif text-4xl font-bold text-[#2D4A32] mb-4">
              {product.name}
            </h1>
            
            <div className="text-4xl font-bold text-[#2D4A32] mb-2">
              {product.price.toLocaleString()} р.
            </div>
            {product.priceKey && product.priceKey !== product.price && (
              <div className="text-lg text-gray-600 mb-6">
                под ключ от {product.priceKey.toLocaleString()} р.
              </div>
            )}

            <p className="text-gray-700 text-lg mb-8">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4">Характеристики</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Размер</div>
                  <div className="font-bold">{product.size}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Материал</div>
                  <div className="font-bold">{product.wood}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Диаметр бревна</div>
                  <div className="font-bold">{product.diameter}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Тип рубки</div>
                  <div className="font-bold">{product.corner}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Срок изготовления</div>
                  <div className="font-bold">{product.weeks} недели</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-serif font-bold text-lg mb-4">Что входит</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#C17817] text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakty"
                className="flex-1 bg-[#C17817] hover:bg-[#a56614] text-white text-center font-bold py-4 px-8 rounded-lg transition"
              >
                Заказать
              </Link>
              <Link
                href="/kontakty"
                className="flex-1 border-2 border-[#2D4A32] text-[#2D4A32] hover:bg-[#2D4A32] hover:text-white text-center font-bold py-4 px-8 rounded-lg transition"
              >
                Задать вопрос
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-8">
            Похожие {product.category.toLowerCase()}и
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for related products */}
            <div className="bg-white rounded-xl p-6 text-center text-gray-500">
              Скоро здесь будут похожие товары
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
