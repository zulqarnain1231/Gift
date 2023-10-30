import Image from "next/image";
import React from "react";

type Props = {
  imageStyle?: string;
  containerStyle: string;
  imageSrc: string;
};
const NextImage: React.FC<Props> = ({
  imageStyle = "object-contain",
  containerStyle,
  imageSrc,
}: Props) => {
  return (
    <div className={`relative pointer-events-none ${containerStyle} `}>
      <Image
        className={`w-full h-full pointer-events-none ${imageStyle}`}
        src={imageSrc}
        alt=""
        fill
      />
    </div>
  );
};

export default NextImage;
