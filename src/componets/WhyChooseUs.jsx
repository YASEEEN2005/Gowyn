import { motion } from "framer-motion";
import {
  FaHotel,
  FaBellConcierge,
  FaCarSide,
  FaHeadset,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaHotel />,
    title: "Luxury Resorts",
    desc: "Handpicked resorts with world-class comfort and elegance",
  },
  {
    icon: <FaBellConcierge />,
    title: "Premium Hospitality",
    desc: "Personalized service curated for unforgettable stays",
  },
  {
    icon: <FaCarSide />,
    title: "Cab & Transfers",
    desc: "Safe, reliable, and on-time travel at every destination",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Dedicated assistance whenever you need us",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-5 items-start sm:items-start items-center sm:text-left text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="text-4xl text-gray-900 flex-shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-gray-900 text-lg tracking-wide">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
