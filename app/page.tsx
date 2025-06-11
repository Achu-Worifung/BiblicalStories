"use client";

import { SOTD } from "@/components/ui/story-of-the-day";
import { getScriptureOfTheDay } from "@/lib/get-scripture-of-the-day";
import { stories as storyList } from "@/public/stories";
import { Card } from "@/components/ui/card";
import { Filter } from "@/components/ui/filter";
import {
  storyInterface,
  actions as actionInterface,
} from "@/public/interfaces";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function Home() {
  const [stories, setStories] = useState<storyInterface[]>(storyList);

  const [filteredStories, setFilteredStories] =
    useState<storyInterface[]>(storyList);

  // const handleFilter = (filter: string) =>
  // {
  //   const filter = filter.to
  // }
  //filter by: testament , theme, character, book, genre
  const testamentFilter = (testament: string[]) => {
    console.log("testament", testament);
    let filtered: storyInterface[] = [];
    testament.forEach((testamentItem) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === testamentItem
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    setFilteredStories(filtered);

    console.log("filtered stories", filtered);
  };
  const themeFilter = (theme: string[]) => {
    console.log("theme", theme);
    let filtered: storyInterface[] = [];
    theme.forEach((themeItem) => {
      const filteredByTheme = stories.filter((story: storyInterface) => {
        const themes = story.metadata.theme;
        return themes.includes(themeItem);
      });
      filtered = [...filtered, ...filteredByTheme];
    });
    setFilteredStories(filtered);
  };
  const characterFilter = (character: string[]) => {
    let filtered: storyInterface[] = [];
    character.forEach((character) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === character
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    setFilteredStories(filtered);

    console.log("filtered stories", filtered);
  };
  const bookFilter = (book: string[]) => {
    let filtered: storyInterface[] = [];
    book.forEach((b) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === b
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    setFilteredStories(filtered);

    console.log("filtered stories", filtered);
  };
  const genreFilter = (genre: string[]) => {
     let filtered: storyInterface[] = [];
    genre.forEach((genreItem) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === genreItem
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    setFilteredStories(filtered);

    console.log("filtered stories", filtered);
  };

  const filterFunctions: actionInterface = {
    testamentFilter: testamentFilter,
    themeFilter: themeFilter,
    characterFilter: characterFilter,
    bookFilter: bookFilter,
    genreFilter: genreFilter,
  };

  function formatURL(url: string) {
    return url.replace(/ /g, "-");
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
      <Filter actions={filterFunctions} />
      <div className="max-w-screen flex flex-wrap h-fit justify-center items-center">
        {storyList.map((card, index) => {
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
