import React from 'react';

// Define the structure for our product data
interface Product {
  id: string;
  badge?: 'SALE' | 'NEW';
  category: string;
  title: string;
  price: string;
  sizes: string[];
  imageUrl: string;
}

// Mock data based on the provided image
const products: Product[] = [
  {
    id: '1',
    badge: 'SALE',
    category: 'Blouses & Knits',
    title: 'SEQUIN DETAIL EMBELLISH CARDIG...',
    price: '$ 889.00 USD',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', // Placeholder
  },
  {
    id: '2',
    badge: 'NEW',
    category: 'Pants & Skirts',
    title: 'RIBBED KNIT CARDIGAN',
    price: '$ 1,485.04 USD',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.unsplash.com/photo-1434389678059-ff0db60b06a5?q=80&w=1000&auto=format&fit=crop', // Placeholder
  },
  {
    id: '3',
    category: 'Pants & Skirts',
    title: 'SILK BLEND DRAWSTRING PANT',
    price: '$ 1,924.69 USD',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop', // Placeholder
  },
  {
    id: '4',
    badge: 'SALE',
    category: 'Pants & Skirts',
    title: 'LINEN BLEND DRAWSTRING PANT',
    price: '$ 2,685.12 USD',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop', // Placeholder
  },
];

export default function ImageGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-gray-900">
      
      {/* Header Area */}
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-3xl font-medium tracking-wide">HOT COLLECTION</h2>
        <a href="#" className="text-sm font-medium hover:underline flex items-center gap-1 text-gray-700">
          View All <span className="text-xs">&gt;</span>
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col">
            
            {/* Image Container with Badge */}
            <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden mb-4">
              {product.badge && (
                <div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-bold tracking-wider rounded-sm z-10 shadow-sm">
                  {product.badge}
                </div>
              )}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-grow">
              <p className="text-xs text-gray-500 mb-1">{product.category}</p>
              <h3 className="text-xs font-bold uppercase tracking-wide mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-xs text-gray-600 mb-4">{product.price}</p>
              
              <div className="mt-auto">
                {/* Size Selector */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      className="w-8 h-8 flex items-center justify-center text-[10px] border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-black text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </section>
  );
}