import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/profile", label: "My Profile" },
]

const supportLinks = [
  { href: "/help", label: "Help Center" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
]

const socials = [
  {
    href: "https://x.com",
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452Z",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162ZM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
]

const columnHeadingClass =
  "text-xs font-semibold tracking-[0.12em] text-white/85 uppercase lg:text-[13px]"

const columnLinkClass =
  "text-sm text-white/60 transition-colors hover:text-white lg:text-[15px]"

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-6 sm:px-8 lg:pt-24 lg:pb-8">
        <Link href="/" className="inline-block" aria-label="Wanderlast home">
          <span className="font-heading text-[52px] leading-none font-medium tracking-[-0.02em] sm:text-[68px] lg:text-[96px]">
            Wanderlast
          </span>
        </Link>
        <p className="mt-4 max-w-lg text-sm text-white/55 lg:text-base">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <h2 className={columnHeadingClass}>Newsletter</h2>
            <p className="mt-2.5 text-sm text-white/55">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form className="mt-5 flex h-12 w-full max-w-[280px] items-center bg-white/[0.09] focus-within:bg-white/[0.13] lg:h-[52px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="Enter email"
                autoComplete="email"
                className="h-full w-full min-w-0 bg-transparent px-4 text-sm text-white placeholder:text-white/55 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="grid h-full w-12 shrink-0 place-items-center text-white transition-colors hover:bg-white/10"
              >
                <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </button>
            </form>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className={columnHeadingClass}>
              Quick Links
            </h2>
            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={columnLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-support">
            <h2 id="footer-support" className={columnHeadingClass}>
              Support
            </h2>
            <ul className="mt-5 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={columnLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnHeadingClass}>Contact Us</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="tel:+7869011622" className={columnLinkClass}>
                  786 901 1622
                </a>
              </li>
              <li>
                <a href="mailto:info@wanderland.com" className={columnLinkClass}>
                  info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p className="text-xs text-white/45">
            &copy; 2026 Wanderlust. All rights reserved.
          </p>

          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center text-white/80 transition-colors hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-[18px]">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
