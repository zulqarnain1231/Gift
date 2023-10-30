import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Hero = () => {
  return (
    <ComponentWrapper style="h-[calc(100dvh-70px)] z-10 lg:mt-0 mt-6">
      <div className="w-full h-full grid lg:grid-cols-[1.5fr,1fr] lg:gap-0 gap-8">
        <aside className="xl:w-[80%] lg:w-[90%] w-full h-full flex flex-col lg:items-start items-center justify-center gap-6 z-10">
          <h1 className="text-black-main sm:text-[56px] text-5xl leading-[60px] lg:text-left text-center sm:leading-[70px] font-bold font-quicksand">
            Never Forget Your Important Tasks by{" "}
            <span className=" font-vampiro text-brand-main">Gift on Time</span>
          </h1>
          <p className="sm:text-lg text-base text-black-off font-medium lg:text-left text-center">
            The Gift on Time App is an innovative mobile application assisting
            users in tracking significant dates like birthdays and
            anniversaries, and goes beyond a reminder app by integrating
            e-commerce, event planning, and a social networking feature,
            providing a holistic experience.
          </p>
          <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-6">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full rounded bg-white-main p-3 text-base text-brand-main font-robotto font-normal focus:outline-none placeholder:text-brand-main"
            />
            <button className="py-3 w-[200px] px-2 flex items-center justify-center rounded bg-black-main text-white-main text-base font-semibold">
              Start Free Trial
            </button>
          </div>
          <NextImage
            imageSrc="/Assets/Hero/Gift.png"
            containerStyle="w-[96px] h-[32px]"
          />
        </aside>
        <aside className="w-full h-full flex items-center lg:justify-end justify-center">
          <NextImage
            imageSrc="/Assets/Hero/Iphone.png"
            containerStyle="sm:h-[550px] h-[400px] sm:w-[300px] w-[250px] z-10 lg:mt-8"
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
