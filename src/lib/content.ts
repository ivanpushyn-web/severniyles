import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { getPayloadClient } from "./payload";

export type ProductType = "banya" | "dom" | "besedka";

export interface MediaDoc {
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface ArticleDoc {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  category?: string | null;
  readTime?: string | null;
  publishedDate?: string | null;
  coverImage?: MediaDoc | number | null;
  content: SerializedEditorState;
  metaTitle?: string | null;
  metaDescription?: string | null;
  noindex?: boolean | null;
}

export interface ProductDoc {
  id: number | string;
  name: string;
  slug: string;
  type: ProductType;
  category?: string | null;
  size?: string | null;
  price: number;
  priceKey?: number | null;
  wood?: string | null;
  diameter?: string | null;
  corner?: string | null;
  weeks?: number | null;
  description?: string | null;
  features?: { feature: string; id?: string }[] | null;
  photo?: MediaDoc | number | null;
  imageBase?: string | null;
  hit?: boolean | null;
  best?: boolean | null;
  isNew?: boolean | null;
  order?: number | null;
}

const FALLBACK_IMAGE = "/images/17-tseh-rubka-srub.webp";

export function mediaUrl(m?: MediaDoc | number | null): string | null {
  if (m && typeof m === "object" && m.url) return m.url;
  return null;
}

export function productImage(p: ProductDoc): string {
  return mediaUrl(p.photo) || (p.imageBase ? `/images/${p.imageBase}.webp` : FALLBACK_IMAGE);
}

export function productListPath(type: ProductType): string {
  return type === "banya" ? "/bany" : type === "dom" ? "/doma" : "/besedki";
}

export function featureList(p: ProductDoc): string[] {
  return (p.features || []).map((f) => f.feature).filter(Boolean);
}

export function formatDate(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" });
}

export async function getArticles(): Promise<ArticleDoc[]> {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "articles",
    where: { _status: { equals: "published" } },
    sort: "-publishedDate",
    depth: 1,
    limit: 200,
    overrideAccess: true,
  });
  return res.docs as unknown as ArticleDoc[];
}

export async function getArticle(slug: string): Promise<ArticleDoc | null> {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "articles",
    where: { slug: { equals: slug }, _status: { equals: "published" } },
    depth: 1,
    limit: 1,
    overrideAccess: true,
  });
  return (res.docs[0] as unknown as ArticleDoc) || null;
}

export async function getProducts(type?: ProductType): Promise<ProductDoc[]> {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "products",
    where: type ? { type: { equals: type } } : {},
    sort: "order",
    depth: 1,
    limit: 200,
    overrideAccess: true,
  });
  return res.docs as unknown as ProductDoc[];
}

export async function getProduct(slug: string): Promise<ProductDoc | null> {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "products",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
    overrideAccess: true,
  });
  return (res.docs[0] as unknown as ProductDoc) || null;
}
