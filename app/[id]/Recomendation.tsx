import React from "react";
import getRecommendation from "@util/getRecomendation";
import ReadButton from "@homepage/ReadButton";
import  formatURL  from "@util/formatURL";


export default async function Recomendation({ viewingStory, Stories }) {
  // console.log('Viewing Story is single:', viewingStory);
  // console.log('Stories:', Stories);

  const res = await getRecommendation(Stories, viewingStory);
  if(res === null) return null;
  const recomendation = res.map(item => item.story);
  // console.log("recomendation:", recomendation);
  return (
    <div className="bg-base-200 w-screen">
      <div className="divider divider-error m-0 py-2"></div>
      <h1 className="sm:mx-2 text-4xl font-bold  text-center">Recomendation</h1>
    <div className=" overflow-y-auto  flex flex-row  overflow-x-scroll">
      {recomendation.map((story, i) => (
        <div key={i} className="card bg-base-100 image-full w-96 shadow-xl inline-block m-3 min-w-[17rem] ">
          <figure>
            <img
              src={story.image}
              alt={story.title}
              className={`object-${story.fit} object-${story.position}  !min-w-80`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{story.title}</h2>
            <p>{story.content}</p>
            <div className="card-actions justify-end">
              <ReadButton  name={formatURL(story.title)}/>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
}
