'use client'

import React, { useState } from 'react'
import { BACKEND_URL, MTCM_PAYSTACK_PUBLIC_KEY } from '@/lib/backend'

export function PaystackCardPanel({
  amount,
  onSuccess,
}: {
  amount: string
  onSuccess: () => void
}) {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const kes = Math.round(Number(amount))
  const amountOk = Number.isFinite(kes) && kes >= 50
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!MTCM_PAYSTACK_PUBLIC_KEY) {
      setError('Card payments are not configured yet. Add NEXT_PUBLIC_MTCM_PAYSTACK_PUBLIC_KEY.')
      return
    }
    if (!emailOk) {
      setError('Enter a valid email address.')
      return
    }
    if (!amountOk) {
      setError('Enter at least 50 KES.')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(`${BACKEND_URL}/api/mtcm-foundation/paystack/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: kes, email: email.trim() }),
      })
      const data = await response.json()
      if (!response.ok || !data.accessCode) {
        throw new Error(data.msg || 'Could not start card payment')
      }

      const PaystackPop = (await import('@paystack/inline-js')).default
      const popup = new PaystackPop()
      popup.resumeTransaction(data.accessCode, {
        onSuccess: async (transaction: { reference?: string }) => {
          try {
            const reference = transaction?.reference || data.reference
            const verifyRes = await fetch(
              `${BACKEND_URL}/api/mtcm-foundation/paystack/verify/${encodeURIComponent(reference)}`
            )
            const verifyData = await verifyRes.json()
            if (verifyData.status === 'success') {
              onSuccess()
            } else {
              setError(verifyData.msg || 'Payment could not be confirmed yet.')
            }
          } catch {
            setError('Payment may have gone through. Please wait a moment and try again if you were not charged.')
          } finally {
            setSubmitting(false)
          }
        },
        onCancel: () => {
          setError('Payment cancelled.')
          setSubmitting(false)
        },
        onError: (paystackError: { message?: string }) => {
          setError(paystackError?.message || 'Card payment failed')
          setSubmitting(false)
        },
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start card payment')
      setSubmitting(false)
    }
  }

  if (!MTCM_PAYSTACK_PUBLIC_KEY) {
    return (
      <p className="text-sm text-muted-foreground">
        Card payments are not configured yet. Add NEXT_PUBLIC_MTCM_PAYSTACK_PUBLIC_KEY and a Kenya Paystack secret key on the backend.
      </p>
    )
  }

  return (
    <form onSubmit={handlePay} className="space-y-6">
      <div>
        <label htmlFor="card-email" className="mb-2 block text-xs font-bold uppercase tracking-widest">
          Email
        </label>
        <input
          id="card-email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full border-b-2 border-[#282828]/20 py-4 text-xl font-bold transition-colors focus:border-[#fe0000] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Paystack needs an email for the receipt. Minimum 50 KES. Visa and Mastercard.
        </p>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting || !amountOk}
        className="w-full rounded-md bg-[#fe0000] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#cc0000] disabled:opacity-60"
      >
        {submitting ? 'Opening card payment…' : 'Pay with card'}
      </button>
    </form>
  )
}
