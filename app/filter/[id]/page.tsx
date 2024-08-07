import getRecommendation from "@util/getRecomendation";
import MainContent from "@homepage/MainContent";
import Navbar from "@homepage/Navbar";
import Footer from "@homepage/Footer";
export default async function filter({ params }) {
  const category = decode(params.id);
  const Stories = await getStories();
  //   console.log(category);
  const res = await getRecommendation(Stories, {
    metadata: { categories: [category] },
  });
  const filteredStories = res.map((story) => story.story);

    console.log("filteredStories:", filteredStories);

  return (
    <div className="w-full  bg-base-200 h-screen">
      <Navbar />
      <div className="hero  self-center" style={{height:'calc(95vh - 48px)'}}>
        <MainContent stories={filteredStories} />
      </div>

    </div>
  );
}
function decode(id: string) {
  return id.replace("-", " ");
}
async function getStories() {
  const res = await fetch("http://localhost:3000/stories.json");
  const data = await res.json();
  return data.stories;
}
