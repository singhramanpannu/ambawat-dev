import React from "react";
import { motion } from "framer-motion";

import img1 from "../../public/images/food.webp";
import img2 from "../../public/images/wifi.webp";
import img3 from "../../public/images/cafe.webp";
import img4 from "../../public/images/washing.webp";
import img5 from "../../public/images/fridge.webp";
import img6 from "../../public/images/charging.webp";

const amenities = [
  { name: "food", image: img1 },
  { name: "wifi", image: img2 },
  { name: "Lounge and Cafe", image: img3 },
  { name: "washing machine", image: img4 },
  { name: "Fridge", image: img5 },
  { name: "Power Backup", image: img6 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

const Amenities = () => {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-900 font-serif mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Amenities
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Designed for comfort, convenience, and community — enjoy thoughtfully
          selected amenities that enhance your daily life.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {amenities.map((amenity, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-3xl shadow-lg group h-[200px] md:h-[250px] w-full"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 1.1, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={amenity.image}
                alt={amenity.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-yellow-400 text-black px-5 py-2 text-lg font-semibold rounded shadow-md transition duration-300 group-hover:scale-105">
                  {amenity.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
