import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Gift | MTCM Foundation',
  description:
    'A private commission in honour of the late Rt. Hon. Raila Amollo Odinga. Continue the gift through the Michael Trufosa Clarice Mugenya Foundation.',
}

export default function MembershipGiftLayout({ children }: { children: React.ReactNode }) {
  return children
}
