"use client"

import Link from "next/link"
 

const footerLinks = {
  about: {
    title: "ABOUT",
    links: [
      { label: "About MTCM Foundation", href: "#about" },
    ],
  },
  programs: {
    title: "PROGRAMS",
    links: [
      { label: "Poverty Relief & Welfare Support", href: "#programs" },
      { label: "Education & ICT Access", href: "#programs" },
      { label: "Healthcare Services", href: "#programs" },
      { label: "Water & Sanitation", href: "#programs" },
      { label: "Agriculture & Food Security", href: "#programs" },
      { label: "Social Welfare & Community Support", href: "#programs" },
    ],
  },
  membership: {
    title: "MEMBERSHIP",
    links: [
      { label: "Membership Application Form", href: "#membership" },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { label: "Constitution", href: "#resources" },
      { label: "Accountability", href: "#resources" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-[#282828] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ABOUT */}
          <div>
            <h3 className="font-bold text-lg mb-6">{footerLinks.about.title}</h3>
            <ul className="space-y-3">
              {footerLinks.about.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe0000] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="font-bold text-lg mb-6">{footerLinks.programs.title}</h3>
            <ul className="space-y-3">
              {footerLinks.programs.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe0000] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MEMBERSHIP */}
          <div>
            <h3 className="font-bold text-lg mb-6">{footerLinks.membership.title}</h3>
            <ul className="space-y-3">
              {footerLinks.membership.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe0000] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="font-bold text-lg mb-6">{footerLinks.resources.title}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe0000] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-6">CONTACT</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <span className="text-white font-semibold">Registered Office:</span> Nairobi, Kenya
              </div>
              <div>
                <span className="text-white font-semibold">Principal Office:</span> Busia County, Kenya
              </div>
              <div>
                <Link href="#contact" className="text-gray-400 hover:text-[#fe0000] transition-colors">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Michael Trufosa Clarice Mugenya Foundation. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/terms-conditions" className="text-gray-400 hover:text-[#fe0000] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/safeguarding-policy" className="text-gray-400 hover:text-[#fe0000] transition-colors">
                Safeguarding Policy
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#fe0000] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
