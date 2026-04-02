"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    heading: "Poverty Relief & Welfare Support",
    description:
      "Provision of welfare services aimed at reducing poverty.",
  },
  {
    heading: "Education & ICT Access",
    description: "Support through school fees, learning materials, and ICT access.",
  },
  {
    heading: "Healthcare Services",
    description: "Facilitating access to medical services and supplies.",
  },
  {
    heading: "Water & Sanitation",
    description: "Implementation of clean water and sanitation initiatives.",
  },
  {
    heading: "Agriculture & Food Security",
    description: "Promotion of sustainable farming and food production.",
  },
  {
    heading: "Social Welfare & Community Support",
    description:
      "Support for vulnerable populations including the elderly and persons with disabilities.",
  },
]

export function DidYouKnowSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#f8f8f8] rounded-lg p-8 sm:p-12 min-h-[300px] flex flex-col items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#fe0000] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#fe0000] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Slide content */}
          <div className="text-center max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#282828] mb-6">
              Our Objectives
            </h3>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
              <span className="font-bold">{slides[currentSlide].heading}</span>
              <br />
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Dots navigation */}
          <div className="flex gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#fe0000]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
