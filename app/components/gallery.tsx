"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/7.png",
      alt: "Art piece 1",
      title: "Ecommerce-Website",
      link: "https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app", // Add your desired URL
    },
    {
      src: "8.png",
      alt: "Art piece 2",
      title: "Ocean-Explorer Website",
      link: "https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app",
    },
   {
    src: "6.png",
     alt: "Art piece 3",
     title: "Blog-Website",
    link: "https://blog-space-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/9.png",
      alt: "Art piece 1",
      title: "Golden Crust Magical Bakery 🌈",
      link: "https://bakery-git-main-samras-projects-c05660e5.vercel.app"
    },
     {
      src: "/5.png",
      alt: "Art piece 1",
      title: "Space 3D Website",
      link: "https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app"
    },
    

  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
        <motion.h1>Websites</motion.h1>  
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
