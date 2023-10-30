import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const MoreFeatureCard: React.FC<Props> = ({
  title,
  description,
  image,
}: Props) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-5 bg-white-main rounded sm:p-8 p-6">
      <p className="text-xl sm:text-2xl text-brand-main font-bold font-quicksand relative after:absolute after:h-[2px] after:w-[76px] after:bg-warning after:left-0 after:-top-1">
        {title}
      </p>
      <p className="text-base sm:text-lg text-black-off font-medium sm:w-[80%]">
        {description}
      </p>
      <NextImage
        imageSrc={image}
        containerStyle="w-full h-[260px]"
        imageStyle="object-fill"
      />
    </div>
  );
};

export default MoreFeatureCard;
