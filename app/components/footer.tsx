import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#3E3228]/15 bg-[#FAF9F6]">
      
      {/* Top Section: 4-Column Grid with Vertical Dividers */}
      <div className="grid grid-cols-1 divide-y divide-[#3E3228]/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        
        {/* Column 1: Branding & Description */}
        <div className="px-6 py-16 md:px-8 lg:px-12">
          {/* Logo */}
          <a href="/" className="mb-6 flex items-center hover:opacity-80 transition-opacity">
            {/* Assuming you want to use the Rahamai image logo here */}
            <img src="/rahamai.png" alt="Rahamai Logo" className="h-10 object-contain" />
          </a>
          
          <p className="text-[14px] font-light leading-relaxed text-[#5A4A3C] mt-6">
            From the intricate threads of our first weave to the timeless elegance of the perfect drape, we celebrate every detail of our rich heritage.
          </p>
        </div>

        {/* Column 2: Shop */}
        <div className="px-6 py-16 md:px-8 lg:px-12">
          <h3 className="mb-8 font-serif text-[13px] font-semibold tracking-[0.15em] text-[#3E3228] uppercase">
            Shop
          </h3>
          <ul className="flex flex-col gap-4 text-[14px] font-light text-[#5A4A3C]">
            <li><a href="/shop/women" className="hover:text-[#e7a026] transition-colors">Women</a></li>
            <li><a href="/shop/men" className="hover:text-[#e7a026] transition-colors">Men</a></li>
            <li><a href="/shop/kids" className="hover:text-[#e7a026] transition-colors">Kids</a></li>
            <li><a href="/collections" className="hover:text-[#e7a026] transition-colors">New Arrivals</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="px-6 py-16 md:px-8 lg:px-12">
          <h3 className="mb-8 font-serif text-[13px] font-semibold tracking-[0.15em] text-[#3E3228] uppercase">
            Explore
          </h3>
          <ul className="flex flex-col gap-4 text-[14px] font-light text-[#5A4A3C]">
            <li><a href="/aboutus" className="hover:text-[#e7a026] transition-colors">Our Story</a></li>
            <li><a href="/contact" className="hover:text-[#e7a026] transition-colors">Contact Us</a></li>
            <li><a href="/faqs" className="hover:text-[#e7a026] transition-colors">FAQs</a></li>
            <li><a href="/store" className="hover:text-[#e7a026] transition-colors">Store Locator</a></li>
          </ul>
        </div>

        {/* Column 4: Legal & Social */}
        <div className="flex flex-col justify-between px-6 py-16 md:px-8 lg:px-12">
          
          {/* Social Links */}
          <div>
            <h3 className="mb-8 font-serif text-[13px] font-semibold tracking-[0.15em] text-[#3E3228] uppercase">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-4 text-[14px] font-light text-[#5A4A3C]">
              <li><a href="#" className="hover:text-[#e7a026] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#e7a026] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#e7a026] transition-colors">Pinterest</a></li>
            </ul>
          </div>

          {/* Utility Links */}
          <div className="mt-12 md:mt-0">
            <h3 className="mb-8 font-serif text-[13px] font-semibold tracking-[0.15em] text-[#3E3228] uppercase">
              Legal
            </h3>
            <ul className="flex flex-col gap-4 text-[14px] font-light text-[#5A4A3C]">
              <li><a href="/privacy" className="hover:text-[#e7a026] transition-colors">Privacy Policy</a></li>
              <li><a href="/termsandcondition" className="hover:text-[#e7a026] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#3E3228]/10 px-6 py-8 text-[12px] font-light text-[#5A4A3C] md:flex-row md:px-8 lg:px-12">
        <p className="tracking-wide">
          © 2026 Rahamai. All rights reserved.
        </p>
        <p className="tracking-wide">
          Crafted with elegance.
        </p>
      </div>
      
    </footer>
  );
}