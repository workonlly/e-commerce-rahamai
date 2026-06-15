"use client";

import React, { useState } from "react";
import { ChevronDown, User, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute text-white top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
      
      {/* MOBILE MENU TOGGLE (Left on Mobile) */}
      <div className="flex-1 flex md:hidden items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hover:opacity-75 transition-opacity"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* DESKTOP LEFT MENU */}
      <div className="flex-1 hidden md:flex items-center gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
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
          <a href="/" className="absolute top-[-40px] md:top-[-60px]">
            <img 
              src="/rahamai.png" 
              alt="Logo" 
              className="object-contain h-[100px] md:h-[150px] w-auto max-w-none" 
            />
          </a>
        </div>
      </div>

      {/* RIGHT MENU (Desktop & Mobile) */}
      <div className="flex-1 flex items-center justify-end gap-3 md:gap-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
        <a href="/signup" className="hidden md:flex items-center gap-2 hover:opacity-75 transition-opacity">
          <User size={16} strokeWidth={2.5} />
          Sign Up
        </a>
        
        <span className="hidden md:inline text-white/60 font-light">|</span>
        
        <a href="/cart" className="flex items-center gap-1.5 md:gap-2 hover:opacity-75 transition-opacity">
          <ShoppingBag size={16} strokeWidth={2.5} className="w-5 h-5 md:w-4 md:h-4" />
          <span className="hidden md:inline">Cart</span>
          
          {/* Cart Counter Badge */}
          <span className="ml-0.5 flex h-[16px] w-[16px] md:h-[18px] md:w-[18px] items-center justify-center rounded-full border border-white/60 text-[9px] md:text-[10px] leading-none">
            0
          </span>
        </a>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md text-white flex flex-col py-6 px-6 gap-6 md:hidden z-40 border-t border-white/10">
          <a href="/contact" className="text-sm font-bold tracking-widest uppercase hover:text-gray-300">
            Contact
          </a>
          <div className="h-px bg-white/10 w-full"></div>
          <a href="/store" className="text-sm font-bold tracking-widest uppercase hover:text-gray-300 flex justify-between items-center">
            Store
            <ChevronDown size={16} strokeWidth={2} className="-rotate-90" />
          </a>
          <div className="h-px bg-white/10 w-full"></div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-widest uppercase text-white/50">
              Info
            </span>
            <a href="/aboutus" className="text-sm hover:text-gray-300 pl-4">
              About Us
            </a>
            <a href="/privacy" className="text-sm hover:text-gray-300 pl-4">
              Privacy Policy
            </a>
            <a href="/termsandcondition" className="text-sm hover:text-gray-300 pl-4">
              Terms & Conditions
            </a>
          </div>
          <div className="h-px bg-white/10 w-full"></div>
          <a href="/signup" className="text-sm font-bold tracking-widest uppercase hover:text-gray-300 flex items-center gap-3">
            <User size={18} strokeWidth={2} />
            Sign Up
          </a>
        </div>
      )}

    </nav>
  );
}