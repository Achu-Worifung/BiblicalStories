"use client";

import { SOTD } from "@/components/ui/story-of-the-day";
import { getScriptureOfTheDay } from "@/lib/get-scripture-of-the-day";
import { stories } from "@/public/stories";
import { Card } from "@/components/ui/card";

import { storyInterface } from "@/public/interfaces";
import { Footer } from "@/components/layout/footer";


export default function Home() {
  function formatURL(url: string) {
    return url.replace(/ /g, "-");
  }
  // title, src, desc, url
  const sotd = getScriptureOfTheDay({ stories : stories as storyInterface[] });
  console.log("sotd", sotd.image);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <SOTD
        title={sotd.title}
        src={sotd.image}
        desc={sotd.content}
        url={formatURL(sotd.title)}
      />
      <div className="max-w-screen flex flex-wrap h-fit">
        {stories.map((card, index) => {
          return (
            <Card key={index} title={card.title} url={formatURL(card.title)} src={card.image} />
          );
        })}
      </div>
       <Footer />
      
    </div>
  );
}
