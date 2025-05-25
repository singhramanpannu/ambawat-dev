import React from "react";
import { MapPin, Building, ShieldCheck, ShoppingBag, Bus } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: <MapPin className="w-6 h-6 text-indigo-500" />, text: "5 minutes to HUDA City Centre Metro" },
  { icon: <Building className="w-6 h-6 text-indigo-500" />, text: "Close to IFFCO Chowk & Cyber Park" },
  { icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />, text: "Quiet, safe Sector 31 neighborhood" },
  { icon: <ShoppingBag className="w-6 h-6 text-indigo-500" />, text: "Groceries, chemists & cafés nearby" },
  { icon: <Bus className="w-6 h-6 text-indigo-500" />, text: "Easy access to cabs, autos & buses" },
];


const LocationBenefits = () => {
  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif mb-6">
          Why Our Location Works for You
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
  Located in the heart of Sector 31, Gurugram — everything you need is within reach, from metro access to food and fitness.
</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 bg-indigo-100 rounded-full">{item.icon}</div>
              <p className="text-gray-800 text-base font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;
