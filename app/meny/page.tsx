import Toastmaster from "@/components/Toastmaster";

export default function MenyPage() {
  return (
    <main className="w-full text-[#3A342D] overflow-x-hidden">
      <section className="max-w-[980px] mx-auto px-4 md:px-6 py-10 md:py-14">
        <h1 className="text-center font-serif uppercase tracking-[0.12em] text-[22px] md:text-[28px]">
          MENY
        </h1>
        <p className="max-w-[780px] mx-auto mt-6 text-center leading-relaxed font-sans">
          Detaljert meny publiseres nærmere bryllupsdagen.
          <br />
          Om du har matpreferanser eller allergier er det fint om du oppgir dette i
          svaret ditt til oss 💌
        </p>
      </section>

      <section className="mt-12 md:mt-16">
        <div className="max-w-[980px] mx-auto px-4 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="font-serif text-lg md:text-xl mb-1">Forrett</h2>
              <p className="opacity-90 font-sans">Info kommer snart</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="font-serif text-lg md:text-xl mb-1">Hovedrett</h2>
              <p className="opacity-90 font-sans">Info kommer snart</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="font-serif text-lg md:text-xl mb-1">Dessert</h2>
              <p className="opacity-90 font-sans">Info kommer snart</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-[90%] max-w-[1600px]"></div>
      </div>

      <Toastmaster/>
    </main>
  );
}