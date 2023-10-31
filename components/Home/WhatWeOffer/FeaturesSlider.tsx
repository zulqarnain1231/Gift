"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SlideCard from "./SlideCard";
import NextImage from "@/components/Shared/Image/NextImage";
function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -bottom-5 xl:right-[8%] lg:right-[10%] sm:right-[5%]  right-[2%] h-[56px] w-[56px] flex items-center justify-center z-20 border-2 border-brand-main rounded-full"
      onClick={onClick}
    >
      <BsArrowRight className="text-2xl text-brand-main" />
    </button>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -bottom-5 xl:right-[13%] lg:right-[17%] right-[20%]  h-[56px] w-[56px] flex items-center justify-center z-20 border-2 border-brand-main rounded-full"
      onClick={onClick}
    >
      <BsArrowLeft className="text-2xl text-brand-main" />
    </button>
  );
}

const FeaturesSlider = () => {
  const features = [
    {
      title: "Date Planner",
      detail:
        "Users can input crucial dates to recur annually, ensuring no special occasion is forgotten.",
      background: "bg-brand-main",
    },
    {
      title: "Gift Wishlist",
      detail:
        "For each date, users can create a wishlist, preventing duplicate or unwanted gifts, especially useful for occasions like children’s birthdays.",
      background: "bg-[#74D2DE]",
    },
    {
      title: "Event Planner ",
      detail:
        "Users can create events, invite people via a unique link, and track attendance.",
      background: "bg-[#9AB892]",
    },
    {
      title: "Affiliate Marketing Integration",
      detail:
        "Product recommendations are made based on the date category, sourced through affiliate marketing from platforms like Amazon.",
      background: "bg-warning",
    },
    {
      title: "Event Planner ",
      detail:
        "Users can create events, invite people via a unique link, and track attendance.",
      background: "bg-[#9AB892]",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[450px] categories relative">
      <Slider {...settings}>
        {features.map((item: any, index: number) => (
          <SlideCard
            key={index}
            title={item.title}
            detail={item.detail}
            background={item.background}
          />
        ))}
      </Slider>
      <div className="w-[100px] absolute right-0 bg-white-secondary h-[360px] top-0 slider-overlay"></div>
      <div className="absolute lg:bottom-[5%] sm:bottom-[5%] bottom-[7%] right-0 z-20">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
      <div className="absolute bottom-[35%] md:-left-12 -left-6 z-20">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
    </div>
  );
};

export default FeaturesSlider;
