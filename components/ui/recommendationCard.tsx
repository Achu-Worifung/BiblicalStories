"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { IconMathGreater, IconMathLower  } from '@tabler/icons-react';



export function Recommendations({data}: {data: any}) {
   const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
   
  return (
  <div className=" py-6 max-w-2xl flex flex-col items-start justify-start min-w-screen px-5">
        <p className="text-2xl font-bold">You might also like</p>
        <div className="flex flex-row  snap-x snap-mandatory overflow-hidden w-full !min-h-max items-start justify-start ">

        {data.map((item, index:{item:any, index:number}) => (
          <Card
          key={index}
          title={item.title}
          src={item.src}
          />
        ))}
        </div>
        <div className="flex flex-row [&>button]:mx-2 [&>button]:my-2  [&>button]:rounded-full [&>button]:cursor-pointer pt-2 justify-end w-full">
          <button className="bg-black text-white p-4 " disabled={!canScrollLeft} onClick={() => {
            const container = document.querySelector(".snap-x");
            if (container) {
              container.scrollBy({
                left: -container.clientWidth,
                behavior: "smooth",
              });
            }
            setCanScrollLeft(false);
            setCanScrollRight(true);
          }}>
            <IconMathLower/>
          </button>
          <button className="bg-black text-white p-4" disabled={!canScrollRight} onClick={() => {
            const container = document.querySelector(".snap-x");
            if (container) {
              container.scrollBy({
                left: container.clientWidth,
                behavior: "smooth",
              });
            }
            setCanScrollRight(false);
            setCanScrollLeft(true);
          }}>
            <IconMathGreater/>
          </button>
        </div>
      </div>
  );
}
