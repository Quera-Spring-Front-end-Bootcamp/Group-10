import { useState } from "react";

import MyCombobox from "./ComboBox";
import Button from "./Button";

import CloseIcon from "../icons/CloseIcon";
import DateIcon from "../icons/DateIcon";
import FileIcon from "../icons/FileIcon";
import SeeIcon from "../icons/SeeIcon";
import PiriorityIcon from "../icons/PiriorityIcon";

interface colorOption {
  colorCode: string;
  name: string;
}

const colorOptions: colorOption[] = [
  { colorCode: "#FB0606", name: "فوری" },
  { colorCode: "#FFE605", name: "بالا" },
  { colorCode: "#09DBCE", name: "متوسط" },
  { colorCode: "#B2ACAC", name: "پایین" },
];

function TagBoxList(): JSX.Element {
  const [showDiv1, setShowDiv1] = useState(false);
  const [selectedPiriority, setSelectedPiriority] =
    useState<colorOption | null>(null);

  const handleButtonClick = (buttonNumber: number) => {
    setShowDiv1(buttonNumber === 1 ? !showDiv1 : false);
  };

  const handleButtonClickTwo = (): void => {
    if (selectedPiriority) {
      setSelectedPiriority(null);
    } else {
      setSelectedPiriority(colorOptions[3]);
    }
  };

  const handleColorClick = (color: colorOption): void => {
    setSelectedPiriority(color);
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <button
        type="button"
        className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5 cursor-pointer"
        onClick={handleButtonClickTwo}
      >
        <PiriorityIcon
          className={`stroke-[${
            selectedPiriority?.colorCode ?? "#AAAAAA"
          }] mr-1`}
        />
      </button>
      {selectedPiriority && (
        <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-10 bottom-28">
          <ul className="py-1">
            {colorOptions.map((color) => (
              <li
                key={color.colorCode}
                className="flex justify-start items-center pb-3"
              >
                <PiriorityIcon
                  onClick={() => handleColorClick(color)}
                  className={`stroke-[${color.colorCode}] cursor-pointer`}
                />
                <p className="text-md px-3 py-1">{color.name}</p>
              </li>
            ))}
            <li className="flex justify-start items-center">
              <CloseIcon className="stroke-red-600 cursor-pointer" />
              <p className="text-md px-3 py-2">حذف اولویت</p>
            </li>
          </ul>
        </div>
      )}
      <button
        type="button"
        className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5"
      >
        <DateIcon className="mr-1" />
      </button>
      <button
        type="button"
        className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5"
        onClick={() => handleButtonClick(1)}
      >
        <FileIcon className="mr-1" />
      </button>
      {showDiv1 && (
        <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-24 bottom-28">
          <MyCombobox />
        </div>
      )}

      <div className="flex flex-col relative">
        <p className="w-5 h-5 bg-teal-500 text-sm text-white text-center rounded-full absolute top-0 right-0">
          2
        </p>
        <button type="button">
          <SeeIcon />
        </button>
      </div>
      <Button type="button" className="w-32 h-10 mr-auto">
        ساختن تسک
      </Button>
    </div>
  );
}

export default TagBoxList;
