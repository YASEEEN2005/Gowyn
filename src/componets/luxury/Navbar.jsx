import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ setSearchTerm }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToResorts = () => {
    const section = document.getElementById("resorts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* LOGO */}
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <img
              src="/images/gowyn[1].png"
              className="h-11"
              alt="Gowyn"
            />
            <span className={scrolled ? "text-black" : "text-white"}>
              Gowyn
            </span>
          </div>

          {/* ================= DESKTOP SEARCH ================= */}
          <div className="hidden md:flex relative w-[280px]">
            <input
              type="text"
              placeholder="Search resorts..."
              onFocus={scrollToResorts}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full rounded-full px-5 py-2 text-sm focus:outline-none ${
                scrolled
                  ? "bg-gray-100 text-black"
                  : "bg-white/90 text-black"
              }`}
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex gap-10 items-center">
            {["home", "services", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative font-medium ${
                  scrolled ? "text-black" : "text-white"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#c9a24d] after:transition-all hover:after:w-full`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

          </nav>

          {/* ================= MOBILE ICONS ================= */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className={scrolled ? "text-black" : "text-white"}
              onClick={() => {
                setMobileSearch(true);
                setTimeout(scrollToResorts, 300);
              }}
            >
              <FaSearch />
            </button>

            <button
              className={`text-2xl ${scrolled ? "text-black" : "text-white"}`}
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SEARCH ================= */}
      {mobileSearch && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
          <div className="relative w-full max-w-md">
            <input
              autoFocus
              type="text"
              placeholder="Search resorts..."
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={scrollToResorts}
              className="w-full rounded-full px-6 py-3 text-black focus:outline-none"
            />
            <button
              onClick={() => setMobileSearch(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

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
