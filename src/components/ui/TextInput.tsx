import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  hint?: string;
}

function TextInput({ label, hint, className, ...props }: Props) {
  return (
    <div className="flex flex-col justify-center items-start">
      {label && (
        <label className="text-[14px] font-normal text-black pb-2">
          {label}
        </label>
      )}
      <input
        className={`border-solid  border rounded  focus:outline-primary p-2 ${
          hint ? "border-error" : "border-gray"
        } ${className}`}
        {...props}
      />
      {hint && <span className="text-xs mt-1 text-error">{hint}</span>}
    </div>
  );
}

export default TextInput;
