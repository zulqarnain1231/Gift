import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import NextImage from "../Image/NextImage";
import * as Icons from "@/constants/Svgs/Icons";
import Link from "next/link";
const Footer = () => {
  const year = new Date().getFullYear();
  const menu = [
    {
      name: "Features",
      route: "#features",
    },
    {
      name: "Working",
      route: "#howitworks",
    },
    {
      name: "Testimonials",
      route: "#testimonials",
    },
    {
      name: "FAQS",
      route: "#faq",
    },
  ];

  return (
    <section id="footer" className="pt-12 bg-brand-main relative">
      <div className="w-full h-full flex flex-col items-center gap-10">
        <NextImage
          imageSrc="/Assets/Footer/WhiteGift.png"
          containerStyle="h-[48px] w-[224px]"
        />
        <div className="w-full flex flex-col items-center justify-start gap-10 bg-[url('/Assets/Footer/Lines.png')] bg-cover bg-center bg-no-repeat">
          <ComponentWrapper style="py-10 w-full">
            <div className="w-full flex flex-col items-center justify-start gap-10">
              <div className="w-full flex lg:flex-row flex-col items-start lg:justify-between justify-start gap-5">
                {/* left side */}
                <div className="flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-col items-start justify-start">
                    <Icons.GoldSpark
                      fill="none"
                      stroke=""
                      ClassName="text-warning text-xl -ml-2"
                    />
                    <p className="text-white-main text-lg sm:text-xl font-quicksand font-bold">
                      Gift on Time
                    </p>
                  </div>
                  <nav className="sm:w-auto w-full flex sm:flex-nowrap flex-wrap items-center justify-start sm:gap-5 gap-3">
                    {menu.map((item: any, index: number) => (
                      <Link
                        key={index}
                        href={item.route}
                        className="flex items-start justify-start text-white-main text-sm :sm:text-base font-semibold"
                      >
                        <Icons.GoldSpark
                          stroke=""
                          fill="none"
                          ClassName="text-xl -mr-1 -mt-3"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                {/* right side */}
                <div className="sm:w-auto w-full flex flex-col sm:items-start items-center justify-start gap-5">
                  <div className="sm:w-auto w-full flex items-start justify-start">
                    <Icons.GoldSpark
                      stroke=""
                      fill="none"
                      ClassName="text-xl -mr-1 -mt-3"
                    />
                    <p className="text-white-main text-lg sm:text-xl font-semibold">
                      Subscribe
                    </p>
                  </div>
                  <div className="sm:w-auto w-full flex flex-col items-start sm:flex-row sm:items-center justify-start gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="p-[12px] sm:w-[360px] w-full text-white-main text-sm sm:text-base font-normal placeholder:text-white-main border border-white-main bg-transparent focus:outline-none rounded"
                    />
                    <button className="sm:w-[142px] w-full py-[12px] flex items-center justify-center text-brand-main text-sm sm:text-base font-normal bg-white-main rounded">
                      Submit
                    </button>
                  </div>
                  <p className="text-white-main text-xs font-normal">
                    By subscribing you agree to with our Privacy Policy
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <NextImage
                  imageSrc="/Assets/Footer/Star.png"
                  containerStyle="w-[31px] h-[31px]"
                />
                <span className="h-[3px] w-full bg-warning"></span>
                <NextImage
                  imageSrc="/Assets/Footer/Star.png"
                  containerStyle="w-[31px] h-[31px]"
                />
              </div>
              <div className="w-full flex sm:flex-row flex-col items-center justify-start gap-5 sm:justify-between">
                <div className="sm:w-auto w-full flex items-center sm:flex-nowrap flex-wrap sm:justify-start justify-center gap-4">
                  <p className="text-white-main text-sm font-normal cursor-pointer">
                    Privacy Policy
                  </p>
                  <p className="text-white-main text-sm font-normal cursor-pointer">
                    Terms of Service
                  </p>
                  <p className="text-white-main text-sm font-normal cursor-pointer">
                    Cookies Settings
                  </p>
                </div>
                <NextImage
                  imageSrc="/Assets/Footer/Star.png"
                  containerStyle="w-[31px] h-[31px] md:inline-block hidden"
                />
                <p className="text-white-main text-sm font-normal cursor-pointer">
                  © {year} XYZ. All rights reserved.
                </p>
              </div>
            </div>
          </ComponentWrapper>
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
    </section>
  );
};

export default Footer;
