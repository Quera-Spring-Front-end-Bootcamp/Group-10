import { useState } from "react";
import SelectIcon from "../icons/SelectIcon";

interface Color {
  id: number;
  colorHEX: string;
}

interface Props {
  selected?: number;
  onSelect?: (selected: number) => void;
}

const colors: Color[] = [
  { id: 1, colorHEX: "bg-[#208D8E]" },
  { id: 2, colorHEX: "bg-[#78C6B0]" },
  { id: 3, colorHEX: "bg-[#76BC86]" },
  { id: 4, colorHEX: "bg-[#80DC69]" },
  { id: 5, colorHEX: "bg-[#E46161]" },
  { id: 6, colorHEX: "bg-[#E17E80]" },
  { id: 7, colorHEX: "bg-[#EC8182]" },
  { id: 8, colorHEX: "bg-[#F3C567]" },
  { id: 9, colorHEX: "bg-[#E57A57]" },
  { id: 10, colorHEX: "bg-[#F1A25C]" },
  { id: 11, colorHEX: "bg-[#5a8c8d]" },
  { id: 12, colorHEX: "bg-[#04f1ae]" },
  { id: 13, colorHEX: "bg-[#f5f104]" },
  { id: 14, colorHEX: "bg-[#35dd0a]" },
  { id: 15, colorHEX: "bg-[#eb0e96]" },
  { id: 16, colorHEX: "bg-[#f3080c]" },
  { id: 17, colorHEX: "bg-[#2506d4]" },
  { id: 18, colorHEX: "bg-[#eea91e]" },
  { id: 19, colorHEX: "bg-[#615956]" },
  { id: 20, colorHEX: "bg-[#2b2826]" },
];

function ColorPaletteFull({ selected, onSelect }: Props) {
  const [select, setSelect] = useState(selected);

  function activeColor(id: number) {
    setSelect(id);
  }

  return (
    <div className="flex flex-wrap items-center w-44 h-40 gap-3">
      {colors.map((color) => (
        <button
          key={color.id}
          className={`flex justify-center items-center cursor-pointer rounded-lg transition-all duration-500 ease-in-out 
          ${select === color.id ? "w-8 h-8" : "w-6 h-6"}
          ${color.colorHEX}`}
          onClick={() => {
            activeColor(color.id);
            if (onSelect) {
              onSelect(color.id);
            }
          }}
        >
          {select === color.id && <SelectIcon className="stroke-white" />}
        </button>
      ))}
    </div>
  );
}

export default ColorPaletteFull;
