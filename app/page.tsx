"use client";

import { useState } from "react";

export default function HomePage() {
  const [cargoOpen, setCargoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0c10] text-zinc-300 font-mono">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#0a0c10]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">
            SECURE TOOL COMPANY
          </span>
          <div className="flex items-center gap-6 text-xs tracking-widest text-zinc-500">
            <a href="#companies" className="hover:text-zinc-200 transition-colors">COMPANIES</a>
            <a href="#founders"  className="hover:text-zinc-200 transition-colors">FOUNDERS</a>
            <a href="mailto:office@securetool.company" className="hover:text-zinc-200 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Sun rising over Earth from orbit"
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10]/20 via-[#0a0c10]/50 to-[#0a0c10]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
              SECURE_TOOL_CO // SYS.ONLINE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            We Solve the World&apos;s<br />
            <span className="text-blue-400">Greatest Challenges</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Our tools and services use Next-Generation IoT (Internet of Things) technology
            and devices to enable property managers, businesses, and homeowners to contribute
            to the sustainable use of the World&apos;s most valuable resources.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://secureblue.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm tracking-widest uppercase transition-colors"
            >
              SECURE Blue →
            </a>
            <button
              onClick={() => setCargoOpen(true)}
              className="px-6 py-3 border border-zinc-600 hover:border-amber-700 text-zinc-300 hover:text-amber-300 text-sm tracking-widest uppercase transition-colors"
            >
              SECURE Cargo →
            </button>
            <a
              href="https://metawork.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-600 hover:border-purple-500 text-zinc-300 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors"
            >
              MetaWork →
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              {
                challenge: "WATER",
                mission:   "We make every drop accountable.",
                company:   "SECURE Blue",
                color:     "text-blue-400",
                dot:       "bg-blue-400",
                border:    "hover:border-blue-900",
              },
              {
                challenge: "SAFETY",
                mission:   "We bring workers home.",
                company:   "SECURE Cargo",
                color:     "text-amber-400",
                dot:       "bg-amber-400",
                border:    "hover:border-amber-900",
              },
              {
                challenge: "COMMERCE",
                mission:   "Economic tools for everyone.",
                company:   "MetaWork",
                color:     "text-purple-400",
                dot:       "bg-purple-400",
                border:    "hover:border-purple-900",
              },
            ].map((item) => (
              <div key={item.challenge} className={`border border-zinc-800 ${item.border} transition-colors p-5`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${item.dot}`} />
                  <span className={`text-xs tracking-[0.15em] uppercase ${item.color}`}>{item.company}</span>
                </div>
                <div className="text-white text-base font-bold tracking-widest uppercase mb-2">
                  {item.challenge}
                </div>
                <div className="text-zinc-500 text-xs leading-relaxed italic">
                  {item.mission}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-zinc-600">SCROLL</span>
          <div className="w-px h-8 bg-zinc-700 animate-pulse" />
        </div>
      </section>

      {/* ── COMPANIES ── */}
      <section id="companies" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs tracking-[0.2em] text-zinc-600 mb-3 uppercase">
              Portfolio // Active Companies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Companies
            </h2>
          </div>

          {/* SECURE Blue */}
          <div className="mb-12 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">NODE_01 // ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">SECURE Blue</h3>
                <div className="text-xs text-blue-400 tracking-widest mb-6">secureblue.earth</div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  An end-to-end autonomous water management ecosystem. SECURE Blue delivers
                  next-generation IoT infrastructure combining live sensor telemetry, smart irrigation
                  controls, leak detection, automated shut-off valves, and atmospheric water generation
                  to reduce waste, protect assets, and improve water resilience.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Autonomous leak detection",
                    "Smart irrigation telemetry",
                    "Atmospheric water generation",
                    "LoRaWAN sensor networks",
                    "Graywater recovery systems",
                    "Remote infrastructure analytics",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-blue-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://secureblue.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs tracking-widest uppercase transition-colors"
                >
                  VISIT SECUREBLUE.EARTH →
                </a>
              </div>
              <div className="p-10 bg-zinc-900/30">
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">System Snapshot</div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { key: "SYS_STATUS",     val: "ONLINE",                  color: "text-green-400" },
                    { key: "ACTIVE_NODES",   val: "1,402",                   color: "text-zinc-300"  },
                    { key: "LEAK_ALERTS",    val: "0 ACTIVE",                color: "text-green-400" },
                    { key: "A2W_YIELD_RATE", val: "482 L/HR",                color: "text-blue-400"  },
                    { key: "LORAWAN_UPLINK", val: "STABLE",                  color: "text-green-400" },
                    { key: "SECTORS",        val: "Golf, Ag, HOA, CRE, Gov", color: "text-zinc-400"  },
                  ].map(({ key, val, color }) => (
                    <div key={key} className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECURE Cargo Control */}
          <div className="mb-12 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">NODE_02 // BUILDING</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">SECURE Cargo Control</h3>
                <div className="text-xs text-amber-400 tracking-widest mb-6">securecargo.tools</div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Inventors of the SuperRatchet and the AnyMount Cargo Control System. SECURE Cargo
                  Control innovates next-generation tools to help workers in the world&apos;s most dangerous
                  industries perform their jobs more efficiently and safely — whether hauling a weekend
                  toy or suspending an I-beam 20 stories off the ground.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "SuperRatchet tie-down system",
                    "AnyMount cargo system",
                    "360Swivel D-Ring solutions",
                    "DOT-C2 reflective safety tape",
                    "Heavy-duty winch combos",
                    "Industrial work safety gear",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-amber-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCargoOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs tracking-widest uppercase transition-colors"
                >
                  VISIT SECURECARGO.TOOLS →
                </button>
              </div>
              <div className="p-10 bg-zinc-900/30">
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">Product Intel</div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { key: "FLAGSHIP",    val: "SuperRatchet System",       color: "text-zinc-300"  },
                    { key: "PLATFORM",    val: "AnyMount CC System",        color: "text-zinc-300"  },
                    { key: "INDUSTRIES",  val: "Construction, Transport",    color: "text-zinc-400"  },
                    { key: "COMPLIANCE",  val: "DOT Certified",              color: "text-green-400" },
                    { key: "DUTY_RATING", val: "Heavy & Light",              color: "text-zinc-300"  },
                    { key: "USE_CASES",   val: "Hauling, Lifting, Securing", color: "text-zinc-400"  },
                  ].map(({ key, val, color }) => (
                    <div key={key} className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MetaWork */}
          <div className="border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">NODE_03 // ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">MetaWork</h3>
                <div className="text-xs text-purple-400 tracking-widest mb-6">metawork.tools</div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  A Web3 creator platform where artists, designers, and entrepreneurs upload their
                  intellectual property, design custom products, and earn royalties through on-chain
                  ownership. MetaWork connects creators to print-on-demand fulfillment and e-commerce
                  — turning original IP into a scalable passive income stream.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "IP upload & on-chain ownership",
                    "Custom product design canvas",
                    "Algorand blockchain royalties",
                    "Print-on-demand fulfillment",
                    "Creator earnings dashboard",
                    "Customized Aisles to display Products/IP",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-purple-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://metawork.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white text-xs tracking-widest uppercase transition-colors"
                >
                  VISIT METAWORK.TOOLS →
                </a>
              </div>
              <div className="p-10 bg-zinc-900/30">
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">Platform Stats</div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { key: "SYS_STATUS",    val: "ONLINE",                       color: "text-green-400"  },
                    { key: "BLOCKCHAIN",    val: "Algorand",                     color: "text-purple-400" },
                    { key: "FULFILLMENT",   val: "Global Mfg. Network",          color: "text-zinc-300"   },
                    { key: "STOREFRONT",    val: "Custom Aisle",                 color: "text-zinc-300"   },
                    { key: "PRODUCT_TYPES", val: "Merch, IP, Authenticated Docs", color: "text-zinc-400"  },
                    { key: "ROYALTY_MODEL", val: "Per-Use IP Licensing",         color: "text-purple-400" },
                  ].map(({ key, val, color }) => (
                    <div key={key} className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section id="founders" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs tracking-[0.2em] text-zinc-600 mb-3 uppercase">
              Leadership // Founding Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              The Founders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Adam-Paul Smolak */}
            <div className="border border-zinc-800 hover:border-zinc-600 transition-colors p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">FOUNDER_01</span>
              </div>
              <img
                src="/adam-paul-smolak.jpg"
                alt="Adam-Paul Smolak"
                width={64}
                height={64}
                className="w-16 h-16 object-cover mb-6 grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">Adam-Paul Smolak</h3>
              <div className="text-xs text-blue-400 tracking-widest mb-6">CO-FOUNDER // SECURE TOOL CO.</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Visionary entrepreneur and company builder. Adam-Paul co-founded SECURE Tool Company
                with a talent for identifying the right people, technologies, and strategies to tackle
                the world&apos;s most pressing challenges — assembling the teams and partnerships that
                turn bold ideas into operating businesses.
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { k: "ROLE",     v: "Chairman & CEO" },
                  { k: "COMPANY",  v: "SECURE Tool Company" },
                  { k: "FOCUS",    v: "Company Vision, Partnerships" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between border-b border-zinc-800/60 pb-2">
                    <span className="text-zinc-600">{k}</span>
                    <span className="text-zinc-300">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-600">LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/adam-paul-smolak-4b816312/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    /in/adam-paul-smolak
                  </a>
                </div>
              </div>
            </div>

            {/* Scott Holbrook */}
            <div className="border border-zinc-800 hover:border-zinc-600 transition-colors p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">FOUNDER_02</span>
              </div>
              <img
                src="/scott-holbrook.jpg"
                alt="Scott Holbrook"
                width={64}
                height={64}
                className="w-16 h-16 object-cover mb-6 grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">Scott Holbrook</h3>
              <div className="text-xs text-cyan-400 tracking-widest mb-6">CO-FOUNDER // SECURE TOOL CO.</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Inventor and technical founder. Scott built the AnyMount Cargo Control System,
                assembled the IoT infrastructure stack behind SECURE Blue, and pioneers the
                use of LoRaWAN networks for water management. He has a rare talent for turning
                real-world problems into scalable product lines.
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { k: "ROLE",    v: "COO" },
                  { k: "COMPANY", v: "SECURE Tool Company" },
                  { k: "FOCUS",   v: "Operations, Sales, Product Engineering" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between border-b border-zinc-800/60 pb-2">
                    <span className="text-zinc-600">{k}</span>
                    <span className="text-zinc-300">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-600">LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/imscottholbrook/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    /in/imscottholbrook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800/60 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-2">
              SECURE TOOL COMPANY
            </div>
            <div className="text-zinc-600 text-xs">
              Solving the world&apos;s greatest challenges through next-generation IoT tools and services.
            </div>
            <div className="text-zinc-700 text-xs mt-2">TUCSON, AZ // EST. 2025</div>
          </div>
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex flex-wrap gap-6 text-zinc-500">
              <a href="https://secureblue.earth" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors tracking-widest uppercase">SECURE Blue</a>
              <button onClick={() => setCargoOpen(true)} className="hover:text-amber-400 transition-colors tracking-widest uppercase">SECURE Cargo</button>
              <a href="https://metawork.tools" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors tracking-widest uppercase">MetaWork</a>
              <a href="mailto:office@securetool.company" className="hover:text-zinc-300 transition-colors tracking-widest uppercase">Contact</a>
            </div>
            <div className="text-zinc-700 md:text-right">
              © 2025–2026 SECURE TOOL COMPANY
            </div>
          </div>
        </div>
      </footer>

      {/* ── SECURE CARGO PLACEHOLDER MODAL ── */}
      {cargoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setCargoOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 border border-amber-800/60 bg-[#0a0c10] p-10 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCargoOpen(false)}
              className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-300 transition-colors text-xs tracking-widest"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">NODE_02 // COMING SOON</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">SECURE Cargo Control</h3>
            <div className="text-xs text-amber-400 tracking-widest mb-6">securecargo.tools</div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              The SECURE Cargo Control site is under construction. Check back soon for the
              full SuperRatchet and AnyMount product lineup.
            </p>
            <div className="space-y-2 font-mono text-xs mb-8">
              {[
                { key: "STATUS",  val: "BUILDING",                  color: "text-amber-400" },
                { key: "ETA",     val: "COMING SOON",               color: "text-zinc-300"  },
                { key: "CONTACT", val: "office@securetool.company", color: "text-zinc-400"  },
              ].map(({ key, val, color }) => (
                <div key={key} className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-600">{key}</span>
                  <span className={color}>{val}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:office@securetool.company"
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs tracking-widest uppercase transition-colors"
              >
                GET IN TOUCH →
              </a>
              <button
                onClick={() => setCargoOpen(false)}
                className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 text-xs tracking-widest uppercase transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
