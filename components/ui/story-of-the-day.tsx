"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function SOTD({ title, src, desc, url }: { title: string, src: string, desc: string, url: string }) {

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-lvh  h-auto rounded-xl p-6 border flex gap-4">
    
        <CardItem translateZ="100" className="w-2/3 mt-4">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-left  flex-col">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="text-3xl font-bold text-neutral-600 dark:text-white"
          >
            Story of the day
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl font-bold text-left"
          >
           {title}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-neutral-500  max-w-sm mt-2 dark:text-neutral-300 text-left max-h-[72px] line-clamp-3"
          >
            {desc}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-4 cursor-pointer"
            onClick={() => {            
              window.open(url, "_blank");
            }}
          >
            Read Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
