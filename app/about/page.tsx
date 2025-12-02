"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased grow">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Us
        </h1>
        <p></p>
         <p className="text-lg leading-relaxed max-w-3xl text-center">
        Welcome to <span className="font-semibold">BStories</span>! We are passionate about sharing inspiring and meaningful stories from the Bible. Our mission is to make these stories accessible and engaging for everyone, providing a platform to explore, learn, and grow spiritually.
      </p>
        <p className="text-lg leading-relaxed max-w-3xl text-center mt-4">
        Whether you are looking for inspiration, guidance, or simply a good story, we hope that BStories becomes your go-to resource. Thank you for being a part of our community!
      </p>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed max-w-3xl text-center">
          To create a world where the timeless wisdom of the Bible is shared and celebrated, inspiring people to live with purpose and faith.
        </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
