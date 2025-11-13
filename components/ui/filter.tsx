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
import { motion, AnimatePresence } from "motion/react";

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
        setFilteredOptions(["Biblical", "Non-Biblical", "Historical"]);
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
  };

  useEffect(() => {
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
        break;
    }
  }, [selected, open, stories, actions]);

  return (
    <div className="flex items-center justify-center w-full flex-col py-10">
      <FloatingDock items={filterLinks} changeOpenState={updateOpenState} />
      
      {/* Backdrop overlay with blur */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => {
              setOpen("");
              setSelected([]);
            }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 300
            }}
            className="fixed top-0 right-0 w-full max-w-[380px] h-screen z-50"
          >
            <div className="relative h-full bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
              
              {/* Header */}
              <div className="px-6 py-5 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Filter by {open}
                  </h3>
                  <button
                    onClick={() => {
                      setOpen("");
                      setSelected([]);
                    }}
                    className="group p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 group-hover:text-white transition-colors"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Search bar */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 focus-within:border-purple-500 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400"
                    >
                      <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
                      onChange={filterFilter}
                    />
                  </div>
                </div>

                {/* Selected count badge */}
                <AnimatePresence>
                  {selected.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full"
                    >
                      <span className="text-xs font-medium text-purple-300">
                        {selected.length} selected
                      </span>
                      <button
                        onClick={() => setSelected([])}
                        className="text-purple-300 hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Options list */}
              <div className="overflow-y-auto h-[calc(100vh-180px)] px-3 py-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <AnimatePresence mode="wait">
                  {filteredOptions.length > 0 ? (
                    <motion.ul 
                      key="options-list"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-1"
                    >
                      {filteredOptions.map((option, idx) => {
                        const isSelected = selected.includes(option);
                        return (
                          <motion.li
                            key={option}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.03,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            whileHover={{ 
                              scale: 1.02,
                              x: 8,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleOption(option)}
                            className="group relative"
                          >
                            {/* Hover gradient background */}
                            <motion.div 
                              className="absolute inset-0 rounded-lg"
                              initial={{ opacity: 0 }}
                              whileHover={{ 
                                opacity: 1,
                                background: "linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))",
                                transition: { duration: 0.3 }
                              }}
                            />
                            
                            <label className="relative flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg">
                              {/* Custom checkbox */}
                              <motion.div 
                                className="relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  className="sr-only peer"
                                  onChange={() => toggleOption(option)}
                                />
                                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                                  isSelected 
                                    ? 'border-purple-500 bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50' 
                                    : 'border-gray-600 group-hover:border-gray-400'
                                }`}>
                                  {isSelected && (
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="animate-in zoom-in duration-200"
                                    >
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  )}
                                </div>
                              </motion.div>

                              {/* Option text */}
                              <motion.span 
                                className={`flex-1 select-none ${
                                  isSelected 
                                    ? 'text-white font-medium' 
                                    : 'text-gray-300'
                                }`}
                                whileHover={{ x: 4 }}
                              >
                                {option}
                              </motion.span>

                              {/* Selected indicator */}
                              {isSelected && (
                                <motion.div 
                                  className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              )}
                            </label>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  ) : (
                    <motion.div 
                      key="no-results"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-gray-500"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">No results found</p>
                      <p className="text-gray-500 text-xs mt-1">Try a different search term</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}