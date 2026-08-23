export type ActivityCard = {
  id: string
  label: string
  title: string
  body: string
}

export const ACTIVITIES: ActivityCard[] = [
  {
    id: 'women-expo',
    label: 'Enterprise',
    title: 'Samia Women Business Expo',
    body: "Women's groups from across the region gathered for a full day built around business, with leaders presenting their ideas, practical insights shared, and support explored for groups looking to grow beyond where they started. The Expo turned individual ambition into a shared, visible push for enterprise led by women in Samia.",
  },
  {
    id: 'outreach',
    label: 'Community',
    title: 'Community Outreach',
    body: 'Long before the Expo took place, the work was already underway: organizing women\'s groups ward by ward, encouraging registration, and connecting groups that had been operating in isolation. That groundwork is what made the Expo possible, and it continues after it, keeping the network active.',
  },
  {
    id: 'youth-arts',
    label: 'Arts & Livelihoods',
    title: 'Creative Talent, Real Income',
    body: "Some of the Foundation's most striking work has gone into backing young artists who taught themselves their craft, giving them materials, space, and a route to paying clients. Tanzi Boy is one example: from lacking studio time to recording and proper talent management, he’s now certain of life ahead. Also, Tariq Oyaro Momanyi is one more example of artists MTCM supports, through his detailed pin and thread portraits, built entirely by hand have grown from personal work into commissioned, framed pieces. It's a small but deliberate bet that creative skill deserves the same backing as any other trade.",
  },
]
