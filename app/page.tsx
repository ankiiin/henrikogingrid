import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#CDD7BE] text-center text-[#6B5843] overflow-x-hidden">
      {/* HERO / HEADER */}
      <section className="max-w-[980px] mx-auto px-4 md:px-6 pt-16 text-center text-[#3A342D] space-y-10 md:space-y-14">
        {/* Tittel */}
        <h1 className="font-serif uppercase tracking-[0.14em] text-[20px] md:text-[30px]">
          VELKOMMEN TIL BRYLLUP
        </h1>

        {/* Bilde i oval */}
        <div className="flex justify-center">
          <div className="w-[260px] h-[380px] md:w-[480px] md:h-[640px] rounded-[9999px] overflow-hidden ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,.12)]">
            <Image
              src="/images/henrikogingridovalt.jpg"
              alt="Forlovelsesbilde av brudeparet"
              width={480}
              height={600}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Navn og info */}
        <div className="text-center leading-relaxed space-y-2">
          <div className="font-serif text-xl md:text-3xl leading-snug">
            <p>Henrik & Ingrid</p>
          </div>
          <p className="text-base md:text-lg tracking-wide">
            Nidarosdomen, Trondheim
          </p>
          <p className="text-base md:text-lg tracking-wider">24.08.2026</p>
        </div>

        {/* CTA knapp */}
        <a
          href="/rsvp"
          className="inline-block bg-[#8DB38C] border border-[#A78D71] text-white uppercase tracking-wide px-8 py-3 rounded shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#96BC95]"
        >
          Svar på invitasjon
        </a>

        {/* Delestrek */}
        <div className="mt-12">
          <div className="h-px bg-[#A78D71]/70 mx-auto w-[90%] max-w-[1600px]"></div>
        </div>
      </section>

      {/* LITT PERSONLIG INFO */}
      <section className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16 text-[#3A342D]">
        <h2 className="text-center font-serif uppercase tracking-[0.12em] text-[18px] md:text-[22px] mb-10">
          Litt personlig info
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 items-start">
          {/* Tekst */}
          <div className="order-1 lg:order-1 space-y-6 text-[15px] md:text-[16px] leading-8 text-left">
            <p>
              Henrik og Ingrid møttes sommeren 2018 på en festival i Danmark.
              Etter en hel natt med dans og latter visste de begge at dette var
              starten på noe spesielt.
            </p>
            <p>
              De første årene ble fylt av reiser, studier og mange turer med tog
              mellom Oslo og Bergen. Kjærligheten vokste på kryss og tvers av
              landet.
            </p>
            <p>
              Nå gleder de seg til å samle venner og familie for å feire
              kjærligheten – og starte neste kapittel sammen.
            </p>
            <p>
              Med kjærligheten som drivkraft og en god porsjon humor i bagasjen,
              ser de fram til å bygge et hjem fylt med varme, latter og nye
              minner.
            </p>
            <p>
              Det de ser aller mest frem til, er å kunne skape nye tradisjoner
              sammen – enten det er små hverdagsøyeblikk, reiser til nye steder
              eller å bare nyte en rolig søndagsmorgen med kaffe og avis. Livet
              er best når det deles.
            </p>
          </div>

          {/* Bilde */}
          <figure className="order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/10 w-fit mx-auto">
              <Image
                src="/images/henrikogingrid-square.jpg"
                alt="Henrik og Ingrid på festival"
                width={380}
                height={420}
                className="rounded-2xl object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Delestrek */}
      <div className="mt-10 mb-10">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-[90%] max-w-[1600px]"></div>
      </div>

      {/* TOASTMASTER */}
      <section className="max-w-xl mx-auto px-4 mb-10">
        <h2 className="text-lg font-semibold mb-4">Ønsker du å holde tale?</h2>
        <p className="mb-4">Ta kontakt med toastmaster Maria:</p>
        <p className="font-medium">tlf: 987 65 432</p>
        <p>e-post: maria.toastmaster@example.com</p>
      </section>
    </main>
  );
}
