"use client"

import { Atom, Zap, Server, Code2, Wind, Database, Flame, Move, Figma } from "lucide-react"

const skillCategories = [
  { name: "React", icon: <Atom className="w-6 h-6 text-neon-blue group-hover:rotate-180 transition-transform duration-700" />, border: "hover:border-neon-blue" },
  { name: "Next.js", icon: <Zap className="w-6 h-6 text-yellow-400 group-hover:scale-125 transition-transform" />, border: "hover:border-white" },
  { name: "Node.js", icon: <Server className="w-6 h-6 text-green-500 group-hover:animate-pulse" />, border: "hover:border-green-500" },
  { name: "Python", icon: <Code2 className="w-6 h-6 text-blue-400" />, border: "hover:border-blue-400" },
  { name: "Tailwind", icon: <Wind className="w-6 h-6 text-cyan-400" />, border: "hover:border-cyan-400" },
  { name: "MongoDB", icon: <Database className="w-6 h-6 text-green-400" />, border: "hover:border-green-400" },
  { name: "Firebase", icon: <Flame className="w-6 h-6 text-orange-500" />, border: "hover:border-orange-500" },
  { name: "Framer Motion", icon: <Move className="w-6 h-6 text-purple-500" />, border: "hover:border-purple-500" },
  { name: "Figma", icon: <Figma className="w-6 h-6 text-pink-500" />, border: "hover:border-pink-500" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core <span className="text-neon-blue">Arsenal</span></h2>
          <p className="text-gray-500 tracking-widest uppercase text-xs font-bold">The tools of my creation</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((skill, i) => (
            <div key={i} className={`reveal glass px-8 py-5 rounded-3xl flex items-center gap-4 group ${skill.border} transition-all cursor-default hover:-translate-y-2`}>
              {skill.icon}
              <span className="font-bold tracking-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
