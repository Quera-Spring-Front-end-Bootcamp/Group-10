import React, { PropsWithChildren } from "react";

function Card({
  children,
  className,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-white shadow-[0px_12px_50px_rgba(0,0,0,0.18)] m-2 max-w-[520px] p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
