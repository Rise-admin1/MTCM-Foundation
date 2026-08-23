'use client'

import { ArrowRight } from 'lucide-react'
import { ACTIVITIES } from '@/lib/activities'
import { useCheckout } from '@/components/checkout-provider'

export function ContributeCards() {
  const { openCheckout } = useCheckout()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ACTIVITIES.map((activity) => (
        <button
          key={activity.id}
          type="button"
          onClick={openCheckout}
          className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#fe0000] mb-2">
            {activity.label}
          </p>
          <h3 className="text-lg font-bold text-[#282828] mb-3">{activity.title}</h3>
          <p className="text-sm text-foreground leading-relaxed mb-6">{activity.body}</p>
          <span className="inline-flex items-center text-sm font-semibold text-[#fe0000]">
            Contribute
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </button>
      ))}
    </div>
  )
}
