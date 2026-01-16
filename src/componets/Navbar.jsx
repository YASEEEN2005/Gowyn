import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <img src="/images/gowyn[1].png" className="h-11" alt="Gowyn" />
            <span className={scrolled ? "text-black" : "text-white"}>
              Gowyn
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 items-center">
            {["home", "services", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative ${
                  scrolled ? "text-black" : "text-white"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#c9a24d] after:transition-all hover:after:w-full`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="https://wa.me/917907914771"
              className={`px-6 py-2 rounded-full border ${
                scrolled ? "text-black border-black" : "text-white border-white"
              }`}
            >
              Book Now
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 text-xl">
          {["home", "services", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="px-10 py-3 bg-black text-white rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
