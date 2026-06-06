import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-transparent">
      
      {/* Top Section: 4-Column Grid with Vertical Dividers */}
      <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-4 md:divide-x md:divide-y-0 md:divide-black/10">
        
        {/* Column 1: Branding & Description */}
        <div className="px-6 py-16 md:px-8 lg:px-10">
          {/* Logo */}
          <a href="/" className="mb-6 flex items-center gap-2 text-[#2c4c1f]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M8 11h8" />
              <path d="M12 11v6" />
            </svg>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "serif" }}>
              PadelthonClub
            </span>
          </a>
          
          <p className="text-[14px] leading-relaxed text-gray-500">
            Whether you’re here to compete, improve, or just have fun, you’ll
            find players who push you, cheer for you, and maybe even share
            a drink with you after the game.
          </p>
        </div>

        {/* Column 2: Empty Spacer (Visible on medium+ screens) */}
        <div className="hidden md:block"></div>

        {/* Column 3: Main Pages */}
        <div className="px-6 py-16 md:px-8 lg:px-10">
          <h3 className="mb-8 text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Main Pages
          </h3>
          <ul className="flex flex-col gap-4 text-[15px] text-gray-700">
            <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-black transition-colors">Services</a></li>
            <li><a href="/store" className="hover:text-black transition-colors">Store</a></li>
            <li><a href="/event" className="hover:text-black transition-colors">Event</a></li>
            <li><a href="/contact" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="/about" className="hover:text-black transition-colors">About</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media & Utility */}
        <div className="flex justify-between px-6 py-16 md:px-8 lg:px-10">
          
          {/* Social Links */}
          <div>
            <h3 className="mb-8 text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Social Media
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-700">
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Linkedin</a></li>
            </ul>
          </div>

          {/* Utility Links */}
          <div className="text-right">
            <h3 className="mb-8 text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Utility
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-700">
              <li><a href="/license" className="hover:text-black transition-colors">License</a></li>
              <li><a href="/style-guide" className="hover:text-black transition-colors">Style Guide</a></li>
              <li><a href="/changelog" className="hover:text-black transition-colors">Changelog</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 px-6 py-6 text-[13px] text-gray-500 md:flex-row md:px-8 lg:px-10">
        <p>
          Developed by <span className="font-medium text-[#2c4c1f]">Pylos Studio</span> & Powered by <span className="font-medium text-[#2c4c1f]">Webflow</span>
        </p>
        <p>
          ©2025 Pylos Studio® All rights reserved.
        </p>
      </div>
      
    </footer>
  );
}