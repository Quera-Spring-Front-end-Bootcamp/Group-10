import * as React from "react";
import { SVGProps } from "react";
function SVGComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.99902 2.99913H11.0024" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.49902 5.0001H11.0017" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.49902 7.0001H11.0017" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.99902 9.00206H11.0024" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11.0021H11.0017" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export default SVGComponent;
