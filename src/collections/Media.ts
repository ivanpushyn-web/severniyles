import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: { ru: "Изображение", en: "Media" },
    plural: { ru: "Медиа", en: "Media" },
  },
  access: {
    read: () => true,
  },
  admin: {
    group: { ru: "Система", en: "System" },
  },
  upload: {
    staticDir: process.env.MEDIA_DIR || "media",
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 400 },
      { name: "card", width: 900 },
      { name: "hero", width: 1600 },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: { ru: "Alt-текст (для SEO)", en: "Alt text" },
    },
  ],
};
