import React from "react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-cyan-200/50 selection:text-cyan-900 font-sans overflow-hidden">
      
      {/* Background Ambient Glows (Adjusted for light mode) */}
      <div className="pointer-events-none fixed top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-400/20 blur-[120px]" />

      {/* Hero Section */}
      <header className="relative w-full px-4 pt-32 pb-16 md:px-8 lg:pt-48 lg:pb-24 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 mb-6">
          Beyond the Interface.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 font-light tracking-wide">
          We are a collective of architects and engineers forging the next generation of digital infrastructure. 
        </p>
      </header>

      {/* The Re-imagined "Who We Are" Component */}
      <section className="relative w-full px-4 py-20 md:px-8 lg:py-32 z-10">
        <div className="mx-auto max-w-6xl">
          
          {/* Subtle Light Badge */}
          <div className="mb-8 md:mb-12">
            <span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-cyan-700 uppercase shadow-sm">
              Who we are
            </span>
          </div>

          {/* Large Inline Image Typography */}
          <h2 className="text-[2.5rem] font-medium leading-[1.15] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[5.5rem]">
            For architects writing their first script to{" "}
            
            {/* Inline Image 1 (Cyberpunk/Tech) */}
            <span className="mx-2 inline-block h-[0.85em] w-[2.2em] -translate-y-[0.1em] align-middle overflow-hidden rounded-full shadow-md border border-gray-200 relative">
              <div className="absolute inset-0 bg-cyan-500/10 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                alt="Circuit board close up"
                className="h-full w-full object-cover grayscale-[10%]"
              />
            </span>{" "}
            
            deploying a perfect distributed system, we engineer every layer of the stack{" "}
            
            {/* Inline Image 2 (Server/Data) */}
            <span className="mx-2 inline-block h-[0.85em] w-[2.2em] -translate-y-[0.1em] align-middle overflow-hidden rounded-full shadow-md border border-gray-200 relative">
              <div className="absolute inset-0 bg-fuchsia-500/10 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
                alt="Server racks"
                className="h-full w-full object-cover grayscale-[10%]"
              />
            </span>{" "}
            
            to make you rethink what's possible on the web.
          </h2>
          
        </div>
      </section>

      {/* Light Mode Cards Section */}
      <section className="relative w-full px-4 py-20 md:px-8 z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-8 border border-cyan-200">
                <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Performance First</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We believe speed is a feature. By stripping away abstraction layers and embracing bare-metal efficiency, we build systems that don't just scale—they fly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-fuchsia-100 flex items-center justify-center mb-8 border border-fuchsia-200">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Privacy by Design</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                In a world of excessive data harvesting, we architect solutions that keep processing local and secure, giving power back to the user without compromising utility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-4 py-32 md:px-8 text-center z-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-black">
            Ready to build the future?
          </h2>
          <button className="px-8 py-4 rounded-full bg-black text-white font-semibold tracking-wide hover:bg-gray-800 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
            Initialize Project
          </button>
        </div>
      </section>

    </div>
  );
}