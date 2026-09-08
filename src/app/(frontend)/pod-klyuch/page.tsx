import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Под ключ — Северный Лес | Бани, дома, беседки под ключ",
  description: "Строительство под ключ: фундамент, крыша, окна, двери, отделка, печь. Бани, дома, беседки ручной рубки.",
};

export default function PodKlyuchPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Под ключ</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-4">
            Строительство под ключ
          </h1>
          <p className="text-lg text-gray-600">
            Полный цикл: от фундамента до печки. Вы получаете готовое строение.
          </p>
        </div>

        {/* What's included */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/17-tseh-rubka-srub.webp"
                alt="Рубка сруба вручную: топор и рубанок на бревне"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl mb-3">Сруб</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Бревно сосны Ø22–25 см</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Ручная рубка (русский/чистый угол)</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Мох в венцах</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Обработка под рубанок</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/19-sborka-srub-kran.webp"
                alt="Сборка сруба краном на фундаменте"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl mb-3">Строительство</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Фундамент (ленточный/свайный)</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Сборка сруба</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Крыша (металлочерепица)</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Окна, двери</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/20-interer-parnaya.webp"
                alt="Парная из строганого бревна с дровяной печью"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl mb-3">Отделка</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Печь (баня) / отопление (дом)</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Электрика</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Сантехника (дом)</li>
                <li className="flex items-center gap-2"><span className="text-[#C17817]">✓</span> Чистовая отделка</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#2D4A32] mb-8 text-center">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Заявка", desc: "Звонок или заявка на сайте" },
              { step: "2", title: "Проект", desc: "Смета и проект бесплатно" },
              { step: "3", title: "Рубка", desc: "2–6 недель в цеху" },
              { step: "4", title: "Доставка", desc: "Разгрузка краном" },
              { step: "5", title: "Сборка", desc: "Сборка на участке" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#2D4A32] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kontakty"
            className="inline-block bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-4 px-12 rounded-lg transition text-lg"
          >
            Получить расчёт под ключ
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
