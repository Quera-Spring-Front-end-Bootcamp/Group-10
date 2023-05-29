import { SVGProps } from "react";
function SVGComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.34473 7.5L9.34473 10.5L12.3447 7.5"
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default SVGComponent;