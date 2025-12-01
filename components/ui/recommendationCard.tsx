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
      <div className="max-w-[1020px] flex flex-col items-center justify-center min-w-screen px-5 mx-auto relative">
        <div className="flex flex-row items-center justify-between w-full min-h-[300px]">
          <button
            className=" text-white h-full min-h-[384px] box-border p-3 flex items-center justify-center cursor-pointer rounded-s-sm transparent backdrop-blur-md absolute left-0 top-0 z-10"
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
          <div className="flex flex-row snap-x snap-mandatory overflow-hidden w-full h-full items-start justify-start scroll-m-5 pr-5">
            {stories.map((item, index) => (
              <Card key={index} title={item.title} src={item.image} />
            ))}
          </div>
          <button
            className=" text-white h-full min-h-[384px] box-border p-3 flex items-center justify-center cursor-pointer rounded-s-sm transparent backdrop-blur-md absolute right-0 top-0 z-10"
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
