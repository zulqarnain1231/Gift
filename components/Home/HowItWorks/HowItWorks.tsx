import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import * as Icons from "@/constants/Svgs/Icons";
import ExplanationCard from "./ExplanationCard";

const HowItWorks = () => {
  const features = [
    {
      isLeft: false,
      image: "/Assets/HowWorks/1.png",
    },
  ];
  return (
    <ComponentWrapper id="howitworks" style="lg:py-16 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start gap-10 relative">
        <SectionHeading heading="What Makes us" highlight="Different" />
        <div className="w-full flex flex-col items-center justify-start lg:gap-12 gap-8">
          {[
            "/Assets/HowWorks/1.png",
            "/Assets/HowWorks/2.png",
            "/Assets/HowWorks/3.png",
            "/Assets/HowWorks/4.png",
          ].map((item: any, index: number) => (
            <ExplanationCard
              key={index}
              image={item}
              isleft={index % 2 == 0 ? false : true}
            />
          ))}
        </div>

        <NextImage
          imageSrc="/Assets/ColoredGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
      </div>
      <div className="absolute sm:bottom-[50%] bottom-[53%] left-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
      <div className="absolute bottom-[30%] right-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default HowItWorks;
