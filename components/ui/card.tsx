"use client";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";

export function Card({
  title,
  url,
  src,
}: {
  title: string;
  url: string;
  src: string;
}) {
  return (
    <CardContainer className="inter-var snap-start ">
      <CardBody>
        <CardItem
          translateZ="100"
          as="div"
          className="relative glare-card overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out my-5 max-w-[294px] md:max-w-[290px] cursor-pointer hover:scale-[1.02] rounded-lg shadow "
          onClick={() => {
            window.open(url);
          }}
        >
          {/* if hover is glitching change this to img  */}
          <Image
            width={290}
            height={384}
            alt={title}
            src={src}
            className="object-cover absolute inset-0 h-full w-full rounded-sm"
          />

          {/* Title positioned at the bottom */}
          <CardItem
            translateZ={-50}
            as="div"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-sm w-[80%] h-[35px] rounded-md flex items-center justify-center text-black font-semibold z-10"
          >
            {title}
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
