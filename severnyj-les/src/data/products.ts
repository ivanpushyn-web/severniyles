export interface Product {
  slug: string;
  name: string;
  size: string;
  price: number;
  priceKey?: number;
  type: "banya" | "dom" | "besedka";
  category: string;
  wood: string;
  diameter: string;
  corner: string;
  weeks: number;
  features: string[];
  description: string;
  hit?: boolean;
  best?: boolean;
  new?: boolean;
}

export const bany: Product[] = [
  {
    slug: "3x4-kompakt",
    name: "Баня 3×4 «Компакт»",
    size: "3×4 м",
    price: 5800,
    priceKey: 12000,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол или чистый",
    weeks: 2,
    features: ["Сосна Ø22–25 см", "Русский угол или чистый", "Мох в венцах", "Фундамент + крыша"],
    description: "Компактная баня для небольшого участка. Идеальна для дачи или как первая баня.",
    hit: true,
  },
  {
    slug: "5x3-standart",
    name: "Баня 5×3 «Стандарт»",
    size: "5×3 м",
    price: 6500,
    priceKey: 13500,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол",
    weeks: 2.5,
    features: ["Пятистенок", "Предбанник", "Двери и окно", "Мох в венцах"],
    description: "Классический размер бани с предбанником. Оптимальное соотношение цены и комфорта.",
    hit: false,
  },
  {
    slug: "5x4-semeynaya",
    name: "Баня 5×4 «Семейная»",
    size: "5×4 м",
    price: 7200,
    priceKey: 15000,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол",
    weeks: 3,
    features: ["Пятистенок", "Предбанник", "Двери и окно", "Обработка под рубанок"],
    description: "Просторная баня для семьи. Помещение для отдыха и парная с запасом.",
    hit: false,
    best: true,
  },
  {
    slug: "6x6-premium",
    name: "Баня 6×6 «Премиум»",
    size: "6×6 м",
    price: 9800,
    priceKey: 20000,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол или канадская чаша",
    weeks: 4,
    features: ["Два этажа", "Терраса опционально", "Гостевой дом", "Индивидуальный проект"],
    description: "Большая баня или гостевой дом. Можно жить летом, париться круглый год.",
    hit: false,
  },
  {
    slug: "6x6-mansarda",
    name: "Баня 6×6 с мансардой",
    size: "6×6 м",
    price: 12500,
    priceKey: 25000,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол",
    weeks: 5,
    features: ["Мансарда", "Два полноценных этажа", "Балкон опционально", "Под ключ"],
    description: "Двухэтажная баня с мансардой. Второй этаж — комната отдыха или спальня.",
    hit: false,
    new: true,
  },
  {
    slug: "5x4-pod-klyuch",
    name: "Баня 5×4 под ключ",
    size: "5×4 м",
    price: 15000,
    priceKey: 15000,
    type: "banya",
    category: "Баня",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол",
    weeks: 6,
    features: ["Сруб", "Крыша", "Окна и двери", "Печь", "Отделка", "Электрика"],
    description: "Полностью готовая баня. Заходи и парься — всё сделано.",
    hit: false,
  },
];

export const doma: Product[] = [
  {
    slug: "6x6-gostevoy",
    name: "Дом 6×6 «Гостевой»",
    size: "6×6 м",
    price: 15000,
    type: "dom",
    category: "Дом",
    wood: "Сосна",
    diameter: "Ø22–25 см",
    corner: "Русский угол",
    weeks: 4,
    features: ["Одноэтажный", "Кухня-гостиная", "Спальня", "Санузел"],
    description: "Компактный дом для гостей или дачи. Всё необходимое в 36 квадратах.",
  },
  {
    slug: "6x8-semeynyy",
    name: "Дом 6×8 «Семейный»",
    size: "6×8 м",
    price: 22000,
    type: "dom",
    category: "Дом",
    wood: "Сосна",
    diameter: "Ø24–26 см",
    corner: "Русский угол",
    weeks: 6,
    features: ["Полтора этажа", "2 спальни", "Кухня-гостиная", "Терраса"],
    description: "Семейный дом с террасой. Постоянное проживание или дача для большой семьи.",
  },
  {
    slug: "8x10-bolshoy",
    name: "Дом 8×10 «Большой»",
    size: "8×10 м",
    price: 35000,
    type: "dom",
    category: "Дом",
    wood: "Сосна",
    diameter: "Ø26–30 см",
    corner: "Канадская чаша",
    weeks: 8,
    features: ["Два этажа", "3–4 спальни", "Камин", "Гараж опционально"],
    description: "Большой дом для постоянного проживания. Премиальное бревно, ручная работа.",
  },
];

export const besedki: Product[] = [
  {
    slug: "3x3-malaya",
    name: "Беседка 3×3 «Малая»",
    size: "3×3 м",
    price: 4500,
    type: "besedka",
    category: "Беседка",
    wood: "Сосна",
    diameter: "Ø18–20 см",
    corner: "Русский угол",
    weeks: 1.5,
    features: ["Открытая", "Стол и лавки", "Крыша металлочерепица"],
    description: "Небольшая беседка для чаепитий. Защита от дождя и солнца.",
  },
  {
    slug: "4x4-srednyaya",
    name: "Беседка 4×4 «Средняя»",
    size: "4×4 м",
    price: 6800,
    type: "besedka",
    category: "Беседка",
    wood: "Сосна",
    diameter: "Ø20–22 см",
    corner: "Русский угол",
    weeks: 2,
    features: ["Полузакрытая", "Мангальная зона", "Остекление опционально"],
    description: "Беседка с мангальной зоной. Можно жарить шашлык в любую погоду.",
  },
];

export const allProducts = [...bany, ...doma, ...besedki];

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByType(type: string) {
  return allProducts.filter((p) => p.type === type);
}
