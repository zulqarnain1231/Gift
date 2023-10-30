import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import NextImage from "@/components/Shared/Image/NextImage";
const Testimonials = () => {
  return (
    <ComponentWrapper id="testimonials" style="lg:py-20 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10 relative">
        <SectionHeading heading="Testimonials" highlight="" />
        <Marquee className="w-full" pauseOnHover>
          {[0, 1, 2, 3, 4, 5].map((item: any, index: number) => (
            <ReviewCard key={index} />
          ))}
        </Marquee>
        <Marquee className="w-full" pauseOnHover direction="right">
          {[0, 1, 2, 3, 4, 5].map((item: any, index: number) => (
            <ReviewCard key={index} />
          ))}
        </Marquee>
        <NextImage
          imageSrc="/Assets/ColoredGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
        <div className="absolute top-[35%] sm:top-[30%] lg:-left-[50px] -left-[30px] z-10">
          <NextImage
            imageSrc="/Assets/CurvedGift.png"
            containerStyle="h-[48px] w-[130px]"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Testimonials;
