import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import NextImage from "../Image/NextImage";

const Footer = () => {
  return (
    <ComponentWrapper id="footer" style="py-12 bg-brand-main relative">
      <div className="w-full h-full flex flex-col items-center gap-10">
        <NextImage
          imageSrc="/Assets/Footer/WhiteGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
        <div className="w-full flex flex-col items-center justify-start gap-10 bg-[url('/Assets/Footer/Lines.png')] bg-cover bg-center bg-no-repeat">
          sadsad
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10">
        <NextImage
          imageSrc="/Assets/Footer/Stars.png"
          containerStyle="h-[70px] w-[68px]"
        />
      </div>
      <div className="absolute top-0 right-0 z-10">
        <NextImage
          imageSrc="/Assets/Footer/Stars.png"
          containerStyle="h-[70px] w-[68px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default Footer;
