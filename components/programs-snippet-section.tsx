"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const previewPrograms = [
  { title: "Poverty Alleviation", description: "Provision of welfare services aimed at reducing poverty." },
  { title: "Education Support", description: "Support through school fees, learning materials, and ICT access." },
  { title: "Healthcare Support", description: "Facilitating access to medical services and supplies." },
]

export function ProgramsSnippetSection() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
          PROGRAMS
        </h2>
        <p className="text-foreground text-base sm:text-lg mt-6 leading-relaxed max-w-3xl">
          The MTCM Foundation implements a wide range of charitable programs designed to improve quality of life
          and empower communities across Kenya.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {previewPrograms.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 shrink-0 rounded-full bg-[#fe0000]" />
                <div>
                  <h3 className="text-lg font-bold text-[#282828] mb-2">{program.title}</h3>
                  <p className="text-sm text-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base mt-8 font-medium text-[#282828]">
          Click below to view more programs.
        </p>
        <Button
          asChild
          variant="outline"
          className="mt-4 border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white font-semibold"
        >
          <Link href="/programs">Learn More +</Link>
        </Button>
      </div>
    </section>
  )
}
