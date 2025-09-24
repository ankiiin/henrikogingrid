import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Henrik & Ingrid – Bryllup",
  description:
    "Velkommen til Henrik & Ingrid sitt bryllup – her finner du program, kleskode, overnatting, transport og ønskeliste.",
  openGraph: {
    title: "Henrik & Ingrid – Bryllup",
    description:
      "Velkommen til Henrik & Ingrid sitt bryllup – vi gleder oss til å feire med dere!",
    type: "website",
    images: ["/images/forlovelsesbilde.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className="font-sans bg-[#CDD7BE] text-center text-[#6B5843] overflow-x-hidden">
        <header className="w-full">
          <div className="max-w-[980px] mx-auto px-4 flex items-center justify-between h-16">
            <button
              id="menuBtn"
              aria-controls="mobileNav"
              aria-expanded="false"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#3A342D]"
            >
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
          <div className="hidden lg:block max-w-[980px] mx-auto px-4">
            <div className="h-[1px] bg-[#A78D71]/70"></div>
          </div>
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
        <main>{children}</main>
        <footer className="bg-[#CDD7BE] w-full border-t border-[#A78D71]/70 py-8 text-center mt-12">
          <p className="text-sm md:text-base text-[#3A342D]">
            © 2026 H&I – Vi gleder oss til å feire med dere!
          </p>
          <p className="text-xs md:text-sm text-[#6b6b6b]">
            Nettsiden er bygget av{" "}
            <a
              href="https://ankiiin.netlify.app/"
              target="_blank"
              className="underline hover:text-black"
            >
              Anniken Hammerstad
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}