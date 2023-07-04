import { useState } from "react";

import { Popover } from '@headlessui/react'
import MyCombobox from "./MyCombobox";
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
  { colorCode: "stroke-[#FB0606]", name: "فوری" },
  { colorCode: "stroke-[#FFE605]", name: "بالا" },
  { colorCode: "stroke-[#09DBCE]", name: "متوسط" },
  { colorCode: "stroke-[#B2ACAC]", name: "پایین" },
];

function TagBoxList(): JSX.Element {
  const [selectedPiriority, setSelectedPiriority] =
    useState<colorOption | null>({
      colorCode: "stroke-[#B2ACAC]",
      name: "پایین",
    });


  const handleColorClick = (color: colorOption): void => {
    setSelectedPiriority(color);
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <Popover className="relative">
        <Popover.Button
          type="button"
          className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5 cursor-pointer"
        >
          <PiriorityIcon className={selectedPiriority?.colorCode} />
        </Popover.Button>

      {selectedPiriority && (
      <Popover.Panel>
        <div className="w-40 bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-2 bottom-14">
          <ul className="py-1">
            {colorOptions.map((color) => (
              <li
                key={color.colorCode}
                className="flex justify-start items-center pb-3"
              >
                <PiriorityIcon
                  onClick={() => handleColorClick(color)}
                  className={`${color.colorCode} cursor-pointer`}
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
      </Popover.Panel>
      )}
      </Popover>
      <button
        type="button"
        className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5"
      >
        <DateIcon className="mr-1" />
      </button>
      <Popover className="relative">
        <Popover.Button
           type="button"
           className="border-dotted border-2 border-slate-300 rounded-full w-12 h-12 p-1 ml-5"
         >
        <FileIcon className="mr-1" />
        </Popover.Button>
        <Popover.Panel>
          <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute right-2 bottom-14">
            <MyCombobox />
          </div>
        </Popover.Panel>
      </Popover>
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
