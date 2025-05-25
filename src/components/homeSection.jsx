import React from "react";
import '../css/home.css'

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center bg-no-repeat pt-24 flex items-center justify-center"
      // Add your background image in CSS or inline style
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-white font-extrabold text-6xl sm:text-6xl md:text-7xl leading-snug">
  Your Comfortable Stay Begins at Ambawat PG
</h1>


      </div>
    </section>
  );
};

export default HomeSection;
