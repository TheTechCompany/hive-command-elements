import * as React from "react";
import { SVGProps } from "react";

export const TJoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.5 283.5"
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#939393",
      }}
      d="M189 0H0v94.5h94.5V189H189V94.5h94.5V0z"
    />
  </svg>
);



TJoin.metadata = {
  width: 60,
  height: 40,
  ports: [
    {
      key: 'left-hand',
      momentum: 0,
      x: '4%',
      y: '16%',
      rotation: 180
    },
    {
      key: 'right-hand',
      momentum: 0,
      x: '70%',
      y: '16%'
    },
    {
      key: 'bottom',
      momentum: 0,
      x: '40%',
      y: '70%'
    }
  ]
}