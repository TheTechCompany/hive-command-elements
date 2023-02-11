import * as React from "react";
import { SVGProps } from "react";

export const TJoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 93.9 58.4"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="TJOIN_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={36.798}
      y1={26.203}
      x2={56.898}
      y2={26.203}
      gradientTransform="matrix(1 0 0 -1 0 60.406)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#6f7173",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#d3d5d6",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#6f7173",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#TJOIN_svg__a)",
      }}
      d="M36.8 51.7h20l.1-25-10-10-10 10z"
    />
    <linearGradient
      id="TJOIN_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={46.104}
      y1={33.703}
      x2={46.104}
      y2={53.703}
      gradientTransform="matrix(1 0 0 -1 0 60.406)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#6f7173",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#d3d5d6",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#6f7173",
        }}
      />
    </linearGradient>
    <path
      d="M15.2 26.7h21.7l10-10 10 10H77v-20H15.2v20z"
      style={{
        fill: "url(#TJOIN_svg__b)",
      }}
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

