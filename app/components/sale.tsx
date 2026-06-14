'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data - replace these with your actual image paths and product details
const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583391733958-650bac0bdf2a?q=80&w=600&auto=format&fit=crop",
    title: "Lilac Georgette Flowy Kurta Set...",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1617261053158-724f70db2b1b?q=80&w=600&auto=format&fit=crop",
    title: "Mint Green Embellished Saree...",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=600&auto=format&fit=crop",
    title: "Yellow Dola Silk Leheriya Woven Sar...",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    title: "Brown Embellished Lehenga Choli...",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=600&auto=format&fit=crop",
    title: "Red Solid Anarkali Suit Set...",
  },
];

export default function TrendingSlider() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle item

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Helper to calculate the visual style based on distance from the active slide
  const getCardStyle = (index:any) => {
    let diff = index - activeIndex;

    // Adjust for infinite visual loop
    if (diff > Math.floor(slides.length / 2)) diff -= slides.length;
    if (diff < -Math.floor(slides.length / 2)) diff += slides.length;

    const absDiff = Math.abs(diff);
    const isActive = absDiff === 0;

    return {
      // Move left/right by 65% of card width, scale down by 12% per step
      transform: `translateX(${diff * 65}%) scale(${1 - absDiff * 0.12})`,
      // Bring active to front, push others back
      zIndex: 50 - absDiff * 10,
      // Hide cards that are too far out
      opacity: absDiff > 2 ? 0 : 1,
      // Optional: Dim inactive slides slightly
      filter: isActive ? "brightness(100%)" : "brightness(80%)",
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl mb-12 text-gray-800 tracking-wide font-light">
        Trending Styles On SALE
      </h2>

      {/* Slider Container */}
      <div className="relative w-full h-[500px] flex justify-center items-center">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-12 z-[60] bg-gray-500/70 hover:bg-gray-600 transition-colors text-white p-2 rounded-full shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards Wrapper - dictates the base size of the cards */}
        <div className="relative w-[280px] sm:w-[320px] h-[450px]">
          {slides.map((slide, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.id}
                className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out cursor-pointer"
                style={style}
                onClick={() => setActiveIndex(index)} // Allow clicking a side card to focus it
              >
                {/* Image */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay - Only visible on active card */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-white text-sm font-medium mb-3 text-center truncate">
                    {slide.title}
                  </p>
                  <button className="w-full bg-black hover:bg-gray-900 text-white text-xs font-semibold py-3 uppercase tracking-[0.15em] transition-colors">
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-12 z-[60] bg-gray-500/70 hover:bg-gray-600 transition-colors text-white p-2 rounded-full shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
      </div>
    </div>
  );
}