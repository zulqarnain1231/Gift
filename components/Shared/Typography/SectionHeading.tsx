import React from "react";
import * as Icons from "@/constants/Svgs/Icons";

type Props = {
  subheading?: string;
  heading: string;
  highlight: string;
};

const SectionHeading: React.FC<Props> = ({
  subheading = "What people think about us?",
  heading,
  highlight,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5">
      <Icons.GoldGift fill="none" stroke="" ClassName="h-[36px] w-[36px]" />
      <p className="text-brand-main text-xl sm:text-2xl font-semibold font-caveat">
        {subheading}
      </p>
      <h2 className="sn:text-[56px] text-[43px] text-center font-bold font-quicksand text-black-main">
        {heading}
        <span className="text-brand-main"> {highlight}</span>
      </h2>
      <Icons.GoldUnderLine
        fill="none"
        stroke=""
        ClassName="w-[244px] h-[46px]"
      />
    </div>
  );
};

export default SectionHeading;
