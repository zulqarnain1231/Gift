import NextImage from "@/components/Shared/Image/NextImage";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import MoreFeatureCard from "./MoreFeatureCard";

const MoreFeatures = () => {
  const features = [
    {
      title: "Notifications",
      description:
        "Timely notifications for upcoming dates and events are provided.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Utilizing AI for personalized gift and event planning suggestions.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
    {
      title: "Secure Payment Gateway",
      description: "Ensures seamless transactions within the app.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
    {
      title: "Event Budgeting Tool",
      description:
        "Timely notifications for upcoming dates and events are provided.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
    {
      title: "Notifications",
      description:
        "Timely notifications for upcoming dates and events are provided.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
    {
      title: "Notifications",
      description:
        "Timely notifications for upcoming dates and events are provided.",
      image: "/Assets/WhatMakesDiff/View.png",
    },
  ];
  return (
    <ComponentWrapper style="lg:py-20 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading heading="What Makes us" highlight="Different" />
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {features.map((item: any, index: number) => (
            <MoreFeatureCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
          <div className="lg:col-span-2 w-full flex flex-col items-start justify-start gap-5 sm:flex-row sm:justify-between sm:items-center bg-white-main rounded sm:p-8 p-6">
            <div className="w-full flex flex-col items-start justify-center gap-5">
              <p className="text-xl sm:text-2xl text-brand-main font-bold font-quicksand relative after:absolute after:h-[2px] after:w-[76px] after:bg-warning after:left-0 after:-top-1">
                Notifications
              </p>
              <p className="text-base sm:text-lg text-black-off font-medium sm:w-[80%]">
                Timely notifications for upcoming dates and events are provided.
              </p>
            </div>

            <NextImage
              imageSrc={"/Assets/WhatMakesDiff/View.png"}
              containerStyle="w-full sm:h-[260px] h-[200px]"
              imageStyle="object-fill"
            />
          </div>
        </div>
        <NextImage
          imageSrc="/Assets/ColoredGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
      </div>
      <div className="absolute lg:bottom-[22%] sm:bottom-[26%] bottom-[27%] left-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
      <div className="absolute lg:bottom-[22%] sm:bottom-[26%] bottom-[27%] right-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default MoreFeatures;
