import { bibleCharacters, themes, bibleBooks } from "@/lib/sidebarConstant";
import { useEffect, useState } from "react";
export function TestamentFilter({filter}: {filter: (testament: string[]) => void}) {
  const [checkedTestaments, setCheckedTestaments] = useState<string[]>([]);
  const handleCheckboxChange = (testament: string) => {
    // Toggle the checked state of the testament
    if (checkedTestaments?.includes(testament)) {
      setCheckedTestaments((prev) => prev?.filter((t) => t !== testament));
      return;
    }
    setCheckedTestaments((prev) => [...(prev || []), testament]);



  };
useEffect(() => {
   console.log("Checked Testaments:", checkedTestaments);
    // Call the filter function with the selected testaments
    filter(checkedTestaments);
}, [checkedTestaments, filter]);
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
            value="old testament"
            onChange={(e) => {handleCheckboxChange(e.target.value);} }
            
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
            value="new testament"
            onChange={(e) => {handleCheckboxChange(e.target.value);} }
          />
          <label htmlFor="new-testament" className="text-lg">
            New Testament
          </label>
        </section>
      </div>
    </div>
  );
}

export function ThemeFilter({filter}: {filter: (theme: string[]) => void}) {
  const [checkedThemes, setCheckedThemes] = useState<string[]>([]);

  const handleCheckboxChange = (theme: string) => {
    if (checkedThemes?.includes(theme)) {
      setCheckedThemes((prev) => prev?.filter((t) => t !== theme));
      return;
    }
    setCheckedThemes((prev) => [...(prev || []), theme]);
  };

  useEffect(() => {
    console.log("Checked Themes:", checkedThemes);
    // Call the filter function with the selected themes
    filter(checkedThemes);
  }, [checkedThemes, filter]);
  return (
    <div className="flex flex-col items-center justify-center py-4" id="Theme">
      <p className="font-bold text-2xl">Filter by Theme</p>
      <div className="flex gap-3 flex-wrap justify-left items-center">
        {themes.map((theme, idx) => (
          <div key={idx} className="flex items-center gap-2 px-4 py-1">
            <input
              type="checkbox"
              id={theme}
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

export function CharacterFilter({filter}: {filter: (character: string[]) => void}) {
  const [filtered, setFiltered] = useState(bibleCharacters);
  const [checkedCharacters, setCheckedCharacters] = useState<string[]>([]);
  const handleCheckboxChange = (character: string) => {
    if (checkedCharacters?.includes(character)) {
      setCheckedCharacters((prev) => prev?.filter((t) => t !== character));
      return;
    }
    setCheckedCharacters((prev) => [...(prev || []), character]);
  };
  useEffect(() => {
    console.log("Checked Characters:", checkedCharacters);
    // Call the filter function with the selected characters
    filter(checkedCharacters);
  }, [checkedCharacters, filter]);
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
              value={character}
              checked={checkedCharacters.includes(character)}
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

export function FilterBook({filter}: {filter: (book: string[]) => void}) {
  const [filtered, setFiltered] = useState(bibleBooks);
  const [checkedBooks, setCheckedBooks] = useState<string[]>([]);
  const handleCheckboxChange = (book: string) => {
    if (checkedBooks?.includes(book)) {
      setCheckedBooks((prev) => prev?.filter((t) => t !== book));
      return;
    }
    setCheckedBooks((prev) => [...(prev || []), book]);
  };
  useEffect(() => {
    console.log("Checked Books:", checkedBooks);
    filter(checkedBooks);
  }, [checkedBooks, filter]);

  const filterBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters: string[] = bibleBooks.filter((book: string) =>
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
              checked={checkedBooks.includes(book)}
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

export function FilterGenre({filter}: {filter: (genre: string[]) => void}) {
  const genre = ["Parable", "Prophecy", "Law", "Poetry", "Apocalyptic"];
  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);
  const handleCheckboxChange = (genre: string) => {
    if (checkedGenres?.includes(genre)) {
      setCheckedGenres((prev) => prev?.filter((t) => t !== genre));
      return;
    }
    setCheckedGenres((prev) => [...(prev || []), genre]);
  };
  useEffect(() => {
    console.log("Checked Genres:", checkedGenres);
    // Call the filter function with the selected genres
    filter(checkedGenres);
  }, [checkedGenres, filter]);
  return (
    <div className="flex flex-col items-center justify-center py-4" id="Genre">
      <p className="font-bold text-2xl">Filter by Genre</p>
      <div className="flex gap-20 py-3">
        {genre.map((genre: string) => (
          <section className="" key={genre}>
            <input
              type="checkbox"
              id={genre}
              name={genre}
              value={genre}
              checked={checkedGenres.includes(genre)}
              onChange={() => handleCheckboxChange(genre)}
            />
            <label htmlFor={genre} className="text-lg">
              {genre}
            </label>
          </section>
        ))}
      </div>
    </div>
  );
}
