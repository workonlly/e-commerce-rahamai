import React from 'react';
import { ChevronDown, User, ShoppingBag, Globe, ShieldCheck, Undo2, Truck, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-gray-900 font-sans text-white overflow-hidden">
      
      {/* Background Image (Placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1529139574466-a303027c028b?q=80&w=2070&auto=format&fit=crop")',
          filter: 'brightness(0.6)' // Darkens the image slightly so white text is readable
        }}
      />

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-xs md:text-sm font-bold tracking-widest mb-4">
          FASHION SALE YOU CAN'T RESIST
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          EVERYDAY STYLE,<br />REIMAGINED
        </h1>
        
        <p className="text-sm md:text-base max-w-md mb-10 text-gray-200">
          Beautiful basics and elevated layers designed to feel good and look effortless.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-8 py-4 font-bold text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            ALL COLLECTION <span className="text-lg leading-none">›</span>
          </button>
          <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-4 font-bold text-xs tracking-widest hover:bg-white/30 transition-colors">
            ABOUT AVOLIN
          </button>
        </div>
      </main>

      {/* Bottom Yellow Scrolling Banner */}
      <div className="absolute bottom-0 w-full bg-[#E5F511] text-black py-3 z-20 overflow-hidden whitespace-nowrap">
        {/* Note: You can add an 'animate-marquee' class in your tailwind config to make this scroll */}
        <div className="flex gap-8 px-4 items-center text-xs font-bold uppercase tracking-widest justify-around md:justify-start">
          <span className="flex items-center gap-2"><Globe size={14} /> WORLDWIDE SUPPORT</span>
          <span className="text-black/30">|</span>
          <span className="flex items-center gap-2"><ShieldCheck size={14} /> SECURE CHECKOUT</span>
          <span className="text-black/30">|</span>
          <span className="flex items-center gap-2"><Undo2 size={14} /> FREE 7 DAY RETURN</span>
          <span className="text-black/30">|</span>
          <span className="flex items-center gap-2"><Truck size={14} /> FAST SHIPPING</span>
          <span className="text-black/30 hidden lg:inline">|</span>
          <span className="hidden lg:flex items-center gap-2"><Heart size={14} /> TRUSTED BY THOUSANDS</span>
        </div>
      </div>

    </div>
  );
}