import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import NextImage from "@/components/Shared/Image/NextImage";
import { BsEnvelopeOpen } from "react-icons/bs";
import FeatureCard from "./FeatureCard";

const LifeEasier = () => {
  return (
    <ComponentWrapper id="features" style="py-10 relative">
      <div className="absolute top-0 right-0">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading heading=" Makes Life" highlight="Easier" />
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
            <FeatureCard key={index} />
          ))}
        </div>
        <NextImage
          imageSrc="/Assets/ColoredGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
      </div>
      <div className="absolute bottom-12 sm:inline-block hidden left-0">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>{" "}
    </ComponentWrapper>
  );
};

export default LifeEasier;
