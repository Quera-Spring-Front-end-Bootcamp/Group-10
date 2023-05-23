import React, { PropsWithChildren } from "react";
import exitIcon  from '../icons/exit.svg'
import backIcon from '../icons/back.svg'
import IconButton from "./IconButton";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: string;
  shadow?: boolean;
  exit?: () => void;
  back?: () => void;
}

function Card({ title, exit, back, shadow = true, children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-white ${
        shadow && "shadow-[0px_12px_50px_rgba(0,0,0,0.18)]"
      } m-2 max-w-[520px] p-6 ${className}`}
    >
      {(title || exit || back) && (
        <div>
          {
            <div className="grid grid-flow-col">
              <div className="flex justify-start cursor-pointer text-gray">{exit ? <IconButton src={exitIcon}/> : ""}</div>
              <div className="justify-self-center font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl">
                {title && <p>{title}</p>}
              </div>
              <div className="flex justify-end text-left cursor-pointer text-gray">{back ? <IconButton src={backIcon}/> : ""}</div>
            </div>
          }
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
