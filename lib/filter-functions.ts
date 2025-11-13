import { storyInterface } from "@/public/interfaces";

/**
 * A helper function for filtering by metadata properties that are a single STRING
 * (e.g., story.metadata.testament, story.metadata.author)
 * This is now case-insensitive.
 */
type Metadata = storyInterface["metadata"];
type StringMetadataKey = { [K in keyof Metadata]: Metadata[K] extends string ? K : never }[keyof Metadata];
type ArrayMetadataKey = { [K in keyof Metadata]: Metadata[K] extends string[] ? K : never }[keyof Metadata];

const metadataFilter = (
  selectedItems: string[],
  stories: storyInterface[],
  metadataKey: StringMetadataKey
) => {
  // If no items are selected, return all stories
  if (selectedItems.length === 0) {
    return stories;
  }

  // Convert selected items to lowercase ONCE for efficiency
  const lowerSelectedItems = selectedItems.map((item) => item.toLowerCase());

  return stories.filter((story: storyInterface) => {
    // Ensure metadata and key exist, provide a fallback
    const storyValue = (story.metadata?.[metadataKey] as unknown as string) || "";

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
  metadataKey: ArrayMetadataKey
) => {
  if (selectedItems.length === 0) {
    return stories;
  }

  const lowerSelectedItems = selectedItems.map((item) => item.toLowerCase());

  return stories.filter((story: storyInterface) => {
    const storyValues = (story.metadata?.[metadataKey] as unknown as string[]) || [];

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
  return metadataArrayFilter(themes, stories, "theme");
};

export const characterFilter = (
  character: string[],
  stories: storyInterface[]
) => {

  return metadataArrayFilter(character, stories, "characters");
};

export const bookFilter = (book: string[], stories: storyInterface[]) => {

  return metadataFilter(book, stories, "book");
};

export const genreFilter = (genre: string[], stories: storyInterface[]) => {
  
  return metadataArrayFilter(genre, stories, "genre");
};