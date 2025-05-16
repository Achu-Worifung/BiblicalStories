import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FocusCards } from "@/components/ui/focus-card";
import {SOTD} from "@/components/ui/story-of-the-day";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
   const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];
  return (
    <div className="w-screen flex flex-col items-center justify-center text-white">

     <FocusCards cards={cards}/>

      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-lvh  h-auto rounded-xl p-6 border flex gap-4">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="100" className="w-2/3 mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-left  flex-col">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="text-3xl font-bold text-neutral-600 dark:text-white"
          >
            Story of the day
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl font-bold"
          >
           Daniel in the Lion Den
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-neutral-500  max-w-sm mt-2 dark:text-neutral-300 text-left max-h-[72px] line-clamp-3"
          >
           Daniel, a faithful servant of God, was thrown into a den of lions but was protected by God's angels
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-4"
          >
           Read Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <SOTD
      title="Daniel in the Lion Den"
      src="https://amcwebsitestorage.blob.core.windows.net/biblicalstoriesimg/bible project images/lion den.jpeg"
      desc="Daniel, a faithful servant of God, was thrown into a den of lions but was protected by God's angels"
      url="https://www.bible.com/en-GB/bible/111/DAN.6.NIV"
    />
    </div>
  );
}
