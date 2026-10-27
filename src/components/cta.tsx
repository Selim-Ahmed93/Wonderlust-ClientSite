import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function Cta() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

      <div className="relative flex min-h-[280px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[300px] lg:min-h-[440px]">
        <h2 className="font-heading text-[30px] leading-tight font-normal text-white sm:text-[44px] lg:text-[60px]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-sm text-white/75 lg:mt-5 lg:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link
          href="/destinations"
          className="mt-6 inline-flex h-12 items-center gap-4 bg-white px-7 text-xs font-semibold tracking-[0.1em] text-neutral-900 uppercase transition-colors hover:bg-white/90 lg:mt-8 lg:h-16 lg:px-8 lg:text-[15px]"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export { Cta }
