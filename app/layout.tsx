import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="font-sans bg-[#CDD7BE] text-center text-[#6B5843] overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
