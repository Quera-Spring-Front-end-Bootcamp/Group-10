import React, { PropsWithChildren } from "react";
import Button from "./Button";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  Src?: any;
  action?: () => void;
}

function FileInput({ Src, action, children, className, ...props }: Props) {
  return (
    <div className="">
      <div className=""></div>
      <div className="flex flex-col">
        <input type="file" className="before:content-['_↗']"/>
        <span className="text-[12px] text-right text-[#8A8989]">این تصویر برای عموم قابل رویت است</span>
      </div>
    </div>
  );
}

export default FileInput;
