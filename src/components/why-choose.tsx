import Image from "next/image"

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    body: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    body: "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    body: "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

function WhyChoose() {
  return (
    <section className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
        <div className="text-center">
          <h2 className="font-heading text-[28px] leading-tight font-normal text-neutral-900 sm:text-[40px] lg:text-[44px]">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-xs text-neutral-500 sm:text-sm">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-10 lg:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border border-black/[0.04] bg-white p-7 shadow-[0_2px_10px_rgba(15,60,70,0.06)] lg:p-8"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="size-9"
              />
              <h3 className="mt-6 text-lg font-medium text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-[13px] lg:text-sm">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhyChoose }
