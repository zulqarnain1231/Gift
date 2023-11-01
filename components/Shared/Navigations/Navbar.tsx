"use client";
import React, { useState, useEffect } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Function to handle the scroll event
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDrawer = () => {
    setIsOpen((prevvalue: boolean) => !prevvalue);
  };
  // function fpr smooth scrolling
  let navLinks = document.querySelectorAll("nav a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(this: any, event: any) {
    event.preventDefault();

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }
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
      route: "#howitworks",
    },
    {
      name: "FAQS",
      route: "#faq",
    },
  ];
  return (
    <ComponentWrapper
      style={`z-50 ${
        isScrolled ? "bg-white-main" : "bg-transparent"
      } fixed w-full duration-300`}
    >
      <div className="w-full h-[70px] flex items-center justify-between z-50">
        <Link
          href={"/"}
          className="text-brand-main text-xl font-quicksand font-semibold"
        >
          {" "}
          LOGO
        </Link>
        <nav className="h-full lg:flex hidden items-center justify-center gap-8 z-10">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className="text-base text-black-off hover:text-brand-main hover:duration-200 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href={"/"}
          className={`px-[44px] py-3 z-10 lg:flex hidden rounded bg-white-main text-base text-brand-main font-semibold border ${
            isScrolled ? "border-black-main" : "border-white-main"
          } `}
        >
          Get Started
        </Link>
        <button onClick={toggleDrawer} className="inline-block lg:hidden z-10">
          <RiMenu3Line className="text-2xl text-black-main" />
        </button>
      </div>
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
          <nav className="w-full flex flex-col items-center justify-start gap-8">
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
          </nav>

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
