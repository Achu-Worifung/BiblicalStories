"use client";

import { SOTD } from "@/components/ui/story-of-the-day";
import { getScriptureOfTheDay } from "@/lib/get-scripture-of-the-day";
import { stories as storyList } from "@/public/stories";
import { Card } from "@/components/ui/card";
import { Filter } from "@/components/ui/filter";
import {
  storyInterface,
} from "@/public/interfaces";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { FilterBy } from "@/components/ui/filter-component";


export default function Home() {
  const [stories, setStories] = useState<storyInterface[]>(storyList);

  const [filteredStories, setFilteredStories] =
    useState<storyInterface[]>(storyList);


  function formatURL(url: string) {
    return url.replace(/ /g, "-");
  }
  const filterFunctions = (filteredStories: storyInterface[]) =>{
    setFilteredStories(filteredStories);
  }
  // title, src, desc, url
  const sotd = getScriptureOfTheDay({ stories: stories as storyInterface[] });
  console.log("sotd", sotd.image);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <SOTD
        title={sotd.title}
        src={sotd.image}
        desc={sotd.content}
        url={formatURL(sotd.title)}
      />
      {/* <FilterBy options={["All", "A", "B", "C"]} applyfilter={() => {}} /> */}
      <Filter actions={filterFunctions} stories={filteredStories} />
      
      <div className="max-w-screen flex flex-wrap h-fit justify-center items-center">
        {filteredStories.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              url={formatURL(card.title)}
              src={card.image}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
