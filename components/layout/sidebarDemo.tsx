"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {

  IconMathLower,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { bibleCharacters, themes } from "@/lib/sidebarConstant";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "max-h-full" // for your use case, use `h-full` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} animate={false} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex overflow-y-auto flex-col overflow-x-hidden  max-h-full">
            <Logo />
            <Testament />
            <Themes />
            <Character />
           
          </div>
          
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <span className="flex items-center  gap-2 cursor-pointer ">
      <img
        src="/favicon.ico"
        alt="logo"
        width={40}
        height={40}
        className="p-2 bg-white rounded-md"
      />

      <p className="text-2xl font-semibold">BStories</p>
    </span>
  );
};

const dropdownClassName = `overflow-hidden px-4 my-2 flex flex-col gap-2 transition-trnsform duration-300 `;
export const Testament = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p
        className="flex justify-between items-center text-xl cursor-default hover:bg-amber-950 transform-all duration-00 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        Testament <IconMathLower />
      </p>
      <div
        className={cn(dropdownClassName, ` ${open ? "h-max" : "max-h-[0px]"}`)}
      >
        <div>
          <input type="checkbox" id="new-test" />
          <label htmlFor="new-test" className="cursor-pointer">
            New Testament
          </label>
        </div>
        <div>
          <input type="checkbox" id="old-test" />
          <label htmlFor="old-test" className="cursor-pointer">
            Old Testament
          </label>
        </div>
      </div>
    </>
  );
};

export const Themes = () => {
  const [open, setOpen] = useState(false);

  // Store the checked state of all checkboxes
  const [checkedThemes, setCheckedThemes] = useState({});

  const handleCheckboxChange = (theme) => {
    setCheckedThemes((prev) => ({
      ...prev,
      [theme]: !prev[theme],
    }));
  };

  return (
    <>
      <p className="cursor-default" onClick={() => setOpen(!open)}>
        Themes
      </p>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-max" : "max-h-0"
        )}
      >
        {themes.map((theme, idx) => (
          <div key={idx} className="flex items-center gap-2 px-4 py-1">
            <input
              type="checkbox"
              id={theme}
              checked={!!checkedThemes[theme]}
              onChange={() => handleCheckboxChange(theme)}
            />
            <label htmlFor={theme} className="cursor-pointer capitalize">
              {theme}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export const Character = () => {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState(bibleCharacters);
  const [checkedCharacters, setCheckedCharacters] = useState({});
  const handleCheckboxChange = (character) => {
    setCheckedCharacters((prev) => ({
      ...prev,
      [character]: !prev[character],
    }));
  };
  const filterCharacter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = bibleCharacters.filter((character) =>
      character.toLowerCase().includes(searchTerm)
    );
    setFiltered(filteredCharacters);
  };

  return (
    <>
    <p className="cursor-default" onClick={() => setOpen(!open)}>Characters</p>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-max" : "max-h-0"
        )}
      >
        <input type="text" placeholder="Search" onChange={filterCharacter}></input>
        {filtered.map((character, idx) => (
          <div key={idx} className="flex items-center gap-2 px-4 py-1">
            <input
              type="checkbox"
              id={character}
              checked={!!checkedCharacters[character]}
              onChange={() => handleCheckboxChange(character)}
            />
            <label htmlFor={character} className="cursor-pointer capitalize">
              {character}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
