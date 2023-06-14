import { useState } from "react";

import { Combobox } from "@headlessui/react";
import ColorPaletteFull from "./ColorPaletteFull";

import DotMenuIcon from "../icons/DotMenuIcon";
import ColorPaletteIcon from "../icons/ColorPaletteIcon";
import CloseIcon from "../icons/CloseIcon";
import EditTagIcon from "../icons/EditTagIcon";

interface Person {
  name: string;
  className: string;
}

const people: Person[] = [
  {
    name: "درس",
    className: "text-lg bg-pink-300 rounded-md px-4 py-1 my-2",
  },
  {
    name: "کار",
    className: "text-lg bg-indigo-300 rounded-md px-4 py-1 my-2",
  },
  {
    name: "پروژه",
    className: "text-lg bg-emerald-300 rounded-md px-4 py-1 my-2",
  },
];

function MyCombobox(): JSX.Element {
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [showDiv1, setShowDiv1] = useState<boolean>(false);
  const [showDiv2, setShowDiv2] = useState<boolean>(false);

  const handleButtonClick = (buttonNumber: number) => {
    setShowDiv1(buttonNumber === 1 ? !showDiv1 : false);
    setShowDiv2(buttonNumber === 2 ? !showDiv2 : false);
  };

  const filteredPeople: Person[] =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (
      event.key === "Enter" &&
      !filteredPeople.some((p) => p.name === query)
    ) {
      const newPerson: Person = {
        name: query,
        className: "text-lg bg-yellow-500 rounded-md px-4 py-1 my-2",
      };
      people.push(newPerson);
      setQuery("");
    }
  }

  return (
    <>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          placeholder="جستجو و ساختن تگ"
          className="h-10 bg-zinc-200 rounded-md focus:outline-none pr-6"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Combobox.Options>
          {query === ""
            ? people.map((person) => (
                <Combobox.Option
                  key={person.name}
                  value={person.name}
                  className="flex justify-between items-center pb-3 cursor-pointer"
                >
                  <p className={person.className}>{person.name}</p>
                  <DotMenuIcon onClick={() => handleButtonClick(1)} />
                </Combobox.Option>
              ))
            : filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.name}
                  value={person.name}
                  className="flex justify-between items-center pb-3 cursor-pointer"
                >
                  <p className={person.className}>{person.name}</p>
                  <DotMenuIcon onClick={() => handleButtonClick(1)} />
                </Combobox.Option>
              ))}
        </Combobox.Options>
      </Combobox>
      {showDiv1 && (
        <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-24 bottom-28">
          <ul className="py-1">
            <li className="flex justify-start items-center">
              <CloseIcon className="stroke-red-600 cursor-pointer" />
              <p className="text-sm px-1 py-2">حذف</p>
            </li>
            <li className="flex justify-start items-center pb-3">
              <EditTagIcon className="stroke-gray cursor-pointer" />
              <p className="text-sm px-2 py-1">ویرایش تگ</p>
            </li>
            <li className="flex justify-start items-center pb-3">
              <ColorPaletteIcon
                onClick={() => handleButtonClick(2)}
                className="stroke-gray cursor-pointer"
              />
              <p className="text-sm px-1 py-1">ویرایش رنگ</p>
            </li>
          </ul>
        </div>
      )}
      {showDiv2 && (
        <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-24 bottom-28">
          <ColorPaletteFull />
        </div>
      )}
    </>
  );
}

export default MyCombobox;
