import { bibleCharacters, themes, bibleBooks } from "@/lib/sidebarConstant";
import { useState } from "react";
export function TestamentFilter() {
  return (
    <div
      className="py-4 flex flex-col items-center justify-center "
      id="Testament"
    >
      <p className="font-bold text-2xl">Filter by Testament</p>
      <div className="flex gap-20 py-3">
        <section className="">
          <input
            type="checkbox"
            id="old-testament"
            name="testament"
            value="old-testament"
          />
          <label htmlFor="old-testament" className="text-lg">
            Old Testament
          </label>
        </section>
        <section>
          <input
            type="checkbox"
            id="new-testament"
            name="testament"
            value="new-testament"
          />
          <label htmlFor="new-testament" className="text-lg">
            New Testament
          </label>
        </section>
      </div>
    </div>
  );
}

export function ThemeFilter() {
  const [checkedThemes, setCheckedThemes] = useState<any>({});

  const handleCheckboxChange = (theme : string) => {
    setCheckedThemes((prev) => ({
      ...prev,
      [theme]: !prev[theme],
    }));
  };
  return (
    <div className="flex flex-col items-center justify-center py-4" id="Theme">
      <p className="font-bold text-2xl">Filter by Theme</p>
      <div className="flex gap-3 flex-wrap justify-left items-center">
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
    </div>
  );
}

export function CharacterFilter() {
  const [filtered, setFiltered] = useState(bibleCharacters);
  const [checkedCharacters, setCheckedCharacters] = useState({});
  const handleCheckboxChange = (character : string) => {
    setCheckedCharacters((prev) => ({
      ...prev,
      [character]: !prev[character],
    }));
  };
  const filterCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = bibleCharacters.filter((character) =>
      character.toLowerCase().includes(searchTerm)
    );
    setFiltered(filteredCharacters);
  };
  return (
    <div
      className="flex flex-col items-center justify-center py-4"
      id="Character"
    >
      <p>Filter by Character</p>

      <input
        type="text"
        placeholder="Search Character"
        onChange={filterCharacter}
        className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full max-w-md"
      ></input>

      <div className="flex flex-wrap gap-4 items-center justify-left">
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
    </div>
  );
}

export function FilterBook() {
  const [filtered, setFiltered] = useState(bibleBooks);
  const [checkedBooks, setCheckedBooks] = useState({});
  const handleCheckboxChange = (book: string) => {
    setCheckedBooks((prev) => ({
      ...prev,
      [book]: !prev[book],
    }));
  };
  const filterBooks = (e : React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = bibleBooks.filter((book) =>
      book.toLowerCase().includes(searchTerm)
    );
    setFiltered(filteredCharacters);
  };
  return (
    <div
      className="flex flex-col items-center justify-center py-4"
      id="Character"
    >
      <p>Filter by Book</p>

      <input
        type="text"
        placeholder="Search Character"
        onChange={filterBooks}
        className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full max-w-md"
      ></input>

      <div className="flex flex-wrap gap-4 items-center justify-left">
        {filtered.map((book, idx) => (
          <div key={idx} className="flex items-center gap-2 px-4 py-1">
            <input
              type="checkbox"
              id={book}
              checked={!!checkedBooks[book]}
              onChange={() => handleCheckboxChange(book)}
            />
            <label htmlFor={book} className="cursor-pointer capitalize">
              {book}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
