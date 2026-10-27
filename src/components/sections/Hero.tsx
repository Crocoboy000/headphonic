"use client";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import  Button  from '@/components/ui/Button';
import  {useGSAP}  from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";


export default function Hero() {

  const heroScrope = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) return;

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.from(".gsap-hd", {
      x: 100,
      autoAlpha: 0,
    });
  }, [imageLoaded]);

  return (
    <section ref={heroScrope} className="relative  md:min-h-200 h-100 container mx-auto py-19 md:p-5 px-8 md:px-8  flex-col  flex lg:items-end md:items-center md:justify-between md:flex-row-reverse justify-start items-center lg:justify-between overflow-hidden ">
      <Navbar />


      <img
        src="/headphones/hero-hp.png"
        alt="Headphonic hero headphones"
        width={600}
        height={600}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className="gsap-hd z-10 w-auto max-w-[320px] min-w-[300px]  md:max-w-[460px] lg:max-w-[650px] xl:max-w-[700px]"
      />
      <div className="py-25  z-20 max-w-full  h-full mx-auto  gap-6  flex justify-center items-center md:justify-start md:items-end lg:justify-start lg:items-end ">
        <div className="lg:max-w-[540px] justify-center items-center md:justify-center md:items-start flex flex-col gap-5">
          <h1 className="text-2xl sm:text-3xl flex md:justify-start justify-start md:text-4xl lg:text-[50px] xl:text-h1 font-extrabold text-secondary leading-[1.02] tracking-tight">
            Sound Built Around You
          </h1>
          <p className="text-neutral/75 text-center text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed  w-95">
            Discover over 2,000 headphones — from everyday listening to
            studio-grade precision. Find the pair that fits your world.
          </p>

          <div className="flex justify-center w-full items-center md:justify-start md:items-center gap-4">
            <Button variant="primary">Explore</Button>
            <Button variant="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}