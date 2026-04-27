import { BriefcaseIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Wesitex Sdn Bhd',
    period: 'October 2025 - Present',
    description: [
      'Architected and developed a full-stack SaaS platform using React, TypeScript, and Go/Python, implementing a modular (Type-Service-Hook) architecture to ensure 100% type safety and maintainability.',
      'Engineered a high-performance dashboard UI leveraging Mantine UI and custom hooks, resulting in a 40% improvement in developer velocity compared to traditional component libraries.',
      'Designed and implemented a role-based access control (RBAC) system and dynamic menu management to support multi-tenant environments and diverse user permissions.'
    ]
  },
  {
    role: 'Freelancer Technology Trainer',
    company: 'Marc & Zed Spaces Sdn Bhd',
    period: 'October 2025 - Present',
    description: [
      'Delivered comprehensive technical training on Python, Java, and Google AppSheet to diverse groups of learners, ranging from beginners to professional developers.',
      'Developed custom curriculum and hands-on coding modules, focusing on real-world applications such as automation, data processing, and enterprise-grade software development.',
      'Mentored participants in building low-code solutions using Google AppSheet, enabling non-technical users to automate business workflows and deploy mobile-ready applications.'
    ]
  },
  {
    role: 'Freelance Software Developer',
    company: 'Wesitex Sdn Bhd',
    period: 'Jan 2025 - Present',
    description: [
      'Spearheaded end-to-end web development projects for diverse clients, transitioning legacy systems to modern stacks using React, Mantine UI, and TypeScript for improved performance and SEO.',
      'Designed and implemented scalable system architectures for multi-tenant applications, ensuring seamless data flow between React frontends and complex backend services.',
      'Architected robust relational database schemas optimized for high-concurrency, focusing on data integrity and efficient query performance for client platforms.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'California Business Group Sdn Bhd',
    period: 'February 2025 - June 2025',
    description: [
      'Developed a complex Education Management System (EMS) from the ground up, implementing a highly interactive UI/UX using React and Material UI (MUI).',
      'Architected a clean, scalable codebase by enforcing strict modular design principles, reducing technical debt and improving onboarding speed for new team members.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
            <BriefcaseIcon className="size-8 text-accent-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase italic">Work Experience</h2>
            <p className="text-gray-500 text-sm italic">My professional journey and contributions.</p>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-white/5 group">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 size-[9px] rounded-full bg-accent-primary shadow-[0_0_10px_rgba(192,132,252,0.5)] group-hover:scale-150 transition-transform" />
              
              <div className="glass p-8 rounded-3xl border border-white/5 hover:border-accent-primary/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-accent-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest border border-white/5 h-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed italic">
                      <span className="mt-1.5 size-1.5 rounded-full bg-accent-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
