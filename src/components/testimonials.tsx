import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
]

function Testimonials() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Carousel
        opts={{ align: "start", loop: true }}
        aria-label="Testimonials"
        className="mx-auto max-w-[1320px] px-6 sm:px-8"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-[28px] leading-tight font-normal text-neutral-900 sm:text-[40px] lg:text-[44px]">
              What Travelers Say
            </h2>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <CarouselPrevious className="static size-9 border-neutral-300 text-neutral-600 lg:size-10" />
            <CarouselNext className="static size-9 border-neutral-300 text-neutral-600 lg:size-10" />
          </div>
        </div>

        <CarouselContent className="mt-6 -ml-5 lg:mt-8">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="pl-5 md:basis-1/2">
              <article className="flex h-full overflow-hidden border border-black/[0.04] bg-white shadow-[0_2px_10px_rgba(15,60,70,0.06)] lg:min-h-[280px]">
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <blockquote className="text-sm leading-relaxed font-medium text-neutral-800 lg:text-[17px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-auto pt-6">
                    <p className="text-[13px] text-neutral-500">
                      <span className="text-brand">&mdash;</span> {testimonial.name}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-400">{testimonial.location}</p>
                  </div>
                </div>

                <div className="relative w-[36%] shrink-0 self-stretch">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { Testimonials }
