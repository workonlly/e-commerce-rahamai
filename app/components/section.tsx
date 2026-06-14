import React from "react";

const categories = [
  {
    id: "women",
    title: "Women",
    subtitle: "Explore the latest trends",
    link: "/shop/women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "men",
    title: "Men",
    subtitle: "Discover sharp styles",
    link: "/shop/men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "kids",
    title: "Kids",
    subtitle: "Fun & playful fits",
    link: "/shop/kids",
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Shop by Department
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Find your perfect look from our curated collections for everyone in the family.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.link}
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 w-full h-[400px] md:h-full cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={`${category.title} Category`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Text Content */}
            <div className="relative z-10 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">
                {category.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {category.subtitle}
              </p>
              
              {/* Call to Action Button */}
              <span className="inline-block border-b-2 border-white text-white font-semibold pb-1 text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gray-300 hover:border-gray-300">
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}