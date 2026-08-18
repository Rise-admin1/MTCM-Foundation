'use client'

import { Button } from '@/components/ui/button'
import { useCheckout } from '@/components/checkout-provider'

export default function ContributePage() {
  const { openCheckout } = useCheckout()

  return (
    <main className="min-h-screen">
      <section className="bg-background mt-10 py-16 sm:mt-0 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h1 className="mt-30 text-2xl leading-tight font-bold text-[#282828] sm:text-3xl lg:text-4xl">
            Support MTCM
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
            The Michael Trufosa Clarice Mugenya Foundation receives its support through its charity
            partner Samia Future Ltd. among others.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
            Every contribution helps the Foundation continue its work in education, healthcare,
            poverty relief, and community development.
          </p>
          <Button
            type="button"
            onClick={openCheckout}
            className="bg-[#fe0000] text-xs font-bold tracking-wider text-white uppercase hover:bg-[#cc0000]"
          >
            Contribute
          </Button>
        </div>
      </section>
    </main>
  )
}
