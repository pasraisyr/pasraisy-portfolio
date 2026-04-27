import { BriefcaseIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Wesitex Sdn Bhd',
    period: 'October 2025 - Present'
  },
  {
    role: 'Freelancer Technology Trainer',
    company: 'Marc & Zed Spaces Sdn Bhd',
    period: 'October 2025 - Present'
  },
  {
    role: 'Freelance Software Developer',
    company: 'Wesitex Sdn Bhd',
    period: 'Jan 2025 - Present'
  },
  {
    role: 'Frontend Developer',
    company: 'California Business Group Sdn Bhd',
    period: 'Feb 2025 - June 2025'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
            <BriefcaseIcon className="size-8 text-accent-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase italic">Work Experience</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass p-6 rounded-3xl border border-white/5 hover:border-accent-primary/20 transition-all group">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-1">{exp.period}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-accent-primary transition-colors">{exp.role}</h3>
                <p className="text-gray-400 text-sm italic">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

      </div>
    </section>
  )
}
