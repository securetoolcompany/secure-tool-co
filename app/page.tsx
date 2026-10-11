"use client";

import { useState } from "react";

export default function HomePage() {
  const [cargoOpen, setCargoOpen] = useState(false);
  const [depinOpen, setDepinOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0c10] text-zinc-300 font-mono">
      {/* ── NAV ── */}
<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#0a0c10]/90 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
    <a href="#" aria-label="SECURE Tool Company home">
      <img
        src="/secure_tool_logo2.png"
        alt="SECURE Tool Company"
        width={160}
        height={36}
        className="h-9 w-auto object-contain"
      />
    </a>
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
              SECURE_TOOL_CO // SYS.ONLINE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            We Solve the World&apos;s
            <br />
            <span className="text-blue-400">Greatest Challenges</span>
          </h1>

          <div className="max-w-3xl space-y-5 mb-12">
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
              SECURE Tool Company builds businesses that turn real-world
              challenges into practical tools and services. Our four companies
              transform facilities into water nodes, help creators and businesses
              turn ideas into income, operate decentralized infrastructure, and
              develop safer cargo-control equipment.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              From water recovery and government consulting to smart contracts,
              tokenized business deals, connected networks, and industrial
              hardware, we build solutions people can put to work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* ── SECURE BLUE ── */}
            <a
              href="https://secureblue.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-zinc-800 bg-[#0a0c10]/60 p-6 text-left hover:border-blue-500/60 hover:bg-blue-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-blue-400">
                  SECURE Blue
                </span>
              </div>

              <h2 className="text-white text-base font-bold tracking-widest uppercase mb-3">
                On-Site Water Harvesting Technologies
              </h2>

              <p className="text-blue-300 text-sm leading-relaxed italic mb-4">
                We make every drop accountable.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We consult with governments and private entities to assess their
                sites and identify the most cost-effective on-site water
                solutions—from cooling tower recovery and HVAC condensate
                harvesting to graywater recycling and stormwater capture.
              </p>

              <span className="mt-auto pt-4 border-t border-zinc-800 text-xs tracking-widest uppercase text-blue-400 group-hover:text-blue-300 transition-colors">
                Explore SECURE Blue →
              </span>
            </a>

            {/* ── METAWORK ── */}
            <a
              href="https://metawork.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-zinc-800 bg-[#0a0c10]/60 p-6 text-left hover:border-purple-500/60 hover:bg-purple-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-purple-400">
                  MetaWork
                </span>
              </div>

              <h2 className="text-white text-base font-bold tracking-widest uppercase mb-3">
                Real-World Asset Tokenization
              </h2>

              <p className="text-purple-300 text-sm leading-relaxed italic mb-4">
                The home of tokenized revenue streams.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                A real-world asset (RWA) tokenization platform that helps creators
                launch businesses and connects people with opportunities to invest
                in their communities. From creator product sales to local businesses
                and major public projects, we turn revenue streams into shared
                economic opportunity.
              </p>

              <span className="mt-auto pt-4 border-t border-zinc-800 text-xs tracking-widest uppercase text-purple-400 group-hover:text-purple-300 transition-colors">
                Explore MetaWork →
              </span>
            </a>

            {/* ── SECURE DEPIN ── */}
            <button
              type="button"
              onClick={() => setDepinOpen(true)}
              className="group flex flex-col h-full border border-zinc-800 bg-[#0a0c10]/60 p-6 text-left hover:border-teal-500/60 hover:bg-teal-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-teal-400">
                  SECURE DePIN
                </span>
              </div>

              <h2 className="text-white text-base font-bold tracking-widest uppercase mb-3">
                Infrastructure
              </h2>

              <p className="text-teal-300 text-sm leading-relaxed italic mb-4">
                Decentralized networks for the real world.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We invest, deploy and manage decentralized infrastructure—from blockchain
                nodes and distributed compute to wireless connectivity and sensor
                networks—with a focus on dependable real-world operations.
              </p>

              <span className="mt-auto pt-4 border-t border-zinc-800 text-xs tracking-widest uppercase text-teal-400 group-hover:text-teal-300 transition-colors">
                See what we&apos;re building →
              </span>
            </button>

            {/* ── SECURE CARGO ── */}
            <button
              type="button"
              onClick={() => setCargoOpen(true)}
              className="group flex flex-col h-full border border-zinc-800 bg-[#0a0c10]/60 p-6 text-left hover:border-amber-500/60 hover:bg-amber-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-amber-400">
                  SECURE Cargo
                </span>
              </div>

              <h2 className="text-white text-base font-bold tracking-widest uppercase mb-3">
                Safety
              </h2>

              <p className="text-amber-300 text-sm leading-relaxed italic mb-4">
                We bring workers home.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                AnyWinch puts cargo securement where you need it. Our portable,
                clamp-on strap winch features a 360-degree swivel and installs
                without tools or welding—so your tie-down points adapt to
                the load, not the other way around.
              </p>

              <span className="mt-auto pt-4 border-t border-zinc-800 text-xs tracking-widest uppercase text-amber-400 group-hover:text-amber-300 transition-colors">
                See what we&apos;re building →
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-zinc-600">SCROLL</span>
          <div className="w-px h-6 bg-zinc-700 animate-pulse" />
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

          {/* ── NODE_01: SECURE Blue ── */}
          <div className="mb-12 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    NODE_01 // ACTIVE
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  SECURE Blue
                </h3>
                <div className="text-xs text-blue-400 tracking-widest mb-6">
                  secureblue.earth
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  SECURE Blue consults with governments and private entities to assess
                  their sites and identify the most cost-effective ways to recover,
                  reuse, and manage water on-site. From cooling tower recovery and
                  HVAC condensate harvesting to graywater recycling and stormwater
                  capture, we evaluate each solution around the facility&apos;s needs
                  and savings per gallon. Our holistic approach turns facilities
                  into water nodes—capturing local resources and putting them
                  back to work where they&apos;re needed.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Government & private-sector consulting",
                    "Site assessments & cost-per-gallon analysis",
                    "Cooling tower water recovery",
                    "HVAC condensate harvesting",
                    "Graywater recycling & stormwater capture",
                    "On-site water harvesting & recycling",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-blue-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">
                        {feat}
                      </span>
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
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">
                  Our Approach
                </div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    {
                      key: "CLIENTS",
                      val: "Governments + Private Entities",
                      color: "text-zinc-300",
                    },
                    {
                      key: "STARTING_POINT",
                      val: "Site Assessment",
                      color: "text-blue-400",
                    },
                    {
                      key: "MODEL",
                      val: "Facility-Specific Solutions",
                      color: "text-zinc-300",
                    },
                    {
                      key: "LOCATION",
                      val: "On-Site Recovery + Reuse",
                      color: "text-blue-400",
                    },
                    {
                      key: "ECONOMICS",
                      val: "Savings per Gallon",
                      color: "text-green-400",
                    },
                    {
                      key: "GOAL",
                      val: "Facilities into Water Nodes",
                      color: "text-zinc-400",
                    },
                  ].map(({ key, val, color }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                    >
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── NODE_02: MetaWork ── */}
          <div className="mb-12 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    NODE_02 // ACTIVE
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  MetaWork
                </h3>
                <div className="text-xs text-purple-400 tracking-widest mb-6">
                  metawork.tools
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  MetaWork is a real-world asset (RWA) tokenization platform—the home
                  of tokenized revenue streams. We help creators launch businesses
                  around their original work, with tools for product creation,
                  fulfillment, and royalties. Those product sales are one of the
                  revenue streams our platform can tokenize, alongside local
                  businesses and major public projects. Through smart contracts
                  and fractional participation, we connect businesses and projects
                  raising capital with people who want to invest in their
                  communities and share in the value they help create.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Real-world asset (RWA) tokenization",
                    "Smart contracts & tokenized business deals",
                    "Community investment & fractional participation",
                    "Creator business & product-launch tools",
                    "Aisles (custom storefront) & Product fulfillment",
                    "IP licensing, royalties & revenue sharing",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-purple-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">
                        {feat}
                      </span>
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
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">
                  Platform Overview
                </div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    {
                      key: "PLATFORM",
                      val: "RWA Tokenization",
                      color: "text-purple-400",
                    },
                    {
                      key: "ASSETS",
                      val: "Real-World Revenue Streams",
                      color: "text-zinc-300",
                    },
                    {
                      key: "CREATORS",
                      val: "Products, IP + Royalties",
                      color: "text-zinc-300",
                    },
                    {
                      key: "COMMUNITIES",
                      val: "Local Business + Public Projects",
                      color: "text-zinc-400",
                    },
                    {
                      key: "TOOLS",
                      val: "Smart Contracts + Fractional Access",
                      color: "text-purple-400",
                    },
                    {
                      key: "MISSION",
                      val: "Economic Democratization",
                      color: "text-green-400",
                    },
                  ].map(({ key, val, color }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                    >
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── NODE_03: SECURE DePIN ── */}
          <div className="border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    NODE_04 // BUILDING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  SECURE DePIN
                </h3>
                <div className="text-xs text-teal-400 tracking-widest mb-6">
                  securedepin.io
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  SECURE DePIN deploys and operates decentralized physical
                  infrastructure—the nodes, computing resources, wireless networks,
                  and sensors that connect digital systems to the real world.
                  We bring these systems together through hands-on deployment,
                  monitoring, and maintenance, with a focus on reliable connectivity
                  and dependable day-to-day operations.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Blockchain node hosting & operations",
                    "Distributed computing infrastructure",
                    "Wireless network deployment & management",
                    "Sensor networks & field connectivity",
                    "Infrastructure monitoring & maintenance",
                    "Network coordination & uptime management",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-teal-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setDepinOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-600 text-white text-xs tracking-widest uppercase transition-colors"
                >
                  LEARN MORE →
                </button>
              </div>
              <div className="p-10 bg-zinc-900/30">
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">
                  Network Intel
                </div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    {
                      key: "SYS_STATUS",
                      val: "BUILDING",
                      color: "text-teal-400",
                    },
                    {
                      key: "NODES",
                      val: "Hosting + Operations",
                      color: "text-zinc-300",
                    },
                    {
                      key: "COMPUTE",
                      val: "Distributed Infrastructure",
                      color: "text-zinc-300",
                    },
                    {
                      key: "CONNECTIVITY",
                      val: "Wireless + Sensor Networks",
                      color: "text-teal-400",
                    },
                    {
                      key: "OPERATIONS",
                      val: "Deployment + Maintenance",
                      color: "text-green-400",
                    },
                    {
                      key: "FOCUS",
                      val: "Reliability + Uptime",
                      color: "text-zinc-400",
                    },
                  ].map(({ key, val, color }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                    >
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
          
          {/* ── NODE_04: SECURE Cargo Control ── */}
          <div className="mb-12 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    NODE_03 // BUILDING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  SECURE Cargo Control
                </h3>
                <div className="text-xs text-amber-400 tracking-widest mb-6">
                  securecargo.tools
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  AnyWinch gives you the freedom to position cargo tie-downs around
                  your load instead of working around fixed mounting points.
                  Designed for 2-inch straps, its clamp-on mounting system comes
                  in angle-iron, tube-rail, and stake-pocket options. A 360-degree
                  swivel head lets you orient the strap as needed, while the
                  clamp holds the mount in place without tools or welding.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Portable clamp-on strap winch",
                    "360-degree swivel head",
                    "Angle-iron, tube-rail & stake-pocket mounts",
                    "Tool-free, no-weld installation",
                    "Anti-vibration locking cap",
                    "Designed for 2-inch straps",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-amber-400 text-xs mt-0.5">›</span>
                      <span className="text-zinc-400 text-xs leading-relaxed">
                        {feat}
                      </span>
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
                <div className="text-xs tracking-widest text-zinc-600 mb-6 uppercase">
                  Product Intel
                </div>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    {
                      key: "PRODUCT",
                      val: "AnyWinch",
                      color: "text-amber-400",
                    },
                    {
                      key: "APPLICATION",
                      val: "Transport Cargo Securement",
                      color: "text-zinc-300",
                    },
                    {
                      key: "MOUNT_OPTIONS",
                      val: "Angle, Tube, Stake Pocket",
                      color: "text-zinc-400",
                    },
                    {
                      key: "INSTALLATION",
                      val: "No Tools or Welding",
                      color: "text-green-400",
                    },
                    {
                      key: "SWIVEL",
                      val: "360 Degrees",
                      color: "text-zinc-300",
                    },
                    {
                      key: "STRAP_WIDTH",
                      val: "2 Inches",
                      color: "text-zinc-400",
                    },
                  ].map(({ key, val, color }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                    >
                      <span className="text-zinc-600">{key}</span>
                      <span className={color}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                  FOUNDER_01
                </span>
              </div>
              <img
                src="/adam-paul-smolak.jpg"
                alt="Adam-Paul Smolak"
                width={64}
                height={64}
                className="w-16 h-16 object-cover mb-6 grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Adam-Paul Smolak
              </h3>
              <div className="text-xs text-blue-400 tracking-widest mb-6">
                CO-FOUNDER // SECURE TOOL CO.
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Visionary entrepreneur and company builder. Adam-Paul
                co-founded SECURE Tool Company with a talent for identifying the
                right people, technologies, and strategies to tackle the
                world&apos;s most pressing challenges — assembling the teams and
                partnerships that turn bold ideas into operating businesses.
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { k: "ROLE", v: "Chairman & CEO" },
                  { k: "COMPANY", v: "SECURE Tool Company" },
                  { k: "FOCUS", v: "Company Vision, Partnerships" },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-zinc-800/60 pb-2"
                  >
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
                <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                  FOUNDER_02
                </span>
              </div>
              <img
                src="/scott-holbrook.jpg"
                alt="Scott Holbrook"
                width={64}
                height={64}
                className="w-16 h-16 object-cover mb-6 grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Scott Holbrook
              </h3>
              <div className="text-xs text-cyan-400 tracking-widest mb-6">
                CO-FOUNDER // SECURE TOOL CO.
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Inventor and technical founder. Scott built the AnyMount Cargo
                Control System, assembled the IoT infrastructure stack behind
                SECURE Blue, and pioneers the use of LoRaWAN networks for water
                management. He has a rare talent for turning real-world problems
                into scalable product lines.
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { k: "ROLE", v: "COO" },
                  { k: "COMPANY", v: "SECURE Tool Company" },
                  { k: "FOCUS", v: "Operations, Sales, Product Engineering" },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-zinc-800/60 pb-2"
                  >
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
              Solving the world&apos;s greatest challenges with
              innovative, next-generation tools and technology.
            </div>
            <div className="text-zinc-700 text-xs mt-2">
              TUCSON, AZ // EST. 2014
            </div>
          </div>
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex flex-wrap gap-6 text-zinc-500">
              <a
                href="https://secureblue.earth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors tracking-widest uppercase"
              >
                SECURE Blue
              </a>
              <a
                href="https://metawork.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors tracking-widest uppercase"
              >
                MetaWork
              </a>
              <button
                onClick={() => setCargoOpen(true)}
                className="hover:text-amber-400 transition-colors tracking-widest uppercase"
              >
                SECURE Cargo
              </button>
              <button
                onClick={() => setDepinOpen(true)}
                className="hover:text-teal-400 transition-colors tracking-widest uppercase"
              >
                SECURE DePIN
              </button>
              <a
                href="mailto:office@securetool.company"
                className="hover:text-zinc-300 transition-colors tracking-widest uppercase"
              >
                Contact
              </a>
            </div>
            <div className="text-zinc-700 md:text-right">
              © 2014–2026 SECURE TOOL COMPANY
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
              <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                NODE_03 // COMING SOON
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              SECURE Cargo Control
            </h3>
            <div className="text-xs text-amber-400 tracking-widest mb-6">
              securecargo.tools
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              The SECURE Cargo Control site is under construction. Our focus
              is AnyWinch—a portable, clamp-on strap winch that lets you
              position cargo tie-downs where your load needs them, without
              tools or welding.
            </p>
            <div className="space-y-2 font-mono text-xs mb-8">
              {[
                {
                  key: "STATUS",
                  val: "BUILDING",
                  color: "text-amber-400",
                },
                {
                  key: "ETA",
                  val: "COMING SOON",
                  color: "text-zinc-300",
                },
                {
                  key: "CONTACT",
                  val: "office@securetool.company",
                  color: "text-zinc-400",
                },
              ].map(({ key, val, color }) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                >
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

      {/* ── SECURE DePIN PLACEHOLDER MODAL ── */}
      {depinOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setDepinOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 border border-teal-800/60 bg-[#0a0c10] p-10 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDepinOpen(false)}
              className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-300 transition-colors text-xs tracking-widest"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                NODE_04 // COMING SOON
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              SECURE DePIN
            </h3>
            <div className="text-xs text-teal-400 tracking-widest mb-6">
              securedepin.io
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              SECURE DePIN is under development as an infrastructure-first platform
              focused on operating real decentralized systems — including Algorand
              nodes, Akash participation, and Helium-connected wireless networks for
              real-world connectivity and field deployment.
            </p>
            <div className="space-y-2 font-mono text-xs mb-8">
              {[
                { key: "STATUS",  val: "BUILDING",                    color: "text-teal-400"  },
                { key: "MODEL",   val: "Infrastructure-First",        color: "text-zinc-300"  },
                { key: "FOCUS",   val: "Nodes, Networks, Deployment", color: "text-zinc-300"  },
                { key: "CONTACT", val: "office@securetool.company",   color: "text-zinc-400"  },
              ].map(({ key, val, color }) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-zinc-800/60 pb-2"
                >
                  <span className="text-zinc-600">{key}</span>
                  <span className={color}>{val}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:office@securetool.company"
                className="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white text-xs tracking-widest uppercase transition-colors"
              >
                GET IN TOUCH →
              </a>
              <button
                onClick={() => setDepinOpen(false)}
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