"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory] = useState("all")
  const works = [
    {
      id: 1,
      title: "Habit Tracker",
      category: "Apps",
      url: "https://habit-tracker-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "t.png",
    },
    {
      id: 2,
      title: "Zizy PDF Maker",
      category: "Apps",
      url: "https://pdfmakerzizy.netlify.app",
      year: "2025",
      image: "1.png",
    },
    {
      id: 3,
      title: "Bank App",
      category: "Apps",
      url: "https://secure-bank-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "0.png",
    },
    {
      id: 4,
      title: "OpenClaw AI Guardian",
      category: "Apps",
      url: "https://open-claw-sigma.vercel.app/",
      year: "2025",
      image: "https://images.seeklogo.com/logo-png/66/1/openclaw-logo-png_seeklogo-665449.png?v=1971850109529183720",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="site-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Apps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          Featured applications and digital tools
        </motion.p>
        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="overflow-hidden bg-zinc-900 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 border border-zinc-800">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg"
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-semibold text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                            {work.title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-300 transform translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0">
                            {work.year}
                          </p>
                          <span className="mt-3 text-xs text-purple-400 transform translate-y-4 transition-transform duration-300 delay-100 group-hover:translate-y-0">
                            Click to view →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
