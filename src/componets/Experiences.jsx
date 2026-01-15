import { motion } from "framer-motion";
import {
  FaCrown,
  FaHeart,
  FaMountain,
  FaCarSide,
} from "react-icons/fa6";

const experiences = [
  {
    icon: <FaCrown />,
    title: "Elite Resorts",
    desc: "Carefully curated luxury resorts for exceptional comfort",
  },
  {
    icon: <FaHeart />,
    title: "Romantic Escapes",
    desc: "Perfect honeymoon experiences crafted with love",
  },
  {
    icon: <FaMountain />,
    title: "Adventure Tours",
    desc: "Thrilling journeys designed for explorers",
  },
  {
    icon: <FaCarSide />,
    title: "Premium Cab Service",
    desc: "Safe, punctual and comfortable travel solutions",
  },
];

export default function Experiences() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-center font-playfair text-4xl mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Crafted Experiences
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="text-4xl text-gray-900 mb-6 group-hover:text-black transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
