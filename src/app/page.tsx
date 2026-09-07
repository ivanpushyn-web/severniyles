import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bany, doma, besedki } from "@/data/products";

export default function Home() {
  const categories = [
    { name: "Бани", count: bany.length, href: "/bany", color: "bg-[#2D4A32]", icon: "🔥" },
    { name: "Дома", count: doma.length, href: "/doma", color: "bg-[#C17817]", icon: "🏠" },
    { name: "Беседки", count: besedki.length, href: "/besedki", color: "bg-[#B87333]", icon: "🌿" },
  ];

  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D4A32] to-[#1a2e1f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Из северного леса —<br />под ключ
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Бани, дома и беседки ручной рубки из сосны Витебской области. 
            Открытый прайс. Обработка под рубанок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ceny"
              className="inline-block bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Смотреть цены
            </Link>
            <Link
              href="/kontakty"
              className="inline-block border-2 border-white hover:bg-white hover:text-[#2D4A32] text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Связаться
            </Link>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="bg-[#2D4A32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl italic mb-2">«Честное дерево. Под ключ.»</p>
          <p className="opacity-80">Сущность бренда Северный Лес</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#2D4A32] mb-12">
            Каталог
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`${cat.color} text-white rounded-2xl p-8 text-center hover:scale-105 transition-transform`}
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-2">{cat.name}</h3>
                <p className="opacity-90">{cat.count} проекта</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#2D4A32] mb-12">
            Популярные бани
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bany.slice(0, 3).map((banya) => (
              <Link
                key={banya.slug}
                href={`/bany/${banya.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="h-48 bg-gradient-to-br from-[#d4a574] to-[#8b6914] flex items-center justify-center text-5xl">
                  🪵
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-[#C17817] uppercase tracking-wider mb-2">
                    {banya.category}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#C17817] transition">
                    {banya.name}
                  </h3>
                  <div className="text-2xl font-bold text-[#2D4A32] mb-4">
                    {banya.price.toLocaleString()} р.
                    {banya.priceKey && (
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        под ключ от {banya.priceKey.toLocaleString()} р.
                      </span>
                    )}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {banya.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#C17817]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/bany"
              className="inline-block border-2 border-[#2D4A32] text-[#2D4A32] hover:bg-[#2D4A32] hover:text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Все бани →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#2D4A32] mb-12">
            Почему ручная рубка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C17817] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🌲
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Заболонь сохранена</h3>
              <p className="text-gray-600">
                При ручной рубке мы не снимаем самый плотный слой древесины. 
                Ваш сруб простоит 50+ лет без гниения.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C17817] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🛠️
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Обработка под рубанок</h3>
              <p className="text-gray-600">
                Строганое бревно — премиальный вид. В России это опция за 500 ₽/м², 
                у нас — стандарт за 60 р./м².
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C17817] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Открытый прайс</h3>
              <p className="text-gray-600">
                Никаких «договорных» цен. Все цены на сайте, 
                никаких сюрпризов после звонка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2D4A32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Готовы заказать сруб?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку — перезвоним в течение 15 минут, 
            ответим на вопросы и рассчитаем точную стоимость.
          </p>
          <Link
            href="/kontakty"
            className="inline-block bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Оставить заявку
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
