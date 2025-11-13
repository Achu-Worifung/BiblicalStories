  import {
    storyInterface,
  } from "@/public/interfaces";
  export const testamentFilter = (testament: string[], stories: storyInterface[]) => {
    console.log("testament", testament);
    let filtered: storyInterface[] = [];
    testament.forEach((testamentItem) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === testamentItem
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    return filtered;

    console.log("filtered stories", filtered);
  };
  export const themeFilter = (theme: string[], stories: storyInterface[]) => {
    console.log("theme", theme);
    let filtered: storyInterface[] = [];
    theme.forEach((themeItem) => {
      const filteredByTheme = stories.filter((story: storyInterface) => {
        const themes = story.metadata.theme;
        return themes.includes(themeItem);
      });
      filtered = [...filtered, ...filteredByTheme];
    });
    return filtered;
  };
  export const characterFilter = (character: string[], stories: storyInterface[]) => {
    let filtered: storyInterface[] = [];
    character.forEach((character) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === character
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    return filtered;
  };
  export const bookFilter = (book: string[], stories: storyInterface[]) => {
    let filtered: storyInterface[] = [];
    book.forEach((b) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === b
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    return filtered;
  };
  export const genreFilter = (genre: string[], stories: storyInterface[]) => {
     let filtered: storyInterface[] = [];
    genre.forEach((genreItem) => {
      const filteredByTestament = stories.filter(
        (story: storyInterface) => story.metadata.testament === genreItem
      );
      filtered = [...filtered, ...filteredByTestament];
    });
    return filtered;
  };