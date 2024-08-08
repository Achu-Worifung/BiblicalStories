import React from "react";
// import style from "./MainContent.module.css";
import ReadButton from "@homepage/ReadButton";
import Image from 'next/image'

interface Story {
  title: string;
  reference: string;
  content: string;
  image: string;
  fit: string;
  position: string;
  metadata: {
    author: string;
    categories: string[];
  };
}
interface Object {
  fit: string;
  position: string;
}
interface MainContentProps {
  stories: Story[];
}
const imageClassName = (prop: Object) => {
  return `h-[200px] object-${prop.fit} object-${prop.position} w-full `;
};
const formatURL = (title) =>
{
  return title.replace(/ /g, '-');
}



export default function MainContent({ stories }: MainContentProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4   bg-base-100 py-10 ">
      {stories.map((story: Story, i:number) => (
        <div key = {i} className="card bg-base-300 w-80 shadow-xl max-w-[428px]">
          <figure>
            <Image
              src={story.image}
              alt="Shoes"
              className={imageClassName({ fit: story.fit, position: story.position })}
              width={320}
              height={200}
            />
          </figure>
          <div className="card-body ">
          
            <h2 className="card-title ">{story.title}</h2>
            <p className="text-ellipsis ">{story.content}</p>
            <div className="card-actions justify-end">
              <ReadButton name={formatURL(story.title)}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
