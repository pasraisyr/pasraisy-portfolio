import { CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <CodeBracketIcon className="size-5 text-accent-primary" />
          <span className="font-bold text-white uppercase tracking-wider text-sm">RADIATUL AISYAH ABDULLAH</span>
        </div>
        
        <p className="text-gray-500 text-xs italic">
          © {new Date().getFullYear()} PASRAISYR. Built with Passion.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/radiatul-aisyah26/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
          <a href="https://www.threads.net/@pasraisydollah_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Threads</a>
          <a href="https://wa.me/60104282163" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">WhatsApp</a>
          <a href="mailto:gpasraisyr@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Email</a>
        </div>
      </div>
    </footer>
  )
}
