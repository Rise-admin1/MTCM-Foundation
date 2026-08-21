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
    image: '/hero.avif',
    imageAlt: 'MTCM Foundation community work',
  },
  {
    id: 'corporate',
    title: 'Corporate member gift',
    amount: 3448815,
    image: '/about_image.avif',
    imageAlt: 'MTCM Foundation partners and community',
  },
  {
    id: 'honorary',
    title: 'Honorary member gift',
    amount: 5173223,
    image: '/about_full.avif',
    imageAlt: 'MTCM Foundation programmes',
  },
  {
    id: 'legacy',
    title: 'Legacy member gift',
    amount: 6897630,
    image: '/raila-portrait.jpg',
    imageAlt: 'Geometric nail and string portrait of the late Rt. Hon. Raila Amollo Odinga',
  },
]

export function formatKes(amount: number) {
  return `KES ${amount.toLocaleString('en-KE')}`
}
