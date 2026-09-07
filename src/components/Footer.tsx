import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#36454F] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C17817] rounded-full flex items-center justify-center text-white font-bold text-sm font-serif">
                СЛ
              </div>
              <span className="font-serif font-bold text-lg">Северный Лес</span>
            </div>
            <p className="text-gray-300 text-sm">
              Из северного леса — под ключ. Бани, дома, беседки ручной рубки из сосны Витебской области.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/bany" className="hover:text-[#C17817] transition">Бани</Link></li>
              <li><Link href="/doma" className="hover:text-[#C17817] transition">Дома</Link></li>
              <li><Link href="/besedki" className="hover:text-[#C17817] transition">Беседки</Link></li>
              <li><Link href="/pod-klyuch" className="hover:text-[#C17817] transition">Под ключ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/ceny" className="hover:text-[#C17817] transition">Цены</Link></li>
              <li><Link href="/stati" className="hover:text-[#C17817] transition">Статьи</Link></li>
              <li><Link href="/o-nas" className="hover:text-[#C17817] transition">О нас</Link></li>
              <li><Link href="/kontakty" className="hover:text-[#C17817] transition">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Витебск, Беларусь</li>
              <li>+375 (XX) XXX-XX-XX</li>
              <li>info@severnyj-les.by</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Северный Лес. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
