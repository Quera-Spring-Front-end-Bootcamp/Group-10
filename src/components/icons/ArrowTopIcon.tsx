import { SVGProps } from "react";
const ArrowTopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <line
      style={{
        fill: "none",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      x1={16}
      y1={6}
      x2={16}
      y2={28}
    />
    <polyline
      style={{
        fill: "none",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      points="10,11.515 16,5.515 22,11.515 "
    />
  </svg>
);
export default ArrowTopIcon;
