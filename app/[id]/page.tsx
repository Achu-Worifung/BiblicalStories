
import Head from 'next/head';
import DisplayStory from './DisplayStory';
import Recomendation from './Recomendation';
import {fetchStories} from './storyWebScrap';
import path from 'path';
import fs from 'fs';

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
    // console.log('Title:',stories);
    
    return title.replace(/-/g, ' ');
  }
  // getting the story

  const title = formatURl(params.id);

  // console.log('title:',title , 'params.id:', params.id);
  

  

  const viewingStory: Story = stories.find((story) =>  story.title == title);
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
    <>
      <Head>
        <title>hello</title>
      </Head>
      <DisplayStory  story = {{title: viewingStory?.title, reference: viewingStory?.reference, image: viewingStory?.image}}/>

      {/* <Recomendation stories = {similarStories(stories, viewingStory)} /> */}
      
    
      
    </>
  );
}
async function getStories() {
  const res = await fetch("http://localhost:3000/stories.json");
  const data = await res.json();
  return data.stories;
}
