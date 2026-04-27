import { MapPinIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="pt-32 pb-12 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Illustration or Decorative Box */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative group max-w-xs w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass p-4 rounded-[2.5rem] border border-white/10 overflow-hidden aspect-square">
                <img
                  src="/Aisyah.png"
                  alt="Radiatul Aisyah"
                  className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>


          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-accent-primary uppercase mb-4">
                About Me
              </h2>
              <h3 className="text-4xl font-extrabold text-white sm:text-5xl">
                Hi, I'm <span className="text-gradient">Aisyah @ Pasraisy</span>
              </h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I am a passionate developer dedicated to building high-quality
              digital experiences. My focus is on creating clean, efficient, and
              user-friendly applications that solve real-world problems.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all">
                  <MapPinIcon className="size-6 text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-400">
                    53300 Kuala Lumpur, Wilayah Persekutuan, Malaysia
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                <div className="glass px-6 py-3 rounded-xl border border-white/5">
                  <span className="block text-2xl font-bold text-white">
                    2+
                  </span>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">
                    Years Exp
                  </span>
                </div>
                <div className="glass px-6 py-3 rounded-xl border border-white/5">
                  <span className="block text-2xl font-bold text-white">
                    7
                  </span>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
