import TestimonialCard from "@/components/ui/TestimonialCard";

interface Testimonial {
  id: string;
  product: string;
  stars: number;
  quote: string;
  name: string;
  avatar: string;
  bubbleBg: string;
  speechBg: string;
  flipSpeech: boolean;
  namePosition: "left" | "right";
}

const testimonials: Testimonial[] = [{
    id:'title',
    product: "SonicArc Pro X1",
    stars: 5,
    quote:
      "Honestly didn't expect this quality at this price. The SonicArc Pro X1 blocks out everything — I wear it 6 hours straight without discomfort.",
    name: "Arthur Bronoth",
    avatar: "/headphones/arthur.png",
    bubbleBg: "/headphones/buble.svg",
    speechBg: "/headphones/speech.svg",
    flipSpeech: false,
    namePosition: "right",
},
  {
    id: "arthur",
    product: "SonicArc Pro X1",
    stars: 5,
    quote:
      "Honestly didn't expect this quality at this price. The SonicArc Pro X1 blocks out everything — I wear it 6 hours straight without discomfort.",
    name: "Arthur Bronoth",
    avatar: "/headphones/arthur.png",
    bubbleBg: "/headphones/buble.svg",
    speechBg: "/headphones/speech.svg",
    flipSpeech: false,
    namePosition: "right",

  },
  {
    id: "smith",
    product: "BassLine Studio 3",
    stars: 4,
    quote:
      "Shipping was faster than expected and the sound is exactly what they promise. BassLine Studio 3 hits different for studio work.",
    name: "Smith Arlsan",
    avatar: "/headphones/smith.png",
    bubbleBg: "/headphones/bublesec.svg",
    speechBg: "/headphones/speech.svg",
    flipSpeech: true,
    namePosition: "left",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="gsap-testimonials-section p-8 mt-15  relative w-full bg-white overflow-hidden"
    >
      <div className="relative grid gap-25 md:grid-cols-2 md:gap-5 place-content-center p-15 w-full md:max-h-screen max-w-8xl mx-auto px-4 sm:px-6">

        {/* Section heading */}

        {/* Cards container */}
          {testimonials.map((t) => (
              t.id=='title' ? (
                <div key={t.id} className="gsap-testimonials-heading  md:mb-0 flex flex-col items-center justify-center ">
                  <h2 className="text-neutral font-black text-h3 sm:text-h2 leading-tight tracking-tight">
                    Real People
                    <br />
                    — Real Sound.
                  </h2>
                  <p className="gsap-testimonials-sub mt-3 w-90 text-neutral/50 text-small sm:text-body leading-relaxed">
                    Over 42,000 orders delivered worldwide — here&apos;s what they think.
                  </p>
                </div>
              ) : (            <div
              key={t.id}
              className={`gsap-card-${t.id}-wrapper flex justify-end w-full`}
            >
              <TestimonialCard
                product={t.product}
                stars={t.stars}
                quote={t.quote}
                name={t.name}
                avatar={t.avatar}
                bubbleBg={t.bubbleBg}
                speechBg={t.speechBg}
                flipSpeech={t.flipSpeech}
                namePosition={t.namePosition}
              />
            </div>)
          ))}   
      </div>
    </section>
  );
}