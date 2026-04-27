import { useState } from 'react'
import { AcademicCapIcon, BookOpenIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative group/slider mb-8 aspect-video rounded-2xl overflow-hidden border border-white/10">
      <img 
        src={images[currentIndex]} 
        alt="Slide" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover/slider:scale-105"
      />
      
      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition-opacity">
        <button onClick={prev} className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-accent-primary transition-colors">
          <ChevronLeftIcon className="size-4" />
        </button>
        <button onClick={next} className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-accent-primary transition-colors">
          <ChevronRightIcon className="size-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <div key={i} className={`size-1.5 rounded-full transition-all ${i === currentIndex ? 'w-4 bg-accent-primary' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  )
}

export default function OtherSide() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 italic tracking-tight uppercase">Other Side of Me</h2>
          <p className="text-gray-400 max-w-2xl italic">
            Beyond coding and development, I find fulfillment in sharing knowledge and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coding Trainer */}
          <div className="group relative glass p-8 rounded-[3rem] border border-white/5 hover:border-accent-primary/20 transition-all overflow-hidden">
            <div className="relative z-10">
              <ImageSlider images={['/trainer1.jpeg', '/trainer2.jpeg']} />
              
              <div className="p-4 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 w-fit mb-6">
                <AcademicCapIcon className="size-8 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Coding Trainer</h3>
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                Empowering the next generation of developers by teaching core programming languages and modern tools.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'Google AppSheet'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quran Teacher */}
          <div className="group relative glass p-8 rounded-[3rem] border border-white/5 hover:border-accent-secondary/20 transition-all overflow-hidden">
            <div className="relative z-10">
              <ImageSlider images={['/ngaji1.jpeg', '/ngaji2.jpeg']} />

              <div className="p-4 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 w-fit mb-6">
                <BookOpenIcon className="size-8 text-accent-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Quran Teacher</h3>
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                Dedicated to teaching Quranic recitation (Mengaji) and fostering spiritual connections through the holy book.
              </p>
              <div className="flex items-center gap-2 text-accent-secondary font-bold text-xs uppercase tracking-widest">
                <SparklesIcon className="size-4" />
                Community Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
