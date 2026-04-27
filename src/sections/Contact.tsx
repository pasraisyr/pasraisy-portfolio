import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-primary/5 -z-10" />
      <div className="mx-auto max-w-3xl glass p-12 rounded-[3rem] text-center">
        <div className="glass p-12 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <SparklesIcon className="size-24 text-accent-primary" />
          </div>
          
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tighter">Ready to build something <span className="text-gradient">epic?</span></h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto italic">
            I'm currently available for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:gpasraisyr@gmail.com" className="px-8 py-4 rounded-2xl bg-accent-primary text-white font-bold hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/25 uppercase tracking-widest text-sm">
              Send Email
            </a>
            <a href="https://wa.me/60104282163" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest text-sm">
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
