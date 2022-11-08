import * as React from "react";
import { SVGProps } from "react";

export const Water = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2.5 2 40 40"
    xmlSpace="preserve"
    style={{
        transformOrigin: '0 bottom',
        transform: `scaleY(${(parseFloat(props.options?.level || 100) / 100) || 1})`
    }}
    {...props}
  >
    <path
      fill="#4AE5FF"
      d="M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z"
      opacity={0.5}
    />
    <path
      fill="none"
      stroke="#4AE5FF"
      strokeMiterlimit={10}
      d="M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z"
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
  
  

