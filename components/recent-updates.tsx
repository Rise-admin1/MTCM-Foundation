"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const membershipTypes = [
  {
    title: "ORDINARY MEMBERSHIP",
    excerpt: "Available to individuals subscribing to the constitution.",
    image: "https://placehold.co/600x500/png?text=Membership",
    href: "#membership",
  },
  {
    title: "CORPORATE MEMBERSHIP",
    excerpt: "Open to organizations supporting the Foundation’s objectives.",
    image: "https://placehold.co/600x500/png?text=Membership",
    href: "#membership",
  },
  {
    title: "HONORARY MEMBERSHIP",
    excerpt: "Granted to individuals or entities recognized for their contributions.",
    image: "https://placehold.co/600x500/png?text=Membership",
    href: "#membership",
  },
]

export function RecentUpdates() {
  return (
    <section className="py-16 sm:py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
            Membership
          </h2>
          <Button
            asChild
            variant="outline"
            className="border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white"
          >
            <Link href="#membership">More +</Link>
          </Button>
        </div>

        <p className="text-foreground text-base sm:text-lg mb-12 max-w-3xl">
          Membership forms the foundation of governance and accountability within the organization.
        </p>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {membershipTypes.map((item) => (
            <article key={item.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Link href={item.href} className="block">
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#282828] mb-2 line-clamp-2 hover:text-[#fe0000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Membership details */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#282828] mb-4">
              Application Process
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
              <li>Applications must be proposed and seconded by existing members</li>
              <li>Applications are reviewed and approved by the Board</li>
              <li>Successful applicants are entered into the official register</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#282828] mb-4">
              Responsibilities
            </h3>
            <p className="text-foreground leading-relaxed">
              Members act as fiduciaries and are responsible for overseeing the organization’s operations and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
