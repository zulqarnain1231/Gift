"use client";
import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue: boolean) => !prevvalue);
  };
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
        <button onClick={toggleDrawer} className="inline-block lg:hidden z-10">
          <RiMenu3Line className="text-2xl text-black-main" />
        </button>
      </nav>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiPaper-root": {
            height: "100vh",
            width: "100%",
            background: "#F8F4F2",
          },
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-8 p-3">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer}>
              <RxCross1 className="text-2xl text-brand-main" />
            </button>
          </div>
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              onClick={toggleDrawer}
              className="text-base text-black-off hover:text-brand-main hover:duration-200 font-semibold"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={"/"}
            onClick={toggleDrawer}
            className="px-[44px] py-3 flex rounded bg-white-main text-base text-brand-main font-semibold border border-white-main"
          >
            Get Started
          </Link>
        </div>
      </Drawer>
    </ComponentWrapper>
  );
};

export default Navbar;
