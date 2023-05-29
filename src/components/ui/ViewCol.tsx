import React, { useState, PropsWithChildren } from "react";
import IconButton from "./IconButton";
import DotMenuIcon from "../icons/DotMenuIcon";
import PlusIcon from "../icons/PlusIcon";
import CardCol from "./CardCol";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: string;
  borderColor?: string;
}

function ViewCol({ title = "Open", borderColor = "border-[#F98F2E]", className, children, ...props }: Props) {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[250px] my-[17px]">
      <div
        className={` flex justify-between items-center m-[8px] w-full border-t-[1px] group rounded-md p-2 shadow-[0px_2px_8px_#0000002e] ${borderColor}`}
      >
        <div className="flex gap-2">
          <h2 className="text-[16px]">{title}</h2>
          <span className="flex justify-center items-center text-[12px] rounded-full w-[16px] h-[16] bg-[#F4F4F4]">
            {count}
          </span>
        </div>
        <div className="flex gap-2 hidden group-hover:flex">
          <IconButton>
            <DotMenuIcon />
          </IconButton>
          <IconButton>
            <PlusIcon className="stroke-black" />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col  mt-[20px]">
        <CardCol />
        <CardCol />
      </div>
    </div>
  );
}

export default ViewCol;
