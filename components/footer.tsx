export default function Footer() {
    return (
      <footer className="bg-[#CDD7BE] w-full border-t border-[#A78D71]/70 py-8 text-center">
        <p className="text-sm md:text-base text-[#3A342D]">
          © 2026 H&I – Vi gleder oss til å feire med dere!
        </p>
        <p className="text-xs md:text-sm text-[#6b6b6b]">
          Nettsiden er bygget av{" "}
          <a
            href="https://ankiiin.netlify.app/"
            target="_blank"
            className="underline hover:text-black"
          >
            Anniken Hammerstad
          </a>
        </p>
      </footer>
    );
  }