import Link from "next/link";
import {
  featureList,
  productImage,
  productListPath,
  type ProductDoc,
} from "@/lib/content";

const DETAIL_IMAGES = [
  "14-detal-russkiy-ugol",
  "15-faktura-stroganaya-stena",
  "16-detal-torets-zabolon",
  "17-tseh-rubka-srub",
];

export default function ProductDetail({ product }: { product: ProductDoc }) {
  const base = productListPath(product.type);
  const listLabel =
    product.type === "banya" ? "Бани" : product.type === "dom" ? "Дома" : "Беседки";
  const exactPrice = product.type === "banya";
  const features = featureList(product);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
        <span className="mx-2">→</span>
        <Link href={base} className="hover:text-[#2D4A32]">{listLabel}</Link>
        <span className="mx-2">→</span>
        <span className="text-[#2D4A32]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="rounded-2xl overflow-hidden h-96 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={productImage(product)}
              alt={product.name}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {DETAIL_IMAGES.map((img) => (
              <div key={img} className="rounded-lg overflow-hidden h-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${img}.webp`}
                  alt="Деталь сруба"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="text-sm font-bold text-[#C17817] uppercase tracking-wider mb-2">
            {product.category}
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#2D4A32] mb-4">{product.name}</h1>

          <div className="text-4xl font-bold text-[#2D4A32] mb-2">
            {exactPrice ? "" : "от "}
            {product.price.toLocaleString("ru-RU")} р.
          </div>
          {product.priceKey && product.priceKey !== product.price && (
            <div className="text-lg text-gray-600 mb-6">
              под ключ от {product.priceKey.toLocaleString("ru-RU")} р.
            </div>
          )}

          {product.description && (
            <p className="text-gray-700 text-lg mb-8 mt-4">{product.description}</p>
          )}

          {/* Specs */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="font-serif font-bold text-lg mb-4">Характеристики</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.size && <Spec label="Размер" value={product.size} />}
              {product.wood && <Spec label="Материал" value={product.wood} />}
              {product.diameter && <Spec label="Диаметр бревна" value={product.diameter} />}
              {product.corner && <Spec label="Тип рубки" value={product.corner} />}
              {product.weeks ? (
                <Spec label="Срок изготовления" value={`${product.weeks} недели`} />
              ) : null}
            </div>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-8">
              <h3 className="font-serif font-bold text-lg mb-4">Что входит</h3>
              <ul className="space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#C17817] text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}
