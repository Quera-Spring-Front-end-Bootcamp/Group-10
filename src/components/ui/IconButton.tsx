import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  src?: string;
  alt?: string;
}

function IconButton({ src , alt = 'icon', children, className, ...props }: Props) {
  return (
    <div className="flex w-fit ">
        <img src={src} alt={alt} className=""/>
    </div>
  )
}

export default IconButton;
