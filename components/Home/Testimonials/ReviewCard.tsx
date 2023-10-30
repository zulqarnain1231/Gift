import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";

const ReviewCard = () => {
  return (
    <div className="w-[400px] mx-1 flex flex-col items-start justify-start gap-6 bg-white-main rounded sm:p-8 p-5">
      <NextImage
        imageSrc="/Assets/Testimonials/Stars.png"
        containerStyle="w-[120px] h-[20px]"
      />
      <p className="text-base sm:text-lg text-black-off font-medium">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare."
      </p>
      <div className="w-full flex items-center justify-start gap-3">
        <NextImage
          imageSrc="/Assets/Testimonials/User.png"
          containerStyle="h-[56px] w-[56px]"
          imageStyle="object-contain rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-black-main text-sm sm:text-base font-semibold">
            Olivia Charlotte
          </p>
          <p className="text-black-off text-sm sm:text-base font-normal">
            CTO, MRS Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
