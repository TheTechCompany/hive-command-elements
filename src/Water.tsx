import * as React from "react";
import { SVGProps } from "react";
export const Water = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40.1 40.1"
    xmlSpace="preserve"
    role="img"
    {...props}
  >
    <path opacity={0.5} fill="#4AE5FF" d="M1.4 1.4h37.3v37.3H1.4z" />
    <path
      fill="none"
      stroke="#4AE5FF"
      strokeMiterlimit={10}
      d="M1.4 1.4h37.3v37.3H1.4z"
    />
  </svg>
);

Water.metadata = {
  width: 100,
  height: 100,
  options: {
    level: 'Number'
  }
}

