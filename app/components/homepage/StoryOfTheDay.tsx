"use client";
import { useState, useEffect } from "react";
import ReadButton from "./ReadButton";
import Image from "next/image";

export default function StoryOfTheDay({ stories }) {

    
  const [sotd, setSotd] = useState();
  function setCookie(name:String, value) {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // next day
      0,
      0,
      0 // at 00:00:00
    );

    const expires = "expires=" + midnight.toUTCString();
    const valueString = encodeURIComponent(JSON.stringify(value));
    document.cookie = `${name}=${valueString};${expires};path=/`;
  }
  function getCookie(name: string) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim(); // Trim leading/trailing whitespace
      if (cookie.startsWith(nameEQ)) {
        const valueString = cookie.substring(nameEQ.length);
        try {
          return JSON.parse(decodeURIComponent(valueString));
        } catch (error) {
          console.error("Error parsing cookie value:", error);
          return null;
        }
      }
    }
    return null;
  }
  
  function getRandomStory(stories) {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
  }
  useEffect(() => {
    const sotd = getCookie("sotd");
    if (!sotd) {
      const story = getRandomStory(stories);
      setSotd(story);
      setCookie("sotd", story);
    } else {
      setSotd(sotd);
    }
  }, []);
  function formatURL(url:String) {
    return url.replace(/ /g, '-');
  }
  const url = sotd? formatURL(sotd?.title):'';

  return (
    <div className="hero bg-base-300 w-[auto] pt-4 max-h-lvh">
      <div className="hero-content flex-col lg:flex-row">
        <Image
         src={sotd?.image}
         alt={sotd?.title}
         width={320}
         height={200}
          className="max-w-sm rounded-lg shadow-2xl max-h-80 "
        />
        <div>
          <h1 className="text-5xl font-bold">Story of the Day</h1>
          <h1 className="text-5xl font-bold">{sotd?.title}</h1>
          <p className="py-6">
            {sotd?.content}
          </p>
          <ReadButton name={url} />
        </div>
      </div>
    </div>
  );
}
