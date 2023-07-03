import { useContext, useState, useEffect } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import IconButton from "./IconButton";
import DotMenuIcon from "../icons/DotMenuIcon";
import PlusIcon from "../icons/PlusIcon";
import { DragAndDropContext, updateArray } from "./ViewDragAndDrop";

interface Props {
  children?: JSX.Element;
  title?: string;
  coltype?: string;
  borderColor?: string;
}

type monitoeType = { itemID: number; itemCategory: string };

function ViewCol({ title = "Open", borderColor = "border-[#F98F2E]", children }: Props) {
  const { data, setData, titleCol } = useContext(DragAndDropContext);

  const [count, setCount] = useState(0);
  const [{}, drop] = useDrop(() => ({
    accept: titleCol.map((e) => e.title),
    collect: (monitor: DropTargetMonitor<monitoeType, void>) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
    drop: (monitor: monitoeType) => {
      const array = updateArray(data, monitor.itemID, title);
      setData(array);
    },
  }));

  useEffect(() => {
    setCount(children?.props.children.filter((e: any) => e !== false).length);
  }, [data, titleCol]);

  return (
    <div className="w-[250px] my-[17px] shrink-0" ref={drop}>
      <div
        className={` flex justify-between items-center m-[8px] w-full border-t-[1px] group rounded-md p-2 shadow-[0px_2px_8px_#0000002e] ${borderColor} `}
      >
        <div className="flex gap-2">
          <h2 className="text-[16px]">{title}</h2>
          <span className="flex justify-center items-center text-[12px] rounded-full w-[16px] h-[16] bg-[#F4F4F4]">
            {count}
          </span>
        </div>
        <div className="flex gap-2 group-hover:flex">
          <IconButton>
            <DotMenuIcon />
          </IconButton>
          <IconButton>
            <PlusIcon className="stroke-black" />
          </IconButton>
        </div>
      </div>
      <div className={`flex flex-col  mt-[20px]`}>{children}</div>
    </div>
  );
}

export default ViewCol;
