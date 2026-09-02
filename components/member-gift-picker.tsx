'use client'

import { useState } from 'react'
import { MEMBER_GIFTS, formatKes, type MemberGift } from '@/lib/member-gifts'
import { GiftCheckoutDialog } from '@/components/gift-checkout-dialog'

export function MemberGiftPicker() {
  const [selectedId, setSelectedId] = useState<MemberGift['id'] | null>(null)
  const [checkoutGift, setCheckoutGift] = useState<MemberGift | null>(null)

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {MEMBER_GIFTS.map((gift) => {
          const selected = selectedId === gift.id
          return (
            <div
              key={gift.id}
              className={`overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl ${
                selected ? 'ring-2 ring-[#fe0000]' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedId(selected ? null : gift.id)}
                className="w-full text-left"
              >
                <div className="aspect-16/10 overflow-hidden bg-[#282828]/5">
                  {gift.image ? (
                    <img
                      src={gift.image}
                      alt={gift.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#282828]/10" aria-hidden />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#fe0000]">
                    {gift.title}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#282828]">{formatKes(gift.amount)}</p>
                </div>
              </button>
              {selected && (
                <div className="space-y-3 border-t border-[#282828]/10 px-6 pb-6 pt-3">
                  <p className="text-sm leading-relaxed text-foreground">
                    Card or cheque only. M-Pesa cannot process this amount.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCheckoutGift(gift)}
                    className="rounded-md bg-[#fe0000] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#cc0000]"
                  >
                    Continue with this gift
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <GiftCheckoutDialog gift={checkoutGift} onClose={() => setCheckoutGift(null)} />
    </>
  )
}
