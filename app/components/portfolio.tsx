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
      scr: "https://habit-tracker-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "t.png", // You can set this to your image URL or leave as placeholder
    },
    {
      id: 2,
      title: "Zizy PDF Maker",
      category: "Apps",
      scr: "https://pdfmakerzizy.netlify.app",
      year: "2025",
      image: "1.png", // You can set this to your image URL or leave as placeholder
    },
  
    {
    id: 2,
      title: "Bank App Showcase",
      category: "Apps",
      scr: "https://secure-bank-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "0.png", },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-2">Apps</h1>
        <p className="text-gray-400 mb-8"></p>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a href={work.scr} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="overflow-hidden bg-zinc-900 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                          <p className="mt-2 text-sm text-gray-300">{work.year}</p>
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
