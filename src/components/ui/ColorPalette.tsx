import React, { useState, PropsWithChildren } from "react";
import SelectIcon from "../icons/SelectIcon";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: string;
}

interface Color {
  id: number;
  colorHEX: string;
  active: boolean;
}

const colors: Color[] = [
  { id: 1, colorHEX: "#208D8E", active: true },
  { id: 2, colorHEX: "#78C6B0", active: false },
  { id: 3, colorHEX: "#76BC86", active: false },
  { id: 4, colorHEX: "#80DC69", active: false },
  { id: 5, colorHEX: "#E46161", active: false },
  { id: 6, colorHEX: "#E17E80", active: false },
  { id: 7, colorHEX: "#EC8182", active: false },
  { id: 8, colorHEX: "#F3C567", active: false },
  { id: 9, colorHEX: "#E57A57", active: false },
  { id: 10, colorHEX: "#F1A25C", active: false },
];

const update = () => {
  colors.forEach((e) => {
    e.active = false;
  });
};

const active = (id: number) => {
  colors.map((element) => {
    if (element.id === id) {
      return (element.active = true);
    }
  });
};

function ColorPalette({ title, children, className, ...props }: Props) {
  const [select, setSelect] = useState(1);

  return (
    <div className="flex flex-col">
      <p className="mb-[18px]">{title}</p>
      <div className="flex items-center">
        {colors.map((elment) => (
          <div
            key={elment.id}
            className={`flex justify-center items-center cursor-pointer ${
              elment.active ? "w-[40px] h-[40px]" : "w-[20px] h-[20px]"
            } rounded-full bg-[${elment.colorHEX}] ml-[14px] transition-all duration-500 ease-in-out`}
            onClick={() => {
              update();
              active(elment.id);
              setSelect(elment.id);
            }}
          >
            {elment.active && <SelectIcon />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
