import React, { Fragment, useState, PropsWithChildren } from "react";
import { Listbox, Combobox, Transition } from "@headlessui/react";
import SearchIcon from "../icons/SearchIcon";
import ArrowBottomIcon from "../icons/ArrowBottomIcon";

type listitem = { id: number; name: string; bg: string; select: boolean };

// interface Props {
//   title?: listitem[];
//   placeholder?: string;
//   Enterwidth?: number;
// }
interface Props {
  title?: listitem[];
  placeholder?: string;
  Enterwidth?: string;
  searchInput?: boolean;
}

const task: listitem[] = [
  { id: 1, name: "تاریخ", bg: "", select: false },
  { id: 2, name: "تک", bg: "", select: false },
  { id: 3, name: "اعضا", bg: "", select: false },
  { id: 4, name: "اولویت", bg: "", select: false },
];

function ListBox({
  title = task,
  Enterwidth = "w-[184px]",
  placeholder = "جستوجو بین فیلترها",
  searchInput = true,
  ...props
}: Props) {
  const [selected, setSelected] = useState(title[0]);
  const [query, setQuery] = useState("");

  const filteredTitle =
    query === ""
      ? title
      : title.filter((title) =>
          title.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={Enterwidth}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-right shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected.select ? (
                selected.name
              ) : (
                <p className="text-[10px] text-[#959595] text-right">{placeholder}</p>
              )}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ArrowBottomIcon className="h-5 w-5 text-gray-400 stroke-black" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-200 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {searchInput && (
                <Combobox value={selected} onChange={setSelected}>
                  <div className="flex justify-end items-center mx-3 gap-3 border border-x-0 border-t-0 border-black">
                    <SearchIcon className="stroke-black" />
                    <Combobox.Input
                      className={`w-full border-none outline-none focus:border-none h-[40px]`}
                      placeholder="جستوجو"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                </Combobox>
              )}

              {filteredTitle.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  موردی یافت نشد
                </div>
              ) : (
                filteredTitle.map(({ id, name, bg, select }) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "" : "text-gray-900"}`
                    }
                    value={{ id, name, bg, select: true }}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${bg} rounded-md w-fit p-2 ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 rounded-md`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default ListBox;
