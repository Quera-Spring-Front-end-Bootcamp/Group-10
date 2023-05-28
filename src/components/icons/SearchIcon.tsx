import { SVGProps } from "react";
function SVGComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={10.215}
        cy={10.216}
        r={5.88495}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.67 17.67L14.377 14.377" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export default SVGComponent;
