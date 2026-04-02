"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282828] leading-tight">
              About MTCM Foundation
            </h2>
            
            <div className="space-y-4 text-foreground text-base sm:text-lg leading-relaxed">
              <p>
                The Michael Trufosa Clarice Mugenya Foundation (MTCM Foundation) is a non-governmental organization established under the laws of Kenya. The organization operates from Nairobi with a principal office in Busia County.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white font-semibold"
            >
              <Link href="/about">Learn More +</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x600/png?text=MTCM+Foundation"
                alt="African entrepreneurs collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fe0000]/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
