import Image from "next/image"
import Link from "next/link"
import { Menu, UserRound } from "lucide-react"
import { cn } from "cn"

const links = [
  { href: "/", label: "Home", active: true },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
]

const linkClass =
  "rounded-sm px-2.5 py-1.5 text-[13px] font-semibold text-neutral-800 transition-colors hover:bg-black/5 lg:text-[15px]"

function Navbar() {
  return (
    <header className="w-full shrink-0 bg-white">
      <div className="mx-auto grid h-14 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 lg:h-[76px] lg:px-6">
        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn(linkClass, link.active && "bg-black/[0.06]")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <details className="relative md:hidden">
            <summary
              aria-label="Open menu"
              className="flex size-9 cursor-pointer list-none items-center justify-center rounded-sm text-neutral-800 hover:bg-black/5 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute top-full left-0 z-50 mt-1 w-48 rounded-md border border-black/10 bg-white p-1 shadow-lg"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={cn(linkClass, "block", link.active && "bg-black/[0.06]")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>

        <Link href="/" className="justify-self-center" aria-label="WonderLust home">
          <Image
            src="/images/Wanderlast.png"
            alt="WonderLust"
            width={162}
            height={24}
            className="h-[18px] w-auto lg:h-[26px]"
          />
        </Link>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <Link
            href="/profile"
            className={cn(linkClass, "hidden items-center gap-1.5 px-2 sm:flex")}
          >
            <UserRound className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
          <Link href="/login" className={cn(linkClass, "px-0 hover:bg-transparent hover:text-brand")}>
            Login
          </Link>
          <Link href="/signup" className={cn(linkClass, "px-0 hover:bg-transparent hover:text-brand")}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Navbar }
