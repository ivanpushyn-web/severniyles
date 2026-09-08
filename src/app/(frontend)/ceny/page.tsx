import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Цены — открытый прайс | Северный Лес",
  description:
    "Открытый прайс на бани, дома и беседки ручной рубки. Никаких скрытых доплат. Доставка по Беларуси.",
};

export default async function CenyPage() {
  const [bany, doma, besedki] = await Promise.all([
    getProducts("banya"),
    getProducts("dom"),
    getProducts("besedka"),
  ]);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Цены</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Открытый прайс
          </h1>
          <p className="text-lg text-gray-600">
            Никаких «договорных» цен. Всё честно и прозрачно.
          </p>
        </div>

        {/* Bany */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-6 flex items-center gap-3">
            <span className="text-3xl">🔥</span> Бани
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead className="bg-[#2D4A32] text-white">
                <tr>
                  <th className="text-left py-4 px-6 font-serif">Название</th>
                  <th className="text-left py-4 px-6 font-serif">Размер</th>
                  <th className="text-right py-4 px-6 font-serif">Сруб</th>
                  <th className="text-right py-4 px-6 font-serif">Под ключ</th>
                </tr>
              </thead>
              <tbody>
                {bany.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5DC]"}>
                    <td className="py-4 px-6">
                      <Link href={`/bany/${p.slug}`} className="hover:text-[#C17817] font-medium">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-4 px-6">{p.size}</td>
                    <td className="py-4 px-6 text-right font-bold">
                      {p.price.toLocaleString("ru-RU")} р.
                    </td>
                    <td className="py-4 px-6 text-right text-gray-600">
                      {p.priceKey ? `от ${p.priceKey.toLocaleString("ru-RU")} р.` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Doma */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-6 flex items-center gap-3">
            <span className="text-3xl">🏠</span> Дома
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead className="bg-[#C17817] text-white">
                <tr>
                  <th className="text-left py-4 px-6 font-serif">Название</th>
                  <th className="text-left py-4 px-6 font-serif">Размер</th>
                  <th className="text-right py-4 px-6 font-serif">Цена</th>
                </tr>
              </thead>
              <tbody>
                {doma.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5DC]"}>
                    <td className="py-4 px-6">
                      <Link href={`/doma/${p.slug}`} className="hover:text-[#C17817] font-medium">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-4 px-6">{p.size}</td>
                    <td className="py-4 px-6 text-right font-bold">
                      от {p.price.toLocaleString("ru-RU")} р.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Besedki */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-6 flex items-center gap-3">
            <span className="text-3xl">🌿</span> Беседки
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead className="bg-[#B87333] text-white">
                <tr>
                  <th className="text-left py-4 px-6 font-serif">Название</th>
                  <th className="text-left py-4 px-6 font-serif">Размер</th>
                  <th className="text-right py-4 px-6 font-serif">Цена</th>
                </tr>
              </thead>
              <tbody>
                {besedki.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5DC]"}>
                    <td className="py-4 px-6">
                      <Link href={`/besedki/${p.slug}`} className="hover:text-[#C17817] font-medium">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-4 px-6">{p.size}</td>
                    <td className="py-4 px-6 text-right font-bold">
                      от {p.price.toLocaleString("ru-RU")} р.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Info */}
        <div className="bg-[#2D4A32] text-white rounded-xl p-8">
          <h3 className="font-serif text-2xl font-bold mb-4">Что входит в цену</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-[#C17817]">Сруб</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Бревно сосны Ø22–25 см</li>
                <li>• Ручная рубка</li>
                <li>• Мох в венцах</li>
                <li>• Обработка под рубанок</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#C17817]">Под ключ</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Фундамент</li>
                <li>• Крыша (металлочерепица)</li>
                <li>• Окна, двери</li>
                <li>• Печь (баня) / отопление (дом)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#C17817]">Доставка</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• По Витебску — бесплатно</li>
                <li>• По Беларуси — от 200 р.</li>
                <li>• Разгрузка краном — включено</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
