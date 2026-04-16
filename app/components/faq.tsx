"use client"

import { useState } from "react"
import { ChevronDown, Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A premium landing page typically takes 1-2 weeks, while a full-scale web application can range from 4 to 8 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide ongoing maintenance, security updates, and performance optimization for all my projects to ensure they continue to perform at their best."
  },
  {
    question: "What is your typical design process?",
    answer: "My process starts with research and discovery, followed by wireframing, high-fidelity UI design, and finally, iterative development using modern tech stacks."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Yes, I am experienced in refactoring and extending existing applications, whether it's optimizing performance, adding new features, or migrating to modern frameworks."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Common <span className="text-neon-purple">Inquiries</span></h2>
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-bold">Clarifying the collaboration process</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full glass-card p-8 flex items-center justify-between text-left transition-all ${openIndex === i ? 'border-neon-blue/50 ring-1 ring-neon-blue/20' : ''}`}
              >
                <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                <div className={`p-2 glass rounded-full transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-neon-blue' : ''}`}>
                  {openIndex === i ? <Minus className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-neon-blue" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 text-gray-400 font-light leading-relaxed text-lg border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
