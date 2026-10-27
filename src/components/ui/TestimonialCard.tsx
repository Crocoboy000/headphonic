import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

interface TestimonialCardProps {
  product: string;
  stars: number;
  quote: string;
  name: string;
  avatar: string;
  bubbleBg: string;
  speechBg: string;
  flipSpeech?: boolean;
  namePosition?: "left" | "right";
}

// Intrinsic dimensions of the decorative bubble SVGs, so next/image keeps the
// correct aspect ratio when the image is scaled with CSS.
const bubbleSizes: Record<string, { width: number; height: number }> = {
  "/headphones/buble.svg": { width: 477, height: 502 },
  "/headphones/bublesec.svg": { width: 453, height: 477 },
};

function renderStars(count: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={
        i < count
          ? "text-tertiary fill-tertiary"
          : "text-tertiary/30 fill-tertiary/10"
      }
    />
  ));
}

export default function TestimonialCard({
  product,
  stars,
  quote,
  name,
  avatar,
  bubbleBg,
  speechBg,
  flipSpeech = false,
  namePosition = "left",
}: TestimonialCardProps) {
  const bubble = bubbleSizes[bubbleBg] ?? { width: 477, height: 502 };

  return (
    <div className="gsap-testimonial-card  relative w-full max-w-lg p-6 rounded-lg">

      {/* Bubble color blob — full cover */}

         <Image
          src={bubbleBg}
          alt=""
          aria-hidden="true"
          width={bubble.width}
          height={bubble.height}
          className={cn(" absolute w-[350px] h-auto object-cover origin-center ",flipSpeech ? "-left-3 -top-8" : 'right-5 -top-5')}
        /> 

      {/* Speech bubble SVG — full cover */}



      {/* Card content */}
      <div className="relative justify-start bg--200 w-110 h-69 gap-2 items-between z-20 flex flex-col p-2" >

         <Image
          src={speechBg}
        alt="speech bubble background"
          aria-hidden="true"
          fill
          className={`object-contain absolute -10 -z-2 bg-amber- inset-0 scale-y-110  w-full h-full ${flipSpeech ? "-scale-x-130" : "scale-x-130"}`}
        /> 

        {/* Top row — product + stars */}
        <div className="gsap-card-top flex items-start justify-between">
          <span className="text-white/50 text-small md:text-body font-medium">
            {product}
          </span>
          <div className="flex items-center gap-0.5">
            {renderStars(stars)}
          </div>
        </div>

        {/* Opening quote */}
        <div className="gsap-quote-open w-8 h-8 relative shrink-0">
          <Image
            src="/headphones/quotation.svg"
            alt="opening quotation mark"
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>

        {/* Quote body */}
        <p className="gsap-quote-body text-white text-small sm:text-body font-normal leading-relaxed">
          {quote}
        </p>

        {/* Bottom row — name + closing quote */}
        <div className="gsap-card-bottom flex items-bottom justify-between mt-2">
          {namePosition === "left" ? (
            <>
              <span className="gsap-reviewer-name text-tertiary font-bold text-body sm:text-h4">
                {name}
              </span>
              <div className="gsap-quote-close w-8 h-8 relative shrink-0">
                <Image
                  src="/headphones/quotation.svg"
                  alt=" closing quotation mark"
                  aria-hidden="true"
                  fill
                  className="object-contain -scale-x-100 -scale-y-100"
                />
              </div>
            </>
          ) : (
            <>
              <div className="gsap-quote-close w-8 h-8 relative shrink-0">
                <Image
                  src="/headphones/quotation.svg"
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-contain -scale-x-100 -scale-y-100"
                />
              </div>
              <span className="gsap-reviewer-name text-tertiary font-bold text-body sm:text-h4">
                {name}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Avatar — sits below content, inside pb-10 space */}

        <Image
          src={avatar}
          alt={name}
          width={120}
          height={120}
          className={cn('rounded-full absolute gsap-avatar w-20 bottom-2 z-50',namePosition === "right" ? "left-15" : "right-15")}
        />
        <svg className={cn("absolute bottom-0 w-22  z-49", namePosition === "right" ? "left-12" : "right-12")} viewBox="0 0 141 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.0684 1.21484C47.972 2.88238 39.4989 6.21211 32.0117 10.8574L32.8018 12.1309C25.2199 16.8349 18.6755 22.9154 13.5605 29.9932L12.3467 29.1143C7.1013 36.3722 3.32121 44.6608 1.41211 53.5957L2.87793 53.9092C1.9744 58.1379 1.5 62.5156 1.5 67C1.5 71.4844 1.9744 75.8621 2.87793 80.0908L1.41211 80.4033C3.32109 89.3383 7.10136 97.6267 12.3467 104.885L13.5605 104.007C18.6755 111.085 25.2199 117.165 32.8018 121.869L32.0117 123.142C39.499 127.787 47.9719 131.117 57.0684 132.784L57.3379 131.31C61.5974 132.09 65.9977 132.5 70.5 132.5C75.0023 132.5 79.4026 132.09 83.6621 131.31L83.9326 132.784C93.029 131.116 101.502 127.787 108.989 123.142L108.198 121.869C115.78 117.165 122.324 111.085 127.439 104.007L128.654 104.885C133.899 97.6268 137.68 89.3382 139.589 80.4033L138.122 80.0908C139.026 75.8621 139.5 71.4844 139.5 67C139.5 62.5156 139.026 58.1379 138.122 53.9092L139.589 53.5957C137.68 44.6609 133.9 36.3722 128.654 29.1143L127.439 29.9932C122.324 22.9154 115.78 16.8349 108.198 12.1309L108.989 10.8574C101.502 6.21205 93.0289 2.88249 83.9326 1.21484L83.6621 2.69043C79.4026 1.90954 75.0023 1.5 70.5 1.5C65.9977 1.5 61.5974 1.90954 57.3379 2.69043L57.0684 1.21484Z" stroke="#6155F5" strokeWidth="4" strokeDasharray="24 24"/>
</svg>


    </div>
  );
}