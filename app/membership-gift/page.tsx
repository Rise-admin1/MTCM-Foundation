'use client'

import { MemberGiftPicker } from '@/components/member-gift-picker'

export default function MembershipGiftPage() {
  const scrollToGifting = () => {
    document.getElementById('gifting')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-[#111] text-white mt-10 pt-24 pb-16 sm:mt-0 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/raila-portrait.jpg"
              alt="Geometric nail and string portrait of the late Rt. Hon. Raila Amollo Odinga"
              className="w-full max-w-lg justify-self-center rounded-lg object-cover"
            />
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                The MTCM Private Collection
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                A private commission
              </h1>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Presented to H.E. Governor Paul Nyongesa Otuoma in honour of the late Rt. Hon. Raila
                Amollo Odinga.
              </p>
              <p className="text-sm uppercase tracking-widest text-white/70">
                Geometric nail &amp; string art · 5,347 nails · 10,694 strings · 96 hours · mastered by
                hand
              </p>
              <blockquote className="border-l-2 border-[#fe0000] pl-4 text-lg italic text-white/90">
                “We accept your gift back, Your Excellency.”
              </blockquote>
              <p className="text-sm text-white/70">
                Michael Mugenya
                <br />
                on behalf of Michael Trufosa Clarice Mugenya Foundation
              </p>
              <p className="text-sm font-semibold tracking-wide text-white/80">
                A gesture of regard. A work of permanence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-[#282828] sm:text-3xl">
            When a gift becomes a legacy
          </h2>
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            Gifts to the Michael Trufosa Clarice Mugenya (MTCM) Foundation support the achievement of
            the Foundation’s goals and mission.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#fe0000]">
            This particular gift will be deployed to
          </p>
          <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-foreground sm:text-lg">
            <li>
              Increase access to quality education through sustained technology infrastructure
              improvement in college, high-school and primary computer laboratories.
            </li>
            <li>
              Promote increased access to necessary amenities including libraries, desks and meals for
              students.
            </li>
            <li>
              Improve access to employment opportunities for women and youth through structured
              engagement in agriculture and environmental conservation.
            </li>
          </ul>
          <p className="text-lg font-semibold text-[#282828]">Turn a gesture into opportunity.</p>
          <button
            type="button"
            onClick={scrollToGifting}
            className="rounded-md bg-[#fe0000] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#cc0000]"
          >
            Continue to gifting
          </button>
        </div>
      </section>

      <section id="gifting" className="border-t border-[#282828]/10 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold leading-tight text-[#282828] sm:text-3xl">
              Continue the legacy
            </h2>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              Choose a member gift. Each amount is fixed. Pay by card, or write a cheque to MTCM
              Foundation.
            </p>
          </div>
          <MemberGiftPicker />
        </div>
      </section>
    </main>
  )
}
