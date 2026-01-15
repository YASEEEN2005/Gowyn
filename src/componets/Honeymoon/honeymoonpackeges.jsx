import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

/* ================= DATA ================= */
const packages = [
  {
    title: "Standard package",
    location: "Wayanad",
    desc: "Two hearts. One perfect escape.",
    desc1: "candlelight dinner,glass bridge visit,zipline ticket ,semi off road jeep safari,pool with private time.",
    price: "₹12,000 / couple",
    image: "/images/honeymoon1.jpg",
    images: [
      "/images/honeymoon1.jpg",
      "/images/honeymoon1-1.jpg",
      "/images/honeymoon1-2.jpg",
      "/images/honeymoon1-3.jpg",
    ],
  },
  {
    title: "Deluxe package",
    location: "Wayanad",
    desc: "An indulgence called love.",
    desc1: "candlelight dinner,glass bridge visit,zipline ticket ,semi off road jeep safari,pool with private time.",
    price: "₹15,000 / couple",
    image: "/images/honeymoon2.jpg",
    images: [
      "/images/honeymoon2.jpg",
      "/images/honeymoon2-1.jpg",
      "/images/honeymoon2-2.jpg",
      "/images/honeymoon2-3.jpg",
    ],
  },
  {
    title: "Premium package",
    location: "Wayanad",
    desc: "Where romance meets royalty.",
    desc1: "private pool villa,floating breack fast, candlelight dinner,glass bridge ticket, zipline ticket,off road jeep safari.",
    price: "₹25,999 / couple",
    image: "/images/honeymoon3.jpg",
    images: [
      "/images/honeymoon3.jpg",
      "/images/honeymoon3-1.jpg",
      "/images/honeymoon3-2.jpg",
      "/images/honeymoon3-3.jpg",
    ],
  },
];


/* ================= MODAL ================= */
function DetailsModal({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(item.images[0]);
  const [showBooking, setShowBooking] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    type: "Couple",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendWhatsApp = () => {
    const msg = `
💖 Honeymoon Booking Request

🏡 Package: ${item.title}
📍 Location: ${item.location}
💰 Price: ${item.price}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}
👫 Type: ${form.type}
    `.trim();

    const phone = "919999999999"; // CHANGE NUMBER
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.92, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="bg-white rounded-[28px] w-full max-w-4xl overflow-hidden relative shadow-2xl"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow z-10"
          >
            <FaTimes />
          </button>

          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[90vh] overflow-y-auto">
            {/* LEFT – IMAGES */}
            <div>
              <motion.img
                key={activeImage}
                src={activeImage}
                className="w-full h-64 object-cover rounded-2xl"
                initial={{ opacity: 0.6, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`h-16 w-20 rounded-xl object-cover cursor-pointer border-2 ${
                      activeImage === img
                        ? "border-black"
                        : "border-transparent opacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            {!showBooking ? (
              <div>
                <h3 className="text-2xl font-semibold capitalize">
                  {item.title}
                </h3>

                <p className="flex items-center gap-2 mt-1 text-sm">
                  <FaMapMarkerAlt className="text-rose-600" />
                  <b>{item.location}</b>
                </p>

                <p className="text-gray-600 mt-3">
                  {item.desc1}
                </p>

                <p className="text-amber-600 font-semibold text-lg mt-4">
                  {item.price}
                </p>

                <button
                  onClick={() => setShowBooking(true)}
                  className="mt-6 w-full bg-black text-white py-3 rounded-full"
                >
                  Book Now
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Booking Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="label">Name</label>
                    <input
                      name="name"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Phone</label>
                    <input
                      name="phone"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Package Type</label>
                    <select
                      name="type"
                      onChange={handleChange}
                      className="input"
                    >
                      <option>Couple</option>
                      <option>Family</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={sendWhatsApp}
                  className="mt-6 w-full bg-green-500 text-white py-3 rounded-full"
                >
                  Send on WhatsApp
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <style>
          {`
            .label {
              font-size: 0.875rem;
              font-weight: 500;
              margin-bottom: 6px;
              display: block;
            }
            .input {
              width: 100%;
              padding: 12px 16px;
              border: 1px solid #e5e7eb;
              border-radius: 14px;
            }
          `}
        </style>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= PAGE ================= */
export default function HoneymoonPackeges() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold">
            Romantic Getaways
          </h2>
          <p className="text-gray-500 mt-3">
            Handpicked honeymoon experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {packages.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] shadow-2xl overflow-hidden"
            >
              <img
                src={item.image}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold capitalize">
                  {item.title}
                </h3>

                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <FaMapMarkerAlt className="text-rose-600" />
                  <b>{item.location}</b>
                </p>

                <p className="text-gray-500 mt-3">
                  {item.desc}
                </p>

                <p className="text-amber-600 font-semibold mt-4">
                  {item.price}
                </p>

                <button
                  onClick={() => setSelected(item)}
                  className="mt-6 w-full bg-black text-white py-3 rounded-full"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <DetailsModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
