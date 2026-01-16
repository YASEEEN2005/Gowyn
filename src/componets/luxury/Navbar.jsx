import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#resorts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


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
            <img src="/images/gowyn[1].png" className="h-11" alt="Gowyn" />
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                scrollToResorts();
              }}
              className={`w-full rounded-full px-5 py-2 text-sm focus:outline-none ${
                scrolled ? "bg-gray-100 text-black" : "bg-white/90 text-black"
              }`}
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          {/* ================= DESKTOP MENU ================= */}
<nav className="hidden md:flex gap-10 items-center">
  {[
    { label: "Home", href: "/" },
    { label: "Services", href: "#resorts" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ].map(({ label, href }) => (
    <a
      key={label}
      href={href}
      className={`relative font-medium ${
        scrolled ? "text-black" : "text-white"
      } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#c9a24d] after:transition-all hover:after:w-full`}
    >
      {label}
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
     <AnimatePresence>
  {mobileSearch && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* TOP SEARCH BAR */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-white rounded-b-3xl shadow-2xl px-5 pt-5 pb-6"
      >
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          <FaSearch className="text-gray-400 text-lg" />

          {/* Input */}
          <input
            autoFocus
            type="text"
            placeholder="Search resorts, villas, stays..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={scrollToResorts}
            className="flex-1 bg-transparent text-base text-gray-800 placeholder-gray-400 focus:outline-none"
          />

          {/* Close */}
          <button
            onClick={() => setMobileSearch(false)}
            className="text-gray-500 hover:text-black transition"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      ;

<AnimatePresence>
  {menuOpen && (
    <motion.div
      className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-white h-full rounded-t-3xl shadow-2xl flex flex-col items-center justify-center gap-7 text-xl font-medium"
      >
        {MENU_ITEMS.map(({ label, href }) =>
          href.startsWith("#") ? (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#c9a24d] transition"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#c9a24d] transition"
            >
              {label}
            </Link>
          )
        )}

        <button
          onClick={() => setMenuOpen(false)}
          className="mt-10 px-12 py-3 rounded-full bg-black text-white text-base hover:bg-gray-900 transition"
        >
          Close Menu
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
