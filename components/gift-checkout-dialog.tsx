'use client'

import React, { useEffect, useState } from 'react'
import { Check, Copy, X } from 'lucide-react'
import { PaystackCardPanel } from '@/components/paystack-card-panel'
import { PaymentMethodLogos } from '@/components/payment-method-logos'
import { formatKes, type MemberGift } from '@/lib/member-gifts'

type Method = 'card' | 'cheque'

const CHEQUE_PAYEE = 'Michael Trufosa Clarice Mugenya Foundation'

export function GiftCheckoutDialog({
  gift,
  onClose,
}: {
  gift: MemberGift | null
  onClose: () => void
}) {
  const [method, setMethod] = useState<Method>('card')
  const [copied, setCopied] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  useEffect(() => {
    setMethod('card')
    setCopied(false)
    setSucceeded(false)
  }, [gift?.id])

  const copyPayee = async () => {
    try {
      await navigator.clipboard.writeText(CHEQUE_PAYEE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  if (!gift) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-8 text-[#282828] shadow-2xl md:p-12">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full p-2 transition-colors hover:bg-[#282828]/5"
          aria-label="Close checkout"
        >
          <X size={32} />
        </button>

        {succeeded ? (
          <div className="space-y-6 py-8 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Thank You</h2>
            <p className="text-lg text-[#282828]/80">
              Your {gift.title.toLowerCase()} continues the honour of this work through the Michael
              Trufosa Clarice Mugenya Foundation.
            </p>
            <button
              onClick={onClose}
              className="rounded-md bg-[#fe0000] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#cc0000]"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-2 pr-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter md:text-4xl">{gift.title}</h2>
              <div className="h-1 w-12 bg-[#fe0000]" />
              <p className="text-2xl font-bold">{formatKes(gift.amount)}</p>
              <p className="text-sm text-[#282828]/70">
                This amount is fixed for this gift. Pay by card, or write a cheque to MTCM Foundation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="M-Pesa is available but cannot be used at the moment"
                  aria-label="M-Pesa is available but cannot be used at the moment"
                  className="relative flex min-h-[3.5rem] flex-1 cursor-not-allowed overflow-hidden rounded-md border-2 border-[#282828]/20"
                >
                  <span className="absolute inset-0 bg-white/45" aria-hidden />
                  <span className="relative z-[1] flex w-full flex-col items-center justify-center gap-1 px-1 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#282828]/55">
                      M-Pesa
                    </span>
                    <span className="rounded bg-[#282828]/75 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-widest text-white">
                      Unavailable
                    </span>
                  </span>
                </button>
                {([
                  { id: 'card', label: 'Card' },
                  { id: 'cheque', label: 'Cheque' },
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMethod(tab.id)}
                    className={`min-h-[3.5rem] flex-1 rounded-md border-2 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                      method === tab.id
                        ? 'border-[#fe0000] bg-[#fe0000] text-white'
                        : 'border-[#282828]/20 text-[#282828] hover:border-[#fe0000]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <PaymentMethodLogos />
            </div>

            <div className={method === 'card' ? 'block' : 'hidden'}>
              <p className="mb-6 text-sm leading-relaxed text-[#282828]/80">
                Please attempt Card. You can also easily write a cheque to MTCM Foundation.
              </p>
              <PaystackCardPanel
                key={gift.id}
                amount={String(gift.amount)}
                giftTier={gift.id}
                helperText="Paystack needs an email for the receipt. Visa and Mastercard."
                onSuccess={() => setSucceeded(true)}
              />
            </div>

            <div className={method === 'cheque' ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <p className="text-sm text-[#282828]/80">
                  Write a cheque payable to the foundation and post or deliver it to our Nairobi address.
                </p>
                <div className="space-y-4 rounded-lg border border-[#282828]/15 p-6">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#282828]/50">
                      Payee
                    </p>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-lg leading-snug font-bold">{CHEQUE_PAYEE}</p>
                      <button
                        type="button"
                        onClick={copyPayee}
                        className="flex-shrink-0 rounded-full p-2 hover:bg-[#282828]/5"
                        aria-label="Copy payee name"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-[#282828]/70">
                    Amount: <span className="font-bold">{formatKes(gift.amount)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
