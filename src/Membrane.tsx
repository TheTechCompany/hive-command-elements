import * as React from "react";
import { SVGProps } from "react";

export const Membrane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="membrane_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 283.46 283.46"
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".membrane_svg__st0{fill:none;stroke:#4d4d4e;stroke-width:6.1609;stroke-miterlimit:10}"
      }
    </style>
    <path
      className="membrane_svg__st0"
      d="M6.25 10.09v267.73M19.88 10.09v267.73M33.52 10.09v267.73M47.16 10.09v267.73M60.8 10.09v267.73M74.43 10.09v267.73M88.07 10.09v267.73M101.71 10.09v267.73M6.25 10.09h95.46v267.73H6.25z"
    />
  </svg>
);

Membrane.metadata = {
  width: 50,
  height: 50
};
