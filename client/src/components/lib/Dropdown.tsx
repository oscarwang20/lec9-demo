import { useState } from "react";

/*
 * Treat this as a library component. Often times, you don't want to code basic components from
 * scratch, but rather rely on a pre-built library.
 */

type DropdownProps = {
  options: Course[];
  onChange: (value: Course) => void;
};

const getCourseCode = (course: Course) =>
  `${course.subject} ${course.catalogNbr}`;

/**
 * A dropdown menu.
 * @param options The list of courses that can be selected.
 * @param onChange A callback function to be called whenever a course is selected.
 */
const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [query, setQuery] = useState("");

  const handleOptionClick = (value: Course) => {
    setQuery("");
    onChange(value);
  };

  const searchOptions = options.filter(option =>
    getCourseCode(option)
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase())
  );

  return (
    <div className="dropdown">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="courseSearchBar"
      />
      {query.length >= 2 && (
        <div className="dropdownMenu">
          {searchOptions.map(option => (
            <p
              className="dropdownOption"
              key={option.titleShort}
              onClick={() => handleOptionClick(option)}
            >
              {getCourseCode(option)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
