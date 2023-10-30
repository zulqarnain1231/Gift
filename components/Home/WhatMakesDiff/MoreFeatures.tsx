import NextImage from "@/components/Shared/Image/NextImage";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";

const MoreFeatures = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading heading="What Makes us" highlight="Different" />
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex flex-col items-start justify-start gap-5 bg-white-main rounded sm:p-8 p-6">
            <p className="text-xl sm:text-2xl text-brand-main font-bold font-quicksand relative after:absolute after:h-[2px] after:w-[76px] after:bg-warning after:left-0 after:-top-1">
              Notifications
            </p>
            <p className="text-base sm:text-lg text-black-off font-medium sm:w-[80%]">
              Timely notifications for upcoming dates and events are provided.
            </p>
            <NextImage
              imageSrc="/Assets/WhatMakesDiff/View.png"
              containerStyle="w-full h-[260px]"
              imageStyle="object-fill"
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default MoreFeatures;
