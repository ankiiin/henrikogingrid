import Image from "next/image";
import Toastmaster from "@/components/Toastmaster";

export default function ProgramPage() {
  return (
    <main className=" text-[#3A342D] overflow-x-hidden">
      <section className="max-w-[980px] mx-auto px-4 md:px-6 py-10 md:py-14">
        <h1 className="text-center font-serif uppercase tracking-[0.12em] text-[20px] md:text-[28px] mb-4">
          PROGRAM
        </h1>
        <p className="text-center font-sans text-sm md:text-base opacity-80 mb-10">
          Her er tidsplanen for dagen – så du vet når alt skjer ✨
        </p>
        <ul className="space-y-6 font-serif text-[16px] md:text-[20px] leading-relaxed mx-auto max-w-2xl">
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">14.00</span>
            <span>⛪ Vielse i Nidarosdomen – en høytidelig start på dagen</span>
          </li>
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">15.30</span>
            <span>
              🥂 Velkomstdrink på Bryggerekka – tid for å mingle og feire
            </span>
          </li>
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">17.00</span>
            <span>🍽️ Middag og taler – gode ord og god mat</span>
          </li>
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">20.00</span>
            <span>☕ Kaffe og kake – en søt pause i festen</span>
          </li>
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">21.00</span>
            <span>💃 Brudevals og dans – vi håper alle blir med på gulvet</span>
          </li>
          <li className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
            <span className="font-semibold">00.00</span>
            <span>
              🌙 Nattmat serveres – fyll på energi før kvelden rundes av
            </span>
          </li>
        </ul>
      </section>
      <div className="mt-10 mb-10">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-[90%] max-w-[1600px]"></div>
      </div>
      <Toastmaster/>
    </main>
  );
}
