import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Контакты — Северный Лес | Витебск, Беларусь",
  description: "Свяжитесь с нами для заказа бани, дома или беседки ручной рубки. Витебск и вся Беларусь.",
};

export default function KontaktyPage() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2D4A32]">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-[#2D4A32]">Контакты</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D4A32] mb-6">
              Контакты
            </h1>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C17817] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">Витебск, Беларусь</p>
                  <p className="text-sm text-gray-500">Работаем по всей Беларуси</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C17817] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+375 (XX) XXX-XX-XX</p>
                  <p className="text-sm text-gray-500">Ежедневно 9:00–21:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C17817] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@severnyj-les.by</p>
                  <p className="text-sm text-gray-500">Ответим в течение часа</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C17817] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Мессенджеры</h3>
                  <p className="text-gray-600">Telegram, WhatsApp, Viber</p>
                  <p className="text-sm text-gray-500">Быстрая связь 24/7</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#2D4A32] rounded-full flex items-center justify-center text-white hover:bg-[#C17817] transition">
                  VK
                </a>
                <a href="#" className="w-12 h-12 bg-[#2D4A32] rounded-full flex items-center justify-center text-white hover:bg-[#C17817] transition">
                  IG
                </a>
                <a href="#" className="w-12 h-12 bg-[#2D4A32] rounded-full flex items-center justify-center text-white hover:bg-[#C17817] transition">
                  FB
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-[#2D4A32] mb-6">
              Оставить заявку
            </h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D4A32] focus:ring-2 focus:ring-[#2D4A32]/20"
                  placeholder="Иван"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D4A32] focus:ring-2 focus:ring-[#2D4A32]/20"
                  placeholder="+375 (XX) XXX-XX-XX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Что вас интересует?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D4A32] focus:ring-2 focus:ring-[#2D4A32]/20">
                  <option>Баня</option>
                  <option>Дом</option>
                  <option>Беседка</option>
                  <option>Под ключ</option>
                  <option>Другое</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D4A32] focus:ring-2 focus:ring-[#2D4A32]/20 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#C17817] hover:bg-[#a56614] text-white font-bold py-4 px-8 rounded-lg transition"
              >
                Отправить заявку
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
