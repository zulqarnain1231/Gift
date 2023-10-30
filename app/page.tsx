import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="w-full relative">
        <Navbar />
        <Hero />
        <div className="absolute top-0 right-0 z-0">
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
    </main>
  );
}
