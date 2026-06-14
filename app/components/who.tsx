import React from "react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#FAF9F6] px-6 py-24 md:px-12 lg:py-32 flex justify-center">
      <div className="max-w-4xl text-center">
        
        {/* Minimalist Ethnic Badge */}
        <div className="mb-12 flex justify-center">
          <span className="inline-block border-b border-[#3E3228]/30 pb-2 text-[11px] font-medium tracking-[0.3em] text-[#3E3228] uppercase">
            Our Heritage
          </span>
        </div>

        {/* 
          Elegant Serif Typography 
          Uses text-balance for a poetic, centered reading flow
        */}
        <h2 className="font-serif text-[1.75rem] leading-[1.6] text-[#3E3228] sm:text-3xl md:text-4xl lg:text-[3.25rem] lg:leading-[1.4] text-balance">
          From the intricate threads of our first weave{" "}
          
          {/* Inline Image 1 (Fabric/Embroidery) */}
          <span className="mx-2 inline-block h-[0.85em] w-[1.8em] -translate-y-[0.1em] align-middle overflow-hidden rounded-sm shadow-sm transition-transform duration-500 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop"
              alt="Intricate woven fabric"
              className="h-full w-full object-cover sepia-[20%]"
            />
          </span>{" "}
          
          to the timeless elegance of the perfect drape, we celebrate every detail{" "}
          
          {/* Inline Image 2 (Saree/Ethnic Motif) */}
          <span className="mx-2 inline-block h-[0.85em] w-[1.8em] -translate-y-[0.1em] align-middle overflow-hidden rounded-sm shadow-sm transition-transform duration-500 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1583391733958-650bac0bdf2a?q=80&w=600&auto=format&fit=crop"
              alt="Ethnic wear details"
              className="h-full w-full object-cover sepia-[20%]"
            />
          </span>{" "}
          
          to make you fall in love with our traditions all over again.
        </h2>
        
      </div>
    </section>
  );
}