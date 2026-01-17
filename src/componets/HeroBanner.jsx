import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const backgrounds = [
  "/images/WhatsApp Image 2026-01-14 at 19.15.16_76ea5989.jpg",
  "/images/backgrownd2.png",
  "/images/backgrownd3.png",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.75)), url('${backgrounds[index]}')`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-32 flex flex-col items-center">
        <motion.img
          src="/images/logo-removebg-preview.png"
          className="max-w-xs md:max-w-md mb-10 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="font-playfair text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your Trusted Partner
          <br />
          in Hospitality & Travel
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl opacity-90 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Luxury journeys curated with passion and precision
        </motion.p>

        <motion.div
          className="flex gap-4 mt-10 flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 bg-black/80 hover:bg-black transition rounded-full backdrop-blur-md shadow-lg"
          >
            Start Journey
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 bg-white text-black hover:bg-gray-100 transition rounded-full shadow-lg"
          >
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  );
}
