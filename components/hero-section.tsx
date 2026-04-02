"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-24 pb-16 lg:pt-0 lg:items-end">
      {/* Background Image */}
      <img
        src="https://placehold.co/1920x1080/png?text=MTCM+Foundation"
        alt="Community impact across Kenya"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-end">
          {/* Left side - Heading + subtext */}
          <div className="bg-black/60 p-6 sm:p-8 rounded-lg animate-slide-in">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Empowering Communities Across Kenya
            </h1>
            <p className="text-white/90 mt-4 text-sm sm:text-base leading-relaxed">
              The MTCM Foundation is committed to improving lives through charitable initiatives focused on education,
              healthcare, poverty relief, and community development.
            </p>

            {/* Focus Areas */}
            <div className="mt-6">
              <p className="text-white font-bold text-sm uppercase tracking-wider">
                Focus Areas
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-white/90 text-sm leading-relaxed">
                <li>Poverty Relief & Welfare Support</li>
                <li>Education & ICT Access</li>
                <li>Healthcare Services</li>
                <li>Water & Sanitation</li>
                <li>Agriculture & Food Security</li>
                <li>Social Welfare & Community Support</li>
              </ul>
            </div>

            {/* Membership CTA copy */}
            <div className="mt-6">
              <p className="text-white text-sm sm:text-base font-bold text-left">
                Become part of a network committed to meaningful impact.
              </p>
              <p className="text-white/90 mt-2 text-sm sm:text-base leading-relaxed text-left">
                Join us in advancing community development across Kenya.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-bold"
              >
                <Link href="#membership">Become a Member</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 text-white"
              >
                <Link href="#contact">Partner With Us</Link>
              </Button>
            </div>
          </div>

          {/* Right side intentionally removed */}
        </div>
      </div>
    </section>
  )
}
