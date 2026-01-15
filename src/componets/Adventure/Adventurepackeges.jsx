import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

/* ================= DATA ================= */
const adventures = [
  {
    title: "Forest Camping",
    location: "Wayanad",
    desc: "off road jeep safari, tea plantation walk, private water fall.",
    image: "/images/1,1.png",
    images: [
      "/images/47.jpeg",
      "/images/48.jpeg",
      "/images/50.jpeg",
      "/images/106.png",

    ],
  },
  {
    title: "Camping site with pool",
    location: "Wayanad",
    desc: "plantation walk, Chembra peak safari.",
    image: "/images/1,2.png",
images: [
  "/images/penta hut.jpeg",
  "/images/4.jpeg",
  "/images/3,1.jpeg",
  "/images/43.jpeg",
  "/images/42.jpeg",
  "/images/5.jpeg",
  "/images/3,2.jpeg",
  "/images/3,3.jpeg",
  "/images/3,4.jpeg",
]
,
  },
  {
    title: "Forest Camping",
    location: "Wayanad",
    desc: "off road jeep safari, pool, camp fire with music.",
    image: "/images/1,3.png",
    images: [
      "/images/100.jpeg",
      "/images/102.jpeg",
      "/images/103.jpeg",
      "/images/104.jpeg",

    ],
  },
];

/* ================= MODAL ================= */
function AdventureModal({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(item.images[0]);
  const [showBooking, setShowBooking] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    type: "Couples",
    members: "",
    rooms: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendWhatsApp = () => {
    const message = `
🌲 Adventure Booking Request

🏕 Experience: ${item.title}
📍 Location: ${item.location}

👤 Name: ${form.name}
📞 Phone: ${form.phone}

📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}

👫 Type: ${form.type}
👥 Members: ${form.members}
🛏 Rooms: ${form.rooms}
    `.trim();

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
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
          className="bg-white rounded-[28px] w-full max-w-4xl shadow-2xl relative"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow z-10"
          >
            <FaTimes />
          </button>

          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[90vh] overflow-y-auto">
            {/* IMAGES */}
            <div>
              <motion.img
                key={activeImage}
                src={activeImage}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`h-16 w-20 rounded-xl cursor-pointer border-2 ${
                      activeImage === img
                        ? "border-black"
                        : "border-transparent opacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CONTENT */}
            {!showBooking ? (
              <div>
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="flex items-center gap-2 text-sm mt-1">
                  <FaMapMarkerAlt className="text-rose-600" />
                  <b>{item.location}</b>
                </p>

                <p className="text-gray-600 mt-3">
                  {item.desc}
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

                {[
                  ["Name", "name"],
                  ["Phone", "phone"],
                  ["Check-in Date", "checkIn", "date"],
                  ["Check-out Date", "checkOut", "date"],
                  ["Total Members", "members"],
                  ["Rooms", "rooms"],
                ].map(([label, name, type]) => (
                  <div key={name} className="mb-3">
                    <label className="text-sm font-medium">{label}</label>
                    <input
                      type={type || "text"}
                      name={name}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-xl"
                    />
                  </div>
                ))}

                <button
                  onClick={sendWhatsApp}
                  className="mt-4 w-full bg-green-500 text-white py-3 rounded-full"
                >
                  Send on WhatsApp
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= PAGE ================= */
export default function Adventurepackeges({ searchTerm = "" }) {
  const [selected, setSelected] = useState(null);

  /* SEARCH FILTER */
  const filteredAdventures =
    searchTerm.trim() === ""
      ? adventures
      : adventures.filter((a) => {
          const q = searchTerm.toLowerCase();
          return (
            a.title.toLowerCase().includes(q) ||
            a.location.toLowerCase().includes(q) ||
            a.desc.toLowerCase().includes(q)
          );
        });

  /* AUTO SCROLL */
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      document
        .getElementById("adventure-packages")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  return (
    <section
      id="resorts"
      className="py-32 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold">
            Adventure Experiences
          </h2>
          <p className="text-gray-500 mt-3">
            Explore the wild with comfort & safety
          </p>
        </div>

        {filteredAdventures.length === 0 && (
          <p className="text-center text-gray-500">
            No adventures found for "{searchTerm}"
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          {filteredAdventures.map((item, i) => (
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
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <FaMapMarkerAlt className="text-rose-600" />
                  <b>{item.location}</b>
                </p>

                <p className="text-gray-500 mt-3">
                  {item.desc}
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
        <AdventureModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
