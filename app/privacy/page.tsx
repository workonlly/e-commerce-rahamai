import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-fuchsia-500/30 selection:text-fuchsia-900 font-sans overflow-hidden">
      
      {/* Ambient Background Glows (Adjusted for light mode) */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-32">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-200 pb-10">
          <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase shadow-sm mb-6">
            Data Protocol
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Privacy by Architecture.
          </h1>
          <p className="text-lg text-gray-600 font-light tracking-wide leading-relaxed">
            We don't just write privacy policies; we engineer systems where privacy is the default state. No unnecessary telemetry, no hidden trackers. Just raw performance and absolute data sovereignty.
          </p>
        </div>

        {/* Core Principles (Light Mode Cards) */}
        <div className="space-y-6">
          
          <section className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-sm"></div>
              Local-First Processing
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              Where possible, computational loads and models are deployed locally. By keeping execution environments close to the metal and on your hardware, your sensitive inputs never cross the network boundary. What happens on your machine, stays on your machine.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-sm"></div>
              Zero Telemetry
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              We collect strictly what is required for the system to function. There are no silent background analytics, no behavioral profiling, and no third-party data brokering. Logs are ephemeral, and diagnostic reporting is strictly opt-in.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-sm"></div>
              Cryptographic Security
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              Any data that must transit through our nodes is secured using state-of-the-art cryptographic protocols. From the packet layer to the application layer, we treat every byte as highly classified, ensuring end-to-end integrity.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-sm"></div>
              Your Rights & Access
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              You own your footprint. You retain the right to request full exports of any data stored on our infrastructure or mandate its immediate, secure deletion. We provide automated CLI and web tools to execute these requests instantly.
            </p>
          </section>

        </div>

        {/* Footer / Meta Data */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 font-mono">Last updated: June 2026</p>
          <div className="flex gap-6">
            <button className="text-cyan-600 hover:text-cyan-800 transition-colors font-semibold tracking-wide">
              Request Data Audit
            </button>
            <button className="text-fuchsia-600 hover:text-fuchsia-800 transition-colors font-semibold tracking-wide">
              Contact SecOps
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}