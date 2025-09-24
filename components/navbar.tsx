import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Hamburger-ikon */}
      <div className="max-w-[980px] mx-auto px-4 flex items-center justify-between h-16">
        <button
          id="menuBtn"
          aria-controls="mobileNav"
          aria-expanded="false"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#3A342D]"
        >
          {/* Open icon */}
          <svg
            id="iconOpen"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Close icon */}
          <svg
            id="iconClose"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop navbar */}
      <nav className="hidden lg:block py-4">
        <div className="max-w-[980px] mx-auto px-4 flex justify-center gap-10 text-[20px] tracking-[0.10em] text-[#3A342D]">
          <Link href="/">Forside</Link>
          <Link href="/program">Program</Link>
          <Link href="/meny">Meny</Link>
          <Link href="/overnatting">Overnatting</Link>
          <Link href="/transport">Transport / Kart</Link>
          <Link href="/onskeliste">Ønskeliste</Link>
          <Link href="/annen-info">Mer</Link>
        </div>
      </nav>

      {/* Tynn linje */}
      <div className="hidden lg:block max-w-[980px] mx-auto px-4">
        <div className="h-[1px] bg-[#A78D71]/70"></div>
      </div>

      {/* Mobilmeny popup */}
      <div
        id="mobileNav"
        className="lg:hidden hidden fixed inset-0 bg-transparent z-50"
      >
        <div className="absolute top-6 left-6 bg-white rounded-xl border border-[#A78D71]/40 shadow-xl p-6 w-[260px]">
          <button
            id="closeMenu"
            className="absolute top-2 right-2 w-10 h-10 inline-flex items-center justify-center text-[#3A342D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-4 text-center text-[#3A342D] text-[18px] tracking-[0.10em] mt-6">
            <Link href="/">Forside</Link>
            <Link href="/program">Program</Link>
            <Link href="/meny">Meny</Link>
            <Link href="/overnatting">Overnatting</Link>
            <Link href="/transport">Transport / Kart</Link>
            <Link href="/onskeliste">Ønskeliste</Link>
            <Link href="/annen-info">Mer</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}