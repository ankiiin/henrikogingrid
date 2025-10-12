"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Toastmaster from "components/Toastmaster";

type WishlistItem = {
  id: number;
  title: string;
  description: string | null;
  url: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function OnskelistePage() {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    async function fetchWishlist() {
      const { data, error } = await supabase.from("wishlist").select("*");
      if (error) console.error("Error fetching wishlist:", error);
      else setItems(data || []);
    }
    fetchWishlist();
  }, []);

  return (
    <main className="max-w-[980px] mx-auto px-4 md:px-6 py-10 md:py-14 text-[#3A342D]">
      <section className="text-center space-y-4 md:space-y-5">
        <h1 className="font-serif uppercase tracking-[0.12em] text-[22px] md:text-[28px]">
          Ønskeliste
        </h1>
        <p className="max-w-[780px] mx-auto mt-6 leading-relaxed">
          Her legger vi ut ønsker med lenke direkte til butikk/nettsted{" "}
          <span aria-hidden="true">🌸</span>
        </p>
      </section>

      <section className="mt-12 md:mt-16 space-y-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-[#A78D71]/40 p-6 text-center max-w-md mx-auto"
            >
              <h3 className="font-serif text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm opacity-90 mb-4">{item.description}</p>
              )}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#CDD7BE] text-[#3A342D] rounded-md shadow hover:bg-[#B9C8B4] transition"
              >
                Åpne lenke
              </a>
            </div>
          ))
        ) : (
          <p className="text-center opacity-70">Ingen ønsker lagt til ennå 💭</p>
        )}
      </section>

      <div className="mt-12 px-4 md:px-6">
        <div className="h-px bg-[#A78D71]/70 mx-auto w-full max-w-[980px]"></div>
      </div>

      <Toastmaster />
    </main>
  );
}