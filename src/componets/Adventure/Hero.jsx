import { motion } from "framer-motion";

export default function Hero() {
  return (
<section id="home" className="pt-28 h-screen">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="/images/adv.jpg"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair text-4xl md:text-6xl font-bold mb-6"
          >
           Adventure & Camping
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
           Thrilling outdoor experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
