import { RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 lg:pt-8 lg:pb-32 px-6">


      <div className="mx-auto max-w-7xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold tracking-wider uppercase mb-8">
          <SparklesIcon className="size-4" />
          Available for new opportunities
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8">
          Building Digital <span className="text-gradient">Masterpieces</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400 mb-12">
          Full-stack developer specializing in creating high-performance, beautiful, and scalable web applications. Turning complex problems into elegant solutions.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-bg-primary font-bold hover:scale-105 transition-transform"
          >
            View Projects
            <RocketLaunchIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
