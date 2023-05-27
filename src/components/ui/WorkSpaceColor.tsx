import { useState } from "react";
import SelectIcon from "../icons/SelectIcon";
import Forbidden from "../icons/ForbiddenIcon";

interface Color {
  id: number;
  colorHEX: string;
}

interface Props {
  selected?: number;
  onSelect?: (selected: string) => void;
}

const colors: Color[] = [
  { id: 1, colorHEX: "" },
  { id: 2, colorHEX: "bg-[#84C6A1]" },
  { id: 3, colorHEX: "bg-[#78C6B0]" },
  { id: 4, colorHEX: "bg-[#76BC86]" },
  { id: 5, colorHEX: "bg-[#80DC69]" },
  { id: 6, colorHEX: "bg-[#E46161]" },
  { id: 7, colorHEX: "bg-[#E17E80]" },
  { id: 8, colorHEX: "bg-[#EC8182]" },
  { id: 9, colorHEX: "bg-[#F3C567]" },
  { id: 10, colorHEX: "bg-[#B9995E]" },
  { id: 11, colorHEX: "bg-[#E57A57]" },
  { id: 12, colorHEX: "bg-[#F1A25C]" },
  { id: 13, colorHEX: "bg-[#E28A60]" },
  { id: 14, colorHEX: "bg-[#6897C2]" },
  { id: 15, colorHEX: "bg-[#74AADD]" },
  { id: 16, colorHEX: "bg-[#3C45E7]" },
  { id: 17, colorHEX: "bg-[#6DAFCE]" },
  { id: 18, colorHEX: "bg-[#6CB2F7]" },
  { id: 19, colorHEX: "bg-[#9286EA]" },
  { id: 20, colorHEX: "bg-[#C074D1]" },
  { id: 21, colorHEX: "bg-[#486774]" },
  { id: 22, colorHEX: "bg-[#5F6C7C]" },
  { id: 23, colorHEX: "bg-[#46494D]" },
  { id: 24, colorHEX: "bg-[#7FA1D1]" },
];

function WorkSpaceColor({ selected = 1, onSelect }: Props) {
  const [select, setSelect] = useState(selected);

  function activeColor(id: number) {
    setSelect(id);
  }

  return (
    <div className="flex items-center gap-3">
      <div className="">
        <div
          className={`w-[75px] h-[75px] flex justify-center items-center text-white text-[24px] rounded-md ${
            colors[select - 1].colorHEX ? colors[select - 1].colorHEX : "bg-[#7D828C]"
          }`}
        >
          ت ط
        </div>
      </div>
      <div className="gap-4">
        <h3 className="text-right mb-4">رنگ ورک اسپیس</h3>
        <div className="grid grid-cols-12 flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`flex justify-center items-center cursor-pointer rounded-sm transition-all duration-500 ease-in-out 
          ${select === color.id ? "w-6 h-6" : "w-4 h-4"}
          ${color.colorHEX === "bg" ? "" : color.colorHEX}`}
              onClick={() => {
                color.id !== 1 && activeColor(color.id);
                if (onSelect) {
                  onSelect(color.colorHEX);
                }
              }}
            >
              {color.colorHEX === "" ? (
                <Forbidden className="stroke-black" />
              ) : (
                select === color.id && <SelectIcon className="stroke-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSpaceColor;
