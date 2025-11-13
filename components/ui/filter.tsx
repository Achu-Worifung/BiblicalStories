"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { storyInterface } from "@/public/interfaces";
import { filterLinks } from "@/lib/sidebarConstant";
import {
  testamentFilter,
  themeFilter,
  characterFilter,
  bookFilter,
  genreFilter,
} from "@/lib/filter-functions";
import { bibleCharacters, themes, bibleBooks } from "@/lib/sidebarConstant";

export function Filter({
  actions,
  stories,
}: {
  actions: (filteredStories: storyInterface[]) => void;
  stories: storyInterface[];
}) {
  const [open, setOpen] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const updateOpenState = (key: string) => {
    if (open === key) {
      setOpen("");
      setSelected([]);
      return;
    }
    setOpen(key);
    switch (key) {
      case "Testament":
        setOptions(["Old Testament", "New Testament"]);
        setFilteredOptions(["Old Testament", "New Testament"]);
        break;
      case "Theme":
        setOptions(themes);
        setFilteredOptions(themes);
        break;
      case "Character":
        setOptions(bibleCharacters);
        setFilteredOptions(bibleCharacters);
        break;
      case "Book":
        setOptions(bibleBooks);
        setFilteredOptions(bibleBooks);
        break;
      case "Genre":
        setOptions(["Biblical", "Non-Biblical", "Historical"]);
        setFilteredOptions([]);
        break;
      default:
        break;
    }
  };
  const toggleOption = (option: string) => {
    setSelected((prev) => {
      const exists = prev.includes(option);
      const next = exists
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      return next;
    });
  };
  const filterFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm)
    );
    setFilteredOptions(filteredOptions);
    // console.log("filteredOptions", filteredOptions);
  };
  useEffect(() => {
    // This code now runs *after* 'selected' or 'open' changes
    switch (open) {
      case "Testament":
        actions(testamentFilter(selected, stories));
        break;
      case "Theme":
        actions(themeFilter(selected, stories));
        break;
      case "Character":
        actions(characterFilter(selected, stories));
        break;
      case "Book":
        actions(bookFilter(selected, stories));
        break;
      case "Genre":
        actions(genreFilter(selected, stories));
        break;
      default:
        // When 'open' is closed, 'selected' is cleared by updateOpenState,
        // this effect runs, and the filter functions (once fixed)
        // will correctly return the full list.
        break;
    }
  }, [selected, open, stories, actions]);

  return (
    <div className="flex items-center justify-center w-full flex-col py-10">
      <FloatingDock items={filterLinks} changeOpenState={updateOpenState} />
      {filteredOptions && open && (
        <ul className="w-full  rounded-md mt-1 py-2  bg-gray-50 dark:bg-neutral-900 hover:shadow-lg ">
          <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full mb-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 30 30"
              fill="#6B7280"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
              onChange={(e) => filterFilter(e)}
            />
          </div>
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              className="px-4 py-1  cursor-pointer"
              onClick={() => toggleOption(option)}
            >
              <label className="flex gap-3 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  className="sr-only peer"
                  onChange={() => toggleOption(option)}
                />
                <span className="w-5 h-5 border border-white rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-white peer-checked:border-white peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                <span className=" select-none">{option}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
      {/* {open === "Testament" && <TestamentFilter filter= {actions.testamentFilter}/>}
      {open === "Theme" && <ThemeFilter filter={actions.themeFilter} /> }
      {open === "Character" && <CharacterFilter filter ={actions.characterFilter}/>}
      {open === "Book" && <FilterBook filter ={actions.bookFilter}/>}
      {open ==="Genres" && <FilterGenre filter={actions.genreFilter}/>} */}
    </div>
  );
}
