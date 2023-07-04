import { useEffect, useState } from "react";

import { Combobox,Popover } from "@headlessui/react";
import ColorPaletteFull from "./ColorPaletteFull";


import ColorPaletteIcon from "../icons/ColorPaletteIcon";
import CloseIcon from "../icons/CloseIcon";
import EditTagIcon from "../icons/EditTagIcon";
import DotMenuIcon from "../icons/DotMenuIcon";


interface Tag {
  name: string;
  className: string;
}

const tags: Tag[] = [
  {
    name: "درس",
    className: "text-lg bg-pink-300 rounded-md px-4 py-1 my-2",
  },
  {
    name: "کار",
    className: "text-lg bg-indigo-300 rounded-md px-4 py-1 my-2",
  },
  {
    name: "پروژه",
    className: "text-lg bg-emerald-300 rounded-md px-4 py-1 my-2",
  },
];

function MyCombobox(): JSX.Element {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [filteredTags, setFilteredTags] = useState<Tag[]>(tags);


  useEffect(() => {
    if(query===""){
      setFilteredTags(tags)
    }else{
      const tempTags=tags.filter((tag) => {
        return tag.name.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredTags(tempTags)
    }
  },[query]);



  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (
      event.key === "Enter" &&
      !filteredTags.some((p) => p.name === query)
    ) {
      const newTag: Tag = {
        name: query,
        className: "text-lg bg-yellow-500 rounded-md px-4 py-1 my-2",
      };
      tags.push(newTag);
      setQuery("");
    }
  }

  const handleDeleteTag = (name: string) => {
    const updatedTags = filteredTags.filter((tag) => tag.name !== name);
    setFilteredTags(updatedTags);
  };

  

  return (
    <>
      <Combobox value={selectedTag} onChange={setSelectedTag}>
        <Combobox.Input
          placeholder="جستجو و ساختن تگ"
          className="h-10 bg-zinc-200 rounded-md focus:outline-none pr-6"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Combobox.Options static>
          {filteredTags.map((tag) => (
                <Combobox.Option
                  key={tag.name}
                  value={tag.name}
                  className="flex justify-between items-center pb-3 cursor-pointer"
                >
                  <p className={tag.className}>{tag.name}</p>
                  <Popover className="relative">
                    <Popover.Button>
                     <DotMenuIcon/>
                    </Popover.Button>
                    <Popover.Panel>
                    <div className="w-32 bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute left-0 bottom-0 z-10">
                      <ul className="py-1">
                        <li className="flex justify-start items-center">
                           <CloseIcon onClick={() => handleDeleteTag(tag.name)} className="stroke-red-600 cursor-pointer" />
                           <p className="text-sm px-1 py-2">حذف</p>
                        </li>
                        <li className="flex justify-start items-center pb-3">
                           <EditTagIcon className="stroke-gray cursor-pointer" />
                          <p className="text-sm px-2 py-1">ویرایش تگ</p>
                        </li>
                          <Popover className="relative">
                               <Popover.Button>
                                  <li className="flex justify-start items-center pb-3">
                                    <ColorPaletteIcon
                                     className="stroke-gray cursor-pointer"
                                     />
                                    <p className="text-sm px-1 py-1">ویرایش رنگ</p>
                                  </li>
                               </Popover.Button>
                               <Popover.Panel >
                                     <div className="bg-white shadow-lg shadow-slate-400 rounded-xl p-3 absolute left-2 bottom-12 z-50">
                                        <ColorPaletteFull />
                                     </div>
                               </Popover.Panel>
                         </Popover>
                     </ul>
                    </div>
                    </Popover.Panel>
                  </Popover>
                </Combobox.Option>
              ))}
        </Combobox.Options>
      </Combobox>

    </>
  );
}

export default MyCombobox;

