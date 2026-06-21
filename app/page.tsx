import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-[#111827]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Sun rising over Earth"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0a0f1c]/60 to-[#0a0f1c]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            SECURE Tool Company
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            We solve the world&apos;s greatest challenges.
          </p>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our tools and services use Next-Generation IoT to deliver technical solutions
            to water security and supply chain Cargo Control.
          </p>
        </div>
        <div className="absolute bottom-10 z-10">
          <div className="animate-bounce text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Companies Section */}
      <section className="py-24 px-6" id="companies">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Companies
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              SECURE Tool Company operates two specialized divisions focused on
              critical infrastructure protection and monitoring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SECURE Blue */}
            <a
              href="https://secureblue.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#3b82f6]/50 hover:bg-[#111827] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#1e3a5f] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#3b82f6] transition-colors">
                    SECURE Blue
                  </h3>
                  <p className="text-sm text-[#3b82f6]">secureblue.earth</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Mission-critical water security solutions powered by next-generation
                IoT technology. Protecting and monitoring water infrastructure
                across municipalities, utilities, and industrial facilities.
              </p>
            </a>
            {/* SECURE Cargo Control */}
            <a
              href="https://securecargo.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl border border-[#1e293b] bg-[#111827]/50 hover:border-[#06b6d4]/50 hover:bg-[#111827] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0e7490] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#06b6d4] transition-colors">
                    SECURE Cargo Control
                  </h3>
                  <p className="text-sm text-[#06b6d4]">securecargo.tools</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Enterprise supply chain monitoring and cargo control systems.
                Real-time tracking, condition monitoring, and security for
                global logistics operations.
              </p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-24 px-6 bg-[#111827]/30" id="founders">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The visionaries behind SECURE Tool Company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Adam-Paul Smolak */}
            <div className="p-8 rounded-2xl border border-[#1e293b] bg-[#111827]/50 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1e3a5f] flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Adam-Paul Smolak
              </h3>
              <p className="text-[#3b82f6] text-sm font-medium mb-4">
                Co-Founder
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Driving innovation in IoT-enabled water security and
                infrastructure monitoring solutions.
              </p>
            </div>
            {/* Scott Holbrook */}
            <div className="p-8 rounded-2xl border border-[#1e293b] bg-[#111827]/50 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#0e7490] flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Scott Holbrook
              </h3>
              <p className="text-[#06b6d4] text-sm font-medium mb-4">
                Co-Founder
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading the development of next-generation cargo control
                and supply chain monitoring systems.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Contact / Footer Section */}
      <footer className="py-16 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm mb-4">
            SECURE Tool Company
          </p>
          <p className="text-slate-500 text-xs">
            Parent company of SECURE Blue and SECURE Cargo Control
          </p>
          <p className="text-slate-500 text-xs mt-2">
            info@securetool.company
          </p>
        </div>
      </footer>
    </main>
  );
}
