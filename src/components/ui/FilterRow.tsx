import React, { Fragment, useState, PropsWithChildren } from "react";
import Dustbin from "../icons/DustbinIcon";
import ListBox from "./ListBox";
import IconButton from "./IconButton";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    dustbin ?: () => void
  }

const tag = [
  { id: 1, name: "درس", bg: "bg-[#EBC8C8]", select: false },
  { id: 2, name: "کار", bg: "bg-[#C3B7F2]", select: false },
  { id: 3, name: "پروژه", bg: "bg-[#7FFAFA]", select: false },
];

const done = [
  { id: 1, name: "است", bg: "", select: true },
  { id: 2, name: "نیست", bg: "", select: false },
];

function FilterRow({ dustbin , className, children, ...props }: Props) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex gap-5 items-center w-full">
        <div className="flex items-center gap-3">
          <div className="text-black">تسک هایی که </div>
          <ListBox />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-black">آن ها</div>
          <ListBox Enterwidth="w-[140px]" title={tag} />
          <ListBox Enterwidth="w-[107px]" title={done} searchInput={false} />
        </div>
      </div>
      <IconButton className="flex items-center" onClick={dustbin}>
        <Dustbin className="stroke-black cursor-pointer" />
      </IconButton>
    </div>
  );
}

export default FilterRow;
