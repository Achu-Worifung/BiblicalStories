import { stories } from "@/public/stories";
import { storyInterface } from "@/public/interfaces";
import { notFound } from "next/navigation";
import { Read } from "@/components/ui/read";
import { scrapeStory } from "@/lib/scrape-story";
import { Recommendations } from "@/components/ui/recommendationCard";
import { Footer } from "@/components/layout/footer";

export default async function Page({ params }: { params: { id: string } }) {
  console.log("params", params);
  const { id } = await params;
  const title = id.replace(/-/g, " "); //removing the url formatting

  const viewingStory: storyInterface = stories.find(
    (story: storyInterface) => story.title == title
  );
  console.log("viewingStory", viewingStory);
  if (!viewingStory) return notFound(); //how to do not found page

  const passage = await scrapeStory(viewingStory.reference, "KJV");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div>
        <Read
          title={viewingStory.title}
          content={passage}
          reference={viewingStory.reference}
          image={viewingStory.image}
          version="KJV"
        />
      </div>
      <div>
        <Recommendations stories={stories} />
        <Footer />
      </div>
    </div>
  );
}
