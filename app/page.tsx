"use client"

import { useEffect, useRef, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ArrowUp,
  Moon,
  Sun,
  Menu,
} from "lucide-react"
import Typed from "typed.js"

// Components
import Hero from "./components/hero"
import Services from "./components/services"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Testimonials from "./components/testimonials"
import About from "./components/about"
import FAQ from "./components/faq"
import Contact from "./components/contact"

export default function Page() {
  const typedElement = useRef(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Technologist'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500
    })

    // Custom Cursor
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        ringRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
      }
    }

    const handleHoverStart = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '70px'
        ringRef.current.style.height = '70px'
        ringRef.current.style.borderColor = '#bc13fe'
      }
    }

    const handleHoverEnd = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '40px'
        ringRef.current.style.height = '40px'
        ringRef.current.style.borderColor = '#00f3ff'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    const elements = document.querySelectorAll('a, button')
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      typed.destroy()
      window.removeEventListener('mousemove', handleMouseMove)
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.toggle('light')
  }

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className={`min-h-screen ${theme === "dark" ? "bg-luxury" : "bg-white"} text-gray-300`}>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple z-[1000] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor" style={{ position: 'fixed', top: 0, left: 0 }}></div>
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed', top: 0, left: 0 }}></div>

      {/* Animated Background */}
      <div className="mesh-bg"></div>

      {/* Theme Toggle */}
      <div className="fixed top-8 right-8 z-[100]">
        <button onClick={toggleTheme} className="glass p-3 rounded-full hover:scale-110 transition-transform active:scale-95 shadow-lg">
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-neon-blue" />
          ) : (
            <Sun className="w-5 h-5 text-orange-500" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[90] w-[90%] max-w-2xl">
        <div className="glass px-8 py-4 rounded-full flex justify-between items-center shadow-2xl">
          <a href="#" className="text-xl font-bold tracking-tighter gradient-text group">
            SAMRA<span className="text-neon-blue group-hover:animate-pulse">.</span>
          </a>
          <div className="hidden sm:flex space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#home" className="hover:text-neon-blue transition-colors">Home</a>
            <a href="#projects" className="hover:text-neon-blue transition-colors">Universe</a>
            <a href="#services" className="hover:text-neon-blue transition-colors">Labs</a>
            <a href="#about" className="hover:text-neon-blue transition-colors">Story</a>
            <a href="#contact" className="hover:text-neon-blue transition-colors">Summon</a>
          </div>
          <button className="sm:hidden text-neon-blue">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="reveal mt-12 mb-6">
            <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple border-neon-purple/30">
              Engineering Digital Dreams
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">Samra Safdar</span>
          </h1>
          <div className="h-12 mb-8 text-2xl md:text-4xl font-light tracking-wide text-gray-400">
            <span ref={typedElement}></span>
          </div>
          <p className="reveal text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light italic">
            "I don’t just write code — I craft digital experiences that feel like magic. With every project, I blend clean architecture, bold design, and human psychology to build tools people love to use."
          </p>

          <div className="reveal flex flex-wrap justify-center gap-6">
            <a href="#projects" className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all">
              <span className="relative z-10">✨ View My Universe</span>
              <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all hover:scale-105 drop-shadow-lg">
              💬 Summon Me
            </a>
          </div>

          {/* Floating Socials */}
          <div className="reveal mt-16 flex justify-center gap-8">
            <a href="https://github.com/samki6576" target="_blank" className="text-gray-500 hover:text-neon-blue transition-all scale-125 hover:scale-150" title="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/samra-safdar-16833b30b" target="_blank" className="text-gray-500 hover:text-neon-blue transition-all scale-125 hover:scale-150" title="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:hismm8690@email.com" className="text-gray-500 hover:text-neon-blue transition-all scale-125 hover:scale-150" title="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="text-gray-600 w-6 h-6" />
        </div>
      </section>

      {/* New Professional Sections */}
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer className="py-16 text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] tracking-[0.5em] uppercase mb-8">Crafted with ☕ and JSX &copy; 2024</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="glass p-4 rounded-full text-neon-blue hover:scale-125 transition-all drop-shadow-lg">
          <ArrowUp className="w-5 h-5" />
        </button>
      </footer>
    </main>
  )
}