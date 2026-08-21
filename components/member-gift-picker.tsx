'use client'

import { useState } from 'react'
import { MEMBER_GIFTS, formatKes, type MemberGift } from '@/lib/member-gifts'
import { GiftCheckoutDialog } from '@/components/gift-checkout-dialog'

export function MemberGiftPicker() {
  const [selectedId, setSelectedId] = useState<MemberGift['id'] | null>(null)
  const [checkoutGift, setCheckoutGift] = useState<MemberGift | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {MEMBER_GIFTS.map((gift) => {
          const selected = selectedId === gift.id
          return (
            <div
              key={gift.id}
              className={`rounded-lg border bg-white transition-shadow ${
                selected ? 'border-[#fe0000] shadow-md' : 'border-[#282828]/10 shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedId(selected ? null : gift.id)}
                className="flex w-full items-center gap-4 p-4 text-left"
              >
                <img
                  src={gift.image}
                  alt={gift.imageAlt}
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#fe0000]">
                    {gift.title}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#282828]">{formatKes(gift.amount)}</p>
                </div>
              </button>
              {selected && (
                <div className="space-y-3 border-t border-[#282828]/10 px-4 pb-4 pt-3">
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
