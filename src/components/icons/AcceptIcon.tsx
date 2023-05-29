import * as React from "react";
import { SVGProps } from "react";
function SVGComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.1365 7.74121L8.46711 10.409L6.8623 8.80899" strokeLinecap="round" strokeLinejoin="round" />
      <rect
        x={2.99707}
        y={2.99707}
        width={12.005}
        height={12.005}
        rx={3.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default SVGComponent;
