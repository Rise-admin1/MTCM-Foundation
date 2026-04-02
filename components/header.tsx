"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "PROGRAMS",
    href: "#programs",
  },
  {
    label: "MEMBERSHIP",
    href: "#membership",
  },
  {
    label: "RESOURCES",
    href: "#resources",
  },
  { label: "CONTACT", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#282828]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Header Title */}
          <Link href="/" className="shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base sm:text-lg">MICHAEL TRUFOSA CLARICE</span>
              <span className="text-white font-bold text-sm sm:text-base -mt-1">MUGENYA FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-white text-sm font-medium hover:text-[#fe0000] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Membership Button */}
            <Button
              asChild
              className="hidden sm:flex bg-[#fe0000] hover:bg-[#cc0000] text-white font-bold text-xs uppercase tracking-wider"
            >
              <Link href="#membership">Become a Member</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#fe0000] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#282828] border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-700 pb-2">
                <Link
                  href={item.href}
                  className="block py-2 text-white font-medium hover:text-[#fe0000] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Button
              asChild
              className="w-full bg-[#fe0000] hover:bg-[#cc0000] text-white font-bold text-xs uppercase tracking-wider mt-4"
            >
              <Link href="#membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
