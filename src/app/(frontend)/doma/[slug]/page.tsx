import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/content";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product || product.type !== "dom") {
    return { title: "Товар не найден — Северный Лес" };
  }

  return {
    title: `${product.name} — цена от ${product.price.toLocaleString("ru-RU")} р. | Северный Лес`,
    description: `${product.name}. ${product.description ?? ""} Ручная рубка, сосна. Доставка по Беларуси.`,
  };
}

export default async function DomProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product || product.type !== "dom") {
    notFound();
  }

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}
