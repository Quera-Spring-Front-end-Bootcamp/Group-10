import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

function Checkbox({ label, ...props }: Props) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        className="w-5 h-5 ml-2 accent-primary"
        {...props}
      />
      {label && <label className="text-sm">{label}</label>}
    </div>
  );
}

export default Checkbox;
