"use client";
import React from "react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";

export function Read({
  title,
  content,
  reference,
  image,
  version = "LJV",
}: {
  title: string;
  content: string;
  reference: string;
  image: string;
  version: string;
}) {
  return (
    <TracingBeam className="px-6 !h-min">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <h3 className="text-xl text-gray-500 mb-4 font-semibold">
          {reference} ({version})
        </h3>
        {/* this is a temp image */}
        <Image
          src={image}
          alt="story thumbnail"
          height="1000"
          width="1000"
          className="rounded-lg mb-10 object-cover"
        />

        <div
          className="text-gray-700 dark:text-gray-300 text-md/7 [&>p:first-of-type::first-letter]:text-4xl [&>p:first-of-type::first-letter]:text-emerald-500 [&>p:first-of-type::first-letter]:font-bold "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </TracingBeam>
  );
}
