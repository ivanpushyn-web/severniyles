import type { CollectionConfig } from "payload";

import { slugField } from "@/fields/slug";

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: { ru: "Статья", en: "Article" },
    plural: { ru: "Статьи", en: "Articles" },
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedDate", "_status"],
    group: { ru: "Контент", en: "Content" },
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 20,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: { ru: "Заголовок", en: "Title" },
    },
    slugField("title"),
    {
      name: "publishedDate",
      type: "date",
      label: { ru: "Дата публикации", en: "Published date" },
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly", displayFormat: "dd.MM.yyyy" },
      },
    },
    {
      name: "category",
      type: "text",
      label: { ru: "Рубрика", en: "Category" },
      admin: {
        position: "sidebar",
        description: { ru: "Например: Технологии, Цены, Выбор", en: "" },
      },
    },
    {
      name: "readTime",
      type: "text",
      label: { ru: "Время чтения", en: "Read time" },
      admin: { position: "sidebar", placeholder: "5 мин" },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: { ru: "Обложка", en: "Cover image" },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: { ru: "Краткое описание (лид)", en: "Excerpt" },
      admin: {
        description: {
          ru: "1–2 предложения. Показывается в списке статей и используется как описание для поисковиков, если не задано SEO-описание.",
          en: "",
        },
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: { ru: "Текст статьи", en: "Content" },
    },
    {
      type: "collapsible",
      label: { ru: "SEO", en: "SEO" },
      admin: { initCollapsed: true },
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: { ru: "SEO Title (<title>)", en: "Meta title" },
          admin: {
            description: { ru: "Если пусто — используется заголовок статьи.", en: "" },
          },
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: { ru: "SEO Description", en: "Meta description" },
          maxLength: 320,
          admin: {
            description: { ru: "Если пусто — используется краткое описание.", en: "" },
          },
        },
        {
          name: "noindex",
          type: "checkbox",
          label: { ru: "Скрыть от поисковиков (noindex)", en: "noindex" },
          defaultValue: false,
        },
      ],
    },
  ],
};
