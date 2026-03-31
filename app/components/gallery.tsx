"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Your Thum.io authentication
  const auth = '77031-78yuyg';
  
  const images = [
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app")}`,
      alt: "/7.png",
      title: "Ecommerce-Website",
      link: "https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app",
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app")}`,
      alt: "/8.png",
      title: "Ocean-Explorer Website",
      link: "https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://blog-space-git-main-samras-projects-c05660e5.vercel.app")}`,
      alt: "/6.png",
      title: "Blog-Website",
      link: "https://blog-space-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://bakery-git-main-samras-projects-c05660e5.vercel.app")}`,
      alt: "/9.png",
      title: "Golden Crust Magical Bakery 🌈",
      link: "https://bakery-git-main-samras-projects-c05660e5.vercel.app"
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app")}`,
      alt: "Art piece 5",
      title: "Space 3D Website",
      link: "https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app"
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://bella-vista-pizzeria-git-main-samras-projects-c05660e5.vercel.app")}`,
      alt: "Bella Vista Pizzeria",
      title: "Bella Vista Pizzeria",
      link: "https://bella-vista-pizzeria-git-main-samras-projects-c05660e5.vercel.app"
    },
    {
      src: `https://image.thum.io/get/auth/${auth}/width/600/crop/800/maxAge/1/${encodeURIComponent("https://the-court-theta.vercel.app")}`,
      alt: "The CourtShoes Website",
      title: "The CourtShoes Website",
      link: "https://the-court-theta.vercel.app"
    },
  ];

  return (
    <section className="relative py-20">
      <div ref={ref} className="site-container">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Websites
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
                className="group relative overflow-hidden rounded-lg gallery-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if thumbnail fails to load
                      e.currentTarget.src = "/placeholder.svg";
                    }}
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
