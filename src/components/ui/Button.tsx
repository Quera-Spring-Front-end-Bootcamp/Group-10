import React, { PropsWithChildren } from "react";

const Button = ({
  children,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>) => {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;
