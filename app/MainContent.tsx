import React from "react";
// import style from "./MainContent.module.css";
import ReadButton from "@homepage/ReadButton";

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
    <div className="flex flex-wrap justify-center gap-4 mt-1">
      {stories.map((story: Story, i:number) => (
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src={story.image}
              alt="Shoes"
              className={imageClassName({ fit: story.fit, position: story.position })}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{story.title}</h2>
            <p>{story.content}</p>
            <div className="card-actions justify-end">
              <ReadButton name={formatURL(story.title)}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
