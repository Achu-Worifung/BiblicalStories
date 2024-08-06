
export interface Story {
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
  export interface StoryArray {
    stories: Story[];
  }