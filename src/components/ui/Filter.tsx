import { useState } from "react";

import FilterIcon from "../icons/FilterIcon";
import Button from "./Button";
import IconButton from "./IconButton";
import CloseIcon from "../icons/CloseIcon";
import FilterRow from "./FilterRow";

function Filter() {
  const [show, setShow] = useState(false);
  const [newFilter, setNewFilter] = useState(false);
  return (
    <div className="">
      <Button
        className="flex flex-row-reverse gap-2 border-0 bg-white"
        onClick={() => setShow(!show)}
      >
        <p className="text-black">فیلترها</p>
        <FilterIcon className="stroke-black " />
      </Button>
      {show && (
        <div className="border rounded-2xl bg-white m-2 max-w-[718px] p-6">
          <div className="flex justify-between mb-9 ">
            <h2 className="text-[24px] font-semibold">فیلترها</h2>
            <IconButton onClick={() => setShow(!show)}>
              <CloseIcon className="stroke-black" />
            </IconButton>
          </div>
          <div className="flex flex-col items-start gap-5">
            {newFilter && (
              <FilterRow
                className="w-full"
                dustbin={() => setNewFilter(!newFilter)}
              />
            )}
            <Button
              className="bg-white !text-primary"
              onClick={() => setNewFilter(!newFilter)}
            >
              افزودن فیلتر جدید
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
