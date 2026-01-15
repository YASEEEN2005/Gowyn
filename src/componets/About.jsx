import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src="/images/about.jpg"
              alt="Happy Family"
              className="rounded-[32px] shadow-2xl object-cover w-full h-[420px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Soft Glow */}
            <div className="absolute -inset-6 bg-black/5 rounded-[40px] -z-10 blur-2xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-playfair text-5xl font-bold mb-6"
            >
              About Gowyn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              Gowyn is a dynamic hospitality management company with over
              5 years of experience in creating seamless travel and guest
              experiences. We specialize in hospitality marketing and
              end-to-end management solutions for resorts, travel partners,
              and tourism ventures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 leading-relaxed"
            >
              Our services include Resort & Hotel Bookings, Curated Tour
              Packages, Camping & Outdoor Experiences, and Cab &
              Transportation Services. Driven by passion, reliability, and
              personalized service, Gowyn is committed to delivering comfort,
              quality, and memorable journeys—making us a trusted partner in
              hospitality and travel.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
