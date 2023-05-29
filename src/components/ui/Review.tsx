import React, { PropsWithChildren } from "react";
import ForbiddenIcon from "../icons/ForbiddenIcon";
import Button from "./Button";
import Avatar from "./Avatar";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  name?: string;
  color?: string;
  member?: string;
  action ?: () => void;
}

function Review({ name, color, member , action , className, children, ...props }: Props) {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-4 p-2 border border-gray rounded-md p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">نام ورک اسپیس</h3>
          <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">رنگ ورک اسپیس</h3>
          <div className={`w-4 h-4 rounded-md ${color}`}></div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">اعضا</h3>
          <Avatar/>
        </div>
      </div>
      <Button onClick={action} className="w-11/12 mt-[60px]">ساختن ورک اسپیس</Button>
    </div>
  );
}

export default Review;
