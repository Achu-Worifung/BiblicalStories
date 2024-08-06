
export default async function getRecommendation(Stories, currentStory) {
    // console.log('hello from the other side Current Story:', currentStory);
    // console.log('Stories are awesome:', Stories);
  
    const currentMetadata = currentStory.metadata;
    if (!currentMetadata) {
      console.error('Current story metadata is null or undefined');
      return null;
    }
  
    const recomendate = Stories
      .filter(story => {
        if (!story.metadata) {
          console.warn(`Story with title "${story.title}" has null or undefined metadata`);
          return false;
        }
        return story.title !== currentStory.title;
      })
      .map(story => {
        const SimilarityScore = checkSimilarities(currentMetadata, story.metadata);
        return { story, score: SimilarityScore };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);
  
    // console.log('Recommendations:', recomendate);
  
    return recomendate;
  }
  
  function checkSimilarities(readingMetadata, targetMetadata) {
    if (!readingMetadata || !targetMetadata) {
      console.error('One or both metadata objects are null or undefined');
      return 0;
    }
  
    let similarity = 0;
  
    if (readingMetadata.author === targetMetadata.author) similarity += 1;
  
    const commonCategories = (readingMetadata.categories || []).filter(category =>
      (targetMetadata.categories || []).includes(category)
    );
    similarity += commonCategories.length;
  
    return similarity;
  }
  