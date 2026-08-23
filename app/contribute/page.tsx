'use client'

import { ContributeCards } from '@/components/contribute-cards'

export default function ContributePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-background mt-10 py-16 sm:mt-0 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="mt-30 text-2xl leading-tight font-bold text-[#282828] sm:text-3xl lg:text-4xl">
              Support MTCM
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
              The Michael Trufosa Clarice Mugenya Foundation receives its support through its charity
              partner Samia Future Ltd, among others. Every contribution helps the Foundation continue
              its work in education, healthcare, poverty relief, community development, and creative
              livelihoods for young people.
            </p>
          </div>

          <ContributeCards />

          <div className="space-y-6 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#282828] leading-tight">
              Backed by Samia Future
            </h2>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              MTCM Foundation runs on partnership, not a single source of funding held indefinitely.
              Samia Future Ltd is our first point of support (the partner behind the Expo, the outreach
              work that built it, and the young artists now earning from their craft), and we&apos;re
              glad to have additional partners standing alongside them as this work grows.
            </p>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              Contributions made here go beyond a single event or a single artist. They sustain the
              Foundation&apos;s capacity to keep identifying where support is needed next, and to act
              on it directly rather than waiting for it to be requested.
            </p>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              Every contribution helps the Foundation continue this work.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
