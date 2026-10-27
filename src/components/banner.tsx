import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const searchFields = [
  { label: "Location", value: "Address, City Or Zip" },
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
]

const ctaClass =
  "inline-flex h-10 items-center justify-center gap-2 px-4 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors lg:h-12 lg:px-6 lg:text-xs"

function Banner() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />

      <div className="relative flex min-h-[430px] flex-col items-center justify-center px-5 pt-12 pb-10 text-center sm:min-h-[370px] sm:justify-end lg:min-h-[570px] lg:pt-16 lg:pb-14">
        <h1 className="font-heading text-[42px] leading-[1.03] font-normal tracking-[-0.015em] text-white sm:text-6xl lg:text-[88px]">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-6 max-w-[29rem] text-sm leading-relaxed text-white/80 sm:max-w-[32rem] sm:text-[15px] lg:max-w-2xl lg:text-lg">
          Explore breathtaking destinations and create unforgettable memories with our curated
          travel experiences.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-2 lg:mt-6">
          <Link
            href="/destinations"
            className={`${ctaClass} bg-brand text-brand-foreground hover:bg-brand/90`}
          >
            Explore Now
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Link>
          <Link
            href="/destinations"
            className={`${ctaClass} bg-white/25 text-white backdrop-blur-sm hover:bg-white/35`}
          >
            View Destination
          </Link>
        </div>
      </div>

      <div
        role="search"
        aria-label="Find a trip"
        className="relative flex flex-col gap-px border-t border-white/15 bg-white/25 md:flex-row"
      >
        <div className="grid flex-1 grid-cols-2 gap-px md:grid-cols-4">
          {searchFields.map((field) => (
            <div
              key={field.label}
              className="bg-neutral-700/70 px-3 py-3 text-left backdrop-blur-md sm:px-4 lg:px-5 lg:py-4"
            >
              <p className="text-xs font-semibold text-white lg:text-[13px]">{field.label}</p>
              <p className="mt-0.5 text-[11px] text-white/65 lg:text-xs">{field.value}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground transition-colors hover:bg-brand/90 md:w-28 md:py-0 lg:w-32 lg:text-sm"
        >
          Search
        </button>
      </div>
    </section>
  )
}

export { Banner }
