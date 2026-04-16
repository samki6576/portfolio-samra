"use client"

import { Palette, Code2, Globe, Cpu, Smartphone, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Stack Development",
    desc: "Architecting scalable, high-performance web applications using modern stacks like Next.js, Node.js, and GraphQL.",
    color: "text-blue-400"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    desc: "Crafting visually stunning and intuitive user experiences with a focus on human-centric design and accessibility.",
    color: "text-neon-purple"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI & ML Integration",
    desc: "Empowering applications with intelligent features using LLM integrations, OpenAI API, and custom neural models.",
    color: "text-neon-blue"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Solutions",
    desc: "Designing responsive and progressive web apps that feel native on every device, from mobile to desktop.",
    color: "text-green-400"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "API Development",
    desc: "Building robust, secure, and well-documented RESTful and GraphQL APIs for seamless data flow.",
    color: "text-orange-400"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Cyber Security",
    desc: "Ensuring your digital assets are protected with industry-standard security protocols and regular audits.",
    color: "text-red-400"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Expert <span className="gradient-text">Provisions</span></h2>
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-bold">Solutions tailored for the digital era</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="reveal glass-card p-10 group hover:-translate-y-2 transition-all cursor-default">
              <div className={`mb-8 p-4 glass w-fit rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 h-1 w-0 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
