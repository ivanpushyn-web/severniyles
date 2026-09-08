import type { Field } from "payload";

import { slugify } from "@/lib/slugify";

/**
 * A slug field that auto-fills from another field (default: "title") when left
 * empty, and normalises whatever the editor types.
 */
export function slugField(from = "title"): Field {
  return {
    name: "slug",
    type: "text",
    required: true,
    unique: true,
    index: true,
    label: { ru: "Ссылка (slug)", en: "Slug" },
    admin: {
      position: "sidebar",
      description: {
        ru: "Часть URL. Оставьте пустым — сгенерируется из названия.",
        en: "URL segment. Leave empty to generate from the title.",
      },
    },
    hooks: {
      beforeValidate: [
        ({ value, data }) => {
          const source = (value && String(value).trim()) || (data?.[from] as string) || "";
          return slugify(source);
        },
      ],
    },
  };
}
