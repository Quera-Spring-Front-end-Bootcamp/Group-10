import React from "react";

function Avatar({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return (
    <div>
      <img {...props} className={`w-9 h-9 rounded-full ${className}`} />
    </div>
  );
}

export default Avatar;
