"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function SOTD({ title, src, desc, url }: { title: string, src: string, desc: string, url: string }) {

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-6 border flex flex-col md:flex-row gap-4 md:gap-6">
    
        {/* Image Section */}
        <CardItem translateZ="100" className="w-full md:w-2/3">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Content Section */}
        <div className="flex justify-between items-start flex-col gap-3 md:gap-4 w-full md:w-1/3">
          <CardItem
            translateZ={20}
            as="p"
            className="text-xl md:text-3xl font-bold text-neutral-600 dark:text-white"
          >
            Story of the day
          </CardItem>

          <CardItem
            translateZ={20}
            as="h2"
            className="text-neutral-700 dark:text-white text-lg md:text-xl font-bold text-left leading-tight"
          >
           {title}
          </CardItem>

          <CardItem
            translateZ={20}
            as="p"
            className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base text-left line-clamp-3 leading-relaxed"
          >
            {desc}
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs md:text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity w-full md:w-auto"
            onClick={() => {            
              window.open(url, "_blank");
            }}
          >
            Read Now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}