"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FocusCards } from "@/components/ui/focus-card";
import { SOTD } from "@/components/ui/story-of-the-day";
import { FilterBar } from "@/components/layout/filterbar";
import { Card } from "@/components/ui/card";
import { TracingBeamDemo } from "@/components/ui/read";
import { data } from "motion/react-client";

import { IconMathGreater, IconMathLower } from "@tabler/icons-react";
import { useState } from "react";
import { Footer } from "@/components/layout/footer";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Recommendations } from "@/components/ui/recommendationCard";
import { SidebarDemo } from "@/components/layout/sidebarDemo";
import { Suggestion } from "@/components/ui/suggestion";

export default function Home() {
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const cards = [
    {
      time: "2 min read",
      title: "Forest Adventure",
      src: "https://amcwebsitestorage.blob.core.windows.net/biblicalstoriesimg/bible project images/lion den.jpeg",
    },
    {
      time: "2 min read",

      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "2 min read",

      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "2 min read",

      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "2 min read",

      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "2 min read",

      title: "The First Rule",
      src: "https://amcwebsitestorage.blob.core.windows.net/biblicalstoriesimg/bible project images/the fall of man.jpeg",
    },
  ];
  // console.log("cards", cards);

  return (
    <div className="w-full flex flex-col items-center justify-center text-white">
     

      <SOTD
        title="Daniel in the Lion Den"
        src="https://amcwebsitestorage.blob.core.windows.net/biblicalstoriesimg/bible project images/lion den.jpeg"
        desc="Daniel, a faithful servant of God, was thrown into a den of lions but was protected by God's angels"
        url="https://www.bible.com/en-GB/bible/111/DAN.6.NIV"
      />
      {/* <TracingBeamDemo /> */}
      <Recommendations data={cards} />
      <Suggestion />
      <Footer />
      <SidebarDemo />
    </div>
  );
}
