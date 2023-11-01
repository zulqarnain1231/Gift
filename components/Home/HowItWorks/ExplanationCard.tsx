import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";
import * as Icons from "@/constants/Svgs/Icons";

type Props = {
  image: string;
  isleft?: boolean;
};

const ExplanationCard: React.FC<Props> = ({ image, isleft = false }: Props) => {
  return (
    <div
      className={`w-full ${
        isleft
          ? "lg:grid flex flex-col-reverse items-center justify-start"
          : "grid"
      }  lg:grid-cols-2 gap-8`}
    >
      {isleft && (
        <aside className="w-full xl:h-[500px] sm:h-[400px] h-[300px]">
          <NextImage
            imageSrc={image}
            imageStyle="lg:object-fill sm:object-contain object-fill"
            containerStyle="w-full h-full"
          />
        </aside>
      )}
      <aside className="w-full h-full flex flex-col items-start justify-start gap-5">
        <Icons.Spark fill="none" stroke="" ClassName="text-xl" />
        <h2 className="text-black-main text-xl sm:text-2xl font-bold font-quicksand relative after:absolute after:top-0 after:h-[3px] after:w-[70px] after:bg-warning after:left-0">
          Date Planner
        </h2>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <p className="text-brand-main font-caveat sm:text-[28px] text-2xl font-bold">
            Purpose:
          </p>
          <p className="text-black-main text-base sm:text-lg font-normal">
            To keep track of significant dates and ensure no special occasion is
            missed.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <p className="text-brand-main font-caveat sm:text-[28px] text-2xl font-bold">
            Functionality:
          </p>
          <p className="text-black-main text-base sm:text-lg font-normal">
            Allows users to input and set recurring dates annually.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <p className="text-brand-main font-caveat sm:text-[28px] text-2xl font-bold">
            Benefits:
          </p>
          <p className="text-black-main text-base sm:text-lg font-normal">
            Simplifies the tracking of important dates, providing peace of mind.
          </p>
        </div>
      </aside>
      {!isleft && (
        <aside className="w-full xl:h-[500px] sm:h-[400px] h-[300px]">
          <NextImage
            imageSrc={image}
            imageStyle="lg:object-fill sm:object-contain object-fill"
            containerStyle="w-full h-full"
          />
        </aside>
      )}
    </div>
  );
};

export default ExplanationCard;
