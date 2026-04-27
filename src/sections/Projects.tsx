const projects = [
  {
    title: 'Learning Management System (LMS) for OUM',
    description: 'Upgraded learning management system for Open University Malaysia (OUM) to improve user experience and functionality.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: '/lms_1.png',
  },
  {
    title: 'OUM Claim Application',
    description: 'Efficient claim management application developed using Google Appsheet for streamlined processing.',
    tech: ['Google Appsheet', 'Apps Script', 'Spreadsheet', 'MySQL'],
    image: '/claim.png',
  },
  {
    title: 'Dojo Dashboard',
    description: 'A cross-platform booking dashboard for Dojo, managing schedules and reservations seamlessly.',
    tech: ['React', 'Go', 'PostgreSQL', 'MUI'],
    image: '/dojo.png',
  },
  {
    title: 'California KL Dashboard',
    description: 'Specialized LMS Dashboard for California KL language center to track student progress.',
    tech: ['React', 'PostgreSQL', 'Python', 'MUI'],
    image: '/california.png',
  },
  {
    title: 'Wesitex SaaS',
    description: 'Multi-tenant SaaS dashboard for Wesitex providing business analytics and management tools.',
    tech: ['React', 'Go', 'PostgreSQL','Mantine'],
    image: '/wesitex_sass.png',
  },
  {
    title: 'ICIM LMS Dashboard',
    description: 'Educational management dashboard for ICIM, focusing on user experience and data clarity.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'MUI', 'Python'],
    image: '/icm.png',
  },
]


export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-secondary">

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 italic tracking-tight">FEATURED PROJECTS</h2>
            <p className="text-gray-400 max-w-md italic">
              A selection of my most challenging and impactful work in web development and software engineering.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#1a1a1e] border border-white/5 hover:border-accent-primary/50 transition-all hover:shadow-2xl hover:shadow-accent-primary/10">

              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ imageRendering: 'auto' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100 brightness-[0.9] group-hover:brightness-100 [transform:translateZ(0)]"
                />


              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

