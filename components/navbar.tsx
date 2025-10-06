"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar med hamburger */}
      <div className="max-w-[980px] mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={() => setIsOpen(true)}
          aria-controls="mobileNav"
          aria-expanded={isOpen}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#3A342D]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop-nav */}
      <nav className="hidden lg:block py-4">
        <div className="max-w-[980px] mx-auto px-4 flex justify-center gap-10 text-[20px] tracking-[0.10em] text-[#3A342D]">
          <Link href="/">Forside</Link>
          <Link href="/program">Program</Link>
          <Link href="/meny">Meny</Link>
          <Link href="/overnatting">Overnatting</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/onskeliste">Ønskeliste</Link>
          <Link href="/annen-info">Mer</Link>
        </div>
      </nav>

      {/* Separator line */}
      <div className="hidden lg:block max-w-[980px] mx-auto px-4">
        <div className="h-[1px] bg-[#A78D71]/70"></div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        id="mobileNav"
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-xl border-r border-[#A78D71]/40 p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 text-[#3A342D]"
        >
          ✕
        </button>
        <nav className="flex flex-col gap-4 px-2 mt-16 text-[#3A342D] text-[18px] tracking-[0.10em]">
          <Link href="/" onClick={() => setIsOpen(false)}>Forside</Link>
          <Link href="/program" onClick={() => setIsOpen(false)}>Program</Link>
          <Link href="/meny" onClick={() => setIsOpen(false)}>Meny</Link>
          <Link href="/overnatting" onClick={() => setIsOpen(false)}>Overnatting</Link>
          <Link href="/transport" onClick={() => setIsOpen(false)}>Transport</Link>
          <Link href="/onskeliste" onClick={() => setIsOpen(false)}>Ønskeliste</Link>
          <Link href="/annen-info" onClick={() => setIsOpen(false)}>Mer</Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </header>
  );
}