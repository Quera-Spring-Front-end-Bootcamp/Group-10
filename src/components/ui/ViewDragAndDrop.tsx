import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import React, { useEffect, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import ViewCol from "./ViewCol";
import CardCol from "./CardCol";

type tag = { id: number; tagName: string; bg: string };
type mytitle = { id: string; title: string; color: string };
type arraydata = {
  id?: number;
  title?: string;
  label?: string;
  username?: string;
  category?: string;
  date?: string;
  startDate?: string;
  tagList?: tag[];
  action?: () => void;
};

interface IContextType {
  data: arraydata[];
  titleCol: mytitle[];
  setData: React.Dispatch<React.SetStateAction<arraydata[]>>;
}

const mydata: arraydata[] = [
  {
    id: 1,
    title: "1",
    label: "label",
    username: "AM",
    date: "5 مهر - فردا",
    startDate: "2/12",
    category: "Open",
    tagList: [{ id: 1, tagName: "درس", bg: "bg-[#BFFDE3]" }],
    action: () => {},
  },
  {
    id: 2,
    title: "2",
    label: "label2",
    username: "AM",
    date: "5 مهر - فردا",
    startDate: "2/12",
    category: "In progress",
    tagList: [{ id: 1, tagName: "پروژه", bg: "bg-[#BFFDE3]" }],
    action: () => {},
  },
];

const titles: mytitle[] = [
  { id: `Open`, title: "Open", color: "#F98F2E" },
  { id: `In progress`, title: "In progress", color: "#2E7FF9" },
  { id: `Pending`, title: "Pending", color: "#DEC908" },
  { id: `To Do`, title: "To Do", color: "#F98F2E" },
  { id: `Done`, title: "Done", color: "#2BBF06" },
];

export const DragAndDropContext = React.createContext<IContextType>({
  data: mydata,
  setData: () => null,
  titleCol: titles,
});

export const updateArray = (data: arraydata[], id: number, newCategory: string) => {
  const newData: arraydata[] = data?.map((e: arraydata) =>
    e.id === id ? { ...e, category: newCategory } : e
  );
  const idData: arraydata[] = newData?.filter((e: arraydata) => e.id === id);
  const otherData: arraydata[] = newData?.filter((e: arraydata) => e.id !== id);
  const margeData: arraydata[] = [...otherData, ...idData];
  return margeData;
};

function ViewDragAndDrop() {
  const [titleCol, setTitleCol] = useState<mytitle[]>(titles);
  const [data, setData] = useState<arraydata[]>(mydata);
  useEffect(() => {
    console.log('data ==> ', data);
    
  }, [data, titleCol]);
  const generateCard = (value: arraydata[], category: string) => {
    return (
      <>
        {value.map((e: any) => {
          return (
            e.category === category && (
              <CardCol
                key={e.id}
                Cardid={e.id}
                category={category}
                title={e?.title}
                label={e?.label}
                username={e?.username}
                date={e?.date}
                startDate={e?.startDate}
                tagList={e?.tagList}
                action={e.action}
              />
            )
          );
        })}
      </>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDropContext.Provider value={{ data, setData, titleCol }}>
        <div className="flex gap-[20px]">
          {titleCol.map((e) => (
            <ViewCol key={e.id} title={e.title}>
              {generateCard(data, e.title)}
            </ViewCol>
          ))}
          <div
            className="w-[250px] my-[17px] shrink-0"
            onClick={() => {
              setTitleCol((state) => [
                ...state,
                {
                  id: `New${Math.random()}`,
                  title: `New${Math.floor(Math.random() * 10)}`,
                  color: "#e3e3e3",
                },
              ]);
            }}
          >
            <div className="flex items-center gap-4 m-[8px] w-full border-t-[1px] group rounded-md p-2 shadow-[0px_2px_8px_#0000002e]">
              <PlusIcon className="stroke-black" />
              <p>ساختن برد جدید</p>
            </div>
          </div>
        </div>
      </DragAndDropContext.Provider>
    </DndProvider>
  );
}

export default ViewDragAndDrop;
