import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Lock,
  AudioLines,
  Headphones,
} from "lucide-react";
import { cn } from "@/utils/cn";

interface ValueItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType;
}

const VALUES: ValueItem[] = [
  {
    id: "shipping",
    title: "Free Worldwide Shipping",
    desc: "Fast, reliable delivery to your door, anywhere.",
    icon: Truck,
  },
  {
    id: "warranty",
    title: "2-Year Warranty",
    desc: "Built to last. Covered for the long.",
    icon: ShieldCheck,
  },
  {
    id: "returns",
    title: "30-Day Easy Returns",
    desc: "Not the right fit? Return it, no questions asked.",
    icon: RotateCcw,
  },
  {
    id: "payments",
    title: "Secure & Safe Payments",
    desc: "Encrypted checkout for peace of mind.",
    icon: Lock,
  },
  {
    id: "audio",
    title: "Studio-grade audio",
    desc: "Every product is tuned for clarity and depth.",
    icon: AudioLines,
  },
  {
    id: "support",
    title: "24/7 Support",
    desc: "Real people. Real help, Always.",
    icon: Headphones,
  },
];

// Split values by position
const leftValues = VALUES.slice(0, 3);
const rightValues = VALUES.slice(3);

interface ValueCardProps {
  item: ValueItem;
  index: number;
}

function LeftValueCard({ item, index }: ValueCardProps) {
  return (
    <>
        <div
        className={cn(
          "gsap-vp-item-" + item.id,
          index === 1
          ? " text-sm hidden md:ml-8 text-neutral/70 font-semibold"
          : "text-neutral  text-small md:text-body font-bold",
          "md:grid place-items-center gap-2"
        )}
        >
          {/* Text — left aligned */}
          <div className="grid gap-1 text-center ">
            <h3 className="gsap-vp-title md:text-right text-center w-30 md:w-full leading-tight">
              {item.title}
            </h3>
            <p className="gsap-vp-desc text-neutral/50 w-32 lg:w-60 md:w-45 text-center md:text-right lg:text-small md:text-[12px]  font-normal">
              {item.desc}
            </p>
          </div>
        </div>

    {
      index == 1 &&
      <div className="w-[2px] text-center md:hidden h-19 bg-primary rounded-full" />
      
    }
    </>
  );
}

function RightValueCard({ item, index }: ValueCardProps) {
  return (
    <div
      key={item.id}
      className={cn(
        "gsap-vp-item-" + item.id,
        index !== 1
          ? "text-sm hidden text-neutral/70  min-w-full font-semibold lg:justify-center"
          : "text-small lg:text-lg items-start  lg:items-center min-w-full  md:items-center text-neutral font-bold md:justify-center",
        "md:grid place-items-center md:place-items-center"
      )}
    >
      {/* Text — right aligned */}
      <div className="grid gap-1 text-center lg:text-right">
        <h3 className="gsap-vp-title  text-center leading-tight">
          {item.title}
        </h3>
        <p className="gsap-vp-desc text-neutral/50 md:min-w-35 w-52  text-center md:text-start lg:text-small md:text-[12px]  font-normal">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function ValueProposition() {
  return (
    <section
      id="value-proposition"
      className="max-h-screen relative flex flex-col gap-25  justify-start items-center w-full bg-light overflow-hidden"
    >
      {/* Top wave separator */}

        <Image
          src="/headphones/top-wave.svg"
          alt=""
          width={1440}
          height={136}
          className="gsap-vp-wave  w-full h-auto"
          aria-hidden="true"
        />


      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl  mx-auto">
        {/* Three column layout */}
        <div className="relative  px-3 flex flex-col-reverse md:flex-row items-center  justify-between  ">
          {/* Left column */}
          <div className="gsap-vp-right  items-end h-42 w-90 md:h-full relative flex md:w-full md:items-stretch md:flex-row-reverse md:gap-3 md:justify-center">
            <Image
              src="/headphones/leftdash.svg"
              alt="Red headphones — studio grade audio"
              width={161}
              height={492}
              className="gsap-vp-right-dash absolute bottom-0 right-1/3  md:static mr-3  md:rotate-0 rotate-269 object-cover w-[100px] h-auto"
              />
            <div className="w-full flex justify-between items-center md:grid auto-rows-fr">
              {leftValues.map((item, index) => (
                <LeftValueCard key={item.id} item={item} index={index} />
              ))}
              </div>
          </div>

          {/* Center — headphone */}
          <div className="gsap-vp-center relative w-full flex items-center justify-center ">
            {/* Radial glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl z-0" />

            <Image
              src="/headphones/value-hp.png"
              alt="Red headphones — studio grade audio"
              width={1065}
              height={1415}
              className="gsap-vp-hp relative z-10 md:ml-6 w-[260px] sm:w-[360px] md:w-[440px] lg:w-[500px] md:scale-[1.1] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right column */}
          <div className="gsap-vp-right md:mr-8 gap-0 bg--800 md:flex justify-center h-42 md:h-full items-center relative flex-col lg:justify-center md:w-full md:items-stretch md:flex-row-reverse md:gap-2 md:justify-between">
            <div className="grid  md:mt-0 md:gap-3 md:auto-rows-fr lg:auto-rows-fr">
              {rightValues.map((item, index) => (
                <RightValueCard key={item.id} item={item} index={index} />
              ))}
            </div>
            <Image
              src="/headphones/rightdash.svg"
              alt="Red headphones — studio grade audio"
              width={176}
              height={421}
              className="gsap-vp-right-dash  absolute top-1 right-1/4  md:static  md:rotate-0 rotate-273 md:object-cover w-[120px] h-auto"
            />
          </div>
        </div>

        {/* Closing statement */}
        <div className="gsap-vp-closing mt-12 md:mt-8 text-center">
          <p className="text-neutral font-black text-h4 md:text-h2 leading-tight tracking-tight">
            If you do not{" "}
            <span className="gsap-vp-love text-tertiary">LOVE</span>,
            <br />
            send it back.
          </p>
        </div>
      </div>
    </section>
  );
}
