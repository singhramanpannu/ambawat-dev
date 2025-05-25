import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-extrabold animate-pulse">AmbawatPG</h1>
          <p className="text-sm text-gray-400 mt-1 italic">Find your perfect PG home with ease</p>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

       
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PGFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
