"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The Foundation serves the people of Kenya through exclusively charitable activities aimed at relief of poverty, advancement of education, promotion of health, and social welfare and community empowerment.",
    name: "MTCM Foundation",
    title: "Mission Statement",
  },
  {
    quote:
      "The Foundation is governed by a Board of Directors consisting of a minimum of five and a maximum of nine members, including Chairperson, Secretary, and Treasurer.",
    name: "Board of Directors",
    title: "Governance Structure",
  },
  {
    quote:
      "The Board provides policy direction, while the Chief Executive Officer oversees daily operations.",
    name: "Executive Leadership",
    title: "Policy & Operations",
  },
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#282828]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-4 left-0 sm:left-8">
            <Quote className="w-16 h-16 text-[#fe0000]/30" />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Testimonial content */}
          <div className="text-center px-8 sm:px-16">
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 min-h-[150px] flex items-center justify-center">
              <p>&ldquo;{testimonials[currentSlide].quote}&rdquo;</p>
            </blockquote>
            <div className="text-white">
              <p className="font-bold text-lg">{testimonials[currentSlide].name}</p>
              <p className="text-white/70">{testimonials[currentSlide].title}</p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#fe0000]" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
