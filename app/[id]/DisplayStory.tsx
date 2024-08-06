import React from "react";
// import { fetchStories } from "../components/utitl/storyWebScrap";
import { fetchStories } from "@util/storyWebScrap";
import ChangeVersion from "./ChangeVersion";
import {getRecommendation} from '@util/getRecomendation';

interface StoryObject {
  title: string;
  reference: string;
  image: string;
}
export default async function DisplayStory({ story }: StoryObject) {
  // console.log(story);
  // let version;
  // if(window !== "undefined")
  // {
  //   version = localStorage.getItem("version") ;
  //   if(version === null)
  //   {
  //     localStorage.setItem("version", "NLT");
  //     version = "NLT";
  //   }
  // }
  const version =
    typeof window !== "undefined"
      ? localStorage.getItem("version")
      : "NLT";

      // console.log(version);
      

  const TheStory = await fetchStories(story.reference, version);

  return (
    <div className="bg-base-200 flex justify-center items-center flex-col">
      <ChangeVersion version={version} />
        <div className="headings py-2 sm:px-2 text-center">
          <h1 className="sm:mx-2 text-7xl font-bold  ">{story.title}</h1>
          <h1 className="text-3xl font-bold sm:mx-2">{story.reference}</h1>
        </div>
      <div className="bg-base-200 lg:flex-row w-full lg:w-[90%] md:flex md:flex-col  md:text-center lg:block ">
        <img
          src={story.image}
          alt={story.title}
          className="float-left mx-1 rounded-lg shadow-2xl mb-0 lg:max-w-md  lg:w-auto md:max-h-[75vh] "
        />

        <div className="py-2 md:px-2 sm:px-2">
        <div className="py-2 md:px-2 sm:px-2 text-start px-2" dangerouslySetInnerHTML={{ __html: TheStory }} />
        </div>
      </div>
    </div>
  );
}
