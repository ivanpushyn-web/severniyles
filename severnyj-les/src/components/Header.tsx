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
            <Link href="/kontakty" className="text-white hover:text-[#C17817] transition font-medium">
              Контакты
            </Link>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="list-none text-white cursor-pointer p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
        <Link href="/bany" className="block px-4 py-2 text-[#36454F] hover:bg-[#F5F5DC]">Бани</Link>
        <Link href="/doma" className="block px-4 py-2 text-[#36454F] hover:bg-[#F5F5DC]">Дома</Link>
        <Link href="/besedki" className="block px-4 py-2 text-[#36454F] hover:bg-[#F5F5DC]">Беседки</Link>
        <Link href="/ceny" className="block px-4 py-2 text-[#36454F] hover:bg-[#F5F5DC]">Цены</Link>
        <Link href="/kontakty" className="block px-4 py-2 text-[#36454F] hover:bg-[#F5F5DC]">Контакты</Link>
      </div>
    </details>
  );
}
