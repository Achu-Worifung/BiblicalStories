
import Image from "next/image";
import Footer from "@homepage/Footer";
import Navbar from "@homepage/Navbar";
import MainContent from "@homepage/MainContent";
import StoryOfTheDay from "@homepage/StoryOfTheDay";
import storiesData from '../public/stories.json';


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
function getStories() {
  return storiesData.stories;
}