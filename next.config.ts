import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  // Добавляем trailingSlash для корректных ссылок
  trailingSlash: true,
  // Указываем базовый путь если нужно
  // basePath: "",
  // assetPrefix: "",
};

export default nextConfig;
