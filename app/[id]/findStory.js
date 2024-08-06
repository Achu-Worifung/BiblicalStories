

export default function getStories({stories})
{
    return stories
}
export async function getStaticProps() {
    const res = await fetch("/stories.json");
    const data = await res.json();
    return {
      props: {stories: data.stories}
    }
}