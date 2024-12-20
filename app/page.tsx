
import Image from "next/image";
import Footer from "@homepage/Footer";
import Navbar from "@homepage/Navbar";
import MainContent from "@homepage/MainContent";
import StoryOfTheDay from "@homepage/StoryOfTheDay";


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

export default async function Home() {
  const Stories = await getStories();
  // console.log('stories in home:',Stories);
  

  
  return (
    <div>
      <Navbar />
      <StoryOfTheDay stories={Stories}/>
      <MainContent stories={Stories} />
      <Footer />
    </div>
  );
}
async function getStories() {
  const res = await fetch("http://localhost:3000/stories.json");
  const data = await res.json();
  return data.stories;
}