import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pb-12  bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl font-bold">Contact Us</h2>
          <p className="text-gray-500 mt-3">
            Plan your next journey today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            {/* Info */}
            <div className="space-y-4 text-gray-700 mb-6">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <span>+91 7907914771</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-700" />
                <span>gowyntourskerala@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white"
              >
                <FaFacebookF />
              </motion.a>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.731252123658!2d76.0957511!3d11.5711136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60db3b27fa617%3A0x8519a226099d43f2!2sGo%20Wyn%20turism!5e0!3m2!1sen!2sin!4v1768401188136!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD (FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black transition"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black transition"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-4 rounded-full font-semibold tracking-wide"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
