import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Ayaan Khan",
      review:
        "An absolutely beautiful property. The ambience, cleanliness, and service exceeded our expectations.",
    },
    {
      name: "Sara Mohammed",
      review:
        "Peaceful stay surrounded by nature. Perfect place to relax and unwind with family.",
    },
    {
      name: "Rohit Sharma",
      review:
        "Rooms were luxurious and well-maintained. Staff was very friendly and helpful.",
    },
    {
      name: "Nisha Patel",
      review:
        "Loved the interiors and the outdoor seating areas. A premium experience overall.",
    },
    {
      name: "Faheem Ali",
      review:
        "One of the best stays I’ve had. The attention to detail is impressive.",
    },
    {
      name: "Anjali Verma",
      review:
        "Highly recommended for couples and families. Calm environment and great hospitality.",
    },
  ];

  return (
    <section className=" ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold">
            Customer Reviews
          </h2>
          <p className="text-gray-500 mt-3">
            What our guests say about their experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-3">
                <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-semibold">
                  {item.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed">
                “{item.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
