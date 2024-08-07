"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchStories } from "@util/storyWebScrap";

interface StoryObject {
  title: string;
  reference: string;
  image: string;
}

export default function DisplayStory({ story }: StoryObject) {
  const [version, setVersion] = useState();
  const [TheStory, setTheStory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedVersion = localStorage.getItem("version");
    if (savedVersion) {
      setVersion(savedVersion);
    }
  }, []);

  useEffect(() => {
    const fetchStory = async () => {
      if (story.reference && version) {
        try {
          const fetchedStory = await fetchStories(story.reference, version);
          setTheStory(fetchedStory);
        } catch (error) {
          console.error("Error fetching the story:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchStory();
  }, [story.reference, version]);

  if (loading) {
    return (
      <div className="bg-base-200 w-screen h-screen items-center flex justify-center flex-col">
        <span className="loading loading-infinity  w-24"></span>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-base-200 flex justify-center items-center flex-col">
      <div className="headings py-2 sm:px-2 text-center">
        <h1 className="sm:mx-2 text-7xl font-bold">{story.title}</h1>
        <h1 className="text-3xl font-bold sm:mx-2">{story.reference}</h1>
      </div>
      <div className="bg-base-200 lg:flex-row w-full lg:w-[90%] md:flex md:flex-col md:text-center lg:block sm:flex sm:flex-col">
        <Image
          src={story.image}
          alt={story.title}
          width={586}
          height={414}
          className="lg:float-left mx-2 rounded-lg shadow-2xl mb-0 lg:max-w-md lg:w-auto md:max-h-[75vh] sm:float-none sm:self-center"
        />
        <div className="py-2 md:px-2 sm:px-2">
          <div
            className="py-2 md:px-2 sm:px-2 text-start"
            dangerouslySetInnerHTML={{ __html: TheStory }}
            style={{ paddingLeft: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
