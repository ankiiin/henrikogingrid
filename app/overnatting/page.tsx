import Toastmaster from "@/components/Toastmaster";

export default function OvernattingPage() {
  return (
    <main className="w-full text-[#3A342D] overflow-x-hidden">
      <section className="max-w-[980px] mx-auto px-4 md:px-6 py-10 md:py-14">
        <h1 className="text-center font-serif uppercase tracking-[0.12em] text-[22px] md:text-[28px]">
          OVERNATTING
        </h1>
        <p className="max-w-[780px] mx-auto mt-6 text-center leading-relaxed font-sans">
          Vi har reservert et antall rom til rabattert pris.
          <br />
          Følg{" "}
          <a
            href="https://www.clarionhotel.com/trondheim-rabattkode"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6B5843]"
          >
            denne linken
          </a>{" "}
          for å få rabatt.
        </p>
      </section>

      <section className="mt-10 mb-16 space-y-8">
        <div className="flex justify-center">
          <div className="flex items-center gap-6">
            <span className="text-[#CBD3C1] text-4xl">🏨</span>
            <div className="text-left">
              <p className="font-medium">Clarion Hotel Trondheim</p>
              <p className="text-sm opacity-80">Bookingfrist: 1. juni 2026</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-6">
            <span className="text-[#CBD3C1] text-4xl">📍</span>
            <div className="text-left">
              <p>700 m fra Nidarosdomen</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 px-4 md:px-6">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-full max-w-[980px]"></div>
      </div>

      <Toastmaster />
    </main>
  );
}
