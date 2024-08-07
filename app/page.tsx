'use client'
import Image from "next/image";
import Footer from "@homepage/Footer";
import Navbar from "@homepage/Navbar";
import MainContent from "@homepage/MainContent";
import { useState, useEffect } from "react";

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

export default function Home() {
  const fetchStories = async (): Promise<Story[]> => {
    try {
      const res = await fetch("/stories.json");
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      // console.log(data.stories);
      return data.stories;
    } catch (err) {
      console.error("Error occurred while fetching data", err);
      return []; // Return an empty array on error
    }
  };

  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStories();
      setStories(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <MainContent stories={stories} />
      <Footer />
    </div>
  );
}
