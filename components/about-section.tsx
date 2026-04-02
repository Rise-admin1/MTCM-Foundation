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

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Main Objective</span>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Relief of poverty</li>
                  <li>Advancement of education</li>
                  <li>Promotion of health</li>
                  <li>Social welfare and community empowerment</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Specific Objectives</span>
                  <span>: </span>
                  The Foundation undertakes initiatives including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Poverty alleviation and welfare services</li>
                  <li>Clean water and sanitation projects</li>
                  <li>Access to healthcare services and supplies</li>
                  <li>Educational support and ICT access</li>
                  <li>Promotion of sustainable agriculture</li>
                  <li>Rehabilitation support programs</li>
                  <li>
                    Assistance to vulnerable groups including the elderly, orphans, and persons with disabilities
                  </li>
                  <li>Food aid and shelter provision</li>
                  <li>Grants and donations</li>
                  <li>Advocacy and engagement with stakeholders</li>
                  <li>Resource mobilization and partnerships</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Governance</span>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Foundation is governed by a Board of Directors consisting of a minimum of five and a maximum of nine members, including Chairperson, Secretary, and Treasurer.
                  </li>
                </ul>
                <p>
                  The Board provides policy direction, while the Chief Executive Officer oversees daily operations.
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="space-y-3 pt-2">
              <p className="text-[#282828] font-bold">Focus Areas</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Poverty Relief & Welfare Support",
                  "Education & ICT Access",
                  "Healthcare Services",
                  "Water & Sanitation",
                  "Agriculture & Food Security",
                  "Social Welfare & Community Support",
                ].map((label) => (
                  <div key={label} className="flex items-start gap-2 text-foreground text-base">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#fe0000]" />
                    <span className="leading-relaxed">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white font-semibold"
            >
              <Link href="#about">Learn More +</Link>
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
