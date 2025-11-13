import { storyInterface } from "@/public/interfaces";

/**
 * A helper function for filtering by metadata properties that are a single STRING
 * (e.g., story.metadata.testament, story.metadata.author)
 * This is now case-insensitive.
 */
const metadataFilter = (
  selectedItems: string[],
  stories: storyInterface[],
  metadataKey: keyof storyInterface["metadata"]
) => {
  // If no items are selected, return all stories
  if (selectedItems.length === 0) {
    return stories;
  }

  // Convert selected items to lowercase ONCE for efficiency
  const lowerSelectedItems = selectedItems.map((item) => item.toLowerCase());

  return stories.filter((story: storyInterface) => {
    // Ensure metadata and key exist, provide a fallback
    const storyValue = (story.metadata?.[metadataKey] as string) || "";

    // Compare lowercase values
    return lowerSelectedItems.includes(storyValue.toLowerCase());
  });
};

/**
 * A helper function for filtering by metadata properties that are an ARRAY
 * (e.g., story.metadata.categories)
 * This is now case-insensitive.
 */
const metadataArrayFilter = (
  selectedItems: string[],
  stories: storyInterface[],
  metadataKey: keyof storyInterface["metadata"]
) => {
  if (selectedItems.length === 0) {
    return stories;
  }

  const lowerSelectedItems = selectedItems.map((item) => item.toLowerCase());

  return stories.filter((story: storyInterface) => {
    const storyValues = (story.metadata?.[metadataKey] as string[]) || [];

    const lowerStoryValues = storyValues.map((val) => val.toLowerCase());

    return lowerSelectedItems.some((item) => lowerStoryValues.includes(item));
  });
};


export const testamentFilter = (
  testament: string[],
  stories: storyInterface[]
) => {
  return metadataFilter(testament, stories, "testament");
};

export const themeFilter = (themes: string[], stories: storyInterface[]) => {
  return metadataArrayFilter(themes, stories, "categories");
};

export const characterFilter = (
  character: string[],
  stories: storyInterface[]
) => {

  return metadataFilter(character, stories, "author");
};

export const bookFilter = (book: string[], stories: storyInterface[]) => {

  return metadataArrayFilter(book, stories, "categories");
};

export const genreFilter = (genre: string[], stories: storyInterface[]) => {
  
  return metadataArrayFilter(genre, stories, "categories");
};