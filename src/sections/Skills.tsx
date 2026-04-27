const skills = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Laravel',
  'Mantine UI', 'Material UI', 'AWS', 'Python', 'Go', 'Framer Motion'
]

const tools = [
  'Docker', 'Postman', 'Supabase', 'Figma', 'Git', 'GitHub', 'GitLab', 'Bitbucket',
  'WordPress', 'Joomla', 'Google AppSheet'
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 italic tracking-tight uppercase">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill} className="px-5 py-2 rounded-xl bg-bg-secondary border border-white/5 text-gray-300 text-sm font-medium hover:border-accent-primary/50 hover:text-white transition-all cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8 italic tracking-tight uppercase">Tools & Workflow</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div key={tool} className="px-5 py-2 rounded-xl bg-accent-primary/5 border border-accent-primary/10 text-accent-primary text-sm font-bold hover:bg-accent-primary/10 transition-all cursor-default uppercase tracking-wider">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

