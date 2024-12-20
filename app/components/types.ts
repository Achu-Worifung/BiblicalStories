export interface  Story {
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
  export interface StoryProp
  {
    story:Story;
  }
  export type storyprops=
  {
    stories:Story[];
  }

  export type metadata = {
    author: string;
    categories: string[];
  }
  export interface RecomendationProps  {
    viewingStory: Story;
    Stories: Story[];
    currentStory: Story;
  }