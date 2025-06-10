"use client";
import React from "react";
import { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  CharacterFilter,
  FilterBook,
  FilterGenre,
  TestamentFilter,
  ThemeFilter,
} from "@/components/ui/filters-components";
import { filterLinks } from "@/lib/sidebarConstant";

export function Filter() {
  
  const [open, setOpen] = useState<string>("")
  const updateOpenState = (key: string) =>
  {
    if (open === key) {
      setOpen("");
      return;
    }
    setOpen(key);
  }

  return (
    <div className="flex items-center justify-center w-full flex-col py-10">
      <FloatingDock items={filterLinks} 
           changeOpenState={updateOpenState}/>
      {open === "Testament" && <TestamentFilter />}
      {open === "Theme" && <ThemeFilter />}
      {open === "Character" && <CharacterFilter />}
      {open === "Book" && <FilterBook />}
      {open ==="Genres" && <FilterGenre />}
    </div>
  );
}
