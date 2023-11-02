"use client";
import React, { useState, useEffect } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#D85464",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

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

  useEffect(() => {
    // function fpr smooth scrolling
    let navLinks = document.querySelectorAll("nav a");
    function smoothScroll(this: any, event: any) {
      event.preventDefault();

      const href = this.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
    for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
    }
  }, []);

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
          className="text-brand-main text-2xl font-vampiro font-semibold"
        >
          Gift on Time
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
        <div className="flex items-center justify-center gap-5">
          <div className="lg:flex hidden items-center justify-center gap-1">
            <IOSSwitch sx={{ m: 1 }} />
            <p className="text-base text-black-main font-semibold">Dutch</p>
          </div>

          <Link
            href={"/"}
            className={`px-[44px] py-3 z-10 lg:flex hidden rounded bg-white-main text-base text-brand-main font-semibold border ${
              isScrolled ? "border-black-main" : "border-white-main"
            } `}
          >
            Get Started
          </Link>
        </div>

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
          <div className="flex items-center justify-center gap-2">
            <IOSSwitch sx={{ m: 1 }} />
            <p className="text-base text-black-main font-semibold">Dutch</p>
          </div>
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
