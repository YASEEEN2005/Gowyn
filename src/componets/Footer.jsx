import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Divider Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[1px] bg-gray-300 origin-left mb-8"
        />

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* Social Icons */}
          <div className="flex gap-5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm tracking-wide">
            © 2026 <span className="font-semibold">Gowyn</span>. All Rights Reserved.
          </p>

        </motion.div>
      </div>
    </footer>
  );
}
