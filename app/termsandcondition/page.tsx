import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-cyan-500/30 selection:text-cyan-900 font-sans overflow-hidden">
      
      {/* Background Ambient Glows (Adjusted for light mode) */}
      <div className="pointer-events-none fixed top-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-200 pb-10">
          <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase shadow-sm mb-6">
            End User License
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Terms of Service.
          </h1>
          <p className="text-lg text-gray-600 font-light tracking-wide leading-relaxed max-w-2xl">
            By initializing our software, utilizing our foundation crates, or connecting to our infrastructure, you agree to the following operational parameters and licensing conditions.
          </p>
        </div>

        {/* Content Layout: Sticky Sidebar Navigation + Scrolling Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-4 border-l border-gray-200 pl-6 font-mono text-sm">
              <a href="#section-access" className="block text-cyan-600 hover:text-cyan-800 transition-colors font-semibold">01. Infrastructure Access</a>
              <a href="#section-local" className="block text-gray-500 hover:text-black transition-colors">02. Local Deployments</a>
              <a href="#section-security" className="block text-gray-500 hover:text-black transition-colors">03. Security & Audits</a>
              <a href="#section-liability" className="block text-gray-500 hover:text-black transition-colors">04. System Liability</a>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 space-y-12">
            
            <section id="section-access" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold mb-6 text-black flex items-center gap-3">
                <span className="font-mono text-cyan-600 text-lg">01.</span>
                Infrastructure Access & CLI Usage
              </h2>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm text-gray-700 leading-relaxed space-y-4 font-light">
                <p>
                  Access to our core services and high-performance APIs is granted strictly for developmental, research, and production use as outlined in your current tier. You agree to utilize our CLI tools and orchestrators within standard operational limits.
                </p>
                <p>
                  Any attempts to bypass rate limits, deliberately trigger runtime panics, or abuse computational resources will result in immediate API key revocation.
                </p>
              </div>
            </section>

            <section id="section-local" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold mb-6 text-black flex items-center gap-3">
                <span className="font-mono text-fuchsia-600 text-lg">02.</span>
                Local Model Deployments
              </h2>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm text-gray-700 leading-relaxed space-y-4 font-light">
                <p>
                  We prioritize privacy-first architectures. When you deploy our inference models or engines locally, you retain full ownership of the generated context windows, logs, and outputs. 
                </p>
                <p>
                  However, reverse-engineering the proprietary weighting of our foundational models or redistributing compiled immediate-mode UI binaries without explicit commercial licensing is strictly prohibited.
                </p>
              </div>
            </section>

            <section id="section-security" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold mb-6 text-black flex items-center gap-3">
                <span className="font-mono text-cyan-600 text-lg">03.</span>
                Authorized Security Research
              </h2>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm text-gray-700 leading-relaxed space-y-4 font-light">
                <p>
                  We welcome rigorous, good-faith security testing from the community. If you discover a vulnerability, we ask that you report it through our official bug bounty channels.
                </p>
                <p className="border-l-2 border-fuchsia-500/50 pl-4 text-gray-800 bg-fuchsia-50/50 py-2 rounded-r-lg">
                  <strong className="text-fuchsia-600 font-semibold">Proviso:</strong> Unauthorized packet analysis, aggressive penetration testing, or cryptographic circumvention outside of our designated sandbox environments or official Capture The Flag (CTF) events is a violation of these terms.
                </p>
              </div>
            </section>

            <section id="section-liability" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold mb-6 text-black flex items-center gap-3">
                <span className="font-mono text-gray-500 text-lg">04.</span>
                Limitation of Liability
              </h2>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm text-gray-700 leading-relaxed space-y-4 font-light">
                <p>
                  Our software is provided "as is," without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from out of, or in connection with the software or the use or other dealings in the software.
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Terminal-style Acceptance Footer (Kept dark to mimic a terminal) */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="rounded-xl bg-gray-900 border border-gray-800 p-6 font-mono text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div>
              <p className="text-gray-400 mb-2">// To accept these terms, initialize the configuration:</p>
              <p className="text-cyan-400">
                <span className="text-gray-500 mr-2">$</span>
                system config --accept-tos
              </p>
            </div>
            <button className="px-6 py-3 rounded-lg bg-white hover:bg-gray-200 text-black font-semibold transition-colors border border-transparent whitespace-nowrap">
              Accept & Continue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}