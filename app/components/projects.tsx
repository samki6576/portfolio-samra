"use client"

import { Palette, Leaf, Code2, Zap, BrainCircuit, Move, Figma, Github, ExternalLink, Database } from "lucide-react"

const featuredProjects = [
  { title: "Ecommerce-Website", desc: "Premium online shopping experience with elegant design.", link: "https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app", icon: <Palette className="w-10 h-10 text-neon-blue" />, tech: ["React", "CSS"] },
  { title: "Ocean-Explorer", desc: "Immersive deep-sea exploration and marine data visualization.", link: "https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app", icon: <Leaf className="w-10 h-10 text-green-400" />, tech: ["Next.js", "Tailwind"] },
  { title: "Blog-Website", desc: "Clean, modern publishing platform for creative writers.", link: "https://blog-space-git-main-samras-projects-c05660e5.vercel.app", icon: <Code2 className="w-10 h-10 text-yellow-400" />, tech: ["React", "Node.js"] },
  { title: "Golden Crust Bakery 🌈", desc: "Magical bakery experience with delightful UI interactions.", link: "https://bakery-git-main-samras-projects-c05660e5.vercel.app", icon: <Zap className="w-10 h-10 text-orange-400" />, tech: ["React", "Framer"] },
  { title: "Space 3D Website", desc: "Three-dimensional voyage through the cosmos.", link: "https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app", icon: <BrainCircuit className="w-10 h-10 text-blue-500" />, tech: ["Three.js", "React"] },
  { title: "Bella Vista Pizzeria", desc: "Appetizing digital menu and ordering for artisanal pizza.", link: "https://bella-vista-pizzeria-git-main-samras-projects-c05660e5.vercel.app", icon: <Move className="w-10 h-10 text-red-500" />, tech: ["React", "CSS"] },
  { title: "The CourtShoes", desc: "High-performance athletic footwear showcase.", link: "https://the-court-theta.vercel.app", icon: <Figma className="w-10 h-10 text-neon-purple" />, tech: ["Next.js", "Tailwind"] }
]

const digitalApps = [
  { title: "Habit Tracker", desc: "Build consistency with this sleek and intuitive habit tracking tool.", link: "https://habit-tracker-git-main-samras-projects-c05660e5.vercel.app", icon: <Move className="w-10 h-10 text-orange-400" />, tech: ["React", "Storage"] },
  { title: "Zizy PDF Maker", desc: "Create and manage PDF documents effortlessly in your browser.", link: "https://pdfmakerzizy.netlify.app", icon: <Database className="w-10 h-10 text-blue-400" />, tech: ["JS", "PDFLib"] },
  { title: "Bank App", desc: "Secure and interactive banking interface simulation.", link: "https://secure-bank-git-main-samras-projects-c05660e5.vercel.app", icon: <BrainCircuit className="w-10 h-10 text-green-400" />, tech: ["React", "Auth"] },
  { title: "OpenClaw AI", desc: "AI-powered guardian for secure and smart interactions.", link: "https://open-claw-sigma.vercel.app/", icon: <Zap className="w-10 h-10 text-neon-blue" />, tech: ["AI", "Next.js"] }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-neon-purple">Exhibitions</span></h2>
          <p className="text-gray-500 tracking-widest uppercase text-xs font-bold">Turning vision into velocity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {featuredProjects.map((proj, i) => (
            <ProjectCard key={i} project={proj} />
          ))}
        </div>

        <div className="reveal mt-32 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital <span className="text-neon-blue">Apps</span></h2>
          <p className="text-gray-500 tracking-widest uppercase text-xs font-bold">Tools and utilities for the modern age</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {digitalApps.map((proj, i) => (
            <ProjectCard key={i} project={proj} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="reveal project-card h-[450px] group">
      <div className="project-card-inner glass relative w-full h-full rounded-[40px] p-8 flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-0"></div>
        <div className="absolute top-10 left-10 p-4 glass rounded-3xl z-10 group-hover:scale-110 transition-transform">
          {project.icon}
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-xs font-bold mb-4 italic leading-relaxed">"{project.desc}"</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string, ti: number) => (
              <span key={ti} className="text-[9px] glass px-2 py-0.5 rounded-full text-white font-bold">{t}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 glass text-center rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">🔗 Demo</a>
            <a href="#" className="p-3 glass rounded-xl hover:bg-neon-blue/20 transition-all"><Github className="w-4 h-4 text-white" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
