import type { ReactNode } from 'react'

export function PaymentMethodLogos() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      aria-label="Payment methods: M-Pesa, card, Visa, Mastercard, and cheque"
    >
      <MpesaLogo />
      <CardLogo />
      <VisaLogo />
      <MastercardLogo />
      <ChequeLogo />
    </div>
  )
}

function LogoFrame({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 w-[3.25rem] items-center justify-center overflow-hidden rounded border border-[#282828]/10 bg-white shadow-sm">
      {children}
    </span>
  )
}

function MpesaLogo() {
  return (
    <LogoFrame>
      <svg viewBox="0 0 52 32" className="h-full w-full" role="img" aria-label="M-Pesa">
        <rect width="52" height="32" fill="#4CAF50" />
        <text
          x="26"
          y="20.5"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="0.4"
        >
          M-PESA
        </text>
      </svg>
    </LogoFrame>
  )
}

function CardLogo() {
  return (
    <LogoFrame>
      <svg viewBox="0 0 52 32" className="h-full w-full" role="img" aria-label="Card">
        <rect width="52" height="32" fill="#1B3A4B" />
        <rect y="8" width="52" height="6" fill="#C9A227" />
        <rect x="6" y="20" width="14" height="4" rx="0.8" fill="#fff" opacity="0.9" />
        <rect x="24" y="21" width="6" height="2" rx="0.4" fill="#fff" opacity="0.45" />
        <rect x="32" y="21" width="6" height="2" rx="0.4" fill="#fff" opacity="0.45" />
        <rect x="40" y="21" width="6" height="2" rx="0.4" fill="#fff" opacity="0.45" />
      </svg>
    </LogoFrame>
  )
}

function VisaLogo() {
  return (
    <LogoFrame>
      <svg viewBox="0 0 52 32" className="h-full w-full" role="img" aria-label="Visa">
        <rect width="52" height="32" fill="#1A1F71" />
        <text
          x="26"
          y="21.5"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontStyle="italic"
          fontWeight="700"
          letterSpacing="1"
        >
          VISA
        </text>
      </svg>
    </LogoFrame>
  )
}

function MastercardLogo() {
  return (
    <LogoFrame>
      <svg viewBox="0 0 52 32" className="h-full w-full" role="img" aria-label="Mastercard">
        <rect width="52" height="32" fill="#fff" />
        <circle cx="21" cy="16" r="9" fill="#EB001B" />
        <circle cx="31" cy="16" r="9" fill="#F79E1B" />
        <path
          d="M26 8.9a9 9 0 0 0 0 14.2 9 9 0 0 0 0-14.2z"
          fill="#FF5F00"
        />
      </svg>
    </LogoFrame>
  )
}

function ChequeLogo() {
  return (
    <LogoFrame>
      <svg viewBox="0 0 52 32" className="h-full w-full" role="img" aria-label="Cheque">
        <rect width="52" height="32" fill="#F4F1EA" />
        <rect x="1.5" y="1.5" width="49" height="29" rx="1.5" fill="none" stroke="#8A8376" strokeWidth="1.2" />
        <rect x="4" y="5" width="10" height="7" rx="0.6" fill="#D9D2C5" />
        <line x1="17" y1="8" x2="47" y2="8" stroke="#8A8376" strokeWidth="1" />
        <line x1="17" y1="12" x2="40" y2="12" stroke="#C4BDB0" strokeWidth="1" />
        <line x1="6" y1="20" x2="32" y2="20" stroke="#C4BDB0" strokeWidth="1" />
        <path d="M34 22c3-3 8-1 11-4" fill="none" stroke="#2F5D8C" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="34" y1="26" x2="47" y2="26" stroke="#8A8376" strokeWidth="1" />
      </svg>
    </LogoFrame>
  )
}
