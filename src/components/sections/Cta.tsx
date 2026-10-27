import Image from "next/image";
import { BadgePercent, Sparkles, HeartHandshake } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from './../../utils/cn';

const benefits = [
  {
    id: "offers",
    label: "Exclusive Member Offers",
    icon: BadgePercent,
  },
  {
    id: "drops",
    label: "Early Access to New Drops",
    icon: Sparkles,
  },
  {
    id: "audiophiles",
    label: "Trusted by Audiophiles",
    icon: HeartHandshake,
  },
];

const orbs = [
  { src: "/cta/orb1.svg", className: "absolute bottom-[9%] -right-[3%] md:bottom-[26%] md:right-[5%] w-16  h-16 md:w-20 md:h-25 " },
  { src: "/cta/orb2.svg", className: "absolute bottom-[9%] -left-[2%]  md:bottom-[15%] md:right-[50%] w-29  h-29 md:w-23 md:h-23 " },
  { src: "/cta/orb3.svg", className: "absolute top-[2%] right-[45%] md:bottom-[10%] md:-left-5 w-26 h-26  md:w-16 md:h-16 " },
  { src: "/cta/orb4.svg", className: "absolute top-[30%] right-[10%] md:top-[8%] md:left-[20%] w-19 h-19   md:w-12 md:h-12 " },
  { src: "/cta/orb5.svg", className: "absolute bottom-[30%] -left-[5%] md:bottom-[55%] md:left-[55%] w-16 h-16 md:w-15 md:h-20 " },
  { src: "/cta/orb6.svg", className: "absolute top-[13%] -left-[12%] md:top-[10%] md:left-[90%]  w-26 h-26  md:w-24 md:h-24 " },
];

function CtaButton() {
    return(
        <button
  className="overflow-hidden  w-32 p-2 h-10 bg-tertiary text-primary border-none rounded-lg text-body font-normal cursor-pointer relative z-10 group"
>
   Claim Offer
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-light rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-neutral rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 font-semibold w-full group-hover:duration-1000 text-body duration-100 opacity-0 text-tertiary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">Claim My 10%</span>
</button>
    )
}

export default function CTA() {
  return (
    <section
      id="cta"
      className="gsap-cta-section border-0 relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #6750A4 0%, #39328F 100%)",
      }}
    >
      {/* Top wave */}
      <div className="gsap-cta-wave-top absolute -top-3 left-0 right-0 z-10 pointer-events-none">
        <Image
          src="/cta/wave-cta-top.svg"
          alt=""
          aria-hidden="true"
          width={1440}
          height={166}
          className="w-full min-w-[160%] transform -translate-x-1/3 md:translate-x-0 md:min-w-full h-auto"
        />
      </div>

      {/* Bottom wave */}
      <div className="gsap-cta-wave-bottom absolute -bottom-2 left-0 right-0 z-10 pointer-events-none">
        <Image
          src="/cta/wave-cta-bottom.svg"
          alt=""
          aria-hidden="true"
          width={1440}
          height={166}
          className="w-full min-w-[190%] transform -translate-x-1/9 md:translate-x-0 md:min-w-full h-auto"
        />
      </div>

      {/* Orbs */}
      {orbs.map((orb) => (
        <div key={orb.src} className={`${orb.className} z-0 pointer-events-none`}>
          <Image
            src={orb.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-38 md:py-39 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0">

        {/* Left — text + form + benefits */}
        <div className="gsap-cta-left hidden md:flex flex-col gap-5 w-full ">

          {/* Label */}
          <span className="gsap-cta-label text-tertiary text-small font-semibold tracking-[0.2em] uppercase">
            New Members
          </span>

          {/* Heading */}
          <h2 className="gsap-cta-heading text-white font-black text-h3 sm:text-h2 lg:text-h1 leading-tight tracking-tight">
            Get 10% Off
          </h2>

          {/* Subtext */}
          <p className="gsap-cta-sub text-white/60 text-small sm:text-body leading-relaxed max-w-[380px]">
            Join our community. Be the first to hear about new drops and exclusive deals.
          </p>

          {/* Email input + button */}
          <div className="gsap-cta-form flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className=" flex-0 px-4 hidden text-neutral md:block py-3 rounded-lg bg-white  text-body placeholder:text-neutral/80 outline-none focus:ring-2 focus:ring-primary"
            />

            <CtaButton />



          </div>

          {/* Benefits row */}
          <div className="gsap-cta-benefits flex flex-row items-start justify-start gap-0 mt-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="flex flex-row items-start">
                  <div className="gsap-benefit flex flex-col items-center gap-2 px-3 sm:px-5 text-center">
                    <Icon size={20} className="text-white/70" strokeWidth={1.5} />
                    <span className="text-white/70 text-[11px] sm:text-small leading-tight max-w-[80px]">
                      {benefit.label}
                    </span>
                  </div>
                  {index < benefits.length - 1 && (
                    <div className="w-[1px] h-10 bg-white/20 mt-1 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex md:hidden">
            <CtaButton />
        </div>

        <div className="gsap-cta-benefits flex md:hidden flex-row items-start justify-start gap-0 ">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="flex flex-row items-start">
                  <div className={cn("gsap-benefit flex flex-col items-center gap-2 px-3 sm:px-5 text-center",benefit.id ==='drops' ? "mb-5" : "mt-5")}>
                    <Icon size={40} className="text-light/70" strokeWidth={1.5} />
                    <span className="text-white/70 text-[11px] sm:text-small leading-tight max-w-[80px]">
                      {benefit.label}
                    </span>
                  </div>
                  {index < benefits.length - 1 && (
                    <div className="w-[1px] h-20 bg-light/20 mt-1 shrink-0" />
                  )}
                </div>
              );
            })}
        </div>


        {/* Right — headphone + glow */}
        <div className="gsap-cta-right  relative w-full   flex items-center justify-center">

          {/* Glow behind headphone */}

            <img
              src="/cta/glowing.svg"
              alt=""
              aria-hidden="true"
              className="w-[280px] md:opacity-100 opacity-70 absolute sm:w-[360px] md:w-[560px] lg:w-[580px] pointer-events-none h-auto object-contain"
            />

          {/* Headphone */}
          <img
            src="/cta/cta-hp.png"
            alt="Headphonic headphones — get 10% off"
            className="gsap-cta-hp relative md:absolute md:-bottom-60 lg:-bottom-60 max-w-[320px] sm:max-w-[360px] md:max-w-[560px] lg:max-w-[580px] pointer-events-none  z-10  object-cover"
          />
        </div>

        <div className="w-full flex md:hidden flex-col items-center">
                      <h2 className="gsap-cta-heading text-light font-semibold text-h2 lg:text-h1 leading-tight tracking-tight">
            Get 10% Off
          </h2>

          {/* Subtext */}
          <p className="gsap-cta-sub text-light/60 text-small sm:text-body w-75 leading-relaxed max-w-[380px]">
            Join our community. Be the first to hear about new drops and exclusive deals.
          </p>
        </div>
      </div>
    </section>
  );
}