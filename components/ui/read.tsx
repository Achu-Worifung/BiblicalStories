"use client";
import React from "react";
import Image from "next/image";


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
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <h3 className="text-xl text-gray-500 mb-4 font-semibold">
          {reference} ({version})
        </h3>
        {/* this is a temp image */}
        <Image
          src={image}
          alt="story thumbnail"
          height={450}
          width={800} 
          className="rounded-lg mb-10 object-scale-down max-h-175"
        />

        <div
          className="text-gray-700 dark:text-gray-300 text-md/7 [&>p:first-of-type::first-letter]:text-4xl [&>p:first-of-type::first-letter]:text-emerald-500 [&>p:first-of-type::first-letter]:font-bold "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
  );
}
