"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Sparkles } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const quotes = [
  "Every pixel matters.",
  "Complexity is the enemy of reliability.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Fix the cause, not the symptom.",
  "The best way to predict the future is to invent it.",
  "Stay hungry, stay foolish.",
  "First, solve the problem. Then, write the code."
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [quote, setQuote] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setIsError(false)
    setIsSuccess(false)

    try {
      const response = await fetch("https://formspree.io/f/mjkwdwye", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const newQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(`"${randomQuote}"`)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto glass p-12 rounded-[60px] relative overflow-hidden">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Let's create something <span className="gradient-text">legendary</span>.</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Summon my technical expertise</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-neon-purple">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className={`w-full glass bg-white/[0.02] border-none rounded-2xl px-6 py-5 outline-none focus:ring-2 transition-all ${errors.name ? 'ring-red-500' : 'ring-neon-blue'}`}
              />
              {errors.name && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.name.message}</p>}
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-neon-purple">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="john@example.com"
                className={`w-full glass bg-white/[0.02] border-none rounded-2xl px-6 py-5 outline-none focus:ring-2 transition-all ${errors.email ? 'ring-red-500' : 'ring-neon-blue'}`}
              />
              {errors.email && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.email.message}</p>}
            </div>
          </div>
          <div className="reveal space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-neon-purple">Message</label>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="I have an idea that might change the world..."
              className={`w-full glass bg-white/[0.02] border-none rounded-2xl px-6 py-5 outline-none focus:ring-2 transition-all ${errors.message ? 'ring-red-500' : 'ring-neon-blue'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.message.message}</p>}
          </div>

          <div className="reveal col-span-full flex flex-col sm:flex-row items-center justify-between mt-12 gap-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] disabled:opacity-50 disabled:scale-100"
            >
              {isSubmitting ? "Summoning..." : "Summon Me"}
            </button>
            <button type="button" onClick={newQuote} className="glass px-8 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-neon-blue transition-all flex items-center gap-3">
              <Sparkles className="w-4 h-4" /> Get Motivated
            </button>
          </div>
        </form>

        {isSuccess && (
          <div className="mt-8 p-6 glass rounded-2xl text-center text-neon-blue font-bold animate-bounce border-neon-blue/50">
            ✨ Message successfully summoned! I'll be in touch soon.
          </div>
        )}

        {isError && (
          <div className="mt-8 p-6 glass bg-red-500/10 rounded-2xl text-center text-red-500 font-bold border-red-500/50">
            ❌ Something went wrong. Please try again or email me directly at hismm8690@email.com
          </div>
        )}

        {quote && (
          <div className="mt-12 text-center text-neon-blue font-light italic transition-all animate-pulse">
            {quote}
          </div>
        )}
      </div>
    </section>
  )
}
