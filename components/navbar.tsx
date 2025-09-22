export default function Navbar() {
    return (
      <nav className="w-full shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Henrik & Ingrid</h1>
        <ul className="flex gap-6">
          <li><a href="/program" className="hover:underline">Program</a></li>
          <li><a href="/onskeliste" className="hover:underline">Ønskeliste</a></li>
          <li><a href="/rsvp" className="hover:underline">RSVP</a></li>
        </ul>
      </nav>
    );
  }