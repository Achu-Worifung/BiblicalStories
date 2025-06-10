"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  CharacterFilter,
  FilterBook,
  TestamentFilter,
  ThemeFilter,
} from "@/components/ui/testament-filter";
import { filterLinks } from "@/lib/sidebarConstant";
import { keyframes } from "motion";

export function Filter() {
  const [isOpen, setIsOpen] = useState({
    Testament: false,
    Theme: false,
    Character: false,
    Book: false,
  });

  const [hash, setHash] = useState(() => window.location.hash.substring(1)); // initial hash

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  const[prevHash, setPrevHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const current = window.location.hash.substring(1);
      setPrevHash(currentHash);
      setCurrentHash(`#${current}`);
      setHash(current);

      setIsOpen((prev) => {
        const newState = {};

        Object.keys(prev).forEach((key) => {
          newState[key] = key === current ? true: false;
        });

        if (prevHash === currentHash) {
          newState[current] = false;
        }
        
          

        return newState;
      });
    };

    console.log("currentHash", isOpen);

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentHash, hash]);

  return (
    <div className="flex items-center justify-center h-[35rem] w-full flex-col">
      <FloatingDock items={filterLinks} />
      {isOpen.Testament && <TestamentFilter />}
      {isOpen.Theme && <ThemeFilter />}
      {isOpen.Character && <CharacterFilter />}
      {isOpen.Book && <FilterBook />}
    </div>
  );
}
