import Link from "next/link";
import { productImage, productListPath, type ProductDoc } from "@/lib/content";

export default function ProductCard({ product }: { product: ProductDoc }) {
  const base = productListPath(product.type);
  const exactPrice = product.type === "banya";

  return (
    <Link
      href={`${base}/${product.slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
    >
      <div className="h-40 sm:h-48 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={productImage(product)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
        {product.hit && (
          <span className="absolute top-3 left-3 bg-[#C17817] text-white text-xs font-bold px-2 sm:px-3 py-1 rounded z-10">
            Хит
          </span>
        )}
        {product.best && (
          <span className="absolute top-3 left-3 bg-[#2D4A32] text-white text-xs font-bold px-2 sm:px-3 py-1 rounded z-10">
            Выгодно
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#B87333] text-white text-xs font-bold px-2 sm:px-3 py-1 rounded z-10">
            Новинка
          </span>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 group-hover:text-[#C17817] transition">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
          {product.size && <span>📐 {product.size}</span>}
          {product.wood && <span>🌲 {product.wood}</span>}
          {product.weeks ? <span>⏱ {product.weeks} нед.</span> : null}
        </div>
        <div className="text-xl sm:text-2xl font-bold text-[#2D4A32]">
          {exactPrice ? "" : "от "}
          {product.price.toLocaleString("ru-RU")} р.
          {exactPrice && <span className="text-sm font-normal text-gray-500 ml-2">/ сруб</span>}
        </div>
      </div>
    </Link>
  );
}
