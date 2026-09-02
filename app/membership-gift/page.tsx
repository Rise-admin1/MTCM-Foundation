import { MemberGiftPicker } from '@/components/member-gift-picker'

export default function MembershipGiftPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mt-10 bg-[#111] pt-24 pb-16 sm:mt-0 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img
            src="/raila-portrait.jpg"
            alt="Geometric nail and string portrait of the late Rt. Hon. Raila Amollo Odinga"
            className="mx-auto w-full max-w-lg rounded-lg object-cover"
          />
        </div>
      </section>

      <section id="gifting" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-2xl font-bold leading-tight text-[#282828] sm:text-3xl">
              Continue the legacy
            </h1>
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
