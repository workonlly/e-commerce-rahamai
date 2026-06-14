"use client";

import React, { useState } from "react";

const categories = [
  "ALL",
  "DRESSES",
  "BLOUSES & KNITS",
  "PANTS & SKIRTS",
  "BRIDAL",
];

const products = [
  {
    id: 1,
    badge: "SALE",
    category: "Dresses",
    title: "PLEATED EMERALD MIDI DRESS",
    price: "$ 1,754.00 USD",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "NEW",
    category: "Blouses & Knits",
    title: "SEQUIN DETAIL EMBELLISH CARDIGAN",
    price: "$ 889.00 USD",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Pants & Skirts",
    title: "SILK BLEND DRAWSTRING PANT",
    price: "$ 1,924.69 USD",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    badge: "SALE",
    category: "Pants & Skirts",
    title: "LINEN BLEND DRAWSTRING PANT",
    price: "$ 2,685.12 USD",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function StoreGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  // Filter products based on active category tab
  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category.toUpperCase() === activeCategory);

  return (
    <section className="min-h-screen bg-[#FAF9F6] text-[#3E3228] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#3E3228]/10 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-wide text-[#3E3228]">
            Curated Collections
          </h2>
          <a href="/shop" className="text-xs font-semibold uppercase tracking-[0.2em] hover:text-[#e7a026] transition-colors flex items-center gap-1">
            View All <span className="text-[10px]">&gt;</span>
          </a>
        </div>

        {/* Category Navigation */}
        <nav className="mb-12 flex flex-wrap gap-6 md:gap-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-1 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative
                  ${isActive ? "text-[#3E3228]" : "text-[#5A4A3C]/60 hover:text-[#3E3228]"}
                `}
              >
                {category}
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e7a026]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#EAE7E0] overflow-hidden mb-5">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-[#3E3228] z-10 shadow-sm uppercase">
                    {product.badge}
                  </div>
                )}
                
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 sepia-[10%]"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <span className="text-[10px] text-[#5A4A3C] uppercase tracking-widest mb-1.5">
                  {product.category}
                </span>
                <h3 className="font-serif text-base font-medium text-[#3E3228] mb-1 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-[13px] font-light text-[#5A4A3C] mb-5">
                  {product.price}
                </p>

                <div className="mt-auto">
                  {/* Size Selector */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSizes[product.id] === size;
                      return (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`w-8 h-8 flex items-center justify-center text-[10px] transition-colors duration-300
                            ${isSelected 
                              ? "bg-[#3E3228] border-[#3E3228] text-white" 
                              : "border border-[#3E3228]/15 text-[#5A4A3C] hover:border-[#3E3228] hover:text-[#3E3228] bg-transparent"
                            }
                          `}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-transparent border border-[#3E3228] text-[#3E3228] py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#3E3228] hover:text-white transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}