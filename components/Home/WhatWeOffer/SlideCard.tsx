import React from "react";
import { BsEnvelopeOpen } from "react-icons/bs";

type Props = {
  title: string;
  detail: string;
  background: string;
};

const SlideCard: React.FC<Props> = ({ title, detail, background }: Props) => {
  return (
    <div
      className={`w-full h-[360px] flex flex-col items-start justify-start gap-5 rounded-xl sm:p-8 p-5 ${background}`}
    >
      <span className="h-[56px] w-[56px] flex-shrink-0 flex items-center justify-center bg-white-main/30 rounded-lg">
        <BsEnvelopeOpen className="text-2xl text-white-main" />
      </span>
      <p className="text-white-main text-xl sm:text-2xl font-semibold font-quicksand">
        {title}
      </p>
      <p className="text-white-main text-base sm:text-lg font-normal sm:w-[90%]">
        {detail}
      </p>
    </div>
  );
};

export default SlideCard;
