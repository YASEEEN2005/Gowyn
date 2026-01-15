import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Luxury & Budget Resorts",
    desc: "Carefully selected resorts for every traveler.",
    image: "/images/luxury.jpg",
    path: "/luxury",
  },
  {
    title: "Honeymoon Packages",
    desc: "Romantic destinations for lifetime memories.",
    image: "/images/honey.jpg",
    path: "/honeymoon",
  },
  {
    title: "Adventure & Camping",
    desc: "Thrilling outdoor experiences.",
    image: "/images/adv.jpg",
    path: "/adventure",
  },
  {
    title: "Cab Service",
    desc: "Safe, comfortable and reliable travel.",
    image: "/images/cab.jpg",
    path: "/cab",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-18">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-center font-playfair text-4xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Premium hospitality & travel experiences
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {item.desc}
                </p>

                {/* View Details Button (Routing Enabled) */}
                <Link to={item.path} className="mt-auto">
                  <button className="px-6 py-2.5 bg-black text-white rounded-full text-sm hover:bg-gray-900 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
