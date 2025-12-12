"use client";

import { SOTD } from "@/components/ui/story-of-the-day";
import { getScriptureOfTheDay } from "@/lib/get-scripture-of-the-day";
import { stories as storyList } from "@/public/stories";
import { Card } from "@/components/ui/card";
import { Filter } from "@/components/ui/filter";
import { storyInterface } from "@/public/interfaces";
import { Footer } from "@/components/layout/footer";
import { useState, useCallback, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "./loading";

export default function Home() {
  const stories = storyList as storyInterface[];

  const [filteredStories, setFilteredStories] =
    useState<storyInterface[]>(stories);

  function formatURL(url: string) {
    return url.replace(/ /g, "-");
  }

  const filterFunctions = useCallback(
    (filteredStories: storyInterface[]) => {
      setFilteredStories(filteredStories);
    },
    [setFilteredStories]
  );

  // Avoid SSR/client mismatch: compute SOTD on client only
  const [sotd, setSotd] = useState<storyInterface | null>(null);
  useEffect(() => {
    const selected = getScriptureOfTheDay({ stories: stories as storyInterface[] });
    setSotd(selected);
  }, [stories]);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-full p-4 box-border">
        <Suspense fallback={<Loading />}>
          {sotd ? (
            <SOTD
              title={sotd.title}
              src={sotd.image}
              desc={sotd.content}
              url={formatURL(sotd.title)}
            />
          ) : (
            <Loading />
          )}
        </Suspense>

        <Filter actions={filterFunctions} stories={storyList} />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full max-w-7xl mt-10 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-x-50">
          {filteredStories.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-12 text-center w-full"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center grow">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <p className="text-gray-400 text-sm">No results found</p>
              <p className="text-gray-500 text-xs mt-1">
                Try a different search term
              </p>
            </motion.div>
          ) : (
            filteredStories.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  url={formatURL(card.title)}
                  src={card.image}
                />
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
