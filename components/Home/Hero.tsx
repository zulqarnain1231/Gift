import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Hero = () => {
  return (
    <ComponentWrapper style="h-[calc(100dvh-70px)] z-10">
      <div className="w-full h-full grid grid-cols-[1.5fr,1fr]">
        <aside className="lg:w-[80%] w-full h-full flex flex-col items-start justify-center gap-6">
          <h1 className="text-black-main text-[56px] leading-[70px] font-bold font-quicksand">
            Never Forget Your Important Tasks by{" "}
            <span className=" font-vampiro text-brand-main">Gift on Time</span>
          </h1>
          <p className="sm:text-lg text-base text-black-off font-medium">
            The Gift on Time App is an innovative mobile application assisting
            users in tracking significant dates like birthdays and
            anniversaries, and goes beyond a reminder app by integrating
            e-commerce, event planning, and a social networking feature,
            providing a holistic experience.
          </p>
          <div className="w-full flex items-center justify-center gap-6">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full rounded bg-white-main p-3 text-base text-brand-main font-robotto font-normal focus:outline-none placeholder:text-brand-main"
            />
            <button className="py-3 w-[200px] px-6 flex items-center justify-center rounded bg-black-main text-white-main text-base font-semibold">
              Start Free Trial
            </button>
          </div>
          <NextImage
            imageSrc="/Assets/Hero/Gift.png"
            containerStyle="w-[96px] h-[32px]"
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
