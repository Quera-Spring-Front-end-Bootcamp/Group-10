import React, { useEffect, useContext, PropsWithChildren } from "react";
import { DragAndDropContext, updateArray } from "./ViewDragAndDrop";
import { useDrag } from "react-dnd";
import TitleIcon from "../icons/TitleIcon";
import DotMenuIcon from "../icons/DotMenuIcon";
import Card from "./Card";
import IconButton from "./IconButton";
import AcceptIcon from "../icons/AcceptIcon";
import CheckMarkIcon from "../icons/CheckMarkIcon";

type tag = { id: number; tagName: string; bg: string };

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  Cardid?: number;
  category?: string;
  coltype?: string;
  title?: string;
  label?: string;
  date?: string;
  username?: string;
  startDate?: string;
  tagList?: tag[];
  action?: () => void;
}

const defaultTag = [
  { id: 1, tagName: "درس", bg: "bg-[#BFFDE3]" },
  { id: 2, tagName: "پروژه", bg: "bg-[#EEDFF6]" },
];

function CardCol({
  Cardid,
  category = "Open",
  title = "این یک تیتر برای این تسک است",
  label = "پروژه اول",
  username = "NM",
  date = "5 مهر - فردا",
  startDate = "2/12",
  tagList = defaultTag,
  action,
}: Props) {
  const { data, setData, titleCol } = useContext(DragAndDropContext);

  const [{}, drag, dragPreview] = useDrag(() => ({
    type: category,
    item: { itemID: Cardid, itemCategory: category },
    collect: (monitor: any) => {
      return { isDragging: monitor.isDragging() };
    },
    end(item, monitor:any) {
      
      
    },
  }));

  useEffect(() => {}, [titleCol]);

  return (
    <Card
      onClick={action}
      className="w-[250px] rounded-[4px] !p-2 border cursor-pointer border-[#EFF0F0] shadow-[0px_2px_8px_#0000002e] group"
    >
      <div ref={dragPreview}>
        <div ref={drag}>
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h2 className="text-[10px]">{label}</h2>
            </div>
            <div className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-[#EAF562]">
              <p className="font-semibold text-[8px]">{username}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h2 className="text-[12px] font-semibold">{title}</h2>
            <IconButton>
              <TitleIcon className="stroke-black" />
            </IconButton>
          </div>
          <div className="flex items-center mt-[18px] gap-3">
            <div className="flex justify-center items-center gap-1">
              <TitleIcon className="stroke-black" />
              <p className="text-[10px]">{date}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <AcceptIcon className="stroke-[#BDC0C6]" />
              <p className="text-[#BDC0C6] text-[10px]">{startDate}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-[12px]">
            {tagList.map(({ id, tagName, bg }) => (
              <div key={id} className={`${bg} p-1 rounded-e-full`}>
                {" "}
                <p className="text-[10px] font-semibold">{tagName}</p>{" "}
              </div>
            ))}
          </div>
          <div className="hidden justify-between items-center pt-[20px] px-[4px] pb-[10px] mt-[20px] border-t-[1px] border-[#BDC0C6] group-hover:flex">
            <IconButton>
              <CheckMarkIcon className="stroke-black" />
            </IconButton>
            <IconButton>
              <DotMenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardCol;
