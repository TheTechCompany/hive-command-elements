import * as React from "react";
import { SVGProps } from "react";

export const Water = (props: SVGProps<SVGSVGElement>) => {
  console.log({props});
  
  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    role="img"
    {...props}
  >
    <path opacity={0.5} fill="#4AE5FF" d="M28.81 23.22h37.33v37.33H28.81z" />
    <path
      fill="none"
      stroke="#4AE5FF"
      strokeMiterlimit={10}
      d="M28.81 23.22h37.33v37.33H28.81z"
    />
  </svg>)
};

Water.metadata = {
  width: 50,
  height: 50,
  options: {
    color: 'String',
    level: 'Number'
  }
}
