"use client"

import { UserRound, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="reveal md:w-1/2 relative group">
          <div className="w-full aspect-square glass rounded-[60px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 animate-pulse"></div>
            <div className="h-full w-full flex items-center justify-center p-20">
              <UserRound className="w-full h-full text-gray-800 opacity-20" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl animate-float hidden md:block">
            <p className="text-4xl font-black text-white">5+</p>
            <p className="text-[10px] uppercase tracking-widest text-neon-blue">Years Exp.</p>
          </div>
          <div className="absolute -top-10 -left-10 glass p-6 rounded-full border-neon-blue/30 animate-pulse hidden md:block">
            <Code className="w-8 h-8 text-neon-blue" />
          </div>
        </div>
        <div className="reveal md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Code is my <span className="text-neon-blue underline decoration-neon-purple">canvas</span>. <br /> Logic is my poetry.</h2>
          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              I fell in love with web development when I realized I could turn an idea into a living, breathing product overnight. This fascination quickly grew into a dedicated mission to master the intersection of functional programming and aesthetic design. Today, I leverage my expertise to help startups and forward-thinking creators build fast, accessible, and breathtaking web applications that stand out in a crowded digital landscape.
            </p>
            <p>
              Beyond the keyboard, I am a lifelong student of human-centric design. You'll often find me sketching UX flows on napkins, contributing to innovative open-source projects, or exploring the latest trends in creative technology. I believe that the most powerful code is the one you forget is even there—because the experience it creates is so seamless, intuitive, and natural that it just works.
            </p>
            <div className="pt-6 border-t border-white/5 italic text-neon-purple font-bold">
              “Debugging is my meditation.”
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
