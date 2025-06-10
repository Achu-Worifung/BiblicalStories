"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { IconMathGreater, IconMathLower } from "@tabler/icons-react";
import { storyInterface } from "@/public/interfaces";

export function Recommendations({ stories }: { stories: storyInterface[] }) {
  console.log("stories", stories);


  return (
    <>
      <p className="text-2xl font-bold text-center mt-10">
        You might also like
      </p>
      <div className=" max-w-2xl flex flex-col items-start justify-start min-w-screen px-5">
        <div
  className="flex flex-row snap-x snap-mandatory overflow-hidden w-full min-h-max items-start justify-start scroll-m-5 pr-5"
>
  {stories.map((item, index) => (
    <Card key={index} title={item.title} src={item.image} />
  ))}
</div>

        <div className="flex flex-row [&>button]:m-2   [&>button]:rounded-full [&>button]:cursor-pointer pt-2 justify-end w-full">
          <button
            className="bg-gray-800 text-white p-4 "
            onClick={() => {
              const container = document.querySelector(".snap-x");
              if (container) {
                container.scrollBy({
                  left: -container.clientWidth,
                  behavior: "smooth",
                });
              }

            }}
          >
            <IconMathLower />
          </button>
          <button
            className="bg-gray-800 text-white p-4"
            onClick={() => {
              const container = document.querySelector(".snap-x");
              if (container) {
                container.scrollBy({
                  left: container.clientWidth,
                  behavior: "smooth",
                });
              }

            }}
          >
            <IconMathGreater />
          </button>
        </div>
      </div>
    </>
  );
}
