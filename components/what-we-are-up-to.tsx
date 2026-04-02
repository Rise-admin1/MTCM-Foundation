"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    title: "EDUCATION SUPPORT",
    description:
      "Support through school fees, learning materials, and ICT access.",
    href: "#programs",
    image: "https://placehold.co/900x600/png?text=Programs",
  },
  {
    title: "HEALTHCARE SUPPORT",
    description:
      "Facilitating access to medical services and supplies.",
    href: "#programs",
    image: "https://placehold.co/900x600/png?text=Programs",
  },
  {
    title: "WATER & SANITATION",
    description:
      "Implementation of clean water and sanitation initiatives.",
    href: "#programs",
    image: "https://placehold.co/900x600/png?text=Programs",
  },
]

export function WhatWeAreUpTo() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
            Our Programs
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] flex items-end"
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="relative p-6 text-white">
                <h3 className="text-lg font-bold mb-2 uppercase">{card.title}</h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                  {card.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-[#fe0000] group-hover:text-white transition-colors">
                  MORE +
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
