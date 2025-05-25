import React from "react";
import img1 from "../../public/images/image1.jpeg";
import img2 from "../../public/images/image2.jpeg";
import img3 from "../../public/images/image3.jpeg";
import img4 from "../../public/images/image4.jpeg";
import img5 from "../../public/images/bed1.jpeg";
import img6 from "../../public/images/image6.jpeg";
import img7 from "../../public/images/bed2.jpeg";
import img8 from "../../public/images/bed3.jpeg";
import img9 from "../../public/images/bed4.jpeg";
import img10 from "../../public/images/washroom2.jpeg";
import img11 from "../../public/images/washroom1.jpeg";

const images = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10,img11];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
