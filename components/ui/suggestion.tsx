"use client";
import React, {useState} from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import {SendSuggestion} from "@/lib/send-suggestion";

export function Suggestion() {
  const[ref, setRef] = useState("");
  const[cat, setCat] = useState("");
  const Reference = [
    "Matthew 14:13-21",
    "Luke 15:11-32",
    "Matthew 28:1-15",
    "1 Samuel 17:1-58",
    "Genesis 1:1-21; Genesis 2:1-4",
  ];
  const category = [
    "Faithfullness, Divine intervention",
    "Forgiveness, Redemption",
    "Resurrection, Hope",
    "Courage, Faith",
  ]
  
  const refChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCat(e.target.value);
  };
  const catChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRef(e.target.value);
  };
  const onSubmit = () => {
   SendSuggestion({category: cat, reference: ref});
  };

  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl/16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Make A suggestion <br /> Improve the experiecne
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Thank you for taking an interest in this project. We appreciate your feedback and will definitely look into your suggestion. We will work on adding it to the library as soon as possible.
        </p>
      </div>
      <div className=" flex flex-col justify-center gap-5 ">
        <p className="text-2xl font-semibold text-left">Reference:</p>
        <PlaceholdersAndVanishInput
          placeholders={Reference}
          onChange={refChange}
          onSubmit={onSubmit}
        />
        <p className="text-2xl font-semibold text-left  w-[512px]">Category:</p>
        <PlaceholdersAndVanishInput
          placeholders={category}
          onChange={catChange}
          onSubmit={onSubmit}
        />
         <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition  text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] cursor-pointer active:scale-95 transform-all duration-75" onClick={onSubmit}>
        Submit
      </button>
      </div>
    </div>
  );
}
