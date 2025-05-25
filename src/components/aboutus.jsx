import React from "react";
import { motion } from "framer-motion";
import img1 from "../../public/images/image-1.webp";
import img2 from "../../public/images/Image-2.webp";
import img3 from "../../public/images/Image-3.webp";

const AboutUsSection = () => {
  return (
    <section
      id="aboutus"
      className="w-full py-24 px-6 md:px-12 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h4 className="text-blue-600 text-sm uppercase tracking-widest font-semibold">
            About Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight">
  More Than Just a PG — It’s Where You Belong
</h2>
<p className="text-gray-600 text-lg leading-relaxed">
  Whether you’re starting a new chapter as a student or settling in for work, Ambawat PG offers the right mix of comfort, convenience, and care. Our fully furnished rooms, friendly atmosphere, and round-the-clock support make it easy to feel at home — from day one.
</p>

        </motion.div>

        {/* Right Images */}
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[300px] sm:h-[400px] md:h-[500px]"
>
  <div className="row-span-2 h-full overflow-hidden rounded-2xl shadow-md">
    <img
      src={img1}
      alt="Long PG room"
      className="w-full h-full object-cover transition duration-500 hover:scale-105 hover:rotate-1"
    />
  </div>
  <div className="h-full overflow-hidden rounded-2xl shadow-md">
    <img
      src={img2}
      alt="Small top"
      className="w-full h-full object-cover transition duration-500 hover:scale-105 hover:-rotate-1"
    />
  </div>
  <div className="h-full overflow-hidden rounded-2xl shadow-md">
    <img
      src={img3}
      alt="Small bottom"
      className="w-full h-full object-cover transition duration-500 hover:scale-105 hover:rotate-1"
    />
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default AboutUsSection;
