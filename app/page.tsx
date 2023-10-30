import Hero from "@/components/Home/Hero";
import LifeEasier from "@/components/Home/MakeLifeEasier/LifeEasier";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import MoreFeatures from "@/components/Home/WhatMakesDiff/MoreFeatures";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="w-full relative">
        <Navbar />
        <Hero />
        <div className="absolute lg:inline-block hidden lg:top-0 bottom-0 right-0 z-0">
          <div className="relative h-[100dvh] w-[624px]">
            <Image
              className="w-full h-full object-fill"
              src={"/Assets/Hero/HeroBg.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </section>
      <LifeEasier />
      <MoreFeatures />
      <Testimonials />
    </main>
  );
}
