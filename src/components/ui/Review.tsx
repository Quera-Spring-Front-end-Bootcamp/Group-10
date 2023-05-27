import React, { PropsWithChildren } from "react";
import ForbiddenIcon from '../icons/ForbiddenIcon'

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    name?: string;
    color?: string;
    member?: string
  }

function Review({ name , color , member , className, children, ...props }: Props) {
  return (
    <div className="flex flex-col w-full gap-4 p-2">
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
        {/* <img src={member} alt="member" className="w-[35px] h-[35px] rounded-full" /> */}
        <ForbiddenIcon className="stroke-black w-[35px] h-[35px] rounded-full "/>
      </div>
    </div>
  )
}

export default Review;
