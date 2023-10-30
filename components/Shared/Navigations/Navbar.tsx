import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const menu = [
    {
      name: "Features",
      route: "#features",
    },
    {
      name: "How It Works",
      route: "#howitworks",
    },
    {
      name: "Testimonials",
      route: "#testimonials",
    },
    {
      name: "Pricing",
      route: "#pricing",
    },
    {
      name: "FAQS",
      route: "#faq",
    },
  ];
  return (
    <ComponentWrapper style="z-50">
      <nav className="w-full h-[70px] flex items-center justify-between bg-transparent z-50">
        <Link
          href={"/"}
          className="text-brand-main text-xl font-quicksand font-semibold"
        >
          {" "}
          LOGO
        </Link>
        <div className="h-full lg:flex hidden items-center justify-center gap-8 z-10">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className="text-base text-black-off hover:text-brand-main hover:duration-200 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href={"/"}
          className="px-[44px] py-3 z-10 lg:flex hidden rounded bg-white-main text-base text-brand-main font-semibold border border-white-main"
        >
          Get Started
        </Link>
        <button className="inline-block lg:hidden z-10">
          <RiMenu3Line className="text-2xl text-black-main" />
        </button>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
