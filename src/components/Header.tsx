import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#2D4A32] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C17817] rounded-full flex items-center justify-center text-white font-bold text-lg font-serif">
              СЛ
            </div>
            <div className="text-white">
              <div className="font-serif font-bold text-xl leading-tight">Северный Лес</div>
              <div className="text-xs opacity-80">Бани · Дома · Беседки</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/bany" className="text-white hover:text-[#C17817] transition font-medium">
              Бани
            </Link>
            <Link href="/doma" className="text-white hover:text-[#C17817] transition font-medium">
              Дома
            </Link>
            <Link href="/besedki" className="text-white hover:text-[#C17817] transition font-medium">
              Беседки
            </Link>
            <Link href="/ceny" className="text-white hover:text-[#C17817] transition font-medium">
              Цены
            </Link>
            <Link href="/stati" className="text-white hover:text-[#C17817] transition font-medium">
              Статьи
            </Link>
            <Link href="/kontakty" className="text-white hover:text-[#C17817] transition font-medium">
              Контакты
            </Link>
          </nav>

          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none text-white cursor-pointer p-3 -mr-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                <Link href="/bany" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium border-b border-gray-100">Бани</Link>
                <Link href="/doma" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium border-b border-gray-100">Дома</Link>
                <Link href="/besedki" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium border-b border-gray-100">Беседки</Link>
                <Link href="/ceny" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium border-b border-gray-100">Цены</Link>
                <Link href="/stati" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium border-b border-gray-100">Статьи</Link>
                <Link href="/kontakty" className="block px-4 py-3 text-[#36454F] hover:bg-[#F5F5DC] text-base font-medium">Контакты</Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
