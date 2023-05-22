import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: string;
  shadow?: boolean;
  exit?: boolean;
  back?: boolean;
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
            <div className="grid grid-flow-col  ">
              <div className="w-2 h-2 cursor-pointer text-gray">{exit ? "x" : ""}</div>
              <div className="justify-self-center font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl">
                {title && <p>{title}</p>}
              </div>
              <div className="justify-items-end text-left cursor-pointer text-gray">{back ? "->" : ""}</div>
            </div>
          }
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
