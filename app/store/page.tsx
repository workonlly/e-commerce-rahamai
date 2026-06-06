'use client';
import React, { useState } from "react";

const categories = [
  "ALL",
  "DRESSES",
  "BRIDAL",
  "BLOUSES & KNITS",
  "PANTS & SKIRTS",
  "JACKETS",
  "T-SHIRTS & TOPS",
];

const products = [
  {
    id: 1,
    category: "Dresses",
    name: "PLEATED EMERALD MIDI DRESS",
    price: "$ 1,754.00 USD",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    isSale: false,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    category: "Dresses",
    name: "CHIFFON MIDI DRESS IN DEEP BURG...",
    price: "$ 2,289.35 USD",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=600&auto=format&fit=crop",
    isSale: false,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    category: "Dresses",
    name: "SATIN MAXI DRESS IN DEEP PLUM",
    price: "$ 899.00 USD",
    image: "https://images.unsplash.com/photo-1572804013309-8c98e10f1ba4?q=80&w=600&auto=format&fit=crop",
    isSale: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    category: "Dresses",
    name: "VELVET MIDI DRESS IN DEEP EMERALD",
    price: "$ 2,619.07 USD",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=600&auto=format&fit=crop",
    isSale: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export default function StoreGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-200 py-16 px-4 md:px-8 font-sans overflow-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-cyan-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Category Navigation */}
        <nav className="mb-16 flex flex-wrap justify-center gap-6 md:gap-10 border-b border-white/[0.05] pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-4 text-xs md:text-sm font-semibold tracking-[0.15em] transition-all relative
                ${activeCategory === category ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"}
              `}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Sale Badge */}
                {product.isSale && (
                  <span className="absolute top-4 left-4 rounded-full border border-fuchsia-500/30 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-fuchsia-400 uppercase shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                    Sale
                  </span>
                )}
                
                {/* Dark Overlay Gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col">
                <span className="text-gray-500 text-[11px] uppercase tracking-wider mb-2 font-mono">
                  {product.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wide mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-cyan-400 font-mono text-sm mb-6">
                  {product.price}
                </p>

                {/* Size Selector */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSizes[product.id] === size;
                    return (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-mono transition-all duration-300
                          ${isSelected 
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
                            : "bg-transparent border border-white/10 text-gray-400 hover:border-white/30 hover:text-gray-200"
                          }
                        `}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full py-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Add to Cart
                </button>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}