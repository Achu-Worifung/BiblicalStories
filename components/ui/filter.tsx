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
import { actions as actionInterface } from "@/public/interfaces";

export function Filter({actions}: {actions: actionInterface}) {
  
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
      {open === "Testament" && <TestamentFilter filter= {actions.testamentFilter}/>}
      {open === "Theme" && <ThemeFilter filter={actions.themeFilter} />}
      {open === "Character" && <CharacterFilter filter ={actions.characterFilter}/>}
      {open === "Book" && <FilterBook filter ={actions.bookFilter}/>}
      {open ==="Genres" && <FilterGenre filter={actions.genreFilter}/>}
    </div>
  );
}
