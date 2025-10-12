"use client";

import { useState } from "react";
import Toastmaster from "components/Toastmaster";

const slides = [
  {
    name: "Emma J.",
    text: "Emmas energi og humor sprer seg raskt – hun sørger for at alle føler seg inkludert og velkomne.",
  },
  {
    name: "Markus L.",
    text: "Markus er kjent for sitt rolige vesen og kloke råd – en trygg støtte for både brud og brudgom.",
  },
  {
    name: "Sofie B.",
    text: "Sofie elsker å arrangere og har stålkontroll på detaljer – hun er klar for å holde festen i gang!",
  },
  {
    name: "Jonas E.",
    text: "Jonas er alltid med på en god historie eller toast – forvent både latter og varme ord fra ham.",
  },
];

export default function AnnenInfoPage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 text-[#3A342D]">
      <h1 className="text-center font-serif uppercase tracking-[0.12em] text-[22px] md:text-[28px]">
        MER INFORMASJON
      </h1>
      <p className="max-w-[780px] mx-auto mt-6 text-center leading-relaxed opacity-90 font-sans">
        Her finner du kleskode, praktiske detaljer og info om toastmaster og
        forlovere 💌
      </p>

      <div className="mt-12 px-4 md:px-6">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-full max-w-[980px]" />
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-center text-xl md:text-2xl mb-6">
          Kleskode
        </h2>
        <p className="text-center opacity-90 leading-relaxed mb-8 font-sans">
          Formell sommerantrekk 🌿 Vi ønsker en høytidelig stemning – men
          viktigst er at du føler deg komfortabel og fin!
        </p>

        <div className="bg-[#FFFFFF] border border-[#A78D71]/40 rounded-lg shadow-sm p-6 max-w-lg mx-auto">
          <h3 className="text-center font-serif font-semibold mb-4">
            🌸 Disse fargene er ekstra fine
          </h3>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-md bg-[#B9C8B4] mx-auto mb-2" />
              <p className="text-xs">Sage green</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-md bg-[#F5F3EE] mx-auto mb-2" />
              <p className="text-xs">Beige</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-md bg-[#E5B7B2] mx-auto mb-2" />
              <p className="text-xs">Pudderrosa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-md bg-[#B8A9A4] mx-auto mb-2" />
              <p className="text-xs">Dusty Mauve</p>
            </div>
          </div>
          <p className="text-center text-sm font-medium">
            Unngå helhvitt – det er forbeholdt bruden 💍
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="font-serif text-xl md:text-2xl mb-6">Praktisk info</h2>
        <p className="max-w-[780px] mx-auto leading-relaxed opacity-90 font-sans">
          Vi ønsker å samle minner fra dagen sammen med dere 💕 Last ned appen{" "}
          <strong>POV</strong> for å dele bilder og videoer. QR-koder vil være
          plassert på bordene slik at du enkelt kan laste opp i løpet av
          kvelden.
        </p>
      </section>

      <div className="mt-12">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-[90%] max-w-[1600px]" />
      </div>

      <section className="mt-16 text-center">
        <h2 className="font-serif text-xl md:text-2xl mb-10">
          Toastmaster & Forlovere
        </h2>

        <div className="relative w-full max-w-md mx-auto">
          <div className="overflow-hidden rounded-lg border border-[#A78D71]/30 shadow-md bg-[#F8F5EC] p-6">
            <h3 className="font-serif text-lg mb-4">{slides[current].name}</h3>
            <p className="text-sm md:text-base leading-relaxed font-sans opacity-90">
              {slides[current].text}
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-8">
            <button
              onClick={prevSlide}
              aria-label="Forrige"
              className="text-3xl text-[#3A342D] hover:text-[#6B5843] transition"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Neste"
              className="text-3xl text-[#3A342D] hover:text-[#6B5843] transition"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
