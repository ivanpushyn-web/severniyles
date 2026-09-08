import type { Payload } from "payload";

import { convertMarkdownToLexical, editorConfigFactory } from "@payloadcms/richtext-lexical";

import { articles as articleSeed } from "@/data/articles";
import { bany, besedki, doma } from "@/data/products";
import { IMAGE_BASE } from "./imageMap";

/**
 * One-time content seed. Safe to call on every boot: it only writes a collection
 * that is still completely empty, so editor changes are never overwritten.
 */
export async function seed(payload: Payload): Promise<void> {
  await seedArticles(payload);
  await seedProducts(payload);
}

async function seedArticles(payload: Payload): Promise<void> {
  const { totalDocs } = await payload.count({ collection: "articles" });
  if (totalDocs > 0) return;

  const editorConfig = await editorConfigFactory.default({ config: payload.config });
  payload.logger.info(`Seeding ${articleSeed.length} articles…`);

  for (const a of articleSeed) {
    await payload.create({
      collection: "articles",
      data: {
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        category: a.category,
        readTime: a.readTime,
        publishedDate: new Date(a.date).toISOString(),
        content: convertMarkdownToLexical({ editorConfig, markdown: a.content.trim() }),
        _status: "published",
      },
    });
  }
}

async function seedProducts(payload: Payload): Promise<void> {
  const { totalDocs } = await payload.count({ collection: "products" });
  if (totalDocs > 0) return;

  const all = [...bany, ...doma, ...besedki];
  payload.logger.info(`Seeding ${all.length} products…`);

  let order = 0;
  for (const p of all) {
    await payload.create({
      collection: "products",
      data: {
        name: p.name,
        slug: p.slug,
        type: p.type,
        size: p.size,
        price: p.price,
        priceKey: p.priceKey ?? undefined,
        wood: p.wood,
        diameter: p.diameter,
        corner: p.corner,
        weeks: p.weeks,
        description: p.description,
        features: p.features.map((feature) => ({ feature })),
        imageBase: IMAGE_BASE[p.slug],
        hit: Boolean(p.hit),
        best: Boolean(p.best),
        isNew: Boolean(p.new),
        order: order++,
      },
    });
  }
}
