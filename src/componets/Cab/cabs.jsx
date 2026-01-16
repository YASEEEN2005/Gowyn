import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

/* ================= DATA ================= */
const cabs = [
  {
    title: "Airport Pickup & Drop",
    image: "/images/AIR PORT.jpg",
    images: [

    ],
  },
  {
    title: "44 Seat Bus",
    image: "/images/bus.png",
    images: [

    ],
  },
  {
    title: "Toyota Innova",
    image: "/images/4,4.png",
    images: [
 
    ],
  },
  {
    title: "Maruti Suzuki Ertiga",
    image: "/images/4,2.png",
    images: [

    ],
  },
  {
    title: "Toyota Innova Crysta",
    image: "/images/4,3.png",
    images: [

    ],
  },
  {
    title: "Auto Rickshaw",
    image: "/images/4,1.png",
    images: [

    ],
  },
  {
    title: "4 × 4 Jeep Off Road",
    image: "/images/85.jpg",
    images: [
 
    ],
  },
  {
    title: "Jeep On Road",
    image: "/images/3,4.jpeg",
    images: [

    ],
  },
  {
    title: "Traveller",
    image: "/images/travaler.png",
    images: [
 
    ],
  },
];


/* ================= MODAL ================= */
function CabModal({ cab, onClose }) {
  const [activeImage, setActiveImage] = useState(cab.images[0]);
  const [showBooking, setShowBooking] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendWhatsApp = () => {
    const message = `
🚖 Cab Booking Request

🚘 Vehicle: ${cab.title}

👤 Name: ${form.name}
📞 Contact: ${form.phone}

📍 Pickup: ${form.pickup}
📍 Drop: ${form.drop}
📅 Date: ${form.date}
    `.trim();

    window.open(
      `https://wa.me/917907914771?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center px-4"
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
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow z-10"
          >
            <FaTimes />
          </button>

          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[90vh] overflow-y-auto">
            <div>
              <motion.img
                key={activeImage}
                src={activeImage}
                className="w-full h-64 object-cover rounded-2xl"
              />

              <div className="flex gap-2 mt-4 overflow-x-auto">
                {cab.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`h-16 w-20 rounded-xl cursor-pointer border-2 ${
                      activeImage === img
                        ? "border-black"
                        : "border-transparent opacityopacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {!showBooking ? (
              <div>
                <h3 className="text-2xl font-semibold uppercase">
                  {cab.title}
                </h3>

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
                  ["Contact Number", "phone"],
                  ["Pickup Location", "pickup"],
                  ["Drop Location", "drop"],
                  ["Date", "date", "date"],
                ].map(([label, name, type]) => (
                  <div key={name} className="mb-3">
                    <label className="text-sm font-medium">
                      {label}
                    </label>
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
                  className="mt-4 w-full bg-black text-white py-3 rounded-full"
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
export default function Cabs({ searchTerm = "" }) {
  const [selected, setSelected] = useState(null);

  /* SEARCH FILTER */
  const filteredCabs =
    searchTerm.trim() === ""
      ? cabs
      : cabs.filter((c) =>
          c.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  /* AUTO SCROLL */
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      document
        .getElementById("cab-services")
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
            Our Cab Services
          </h2>
          <p className="text-gray-500 mt-3">
            Choose the best ride for your journey
          </p>
        </div>

        {filteredCabs.length === 0 && (
          <p className="text-center text-gray-500">
            No cabs found for "{searchTerm}"
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredCabs.map((cab, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] shadow-2xl overflow-hidden"
            >
              <img
                src={cab.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold uppercase">
                  {cab.title}
                </h3>

                <button
                  onClick={() => setSelected(cab)}
                  className="mt-6 bg-black text-white px-6 py-2 rounded-full text-sm"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <CabModal
          cab={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
