import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const TextInput = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col justify-center items-start px-6 py-5 w-full">
      <label className="text-\[14px] font-normal text-black pb-2">
        {label}
      </label>
      <input
        className="w-full h-10 border-solid border-grey border rounded focus:outline-none p-2"
        {...props}
      />
    </div>
  );
};

export default TextInput;
