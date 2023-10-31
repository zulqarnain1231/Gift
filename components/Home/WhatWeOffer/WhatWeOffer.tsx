"use client";
import NextImage from "@/components/Shared/Image/NextImage";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import FeaturesSlider from "./FeaturesSlider";

const WhatWeOffer = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading heading="Here’s what we " highlight="Offer" />
        <FeaturesSlider />
        <NextImage
          imageSrc="/Assets/ColoredGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default WhatWeOffer;
