import React from "react";
import { ChevronDown, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute text-white top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
      
      {/* LEFT MENU */}
      <div className="flex-1 flex items-center gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
        <a href="/contact" className="hover:opacity-75 transition-opacity">
          Contact
        </a>
        
        <span className="text-white/60 font-light">|</span>
        
        <a href="/store" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity">
          Store
          <ChevronDown size={14} strokeWidth={3} />
        </a>
        
        <span className="text-white/60 font-light">|</span>
        
        {/* INFO HOVER DROPDOWN */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1.5 hover:opacity-75 transition-opacity">
            Info
            <ChevronDown size={14} strokeWidth={3} className="transition-transform duration-200 group-hover:rotate-180" />
          </div>

          {/* The Dropdown Box */}
          <div className="absolute top-full left-0 mt-4 hidden group-hover:flex flex-col bg-white text-black shadow-lg py-4 px-5 min-w-[200px] rounded-sm gap-3 z-50">
            {/* Invisible bridge to keep hover active when moving mouse down */}
            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
            
            <a href="/aboutus" className="hover:text-gray-500 transition-colors">
              About Us
            </a>
            <a href="/privacy" className="hover:text-gray-500 transition-colors">
              Privacy Policy
            </a>
            <a href="/termsandcondition" className="hover:text-gray-500 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
        
      </div>

      {/* CENTER LOGO */}
      <div className="flex-1 flex justify-center">
        {/* The relative wrapper ensures the logo stays centered horizontally but escapes the vertical flow */}
        <div className="relative flex justify-center items-center w-full">
          <a href="/" className="absolute top-[-60px]"> {/* Adjust top value to move it up/down */}
            <img 
              src="/rahamai.png" 
              alt="Logo" 
              /* h-[150px] sets a specific height. Change 150px to whatever size you prefer */
              className="object-contain h-[150px] w-auto max-w-none" 
            />
          </a>
        </div>
      </div>

      {/* RIGHT MENU */}
      <div className="flex-1 flex items-center justify-end gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
        <a href="/signup" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <User size={16} strokeWidth={2.5} />
          Sign Up
        </a>
        
        <span className="text-white/60 font-light">|</span>
        
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