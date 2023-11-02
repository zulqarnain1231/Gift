import React from "react";
import { BsEnvelopeOpen } from "react-icons/bs";

const FeatureCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-white-main shadow-md rounded p-8 hover:shadow-xl hover:duration-150 cursor-pointer">
      <span className="h-[56px] w-[56px] flex items-center justify-center bg-white-secondary rounded">
        <BsEnvelopeOpen className="text-2xl text-brand-main" />
      </span>
      <p className="text-black-main sm:text-2xl text-xl text-center font-bold font-quicksand">
        Speedy Turnovers
      </p>
      <p className="text-base sm:text-lg text-black-off font-normal text-center">
        Receive your design or web development within a few business days on
        average.
      </p>
    </div>
  );
};

export default FeatureCard;
