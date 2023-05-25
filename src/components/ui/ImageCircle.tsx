import React, { PropsWithChildren } from "react";

const ImageCircle = ({
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>) => {
  return (
    <div>
      <img {...props} className={`w-9 h-9 rounded-full ${props.className}`} />
    </div>
  );
};

export default ImageCircle;
