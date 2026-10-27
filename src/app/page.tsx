import Image from "next/image";
import Navbar from './../components/layout/Navbar';
import Hero from "../components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import  ValueProposition  from '@/components/sections/ValueProposition';
import Testimonials from './../components/sections/Testimonials';
import CTA from './../components/sections/Cta';
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full lg:max-w-7xl mx-auto items-center justify-start min-h-screen overflow-x-hidden">
          <Image
          src="/headphones/hero-wave.svg"
          alt=""
          width={1440}
          height={711}
          className="min-h-[10%] max-h-[80%] lg:max-h-[89%] xl:max-h-[89%] max-w-7xl absolute top-0 object-cover overflow-hidden pointer-events-none z-0"
        />
      <Hero/>
      <Stats/>
      <Products/>
      <ValueProposition/>
      <Testimonials/>
      <CTA /> 
      <Footer/>
    </main>
  );
}
