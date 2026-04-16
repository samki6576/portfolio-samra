"use client"

import { Quote, Star } from "lucide-react"

const reviews = [
  {
    name: "Alexander Wright",
    role: "CEO, TechFlow Systems",
    content: "Samra's ability to translate complex business requirements into elegant, high-performance code is unparalleled. She didn't just build our platform; she redefined our digital presence.",
    stars: 5,
    avatar: "AW"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager, Designly",
    content: "Working with Samra was a revelation. Her eye for detail and commitment to user experience resulted in a product that our users absolutely love. A true professional through and through.",
    stars: 5,
    avatar: "ER"
  },
  {
    name: "Marcus Chen",
    role: "Founder, GreenLoop",
    content: "Speed, quality, and creativity. Samra delivered all three in spades. The custom animations she implemented have significantly improved our user engagement metrics.",
    stars: 5,
    avatar: "MC"
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Client <span className="text-neon-blue">Echoes</span></h2>
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-bold">What the industry says about my work</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="reveal glass-card p-12 relative flex flex-col justify-between group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-neon-blue/10 group-hover:text-neon-blue/20 transition-colors" />
              
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(review.stars)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xl font-light text-gray-300 leading-relaxed mb-10 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center text-black font-black text-xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-neon-blue text-xs uppercase tracking-widest font-black">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
