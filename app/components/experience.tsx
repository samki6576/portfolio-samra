"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior Full Stack Architect",
    company: "Nexus Digital",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading the development of high-scale SaaS platforms, mentoring junior developers, and implementing cutting-edge cloud architectures.",
    tech: ["Next.js", "AWS", "TypeScript", "Redis"]
  },
  {
    role: "Full Stack Developer",
    company: "Creative Pulse Agency",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Built immersive marketing experiences and e-commerce platforms for Fortune 500 clients with a focus on animation and performance.",
    tech: ["React", "Node.js", "Framer Motion", "MongoDB"]
  },
  {
    role: "UI/UX Developer",
    company: "Starlight Tech",
    period: "2018 - 2020",
    location: "London, UK",
    description: "Designed and developed user-centric interfaces for complex data visualization tools and internal dashboards.",
    tech: ["Vue.js", "D3.js", "Figma", "Tailwind"]
  }
]

export default function Experience() {
  return (
    <section id="story" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Professional <span className="text-neon-purple text-glow">Odyssey</span></h2>
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-bold">The timeline of my technical evolution</p>
        </div>

        <div className="relative border-l-2 border-neon-blue/20 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, i) => (
            <div key={i} className={`reveal relative mb-20 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:-left-1/2' : 'md:pl-12 md:left-full'}`}>
              <div className="absolute top-0 w-8 h-8 bg-neon-blue rounded-full -left-4 md:left-auto md:right-0 transform md:translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                <Briefcase className="w-4 h-4 text-black" />
              </div>

              <div className="glass-card p-10 hover:border-neon-blue/50 transition-all group">
                <div className={`flex items-center gap-3 mb-4 text-neon-blue text-xs font-black uppercase tracking-widest ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <div className={`flex items-center gap-2 text-gray-400 text-sm mb-6 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <MapPin className="w-3 h-3" />
                  {exp.company} • {exp.location}
                </div>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {exp.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map((t, ti) => (
                    <span key={ti} className="text-[10px] glass px-3 py-1 rounded-full text-white font-bold border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(188, 19, 254, 0.4);
        }
      `}</style>
    </section>
  )
}
