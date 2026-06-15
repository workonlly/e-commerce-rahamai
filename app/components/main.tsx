import React from 'react';
import { ChevronDown, User, ShoppingBag, Globe, ShieldCheck, Undo2, Truck, Heart } from 'lucide-react';

export default function Hero() {
  // Base items
  const baseItems = [
    { icon: <Globe size={14} />, text: "WORLDWIDE SUPPORT" },
    { icon: <ShieldCheck size={14} />, text: "SECURE CHECKOUT" },
    { icon: <Undo2 size={14} />, text: "FREE 7 DAY RETURN" },
    { icon: <Truck size={14} />, text: "FAST SHIPPING" },
    { icon: <Heart size={14} />, text: "TRUSTED BY THOUSANDS" }
  ];

  // We multiply the items to guarantee the block is wider than any 4K/ultra-wide screen.
  // This completely eliminates any chance of a blank space appearing during the loop.
  const bannerItems = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  return (
    <div className="relative h-screen w-full bg-gray-900 font-sans text-white overflow-hidden">
      
      {/* Seamless Marquee Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            white-space: nowrap;
            /* Increased duration slightly because the track is much longer now */
            animation: marquee 40s linear infinite; 
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Background Images */}
      {/* Desktop Banner */}
      <img
        src="/banner/banner.png"
        alt="Hero Banner"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: 'brightness(1.1)' }}
      />
      {/* Mobile Banner */}
      <img
        src="/banner/moblilebanner.png"
        alt="Hero Banner Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: 'brightness(1.1)' }}
      />

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
       
      </main>

      {/* UPDATED: Bottom Amber Scrolling Banner (Gapless & Continuous) */}
      <div className="absolute bottom-0 w-full bg-[#e7a026] text-black py-3 z-20 overflow-hidden marquee-container   shadow-[0_-10px_30px_rgba(231,160,38,0.15)] flex">
        
        {/* First Marquee Block */}
        <div className="animate-marquee flex gap-12 px-6 items-center text-[12px] font-semibold uppercase tracking-[0.15em]">
          {bannerItems.map((item, index) => (
            <React.Fragment key={`block1-${index}`}>
              <span className="flex items-center gap-2">
                {item.icon} {item.text}
              </span>
              <span className="text-black/30 font-bold">|</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Exact Duplicate Block for the Seamless Infinite Loop */}
        <div className="animate-marquee flex gap-12 px-6 items-center text-[13px] font-semibold uppercase tracking-[0.15em]" aria-hidden="true">
          {bannerItems.map((item, index) => (
            <React.Fragment key={`block2-${index}`}>
              <span className="flex items-center gap-2">
                {item.icon} {item.text}
              </span>
              <span className="text-black/30 font-bold">|</span>
            </React.Fragment>
          ))}
        </div>

      </div>

    </div>
  );
}