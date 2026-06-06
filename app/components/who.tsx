import React from "react";

export default function WhoWeAre() {
  return (
    <section className="relative w-full px-4 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Badge */}
        <div className="mb-8 md:mb-12">
          <span className="inline-block rounded-full border border-gray-200/80 bg-transparent px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-gray-600 uppercase">
            Who we are
          </span>
        </div>

        {/* 
          Large Inline Image Typography 
          Uses relative units (em) for the inline images so they scale 
          perfectly with the text size across different screen widths.
        */}
        <h2 className="text-[2.5rem] font-medium leading-[1.15] tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
          For players picking up their first racket to{" "}
          
          {/* Inline Image 1 (Racket/Court) */}
          <span className="mx-1 inline-block h-[0.9em] w-[2.2em] -translate-y-[0.1em] align-middle overflow-hidden rounded-full shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1622225369205-2710bcfa0e55?q=80&w=600&auto=format&fit=crop"
              alt="Padel court details"
              className="h-full w-full object-cover"
            />
          </span>{" "}
          
          chasing the perfect shot, we elevate every aspect of the experience{" "}
          
          {/* Inline Image 2 (Tennis/Padel Balls) */}
          <span className="mx-1 inline-block h-[0.9em] w-[2.2em] -translate-y-[0.1em] align-middle overflow-hidden rounded-full shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?q=80&w=600&auto=format&fit=crop"
              alt="Pile of padel balls"
              className="h-full w-full object-cover"
            />
          </span>{" "}
          
          to make you fall in love with the game again and again.
        </h2>
        
      </div>
    </section>
  );
}