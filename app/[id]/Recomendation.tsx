"use client";
import React, { useEffect, useState } from "react";
import getRecommendation from "@util/getRecomendation";
import ReadButton from "@homepage/ReadButton";
import formatURL from "@util/formatURL";
import Image from "next/image";

export default function Recomendation({ viewingStory, Stories }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await getRecommendation(Stories, viewingStory);
        if (res) {
          setRecommendations(res.map((item) => item.story));
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [Stories, viewingStory]);

  if (recommendations.length === 0) return null;

  return (
    <div className="bg-base-200 w-screen">
      <div className="divider divider-error m-0 py-2"></div>
      <h1 className="sm:mx-2 text-4xl font-bold text-center">Recommendation</h1>
      <div className="overflow-y-auto flex flex-row overflow-x-scroll">
        {recommendations.map((story, i) => (
          <div
            key={i}
            className="card bg-base-100 image-full w-96 shadow-xl inline-block m-3 min-w-[17rem]"
          >
            <figure>
              <Image
                src={story.image}
                alt={story.title}
                className={`object-${story.fit} object-${story.position} !min-w-80`}
                width={320}
                height={500}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{story.title}</h2>
              <p>{story.content}</p>
              <div className="card-actions justify-end">
                <ReadButton name={formatURL(story.title)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}