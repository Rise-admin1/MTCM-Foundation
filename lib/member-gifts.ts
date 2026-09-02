export type MemberGift = {
  id: 'ordinary' | 'corporate' | 'honorary' | 'legacy'
  title: string
  amount: number
  image: string
  imageAlt: string
}

export const MEMBER_GIFTS: MemberGift[] = [
  {
    id: 'ordinary',
    title: 'Ordinary member gift',
    amount: 1724408,
    image: '/ordinary.avif',
    imageAlt: 'Ordinary membership',
  },
  {
    id: 'corporate',
    title: 'Corporate member gift',
    amount: 3448815,
    image: '/corp.avif',
    imageAlt: 'Corporate membership',
  },
  {
    id: 'honorary',
    title: 'Honorary member gift',
    amount: 5173223,
    image: '/honan.avif',
    imageAlt: 'Honorary membership',
  },
  {
    id: 'legacy',
    title: 'Legacy member gift',
    amount: 6897630,
    image: '/Odinga.jpg',
    imageAlt: 'The late Rt. Hon. Raila Amollo Odinga',
  },
]

export function formatKes(amount: number) {
  return `KES ${amount.toLocaleString('en-KE')}`
}
