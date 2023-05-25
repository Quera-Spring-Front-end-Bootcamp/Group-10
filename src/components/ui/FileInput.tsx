import React, { useRef, useEffect, PropsWithChildren, useState } from "react";
import Button from "./Button";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  bg_text?: string;
  title?: string;
  desc?: string;
  action?: () => void;
}

function FileInput({
  bg_text,
  title = "ویرایش تصویر فایل",
  desc = "این تصویر برای عموم قابل رویت است",
  action,
  children,
  className,
  ...props
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg]: any = useState([]);

  const inputAction = () => {
    inputRef.current?.click();
    setImg([inputRef.current?.files]);
  };

  return (
    <div className="w-fit flex justify-center items-center gap-[20px] ">
      <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full text-[32px] bg-[#EAF562]  font-[500]">
        {bg_text}
      </div>
      <div className="flex flex-col">
        <Button className="flex justify-center items-center w-[185px] h-[40px] bg-white text-primary border border-primary mb-4">
          <input type="file" className="w-[185px] h-[40px] hidden max-w-full" ref={inputRef} />
          <p onClick={inputAction} className="text-primary  z-10">
            {title}
          </p>
        </Button>
        <span className="text-[12px] text-right text-[#8A8989] w-fit"> {desc} </span>
      </div>
    </div>
  );
}

export default FileInput;
