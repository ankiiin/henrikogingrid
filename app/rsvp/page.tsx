"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Toastmaster from "components/Toastmaster";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function RsvpPage() {
  const [form, setForm] = useState({
    fulltNavn: "",
    plussEn: "",
    svar: "",
    matpreferanser: "",
  });
  const [hasMatpref, setHasMatpref] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | "kommer" | "kan-ikke">(null);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        if (submitted === "kommer") {
          const weddingDate = new Date("2026-08-24T14:00:00");
          const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = weddingDate.getTime() - now;
    
            if (diff <= 0) {
              clearInterval(interval);
              return;
            }
    
            setTimeLeft({
              days: Math.floor(diff / (1000 * 60 * 60 * 24)),
              hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((diff / (1000 * 60)) % 60),
              seconds: Math.floor((diff / 1000) % 60),
            });
          }, 1000);
    
          return () => clearInterval(interval);
        }
      }, [submitted]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("rsvp").insert([
      {
        fulltNavn: form.fulltNavn,
        plussEn: form.plussEn || null,
        svar: form.svar,
        matpreferanser: hasMatpref ? form.matpreferanser : null,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error saving RSVP:", error);
      alert("Noe gikk galt, prøv igjen senere.");
      return;
    }

    setSubmitted(form.svar as "kommer" | "kan-ikke");
  }

  if (submitted === "kommer") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20 text-[#3A342D]">
        <section className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Tusen takk for svaret!
          </h1>
          <p className="text-lg md:text-xl text-[#6B5843]">
            Vi gleder oss til å feire dagen sammen med deg 🎉
          </p>
        </section>

        <section className="mt-16 space-y-10 text-center">
          <div>
            <p className="text-base">Bryllupet finner sted i</p>
            <p className="font-serif text-xl md:text-2xl font-semibold">
              Nidarosdomen
            </p>
            <p className="text-sm text-[#6B5843]">24 august 2026 kl. 14.00</p>
          </div>

          <div>
            <h2 className="font-serif text-lg md:text-xl font-semibold">
              Hva skjer nå?
            </h2>
            <p className="mt-2">Du er registrert ✅</p>
            <p className="mt-1 text-[#6B5843]">
              Om du trenger å endre svaret ditt senere, kan du kontakte oss
              direkte.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg md:text-xl font-semibold mb-3">
              Tips før dagen kommer:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-left inline-block text-base">
              <li>Sjekk sidene våre om kleskode, overnatting og transport.</li>
              <li>Har du spørsmål? Ta kontakt med oss direkte!</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="font-serif text-xl md:text-2xl mb-8">
            Nedtelling til den store dagen ✨
          </h2>
          <div className="flex justify-center gap-6 md:gap-12 text-lg md:text-xl font-medium">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-[#6B5843]">
                {timeLeft.days}
              </span>
              <span className="text-sm uppercase tracking-wider">Dager</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-[#6B5843]">
                {timeLeft.hours}
              </span>
              <span className="text-sm uppercase tracking-wider">Timer</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-[#6B5843]">
                {timeLeft.minutes}
              </span>
              <span className="text-sm uppercase tracking-wider">Min</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-[#6B5843]">
                {timeLeft.seconds}
              </span>
              <span className="text-sm uppercase tracking-wider">Sek</span>
            </div>
          </div>
        </section>

        <section className="text-center mt-20">
          <p className="font-serif text-lg md:text-xl leading-relaxed">
            Med vennlig hilsen <br />
            <span className="font-semibold">Henrik &amp; Ingrid</span>
          </p>
        </section>
      </main>
    );
  }

  if (submitted === "kan-ikke") {
    return (
      <main className="max-w-[980px] mx-auto px-4 md:px-6 py-20 text-center text-[#3A342D]">
        <h1 className="font-serif text-2xl md:text-3xl">Takk for beskjeden 💌</h1>
        <p className="mt-6 text-[#6B5843]">Vi har registrert at du ikke kan komme.</p>
        <p className="mt-2 text-[#6B5843]">
          Skulle planene endre seg, er du hjertelig velkommen til å gi oss beskjed –
        </p>
        <p className="mt-2 font-semibold">innen svarfristen 01.03.2026.</p>
      </main>
    );
  }

  return (
    <main className="max-w-[980px] mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 text-[#3A342D]">
      <section className="max-w-[720px] mx-auto text-center">
        <h1 className="font-serif uppercase tracking-[0.14em] text-[24px] md:text-[30px]">
          SVAR PÅ INVITASJON
        </h1>
        <p className="mt-8 md:mt-10">
          Fyll ut skjemaet innen dato <span className="font-medium">01.03.26</span>
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-12 md:mt-16 space-y-8 px-4"
      >
        <div>
          <label className="block text-left mb-2 font-semibold">Fullt navn</label>
          <input
            type="text"
            required
            value={form.fulltNavn}
            onChange={(e) => setForm({ ...form, fulltNavn: e.target.value })}
            className="w-full px-4 py-3 border border-[#A78D71] rounded-md bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#A78D71]"
          />
        </div>

        <div>
          <label className="block text-left mb-2 font-semibold">+1 (valgfritt)</label>
          <input
            type="text"
            value={form.plussEn}
            onChange={(e) => setForm({ ...form, plussEn: e.target.value })}
            className="w-full px-4 py-3 border border-[#A78D71] rounded-md bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#A78D71]"
          />
        </div>

        <fieldset className="space-y-4">
          <legend className="sr-only">Svar</legend>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="svar"
              value="kommer"
              required
              checked={form.svar === "kommer"}
              onChange={(e) => setForm({ ...form, svar: e.target.value })}
              className="accent-[#6B5843]"
            />
            <span>Ja, jeg/vi kommer</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="svar"
              value="kan-ikke"
              checked={form.svar === "kan-ikke"}
              onChange={(e) => setForm({ ...form, svar: e.target.value })}
              className="accent-[#6B5843]"
            />
            <span>Nei, jeg/vi kan ikke komme</span>
          </label>
        </fieldset>

        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hasMatpref}
              onChange={(e) => setHasMatpref(e.target.checked)}
              className="accent-[#6B5843]"
            />
            <span>Jeg har spesielle matpreferanser</span>
          </label>
          <div>
            <label className="block mb-2 font-semibold">Skriv inn her</label>
            <input
              type="text"
              disabled={!hasMatpref}
              value={form.matpreferanser}
              onChange={(e) =>
                setForm({ ...form, matpreferanser: e.target.value })
              }
              className="w-full px-4 py-3 rounded-md border border-[#A78D71]/40 bg-[#F6EFE6] shadow-sm disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#A78D71]/40"
            />
          </div>
        </div>


        <div className="pt-6 text-center">
          <button
            type="submit"
            disabled={loading}
            className="border border-[#A78D71] text-[#3A342D] uppercase tracking-wide px-6 py-3 rounded shadow-sm transition-all duration-200 ease-in-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A78D71]"
            style={{ backgroundColor: "#F8F5EC" }}
          >
            {loading ? "Sender..." : "Send svar"}
          </button>
        </div>
      </form>

      <div className="mt-12 px-4 md:px-6">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-full max-w-[980px]"></div>
      </div>

      <Toastmaster />
    </main>
  );
}