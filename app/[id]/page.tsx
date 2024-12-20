
import Head from 'next/head';
import DisplayStory from './DisplayStory';
import Recomendation from './Recomendation';
import { notFound } from 'next/navigation';

// import {stories} from '/stories.json';
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



export default async function Page({ params }:Story) {
  //fetching the stories
  const stories = await getStories();

 
  

 
  
  const formatURl = (title:String) => {

    var newTitle = title.replace(/-/g, ' ');
    
    return decodeURIComponent(newTitle);
  }
  // getting the story

  const title = formatURl(params.id);

  const viewingStory: Story = stories.find((story) =>  story.title == title);

  
  // console.log('Viewing Story:', viewingStory);

  if(!viewingStory) return notFound(); //how to do not found page
  // if(!viewingStory) return <Error statusCode={404}/>;
  // console.log('Viewing Story is second:', viewingStory);
  
  // let theverses = await fetchStories(viewingStory.reference, 'KJV');
  // console.log('theverses:',theverses);
  
  // console.log(params.id);
  
  // console.log('Viewing Story:', viewingStory);
  //finding simmilar stories
  // const similarStories = (stories: Story[], viewingStory: Story) => {
  //   const categories = viewingStory.metadata.categories;
    
  //   return stories.filter((story) => {
  //     const storyCategories = story.metadata.categories;
  //     return categories.some((category) => storyCategories.includes(category));
  //   });
  // }
  
  // console.log(similarStories(stories, viewingStory));
  




  

  return (
    <div>
   
      <DisplayStory  story = {{title: viewingStory?.title, reference: viewingStory?.reference, image: viewingStory?.image}}/>

      <Recomendation viewingStory={viewingStory} Stories={stories} />
      
    
      
    </div>
  );
}
async function getStories() {
  const res = await fetch("http://localhost:3000/stories.json");
  const data = await res.json();
  return data.stories;
}
