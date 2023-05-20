import React, { PropsWithChildren } from "react";

const Card = ({
  children,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => {
  return (
    <div className={`rounded-card bg-white shadow-[0px_12px_50px_rgba(0,0,0,0.18)] min-w-card402 max-w-card517 ${props.className}`}>
        {children}
    </div>
  );
};

export default Card;


