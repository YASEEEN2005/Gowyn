import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";

/* ================= RESORT DATA ================= */
const resorts = [
  {
    title: "1 BHK Glass House Villa",
    location: "Wayanad",
    subtitle: "Chembra peak view",
    desc: "Chembra peak view, campfire with music, premium pool & BBQ facility, kids park and outdoor games.",
    image: "/images/WILDLOOP.jpeg",
    images: [
      "/images/1.jpeg",
      "/images/2.jpeg",
      "/images/3.jpeg",
      "/images/4.jpeg",
      "/images/5.jpeg",
      "/images/6.jpeg",
    ],
  },
  {
    title: "5 BHK Family Villa",
    location: "Wayanad",
    subtitle: "Eco-friendly farm villa",
    desc: "Eco-friendly farm villa, infinity pool, kitchen with vessels, prayer hall and peaceful surroundings.",
    image: "/images/bean wood.jpeg",
    images: [
      "/images/12.jpeg",
      "/images/13.jpeg",
      "/images/14.jpeg",
      "/images/15.jpeg",
      "/images/16.jpeg",
      "/images/17.jpeg",
    ],
  },
  {
    title: "4 BHK Lake View Villa",
    location: "Wayanad",
    subtitle: "Karapuzha lake view",
    desc: "Infinity pool, Karapuzha lake view, spacious living & dining area, BBQ facility.",
    image: "/images/lake view.jpeg",
    images: [
      "/images/7.jpeg",
      "/images/8.jpeg",
      "/images/9.jpeg",
      "/images/10.jpeg",
      "/images/11.jpeg",
    ],
  },
  {
    title: "Luxury Wooden Cottage",
    location: "Wayanad",
    subtitle: "Private glass bridge",
    desc: "Luxury wooden cottage with private glass bridge, infinity pool, restaurant and campfire with music.",
    image: "/images/tree vally.jpeg",
    images: [
      "/images/24.jpeg",
      "/images/25.jpeg",
      "/images/26.jpeg",
      "/images/27.jpeg",
      "/images/28.jpeg",
      "/images/29.jpeg",
    ],
  },
  {
    title: "Unique Penta Hut",
    location: "Wayanad",
    subtitle: "Unique eco stay",
    desc: "Unique eco stay with common washroom, campfire with music, premium pool & BBQ, kids park.",
    image: "/images/penta hut.jpeg",
    images: [
      "/images/41.jpeg",
      "/images/42.jpeg",
      "/images/43.jpeg",
      "/images/44.jpeg",
      "/images/45.jpeg",
      "/images/46.jpeg",
    ],
  },
  {
    title: "Luxury Glass House Villa",
    location: "Wayanad",
    subtitle: "Infinity pool & glass bridge",
    desc: "Luxury glass house villa with private glass bridge, infinity pool, restaurant and campfire with music.",
    image: "/images/glass house.jpeg",
    images: [
      "/images/34.jpeg",
      "/images/35.jpeg",
      "/images/36.jpeg",
      "/images/37.jpeg",
      "/images/26.jpeg",
      "/images/27.jpeg",
    ],
  },
  {
    title: "2 BHK Premium Villa",
    location: "Wayanad",
    subtitle: "Sunrise mountain view",
    desc: "Premium pool villa with sunrise mountain view, campfire with music and kitchen facility.",
    image: "/images/2BHK villa.jpeg",
    images: [
      "/images/18.jpeg",
      "/images/19.jpeg",
      "/images/20.jpeg",
      "/images/21.jpeg",
      "/images/22.jpeg",
      "/images/23.jpeg",
    ],
  },
  {
    title: "Forest Couple Villa",
    location: "Wayanad",
    subtitle: "Romantic forest stay",
    desc: "Romantic forest stay with private ambiance, infinity pool and campfire with music.",
    image: "/images/clif house.jpeg",
    images: [
      "/images/30.jpeg",
      "/images/31.jpeg",
      "/images/32.jpeg",
      "/images/33.jpeg",
      "/images/26.jpeg",
      "/images/27.jpeg",
    ],
  },
  {
    title: "1 BHK Couple Villa",
    location: "Wayanad",
    subtitle: "Perfect honeymoon getaway",
    desc: "Perfect honeymoon getaway with eco-friendly ambiance, infinity pool and campfire with music.",
    image: "/images/BEENWOOD VILLA.jpeg",
    images: [
      "/images/38.jpeg",
      "/images/39.jpeg",
      "/images/40.jpeg",
      "/images/15.jpeg",
    ],
  },
  {
    title: "Mountain View Hut Stay",
    location: "Wayanad",
    subtitle: "Mountain view stay",
    desc: "Mountain view hut stay with common washroom, off-road jeep safari, tea plantation walk and natural pool.",
    image: "/images/HUT stay.jpeg",
    images: [
      "/images/46.jpeg",
      "/images/47.jpeg",
      "/images/48.jpeg",
      "/images/49.jpeg",
      "/images/50.jpeg",
    ],
  },
  {
    title: "Luxury Couple Bali Villa",
    location: "Wayanad",
    subtitle: "Calm & peaceful stay",
    desc: "Luxury Bali-style couple villa with private pool and floating breakfast experience.",
    image: "/images/Amakila.jpeg",
    images: [
      "/images/51.jpeg",
      "/images/52.jpeg",
      "/images/53.jpeg",
      "/images/54.jpeg",
      "/images/55.jpeg",
      "/images/56.jpeg",
    ],
  },
  {
    title: "Mountain View Jacuzzi Villa",
    location: "Wayanad",
    subtitle: "Luxury mountain stay",
    desc: "Luxury mountain view villa with jacuzzi and calm, peaceful surroundings.",
    image: "/images/jaccuzy villa.jpeg",
    images: [
      "/images/57.jpeg",
      "/images/58.jpeg",
      "/images/59.jpeg",
      "/images/60.jpeg",
      "/images/61.jpeg",
    ],
  },
  {
    title: "4 BHK Pool Villa",
    location: "Ooty",
    subtitle: "Premium pool villa",
    desc: "Premium 4 BHK pool villa with campfire and music in a calm hill-station atmosphere.",
    image: "/images/4 BHK pool villa.jpeg",
    images: [
      "/images/62.jpeg",
      "/images/63.jpeg",
      "/images/64.jpeg",
      "/images/65.jpeg",
      "/images/66.jpeg",
    ],
  },
  {
    title: "Private Pool Couple Villa",
    location: "Wayanad",
    subtitle: "Calm & peaceful stay",
    desc: "Private pool couple villa with mountain view and campfire with music.",
    image: "/images/private pool couple villa.jpeg",
    images: [
      "/images/68.jpeg",
      "/images/69.jpeg",
      "/images/70.jpeg",
      "/images/71.jpeg",
      "/images/72.jpeg",
    ],
  },
  {
    title: "Heritage Villa Resort",
    location: "Wayanad",
    subtitle: "Traditional luxury stay",
    desc: "Heritage villa resort with traditional architecture, natural pool and plantation walks.",
    image: "/images/sobanam.jpeg",
    images: [
      "/images/74.jpeg",
      "/images/75.jpeg",
      "/images/76.jpeg",
      "/images/77.jpeg",
      "/images/78.jpeg",
    ],
  },
  {
    title: "Forest Villa",
    location: "Wayanad",
    subtitle: "Forest ambiance",
    desc: "Forest villa with premium pool, campfire with music and immersive nature experience.",
    image: "/images/87.jpeg",
    images: [
      "/images/86.jpeg",
      "/images/87.jpeg",
      "/images/88.jpeg",
      "/images/89.jpeg",
      "/images/90.jpeg",
      "/images/91.jpeg",
    ],
  },
  {
    title: "Budget Friendly Villa",
    location: "Wayanad",
    subtitle: "Affordable forest stay",
    desc: "Budget friendly villa with forest ambiance, premium pool and campfire with music.",
    image: "/images/92.jpeg",
    images: [
      "/images/92.jpeg",
      "/images/93.jpeg",
      "/images/94.jpeg",
      "/images/95.jpeg",
      "/images/96.jpeg",
      "/images/97.jpeg",
      "/images/98.jpeg",
    ],
  },
];
/* ================= MODAL ================= */
function ResortModal({ resort, onClose }) {
  const [activeImage, setActiveImage] = useState(resort.images[0]);
  const [showBooking, setShowBooking] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    stayType: "Couples",
    totalMembers: "",
    adults: "",
    kids: "",
    rooms: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendWhatsApp = () => {
    const message = `
🏡 Resort Booking Request

🏠 Resort: ${resort.title}
📍 Location: ${resort.location}

👤 Name: ${form.name}
📞 Contact: ${form.phone}
📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}
👫 Stay Type: ${form.stayType}
👥 Total Members: ${form.totalMembers}
🧑 Adults: ${form.adults}
🧒 Kids: ${form.kids}
🛏 Rooms Needed: ${form.rooms}
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
        <motion.div className="bg-white rounded-3xl max-w-md w-full p-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
          >
            <FaTimes />
          </button>

          {!showBooking ? (
            <>
              <img
                src={activeImage}
                className="w-full h-56 object-cover rounded-2xl"
              />

              <div className="flex gap-2 mt-3 overflow-x-auto">
                {resort.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`h-14 w-20 rounded-lg cursor-pointer border-2 ${
                      activeImage === img
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {resort.title}
              </h3>

              <p className="flex items-center gap-2 text-sm mt-1">
                <FaMapMarkerAlt className="text-rose-600" />
                <b>{resort.location}</b>
              </p>

              <p className="text-sm text-gray-600 mt-3">
                {resort.desc}
              </p>

              <button
                onClick={() => setShowBooking(true)}
                className="mt-6 w-full bg-black text-white py-3 rounded-full"
              >
                Book Now
              </button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Booking Details
              </h3>

              {[
                ["Full Name","name"],
                ["Contact Number","phone"],
                ["Check-in Date","checkIn","date"],
                ["Check-out Date","checkOut","date"],
                ["Total Members","totalMembers"],
                ["Adults","adults"],
                ["Kids","kids"],
                ["Rooms Needed","rooms"],
              ].map(([label,name,type]) => (
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
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= MAIN ================= */
export default function ResortCollection({ searchTerm = "" }) {
  const [selected, setSelected] = useState(null);

  const didScroll = useRef(false);

useEffect(() => {
  if (searchTerm.trim() !== "" && !didScroll.current) {
    didScroll.current = true;
    document
      .getElementById("resorts")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  if (searchTerm.trim() === "") {
    didScroll.current = false;
  }
}, [searchTerm]);

  const filteredResorts =
    searchTerm.trim() === ""
      ? resorts
      : resorts.filter((r) => {
          const q = searchTerm.toLowerCase();
          return (
            r.title.toLowerCase().includes(q) ||
            r.location.toLowerCase().includes(q) ||
            r.subtitle.toLowerCase().includes(q)
          );
        });

  return (
    <section id="resorts" className=" bg-gray-50">
              <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold">
            Our Resort Collection
          </h2>
          <p className="text-gray-500 mt-3">
          Luxury escapes & budget-friendly comfort
          </p>
        </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResorts.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow overflow-hidden"
          >
            <img src={r.image} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-gray-600">{r.subtitle}</p>
              <button
                onClick={() => setSelected(r)}
                className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <ResortModal
          resort={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
