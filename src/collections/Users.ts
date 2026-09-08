import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: { ru: "Пользователь", en: "User" },
    plural: { ru: "Пользователи", en: "Users" },
  },
  auth: true,
  admin: {
    useAsTitle: "email",
    group: { ru: "Система", en: "System" },
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: { ru: "Имя", en: "Name" },
    },
  ],
};
