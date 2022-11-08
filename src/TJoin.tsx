import * as React from "react";
import { SVGProps } from "react";

export const TJoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 160.8 100"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="TJoin_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={70.24}
      y1={54.78}
      x2={90.236}
      y2={54.78}
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
    <path fill="url(#TJoin_svg__a)" d="M70.2 89.8h20v-60l-10-10-10 10z" />
    <linearGradient
      id="TJoin_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={80.238}
      y1={29.785}
      x2={80.238}
      y2={9.788}
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
      fill="url(#TJoin_svg__b)"
      d="M10.3 29.8h60l10-10 10 10h60v-20h-140v20z"
    />
    <linearGradient
      id="TJoin_svg__c"
      gradientUnits="userSpaceOnUse"
      x1={-313.724}
      y1={650.895}
      x2={-313.724}
      y2={627.577}
      gradientTransform="rotate(180 -83.549 329.511)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#333334",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#7d7e81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#333334",
        }}
      />
    </linearGradient>
    <path fill="url(#TJoin_svg__c)" d="M143 8.1h7.2v23.3H143z" />
    <linearGradient
      id="TJoin_svg__d"
      gradientUnits="userSpaceOnUse"
      x1={-180.946}
      y1={650.895}
      x2={-180.946}
      y2={627.577}
      gradientTransform="rotate(180 -83.549 329.511)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#333334",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#7d7e81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#333334",
        }}
      />
    </linearGradient>
    <path fill="url(#TJoin_svg__d)" d="M10.3 8.1h7.1v23.3h-7.1z" />
    <linearGradient
      id="TJoin_svg__e"
      gradientUnits="userSpaceOnUse"
      x1={232.933}
      y1={628.092}
      x2={232.933}
      y2={604.775}
      gradientTransform="rotate(-90 -108.544 427.652)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#333334",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#7d7e81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#333334",
        }}
      />
    </linearGradient>
    <path fill="url(#TJoin_svg__e)" d="M91.9 82.6v7.2H68.6v-7.2z" />
  </svg>
);

TJoin.metadata = {
  width: 100,
  height: 60,
  ports: [
    {
      key: 'left-hand',
      momentum: 0,
      x: '4%',
      y: '10%',
      rotation: 180
    },
    {
      key: 'right-hand',
      momentum: 0,
      x: '85%',
      y: '10%'
    },
    {
      key: 'bottom',
      momentum: 0,
      x: '44%',
      y: '78%'
    }
  ]
}
