import type { CollectionConfig } from "payload";

import { slugField } from "@/fields/slug";

const CATEGORY_BY_TYPE: Record<string, string> = {
  banya: "Баня",
  dom: "Дом",
  besedka: "Беседка",
};

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: { ru: "Проект", en: "Product" },
    plural: { ru: "Проекты (бани, дома, беседки)", en: "Products" },
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "price", "priceKey", "order"],
    group: { ru: "Контент", en: "Content" },
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: { ru: "Название", en: "Name" },
          admin: { width: "60%" },
        },
        {
          name: "type",
          type: "select",
          required: true,
          label: { ru: "Тип", en: "Type" },
          defaultValue: "banya",
          options: [
            { label: "Баня", value: "banya" },
            { label: "Дом", value: "dom" },
            { label: "Беседка", value: "besedka" },
          ],
          admin: { width: "40%" },
        },
      ],
    },
    slugField("name"),
    {
      name: "category",
      type: "text",
      admin: { hidden: true },
      hooks: {
        beforeChange: [({ data }) => CATEGORY_BY_TYPE[data?.type as string] || "Проект"],
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "size",
          type: "text",
          label: { ru: "Размер", en: "Size" },
          admin: { width: "34%", placeholder: "5×4 м" },
        },
        {
          name: "price",
          type: "number",
          required: true,
          min: 0,
          label: { ru: "Цена (сруб), р.", en: "Price" },
          admin: { width: "33%" },
        },
        {
          name: "priceKey",
          type: "number",
          min: 0,
          label: { ru: "Цена под ключ, р.", en: "Turnkey price" },
          admin: { width: "33%", description: { ru: "Необязательно", en: "" } },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "wood",
          type: "text",
          defaultValue: "Сосна",
          label: { ru: "Материал", en: "Wood" },
          admin: { width: "25%" },
        },
        {
          name: "diameter",
          type: "text",
          label: { ru: "Диаметр бревна", en: "Log diameter" },
          admin: { width: "25%", placeholder: "Ø22–25 см" },
        },
        {
          name: "corner",
          type: "text",
          label: { ru: "Тип рубки", en: "Corner type" },
          admin: { width: "30%" },
        },
        {
          name: "weeks",
          type: "number",
          label: { ru: "Срок, недель", en: "Weeks" },
          admin: { width: "20%" },
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      label: { ru: "Описание", en: "Description" },
    },
    {
      name: "features",
      type: "array",
      label: { ru: "Что входит", en: "Features" },
      labels: { singular: { ru: "пункт", en: "item" }, plural: { ru: "пункты", en: "items" } },
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: { ru: "Фото проекта", en: "Photo" },
      admin: {
        description: {
          ru: "Если не загружено — используется картинка из /images по полю ниже.",
          en: "",
        },
      },
    },
    {
      name: "imageBase",
      type: "text",
      label: { ru: "Имя файла в /images (без .webp)", en: "Image base name" },
      admin: {
        position: "sidebar",
        description: { ru: "Например: 04-banya-5x4-semeynaya", en: "" },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "hit",
          type: "checkbox",
          label: { ru: "Хит", en: "Hit" },
          admin: { width: "25%" },
        },
        {
          name: "best",
          type: "checkbox",
          label: { ru: "Выгодно", en: "Best value" },
          admin: { width: "25%" },
        },
        {
          name: "isNew",
          type: "checkbox",
          label: { ru: "Новинка", en: "New" },
          admin: { width: "25%" },
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
          label: { ru: "Порядок", en: "Sort order" },
          admin: { width: "25%" },
        },
      ],
    },
  ],
};
