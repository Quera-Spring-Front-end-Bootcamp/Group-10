import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  Src?: any;
  action?: () => void;
}

function IconButton({ Src , action , children, className, ...props }: Props) {
    

    return (
    <div className="flex w-fit ">
        <p onClick={action}>{<Src/>}</p>
    </div>
  )
}

export default IconButton;