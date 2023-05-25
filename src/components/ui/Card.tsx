import React, { PropsWithChildren } from "react";

import IconButton from "./IconButton";
import CloseIcon from "../icons/CloseIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  title?: string;
  titleClassName?: string;
  onBack?: () => void;
  onClose?: () => void;
}

function Card({
  title,
  titleClassName,
  className,
  children,
  onBack,
  onClose,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-white m-2 max-w-[520px] p-6 ${className}`}
    >
      {(title || onClose || onBack) && (
        <div className="flex flex-row w-full justify-between">
          {onClose ? (
            <IconButton
              children={<CloseIcon className="stroke-gray" />}
              onClick={onClose}
            />
          ) : (
            <div></div>
          )}

          {title ? (
            <div className={titleClassName}>
              <p>{title}</p>
            </div>
          ) : (
            <div></div>
          )}

          {onBack ? (
            <IconButton
              children={<ArrowLeftIcon className="stroke-gray " />}
              onClick={onBack}
            />
          ) : (
            <div></div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
export default Card;
