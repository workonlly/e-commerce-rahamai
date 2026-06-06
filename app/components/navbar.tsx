import React from "react";
import { ChevronDown, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute text-white top-0 left-0 w-full z-50 px-8 py-6 text-black flex items-center justify-between">
      
      {/* LEFT MENU */}
      <div className="flex-1 flex items-center gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
        <a href="/contact" className="hover:opacity-75 transition-opacity">
          Contact
        </a>
        
        <span className="text-white font-light">|</span>
        
        <a href="/store" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity uppercase tracking-widest font-bold">
          STORE
          <ChevronDown size={14} strokeWidth={3} />
        </a>
        
        <span className="text-white font-light">|</span>
        
        <a href="/privacy" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity uppercase tracking-widest font-bold">
          Privacy
          <ChevronDown size={14} strokeWidth={3} />
        </a>
        <a href="/aboutus" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity uppercase tracking-widest font-bold">
          About Us
          <ChevronDown size={14} strokeWidth={3} />
        </a>
        
        <a href="/termsandcondition" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity uppercase tracking-widest font-bold">
          Terms & Conditions
          <ChevronDown size={14} strokeWidth={3} />
        </a>
        
      </div>

      {/* CENTER LOGO */}
      <div className="flex-1 flex justify-center">
        <a href="/" className="text-xl sm:text-2xl font-bold tracking-[0.2em]">
          AVOLIN
        </a>
      </div>

      {/* RIGHT MENU */}
      <div className="flex-1 flex items-center justify-end gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
        <a href="/signup" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <User size={16} strokeWidth={2.5} />
          Sign Up
        </a>
        
        <span className="text-white font-light">|</span>
        
        <a href="/cart" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <ShoppingBag size={16} strokeWidth={2.5} />
          Cart
          
          {/* Cart Counter Badge */}
          <span className="ml-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/60 text-[10px] leading-none">
            0
          </span>
        </a>
      </div>

    </nav>
  );
}