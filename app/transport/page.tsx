import Toastmaster from "@/components/Toastmaster";

export default function TransportPage() {
  return (
    <main className="w-full text-[#3A342D] overflow-x-hidden">
      <section className="w-full max-w-[980px] mx-auto px-4 md:px-6 py-10 md:py-14">
        <h1 className="text-center font-serif uppercase tracking-[0.12em] text-[20px] md:text-[28px]">
          TRANSPORT / KART
        </h1>

        <p className="max-w-[780px] mx-auto mt-6 text-center leading-relaxed font-sans text-sm md:text-base">
          Her finner du informasjon om hvordan du kommer deg til vielsen og
          bryllupsfesten – enten du kjører selv, bor på hotellet eller reiser
          kollektivt. Vi håper alle kommer trygt frem og får en fin dag sammen
          med oss!
        </p>
      </section>

      <section className="w-full max-w-[980px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nidarosdomen,+Trondheim"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-full max-w-[460px] mx-auto aspect-video rounded-lg shadow-md border border-[#A78D71]/50 overflow-hidden">
              <img
                src="/images/kirken.jpg"
                alt="Kart: Nidarosdomen"
                className="w-full h-full object-cover hover:opacity-90 transition duration-200"
              />
            </div>
          </a>
          <p className="mt-3 font-serif text-base md:text-lg font-semibold">
            Nidarosdomen
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-1 font-sans">
            Ca. 10 min gange fra sentrum. Enkel tilgang med buss og taxi.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Clarion+Hotel+Trondheim"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-full max-w-[460px] mx-auto aspect-video rounded-lg shadow-md border border-[#A78D71]/50 overflow-hidden">
              <img
                src="/images/lokale.jpg"
                alt="Kart: Clarion Hotel Trondheim"
                className="w-full h-full object-cover hover:opacity-90 transition duration-200"
              />
            </div>
          </a>
          <p className="mt-3 font-serif text-base md:text-lg font-semibold">
            Clarion Hotel Trondheim
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-1 font-sans">
            Ca. 15 min gange fra Nidarosdomen. Kort vei til kollektivtransport.
          </p>
        </div>
      </section>

      <div className="mt-12 px-4 md:px-6">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-full max-w-[980px]" />
      </div>

      <Toastmaster />
    </main>
  );
}
