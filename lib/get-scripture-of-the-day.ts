"use client";
import { storyInterface } from "@/public/interfaces";
export function getScriptureOfTheDay({stories}:{stories:storyInterface[]}) {
   
    let savedStory = getCookie("scriptureOfTheDay");
    if (!savedStory) 
    {
        savedStory = getRandomStory({ stories });
        setCookie({ name: "scriptureOfTheDay", value: savedStory });
        
    }
    return savedStory;

}

// Helper functions to manage cookies
  function getCookie(name: string) {
    // Guard for SSR: `document` is not available on the server
    if (typeof document === "undefined") {
      return null;
    }
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim(); // Trim leading/trailing whitespace
      if (cookie.startsWith(nameEQ)) {
        const valueString = cookie.substring(nameEQ.length);
        try {
          return JSON.parse(decodeURIComponent(valueString));
        } catch (error) {
          console.error("Error parsing cookie value:", error);
          return null;
        }
      }
    }
    return null;
  }

  // Function to set a cookie with the given name and value
    function setCookie({ name, value }: { name: string; value: storyInterface }) {
    // Guard for SSR: `document` is not available on the server
    if (typeof document === "undefined") {
      return;
    }
    const now = new Date();
    now.setHours(23, 59, 59, 999); // Set to today's midnight
  
    const expires = "expires=" + now.toUTCString();
    const valueString = encodeURIComponent(JSON.stringify(value));
    document.cookie = `${name}=${valueString}; ${expires}; path=/; SameSite=Lax`;
  }

    function getRandomStory({ stories }: { stories: storyInterface[] }): storyInterface {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
  }